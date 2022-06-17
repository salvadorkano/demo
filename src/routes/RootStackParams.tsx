// https://benjaminwoojang.medium.com/react-navigation-with-typescript-270dfa8d5cad
// https://reactnavigation.org/docs/typescript/

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PlaceCollection} from '../types/placeType';

export type RootStackParamList = {
  List: undefined;
  Details: {
    place: PlaceCollection;
  };
  Webview: {url: string};
};

export type routerProps<RouteName extends keyof RootStackParamList> = {
  route: RouteProp<RootStackParamList, RouteName>;
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
};

export type navigationProps<RouteName extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, RouteName>;
