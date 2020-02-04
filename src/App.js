import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {I18nextProvider, useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import {persistor, store} from './services/redux/store';
import i18next from './services/i18n/i18next';

const App = () => {
  const {t} = useTranslation(`book`);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18next}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View>
              <Text style={styles.sectionTitle}>{t(`title`)}</Text>
            </View>
          </SafeAreaView>
        </I18nextProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: `600`,
    color: `#000000`,
    padding: 10,
  },
});

export default App;
