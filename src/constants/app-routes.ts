export const LINKEDIN_PROFILE_PATH = 'https://www.linkedin.com';
export const FACEBOOK_PROFILE_PATH = 'https://www.facebook.com';
export const TWITTER_PROFILE_PATH = 'https://www.twitter.com';
export const INSTAGRAM_PROFILE_PATH = 'https://www.instagram.com';

export const LANDING_PAGE_PATH = '/landingpage';
export const USER_LOGIN_PAGE_PATH = '/auth/login';
export const SIGNUP_PAGE_PATH = '/auth/signup';
export const FORGOT_PASSWORD_PAGE_PATH = '/auth/forgot-password';
export const VERIFY_OTP_PAGE_PATH = '/auth/verify-otp';
export const RESET_PASSWORD_PAGE_PATH = '/auth/reset-password';
export const ABOUT_PAGE_PATH = '/auth/reset-password';
export const ADMIN_DASHBOARD_PATH = '/admin/dashboard';
export const ADMIN_LOGIN_PATH = '/admin/login';


export enum PUBLIC_ROUTE {
  UNKNOWN = '#',
  HOME = '/',
  LOGIN = '/auth/login',
  SIGNUP = '/auth/signup',
  FORGOT_PASSWORD = '/auth/forgot-password',
  VERIFY_OTP = '/auth/verify-otp',
  RESET_PASSWORD = '/auth/reset-password',
  LANDINGPAGE = '/landingpage',
  NOT_FOUND = '*',
}

export enum PRIVATE_ROUTE {
  DASHBOARD = '/dashboard',
  USER_PROFILE = '/profile',
}
