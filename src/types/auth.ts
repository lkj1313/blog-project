export interface LoginArgs {
  businessNumber: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
}

export interface MeUser {
  id: number;
  businessNumber: string;
  userName: string;
  companyName: string;
  phone: string;
  email: string;
  birthDate: string;
}

export interface MeResponse {
  user: MeUser;
}

export interface RegisterArgs {
  businessNumber: string;
  userName: string;
  password: string;
  companyName: string;
  phone: string;
  email: string;
  partnerId?: string;
  birthDate: string;
  isMarketingConsent: boolean;
  businessNumberVerifyToken: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
}

export interface VerifyBusinessNumberArgs {
  businessNumber: string;
}

export interface VerifyBusinessNumberResponse {
  company: string;
  owner: string;
  businessNumberVerifyToken: string;
}

export interface RefreshTokenArgs {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
}
export interface ApiErrorResponse {
  errorCode: string;
  errorMessage: string;
}
