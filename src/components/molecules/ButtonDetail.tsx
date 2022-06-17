import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from '../../styles';
import NavigateToDetail from './NavigateToDetails';

export interface ButtonDetailProps {
  img: ImageSourcePropType;
  title: string;
  info: string;
  onPress: () => void;
}

const ButtonDetail = ({img, title, info, onPress}: ButtonDetailProps) => {
  return (
    <Pressable onPress={() => onPress()} style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textStyle}>{info}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <NavigateToDetail IsPetFriendly={false} distance={0} />
      </View>
    </Pressable>
  );
};
export default ButtonDetail;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 20,
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
  img: {
    width: 100,
    height: 100,
  },
  textTitle: {
    fontSize: 20,
    color: Colors.BLUE,
  },
  textStyle: {
    fontSize: 16,
    color: Colors.GRAY,
  },
});
