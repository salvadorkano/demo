export interface PlaceCollection {
  Address: string;
  AddressLine1: string;
  AddressLine2: string;
  Category: string;
  IsOpenNow: string;
  IsPetFriendly: boolean;
  Latitude: number;
  Longitude: number;
  PhoneNumber: string;
  PlaceId: string;
  PlaceName: string;
  Rating: number;
  Site: string;
  Thumbnail?: string;
  distance?: number;
}
