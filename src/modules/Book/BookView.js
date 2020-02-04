import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Image, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import useBooks from '../hooks/useBooks';
import Tooltiped from '../ui/Tooltiped';

const BookView = () => {
  const [numColumns] = useState(2);
  const {t} = useTranslation(`book`);
  const {books} = useBooks();

  return (
    <View>
      <FlatList
        data={books}
        keyExtractor={({_id}) => _id}
        numColumns={numColumns}
        renderItem={({item: {image, title, author, publisher}}) => (
          <View style={styles.item}>
            <View style={styles.infoColumn}>
              <Tooltiped text={t(`title`)}>
                <Text>{title}</Text>
              </Tooltiped>
            </View>
            <Image style={styles.image} source={{uri: image}} />
            <View style={styles.infoRow}>
              <View style={styles.infoColumn}>
                <Tooltiped text={t(`author`)}>
                  <Text>{author}</Text>
                </Tooltiped>
              </View>
              <View style={styles.infoColumn}>
                <Tooltiped text={t(`publisher`)}>
                  <Text>{publisher}</Text>
                </Tooltiped>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: `center`,
    flexBasis: 0,
    flexGrow: 1,
    margin: 4,
    padding: 10,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: `#d6d7da`,
  },
  image: {
    width: 120,
    height: 170,
    resizeMode: `contain`,
  },
  infoRow: {
    flex: 1,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
  infoColumn: {
    display: `flex`,
    flexDirection: `column`,
    flex: 1,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
});
export default BookView;
