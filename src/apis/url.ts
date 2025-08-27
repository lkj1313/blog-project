import { API_URL } from "./config";
export const BASE_URL = API_URL;
export const ENDPOINT = {
  AUTH: {
    LOGIN: `${API_URL}/api/auth/login`,
    ME: `${API_URL}/api/auth/me`,
    REGISTER: `${API_URL}/api/auth/register`,
    VERIFY_BUSINESS_NUMBER: `${API_URL}/api/auth/verify-business-number`,
    REFRESH: `${API_URL}/api/auth/refresh-token`,
  },

  BLOGS: {
    BANNERS: `${API_URL}/api/blogs/banners`,
    LIST: `${API_URL}/api/blogs`,
    DETAIL: (id: string | number) => `${API_URL}/api/blogs/${id}`,
  },

  USERS: {
    LIST: `${API_URL}/api/users`,
  },
};
