import { API_URL } from "./config";
export const BASE_URL = API_URL;
export const ENDPOINT = {
  // Authentication
  AUTH: {
    LOGIN: `${API_URL}/api/auth/login`,
    ME: `${API_URL}/api/auth/me`,
    REGISTER: `${API_URL}/api/auth/register`,
    VERIFY_BUSINESS_NUMBER: `${API_URL}/api/auth/verify-business-number`,
    REFRESH: `${API_URL}/api/auth/refresh-token`,
  },

  // Blogs
  BLOGS: {
    BANNERS: `${API_URL}/api/blogs/banners`,
    LIST: `${API_URL}/api/blogs`,
    DETAIL: (id: string | number) => `${API_URL}/api/blogs/${id}`,
  },

  // Users
  USERS: {
    LIST: `${API_URL}/api/users`,
  },
};
