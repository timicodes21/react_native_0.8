import i18n from '@/app/providers/i18n/i18n';
import { useState } from 'react';

interface IInterest {
  title: string;
  description: string;
  id: string;
}

export const interests: IInterest[] = [
  {
    title: i18n.t('interestsSelection.interest1Title'),
    description: i18n.t('interestsSelection.interest1Description'),
    id: '1',
  },
  {
    title: i18n.t('interestsSelection.interest2Title'),
    description: i18n.t('interestsSelection.interest2Description'),
    id: '2',
  },
  {
    title: i18n.t('interestsSelection.interest3Title'),
    description: i18n.t('interestsSelection.interest3Description'),
    id: '3',
  },
  {
    title: i18n.t('interestsSelection.interest4Title'),
    description: i18n.t('interestsSelection.interest4Description'),
    id: '4',
  },
];

export const useChooseInterests = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleChange = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(prev => {
        const filtered = prev.filter(item => item !== id);
        return filtered;
      });
    } else {
      setSelectedInterests(prev => [...prev, id]);
    }
  };

  return {
    handleChange,
    selectedInterests,
  };
};
