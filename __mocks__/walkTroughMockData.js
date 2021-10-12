import I18n from 'i18n-js';
import {Walkthrough1, Walkthrough2, Walkthrough3} from '../src/constants';

const t = key => I18n.t(`screens.walktrough.${key}`);

export const walkTroughMockData = [
  {
    id: '1',
    title: t('title1'),
    url: Walkthrough1,
    description: t('description1'),
  },
  {
    id: '2',
    title: t('title2'),
    url: Walkthrough2,
    description: t('description2'),
  },
  {
    id: '3',
    title: t('title3'),
    url: Walkthrough3,
    description: t('description3'),
  },
];
