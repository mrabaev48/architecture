import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const LightThemeLoginForm = Template.bind({});

LightThemeLoginForm.args = {};

export const DarkThemeLoginForm = Template.bind({});
DarkThemeLoginForm.args = {};
DarkThemeLoginForm.decorators = [ThemeDecorator(Theme.Dark)];
