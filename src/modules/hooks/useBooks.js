import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const LIST_BOOKS_QUERY = gql`
  query listBooks {
    listBooks {
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

const useBooks = () => {
  const {t} = useTranslation(`book`);
  const [books, setBooks] = useState([]);
  const {loading, data} = useQuery(LIST_BOOKS_QUERY);

  useEffect(() => {
    if (data) {
      const {listBooks} = data;
      if (listBooks && !!listBooks.length) {
        setBooks(listBooks);
      }
    }
  }, [data, setBooks]);

  return {
    books,
    t,
    loading,
  };
};

export default useBooks;
