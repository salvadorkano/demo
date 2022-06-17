import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../styles';

const Separator = () => {
  return <View style={styles.separatorStyle} />;
};
export default Separator;

const styles = StyleSheet.create({
  separatorStyle: {
    width: '100%',
    color: Colors.GRAY,
    height: 0.5,
    borderColor: Colors.LIGHTGRAY,
    borderWidth: 0.5,
  },
});
