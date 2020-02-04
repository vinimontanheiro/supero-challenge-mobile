import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {ApolloProvider} from '@apollo/react-hooks';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {I18nextProvider} from 'react-i18next';
import {StatusBar} from 'react-native';
import {persistor, store} from './services/redux/store';
import apolloClient from './services/apollo/client';
import i18next from './services/i18n/i18next';
import BookView from './modules/Book/BookView';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={apolloClient}>
          <I18nextProvider i18n={i18next}>
            <StatusBar barStyle="dark-content" />
            <BookView />
          </I18nextProvider>
        </ApolloProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
