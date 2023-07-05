import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
    const { t } = useTranslation('aboutPage');
    return <div>{t('aboutPage')}</div>;
});

export default AboutPage;
