import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import useBooks from '../hooks/useBooks';

const BookView = () => {
  const {t} = useTranslation(`book`);

  useBooks();

  return (
    <View>
      <Text style={styles.sectionTitle}>{t(`title`)}</Text>
    </View>
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

export default BookView;
