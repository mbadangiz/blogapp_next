import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import {
  T_Size,
  T_ButtonVariant,
  T_ColorVariant,
  T_ChipVariant,
} from "./types";

export interface IN_NavItem {
  id: number;
  title: string;
  path: string;
}

export interface IN_ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variants?: T_ButtonVariant;
  color?: T_ColorVariant;
  size?: T_Size;
}

export interface IN_Category {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IN_InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface IN_chipProps {
  variant?: T_ChipVariant;
  size?: T_Size;
  text?: string;
  color?: T_ColorVariant;
}

export interface IN_GetListOfBlogs {
  page: number;
  limit: number;
}

export interface IN_PostListAuthor {
  _id: string;
  name: string;
  avatar: string;
  avatarUrl: string;
}

export interface IN_PostListCategory {
  _id: string;
  title: string;
  slug: string;
}

export interface IN_PostListRelatedPost {
  _id: string;
  title: string;
  slug: string;
  category: IN_PostListCategory;
  briefText: string;
  coverImage: string;
  author: IN_PostListAuthor;
  coverImageUrl: string;
  id: string;
}

export interface IN_PostListPost {
  _id: string;
  id: string;
  title: string;
  slug: string;
  category: IN_PostListCategory;
  type: string;
  briefText: string;
  text: string;
  coverImage: string;
  likes: string[];
  bookmarks: string[];
  readingTime: number;
  tags: string[];
  author: IN_PostListAuthor;
  related: IN_PostListRelatedPost[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  coverImageUrl: string;
}

export interface IN_PostListPostsResponseData {
  message: string;
  posts: IN_PostListPost[];
  totalPages: number;
}

export interface IN_PostListPostsApiResponse {
  statusCode: number;
  data: IN_PostListPostsResponseData;
}

export interface IN_BlogDetailMetadataProps {
  params: Promise<{ id: string }>;
}

export interface IN_BlogDetailAuthor {
  _id: string;
  name: string;
  email: string;
  bookmarkedPosts: string[];
  likedPosts: string[];
  avatar: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  avatarUrl: string;
}

export interface IN_BlogDetailCategory {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IN_BlogDetail {
  _id: string;
  id: string;
  title: string;
  slug: string;
  category: IN_BlogDetailCategory;
  type: string;
  briefText: string;
  text: string;
  coverImage: string;
  likes: string[];
  bookmarks: string[];
  readingTime: number;
  tags: string[];
  author: IN_BlogDetailAuthor;
  related: string[];
  comments: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  coverImageUrl: string;
}
