export const ENDPOINTS = {
  GRAPHQL_URI: process.env.GRAPHQL_URI || `http://209.97.131.195:9001/graphql`,
};

export const IS_PRODUCTION = process.env.NODE_ENV === `production`;

export const SCREEN = {
  LOGIN: `Login`,
  BOOK: `Book`,
};
