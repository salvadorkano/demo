import axios from 'axios';
import {places} from './URLS';

export const getPlaces = () => {
  console.log('asdsadsadsad');

  const headers = {
    'Content-Type': 'application/json',
  };
  const url = `${places}`;

  // axios.get(`${places}`).then(response => {
  //   console.log('alv', response.data);
  // });
  axios
    .get(url, {headers})
    .then(res => {
      console.log('asdsadsadljknnklnkl    ', res);
    })
    .catch(err => {
      console.log('errrr', err);
    });
  // return fetch(places);
};
