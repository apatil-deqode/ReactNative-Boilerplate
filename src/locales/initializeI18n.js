import I18n from 'i18n-js';
import _ from 'lodash';
import RNLocalize from 'react-native-localize';
import {locales} from '.';

I18n.fallbacks = 'en';
I18n.translations = locales;

const setLocale = () => {
  const locale = _.first(RNLocalize.getLocales());
  if (locale) {
    const languageTag = `${locale.languageCode}-${locale.countryCode}`;
    if (_.isEmpty(locales[languageTag])) {
      I18n.locale = locale.languageCode;
    } else {
      I18n.locale = languageTag;
    }
  }
};

RNLocalize.addEventListener('change', setLocale);
setLocale();
