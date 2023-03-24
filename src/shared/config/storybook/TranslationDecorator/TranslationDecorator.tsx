import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import React, { Suspense } from 'react';

export const TranslationDecorator = (StoryComponent: Story) => (
    <Suspense fallback="">
        <I18nextProvider i18n={i18n}>
            <StoryComponent />
        </I18nextProvider>
    </Suspense>
);
