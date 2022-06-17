import {PlaceCollection} from '../types/placeType';

type sortByDateType = (a: PlaceCollection, b: PlaceCollection) => number;
export const sortByDistance: sortByDateType = (a, b) => {
  if (b?.distance && a?.distance) {
    return a?.distance - b?.distance;
  }
  return 0;
};
