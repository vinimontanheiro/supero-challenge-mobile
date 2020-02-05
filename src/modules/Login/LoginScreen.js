import React from 'react';
import styled from 'styled-components';
import {Text, TouchableHighlight, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Formik} from 'formik';
import * as Yup from 'yup';
import LogoSRC from '../../assets/img/logo.png';
import useLogin from '../hooks/useLogin';

/** Example with styled components */

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const Body = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 15px;
  padding: 2px;
  border-width: 1px;
  margin-top: 2px;
  margin-bottom: 2px;
  ${({error}) => (error ? `border-color:red;` : `border-color: #ccc;`)}
`;

const ButtonLogin = styled(TouchableHighlight)`
  width: 80%;
  height: 55px;
  padding: 5px;
  background-color: #ffa500;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(Image)`
  width: 200px;
  height: 100px;
`;

const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .email(`invalid_email`)
      .required(`invalid_email`),
    password: Yup.string()
      .min(4, `required_more_than_six`)
      .required(`required_password`),
  });

const LoginScreen = () => {
  const {t} = useTranslation(`login`);
  const {handleLogin} = useLogin();

  return (
    <Container>
      <Logo resizeMode="contain" source={LogoSRC} />
      <Body>
        <Formik
          initialValues={{email: ``, password: ``}}
          validationSchema={validationSchema()}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={({email, password}) => {
            handleLogin({email, password});
          }}>
          {({values, handleSubmit, handleChange, errors}) => (
            <>
              <Input
                type="email"
                placeholder={t(`email`)}
                value={values.email}
                onChangeText={handleChange(`email`)}
                error={!!errors.email}
              />
              <Input
                type="password"
                placeholder={t(`password`)}
                value={values.password}
                onChangeText={handleChange(`password`)}
                error={!!errors.password}
              />
              <ButtonLogin onPress={handleSubmit} underlayColor="#f2bc57">
                <Text>{t(`login`)}</Text>
              </ButtonLogin>
            </>
          )}
        </Formik>
      </Body>
    </Container>
  );
};

export default LoginScreen;
