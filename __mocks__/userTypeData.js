import I18n from 'i18n-js';
import {
  Certificate,
  Personal,
  Share,
  Terms,
  Trainer,
  Verification,
} from '../src/constants';

const t = key => I18n.t(`screens.userSelection.${key}`);

export const UserTypeMockData = {
  client: [
    {
      id: '1',
      title: t('termsConditions'),
      url: Terms,
      description: t('readAndAccept'),
    },
    {
      id: '2',
      title: t('personalInfo'),
      url: Personal,
      description: t('tellUsABitAboutYourself'),
    },
    {
      id: '3',
      title: t('scialLinks'),
      url: Share,
      description: t('thisWillHelpClientsFindYou'),
    },
  ],
  coach: [
    {
      id: '1',
      title: t('termsConditions'),
      url: Terms,
      description: t('readAndAccept'),
    },
    {
      id: '2',
      title: t('personalInfo'),
      url: Personal,
      description: t('tellUsABitAboutYourself'),
    },
    {
      id: '3',
      title: t('trainerInfo'),
      url: Trainer,
      description: t('tellUsABitAboutYourTraining'),
    },
    {
      id: '4',
      title: t('verification'),
      url: Verification,
      description: t('provideYourPhotoID'),
    },
    {
      id: '5',
      title: t('certifications'),
      url: Certificate,
      description: t('provideYourCertification'),
    },
    {
      id: '6',
      title: t('scialLinks'),
      url: Share,
      description: t('thisWillHelpClientsFindYou'),
    },
  ],
  center: [
    {
      id: '1',
      title: t('termsConditions'),
      url: Terms,
      description: t('readAndAccept'),
    },
    {
      id: '2',
      title: t('centerInfo'),
      url: Trainer,
      description: t('tellUsABitAboutYourCenter'),
    },
    {
      id: '4',
      title: t('verification'),
      url: Verification,
      description: t('provideYourPhotoID'),
    },
    {
      id: '6',
      title: t('scialLinks'),
      url: Share,
      description: t('thisWillHelpClientsFindYou'),
    },
  ],
};
