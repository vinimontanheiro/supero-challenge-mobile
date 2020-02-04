import React from 'react';
import {I18nextProvider, useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import i18next from './services/i18n/i18next';

const App = () => {
  const {t} = useTranslation(`book`);
  return (
    <I18nextProvider i18n={i18next}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text style={styles.sectionTitle}>{t(`title`)}</Text>
        </View>
      </SafeAreaView>
    </I18nextProvider>
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
