export interface APIArticle {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string; // Date
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: string; // Date
  edited_at: string; // Date
  crossposted_at: null;
  published_at: string; // Date
  last_comment_at: string; // Date
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: APIUser;
}

export interface APIUser {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

export interface Blog {
  title: string;
  description: string;
  url: string;
  cover_image: string;
  published_at: Date;
  tags: string[];
  comments_count: number;
  positive_reactions_count: number;
}
