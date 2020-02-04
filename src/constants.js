export const ENDPOINTS = {
  GRAPHQL_URI: process.env.GRAPHQL_URI || `http://localhost:9001/graphql`,
};

export const IS_PRODUCTION = process.env.NODE_ENV === `production`;
