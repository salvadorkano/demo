import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../styles';

export interface NavigateToDetailProps {
  IsPetFriendly: boolean;
  distance: number;
}

const NavigateToDetail = ({IsPetFriendly, distance}: NavigateToDetailProps) => {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.imgContainer}>
        <Text style={styles.textDistance}>{distance.toFixed(1)}m.</Text>
        <Icon name="arrow-forward-ios" size={24} color={Colors.BLACK} />
      </View>
      {IsPetFriendly ? (
        <View>
          <Image
            style={styles.imgDog}
            resizeMode="contain"
            source={require('../../Assets/dogFriendlyActive.png')}
          />
          <Text style={styles.textPet}>Pet Friendly</Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};
export default NavigateToDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  imgContainer: {flexDirection: 'row'},
  textDistance: {color: Colors.BLACK, fontSize: 14, alignSelf: 'center'},
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
