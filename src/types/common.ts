export interface requestType<D> {
  loading: boolean;
  data?: null | D;
  error?: null | string;
  id?: string;
  cacheTime?: number;
}
export enum placeHolder {
  CARD = "card",
  CONTENT = "content",
  IMAGE = "image",
}
