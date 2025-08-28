// src/types/blog.ts

export type BlogBanner = {
  id: number;
  title: string;
  thumbnail: string;
  summary: string;
};

export type BlogListItem = {
  id: number;
  title: string;
  category: "NEWS" | "TIP" | "GUIDE" | "EXPERIENCE";
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogListResponse = {
  list: BlogListItem[];
  totalCount: number;
  totalPages: number;
  page: number;
  pageSize: number;
};

export type BlogDetailResponse = {
  id: number;
  category: "NEWS" | "TIP" | "GUIDE" | "EXPERIENCE";
  title: string;
  thumbnail: string;
  summary: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type ErrorResponse = {
  errorCode: string;
  errorMessage: string;
};
