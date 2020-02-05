import React, {useState, useCallback} from 'react';
import {StyleSheet, View, FlatList, Image, Text, TouchableHighlight} from 'react-native';
import moment from 'moment';
import useBooks from '../hooks/useBooks';
import Tooltiped from '../ui/Tooltiped';
import ModalBook from './ModalBook';
import BookSearchBar from './BookSearchBar';

const BookView = () => {
  const [numColumns] = useState(2);
  const [query, setQuery] = useState({term: ``, year: 0});
  const [searchValue, setSearchValue] = useState(``);
  const [date, setDate] = useState(new Date());

  const {books, visible, book, handleBookDetail, handleBook, t} = useBooks(query);

  const onChangeText = useCallback(
    text => {
      setSearchValue(text);
      if (text) {
        setQuery({...query, term: text});
      } else {
        setQuery({...query, term: ``});
      }
    },
    [query],
  );

  const onChangeDate = useCallback(
    d => {
      if (d) {
        setDate(d);
        const year = moment(new Date(d)).format(`YYYY`);
        setQuery({...query, year: Number(year)});
      }
    },
    [query],
  );

  const clearSearch = useCallback(() => {
    setQuery({term: ``, year: 0});
    setDate(new Date());
    setSearchValue(``);
  }, []);

  return (
    <View style={styles.container}>
      <BookSearchBar
        value={searchValue}
        onChangeText={onChangeText}
        date={date}
        onChangeDate={onChangeDate}
      />
      <TouchableHighlight style={styles.clear} onPress={clearSearch} underlayColor="#ededed">
        <Text>{t(`action:clear`)}</Text>
      </TouchableHighlight>
      <FlatList
        data={books}
        keyExtractor={({_id}) => _id}
        numColumns={numColumns}
        renderItem={({item: {image, title, author, year, ...rest}}) => (
          <TouchableHighlight
            style={styles.item}
            onPress={() => {
              handleBook({image, title, author, year, ...rest});
            }}
            underlayColor="#cccccc">
            <>
              <View style={styles.infoColumn}>
                <Tooltiped text={t(`title`)}>
                  <Text>
                    {title} - {year}
                  </Text>
                </Tooltiped>
              </View>
              <Image style={styles.image} source={{uri: image}} />
              <View style={styles.infoRow}>
                <View style={styles.infoColumn}>
                  <Tooltiped text={t(`author`)}>
                    <Text>{author}</Text>
                  </Tooltiped>
                </View>
              </View>
            </>
          </TouchableHighlight>
        )}
      />
      <ModalBook
        visible={visible}
        book={book}
        handleClose={() => {
          handleBookDetail(false);
        }}
        t={t}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: `column`,
    width: `100%`,
  },
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
  clear: {
    width: `70%`,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: `#ededed`,
    alignSelf: `center`,
    alignItems: `center`,
    justifyContent: `center`,
  },
});

export default BookView;
