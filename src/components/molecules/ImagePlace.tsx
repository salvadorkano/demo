import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet} from 'react-native';
import {Colors} from '../../styles';

export interface ImagePlaceProps {
  Thumbnail: string;
}

const ImagePlace = ({Thumbnail}: ImagePlaceProps) => {
  const [validate, setValidate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    checkImageURL(Thumbnail);
  }, [Thumbnail, validate]);

  function checkImageURL(URL: string) {
    axios(URL)
      .then(res => {
        if (res.status === 404) {
          setValidate(false);
          setLoading(false);
        } else {
          setValidate(true);
          setLoading(false);
        }
      })
      .catch(() => {
        setValidate(false);
        setLoading(false);
      });
  }

  if (loading) {
    return <ActivityIndicator size="small" color={Colors.DARK} />;
  }

  return validate ? (
    <Image style={styles.img} resizeMode="cover" source={{uri: Thumbnail}} />
  ) : (
    <Image
      style={styles.img}
      resizeMode="cover"
      source={require('../../Assets/notImage.png')}
    />
  );
};
export default ImagePlace;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
});
