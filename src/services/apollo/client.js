import {ApolloClient} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';
import fetch from 'cross-fetch';
import ErrorLink from './errorLink';
import AuthLink from './authLink';
import {ENDPOINTS} from '../../constants';

const link = ApolloLink.from([
  AuthLink,
  ErrorLink,
  createHttpLink({uri: ENDPOINTS.GRAPHQL_URI, fetch}),
]);

const defaultOptions = {
  watchQuery: {
    fetchPolicy: `no-cache`,
    errorPolicy: `ignore`,
  },
  query: {
    fetchPolicy: `no-cache`,
    errorPolicy: `all`,
  },
};

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions,
});
