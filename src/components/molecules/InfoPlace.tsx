import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import {Colors} from '../../styles';

export interface InfoPlaceProps {
  PlaceName: string;
  Address: string;
  Category: string;
  rating: number;
}

const InfoPlace = ({PlaceName, Address, Category, rating}: InfoPlaceProps) => {
  return (
    <View>
      <Text style={styles.titleText}>{PlaceName}</Text>
      <View style={styles.ratingStyle}>
        <Rating
          showRating={false}
          imageSize={20}
          readonly
          startingValue={rating}
        />
      </View>
      <Text style={styles.textStyle}>{Address}</Text>
      <Text style={styles.textStyle}>{Category}</Text>
    </View>
  );
};
export default InfoPlace;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    color: Colors.GUNMETAL,
  },
  textStyle: {
    fontSize: 12,
    color: Colors.GRAY,
  },
  ratingStyle: {alignItems: 'flex-start'},
});
