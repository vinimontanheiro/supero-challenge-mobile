import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableHighlight, View, StyleSheet, Image} from 'react-native';
import ModalCustom from '../ui/ModalCustom';

const ModalBook = ({
  visible,
  handleClose,
  book: {title, year, image, author, publisher, isbn, language, weight, dimensions},
  t,
}) => {
  return (
    visible && (
      <ModalCustom styles={styles.modal} visible={visible}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{`${title} - ${year}`}</Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.image} source={{uri: image}} />
            <View style={styles.column}>
              <Text style={styles.text}>{`${t(`author`)}: ${author}`}</Text>
              <Text style={styles.text}>{`${t(`publisher`)}: ${publisher}`}</Text>
              <Text style={styles.text}>{`${t(`isbn`)}: ${isbn}`}</Text>
              <Text style={styles.text}>{`${t(`language`)}: ${t(`language:${language}`)}`}</Text>
              <Text style={styles.text}>{`${t(`weight`)}: ${weight}g`}</Text>
              <Text style={styles.text}>{`${t(`dimensions`)}: ${dimensions}`}</Text>
            </View>
          </View>
          <TouchableHighlight style={styles.close} onPress={handleClose}>
            <Text style={styles.title}>{t(`action:close`)}</Text>
          </TouchableHighlight>
        </View>
      </ModalCustom>
    )
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: `flex-end`,
    backgroundColor: `rgba(0, 0, 0, 0.7)`,
  },
  image: {
    width: 90,
    height: 140,
    resizeMode: `contain`,
    padding: 3,
  },
  container: {
    backgroundColor: `#fafafa`,
    padding: 10,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: 2,
    width: `100%`,
  },
  title: {
    flexWrap: `wrap`,
    fontSize: 18,
  },
  row: {
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    margin: 4,
    width: `100%`,
  },
  column: {
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
  },
  text: {
    paddingTop: 8,
    flexWrap: `wrap`,
    marginHorizontal: 2,
  },
  close: {
    marginTop: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: `#ededed`,
  },
});

ModalBook.defaultProps = {
  visible: false,
};

ModalBook.propTypes = {
  visible: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default ModalBook;
