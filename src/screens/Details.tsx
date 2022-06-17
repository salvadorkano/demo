import * as React from 'react';
import {Image, Linking, Platform, StyleSheet, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import ButtonDetail from '../components/molecules/ButtonDetail';
import Separator from '../components/molecules/Separator';
import MapViewComponent from '../components/organims/MapView';
import {routerProps} from '../routes/RootStackParams';
import {Colors} from '../styles';

export const imgBG = [
  require('../Assets/cellIconsPhoneCopy1.png'),
  require('../Assets/icons8RouteFilled.png'),
  require('../Assets/cellIconsWebsite.png'),
];

function DetailsScreen({navigation, route}: routerProps<'Details'>) {
  const item = route.params.place;

  const openMaps = () => {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${item.Latitude},${item.Longitude}`;
    const label = `${item.PlaceName}`;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  const callPhone = () => {
    Linking.openURL(`tel:${item.PhoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <MapViewComponent Latitude={item.Latitude} Longitude={item.Longitude} />
      <View style={styles.containerInfo}>
        <Text style={styles.textTitle}>{item.PlaceName}</Text>
        <View style={styles.ratingStyle}>
          <Rating
            showRating={false}
            imageSize={20}
            readonly
            startingValue={item.Rating}
          />
        </View>
        {item.IsPetFriendly ? (
          <View>
            <Image
              style={styles.imgDog}
              resizeMode="contain"
              source={require('../Assets/dogFriendlyActive.png')}
            />
          </View>
        ) : (
          <></>
        )}
        <Text style={styles.textStyle}>{item.AddressLine1}</Text>
        <Text style={styles.textStyle}>{item.AddressLine2}</Text>
      </View>
      <Separator />
      <ButtonDetail
        img={imgBG[1]}
        title={'Directions'}
        info={'15 min'}
        onPress={openMaps}
      />
      <ButtonDetail
        img={imgBG[0]}
        title={'Call'}
        info={item.PhoneNumber}
        onPress={callPhone}
      />
      <ButtonDetail
        img={imgBG[1]}
        title={'Visit Website'}
        info={item.Site}
        onPress={() => navigation.navigate('Webview', {url: item.Site})}
      />
    </View>
  );
}
export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  containerInfo: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: 200,
  },
  textTitle: {
    fontSize: 24,
    color: Colors.BLUE,
  },
  textStyle: {
    fontSize: 16,
    color: Colors.GRAY,
  },
  ratingStyle: {alignItems: 'flex-start'},
  imgDog: {
    width: 28,
    height: 28,
    alignSelf: 'center',
    position: 'absolute',
    right: 10,
  },
  imgPin: {height: 40, width: 40, alignSelf: 'center'},
});
