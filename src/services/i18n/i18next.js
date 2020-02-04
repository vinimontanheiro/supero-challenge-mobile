import nativeI18n from 'react-native-i18n';
import i18next from 'i18next';
import moment from 'moment-timezone';
import {initReactI18next} from 'react-i18next';
import 'moment/locale/pt-br';
import 'moment/locale/es';
import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';

moment.tz.setDefault(`GMT`);
const xx = pt;
const currentLocale = nativeI18n.currentLocale();
const convertedLocale = currentLocale.startsWith(`es`) ? `es` : currentLocale.replace(`-`, `_`);

i18next.use(initReactI18next).init({
  lng: convertedLocale,
  fallbackLng: `xx`,
  resources: {
    pt_BR: pt,
    en_US: en,
    en,
    es,
    xx,
  },
});
moment.locale(convertedLocale);

export default i18next;
