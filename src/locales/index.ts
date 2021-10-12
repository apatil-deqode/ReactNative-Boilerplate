import _ from 'lodash';
import en from './en.json';

const locales: Record<string, any> = {};

_.each([en], locale => {
  const key = _.keys(locale)[0];
  locales[key] = locale[key];
});

export {locales};
