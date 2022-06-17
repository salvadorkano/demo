import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../routes/RootStackParams';
import {Colors} from '../../styles';
import {PlaceCollection} from '../../types/placeType';
import ImagePlace from '../molecules/ImagePlace';
import InfoPlace from '../molecules/InfoPlace';
import NavigateToDetail from '../molecules/NavigateToDetails';

export interface PlacesDetailProps {
  item: PlaceCollection;
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}

const PlacesDetail = ({item, navigation}: PlacesDetailProps) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {place: item})}
      style={styles.container}>
      <View style={styles.imgContainer}>
        <ImagePlace Thumbnail={item.Thumbnail ?? ''} />
      </View>
      <View style={styles.textContainer}>
        <InfoPlace
          PlaceName={item.PlaceName}
          Address={item.Address}
          Category={item.Category}
          rating={item.Rating}
        />
      </View>
      <View style={styles.detailsContainer}>
        <NavigateToDetail
          IsPetFriendly={item.IsPetFriendly}
          distance={item.distance ?? 0}
        />
      </View>
    </Pressable>
  );
};
export default PlacesDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  textContainer: {flex: 4},
  detailsContainer: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imgDog: {
    width: 22,
    height: 22,
    alignSelf: 'center',
  },
  textPet: {
    fontSize: 9,
    color: Colors.GRAY,
  },
});
