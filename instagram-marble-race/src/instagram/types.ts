export interface InstagramMedia {
  id: string;
  caption?: string;
  timestamp?: string;
  media_type?: string;
}

export interface InstagramComment {
  id: string;
  username: string;
  text: string;
  timestamp: string;
}
