import {setContext} from 'apollo-link-context';
import {AsyncStorage} from 'react-native';
import {store} from '../redux/store';

const getToken = async () => {
  const cacheToken = store.getState().App.token;

  if (cacheToken) {
    return cacheToken;
  }
  const token = await AsyncStorage.getItem(`token`);
  return token;
};

const authLink = setContext(() => ({
  headers: {
    authorization: getToken() || ``,
  },
}));

export default authLink;
