import {useCallback, useEffect} from 'react';
import {ToastAndroid, AsyncStorage} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {setApp} from '../../services/redux/actions';
import {SCREEN} from '../../constants';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const useLogin = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const [doLogin, {data}] = useMutation(LOGIN_MUTATION);
  const {t} = useTranslation(`error`);

  const handleLogin = useCallback(
    ({email, password}) => {
      dispatch(setApp({loading: true}));
      doLogin({variables: {email, password}}).catch(({graphQLErrors}) => {
        dispatch(setApp({loading: false}));
        if (graphQLErrors && !!graphQLErrors.length) {
          const {message} = graphQLErrors[0];
          ToastAndroid.showWithGravity(t(message), ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
      });
    },
    [doLogin, t, dispatch],
  );

  useEffect(() => {
    if (data) {
      const {
        login: {token},
      } = data;
      if (token) {
        dispatch(setApp({token}));
        AsyncStorage.setItem(`token`, token).then(() => {
          navigate(SCREEN.BOOK);
        });
      }
    }
  }, [data, dispatch, navigate]);

  return {
    handleLogin,
  };
};

export default useLogin;
