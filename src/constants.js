export const ENDPOINTS = {
  GRAPHQL_URI: process.env.GRAPHQL_URI || `http://172.16.35.195:9001/graphql`,
};

export const IS_PRODUCTION = process.env.NODE_ENV === `production`;
