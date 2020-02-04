import {onError} from 'apollo-link-error';
import {debug} from '../util';

const errorLink = onError(({networkError, graphQLErrors}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) =>
      debug(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  }
  if (networkError) {
    debug(`[Network error]: ${networkError}`);
  }
});

export default errorLink;
