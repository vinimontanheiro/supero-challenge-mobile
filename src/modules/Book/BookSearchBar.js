import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput, StyleSheet, View, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {SCREEN} from '../../constants';
import {resetStore} from '../../services/redux/actions';

const BookSearchBar = ({value, onChangeText, date, onChangeDate}) => {
  const {t} = useTranslation(`action`);
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleShowDatePicker = useCallback(v => {
    setShowDatePicker(v);
  }, []);

  const handleLogout = useCallback(() => {
    navigate(SCREEN.LOGIN);
    dispatch(resetStore());
    AsyncStorage.clear();
  }, [dispatch, navigate]);

  return (
    <>
      <View style={styles.bar}>
        <TextInput
          placeholder={t(`search`)}
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
        />
        <Icon
          onPress={() => {
            handleShowDatePicker(true);
          }}
          size={45}
          name="calendar"
        />
        <Icon onPress={handleLogout} size={40} name="logout" />
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          is24Hour={true}
          display="default"
          onChange={(e, d) => {
            handleShowDatePicker(false);
            onChangeDate(d);
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  bar: {
    width: `100%`,
    padding: 8,
    shadowColor: `#000`,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 5,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `space-between`,
    height: 60,
  },
  input: {
    width: `70%`,
    height: 50,
    fontSize: 16,
    padding: 2,
    borderWidth: 1,
    borderColor: `#ccc`,
  },
});

BookSearchBar.defaultProps = {
  value: ``,
};

BookSearchBar.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onChangeDate: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default BookSearchBar;
