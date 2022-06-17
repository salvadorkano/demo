/* eslint-disable react-hooks/exhaustive-deps */
import {getDistance} from 'geolib';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import GetLocation from 'react-native-get-location';
import useSWR from 'swr';
import PlacesDetail from '../components/organims/PlacesDetail';
import {routerProps} from '../routes/RootStackParams';
import {places} from '../services/URLS';
import {Colors} from '../styles';
import {fetcher} from '../tools/axiosInstance';
import {sortByDistance} from '../tools/tools';
import {PlaceCollection} from '../types/placeType';

const ListScreen = ({navigation}: routerProps<'List'>) => {
  const {data} = useSWR(places, fetcher);
  const [loading, setLoading] = useState(true);
  const [newPlaces, setNewData] = useState<PlaceCollection[]>([]);
  // const {dataPlaces, isLoading} = usePlaces(places);

  // console.log('dataPlaces', dataPlaces);

  const calculateDistance = (
    itemLat: number,
    itemLong: number,
    latParam: number,
    longParam: number,
  ) => {
    const dis = getDistance(
      {latitude: itemLat, longitude: itemLong},
      {latitude: latParam, longitude: longParam},
    );
    return dis;
  };

  const newList = async (latParam: number, longParam: number) => {
    if (data !== undefined) {
      const newData: PlaceCollection[] = await data.map(
        (item: PlaceCollection) => {
          const diffDistance = calculateDistance(
            item.Latitude,
            item.Longitude,
            latParam,
            longParam,
          );
          return {...item, distance: diffDistance};
        },
      );
      setNewData(newData);
      setLoading(false);
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 2000,
      })
        .then(location => {
          newList(location.latitude, location.longitude);
        })
        .catch(error => {
          const {code, message} = error;
          console.warn(code, message);
        });
    };
    if (data !== undefined) {
      getLocation();
    }
  }, [data]);

  if (!data || loading) {
    return <ActivityIndicator size="large" color={'blue'} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={newPlaces.sort(sortByDistance)}
        keyExtractor={item => `${item.PlaceId}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <PlacesDetail item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};
export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
});
