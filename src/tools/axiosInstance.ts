import axios from 'axios';

const instanceForFirebaseHttpRequest = axios.create({
  baseURL: 'https://us-central1-wos-app-23dic.cloudfunctions.net',
});

export const fetcher = (url: string) =>
  instanceForFirebaseHttpRequest.get(url).then(res => {
    console.log('ressss', res);

    return res.data;
  });
