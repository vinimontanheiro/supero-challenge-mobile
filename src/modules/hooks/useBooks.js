import {useEffect, useState, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const LIST_BOOKS_QUERY = gql`
  query listBooks($term: String, $year: Int) {
    listBooks(term: $term, year: $year) {
      _id
      image
      title
      isbn
      author
      publisher
      year
      language
      weight
      dimensions
    }
  }
`;

const useBooks = query => {
  const {t} = useTranslation(`book`);
  const initialBook = {
    title: ``,
    image: ``,
    isbn: 0,
    author: `=`,
    publisher: `=`,
    year: 0,
    language: ``,
    weight: 0,
    dimensions: ``,
  };
  const [book, setBook] = useState(initialBook);
  const [books, setBooks] = useState([]);
  const [visible, setVisible] = useState(false);
  const {loading, data} = useQuery(LIST_BOOKS_QUERY, {
    variables: {...query},
  });

  const handleBook = useCallback(
    b => {
      setBook(b);
      handleBookDetail(true);
    },
    [handleBookDetail],
  );

  const handleBookDetail = useCallback(v => {
    setVisible(v);
  }, []);

  useEffect(() => {
    if (data) {
      const {listBooks} = data;
      if (listBooks && !!listBooks.length) {
        setBooks(listBooks);
      } else {
        setBooks([]);
      }
    }
  }, [data, setBooks]);

  return {
    books,
    t,
    loading,
    book,
    visible,
    handleBook,
    handleBookDetail,
  };
};

export default useBooks;
