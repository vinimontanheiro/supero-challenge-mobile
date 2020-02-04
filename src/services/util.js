import {IS_PRODUCTION} from '../constants';

export const debug = message => {
  if (IS_PRODUCTION) {
    console.log(message);
  }
};
