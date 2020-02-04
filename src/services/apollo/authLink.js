import {setContext} from 'apollo-link-context';

const authLink = setContext(() => ({
  headers: {
    authorization: ``,
  },
}));

export default authLink;
