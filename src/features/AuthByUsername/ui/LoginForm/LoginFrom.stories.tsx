import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { AuthorizationErrorCode } from 'shared/const/errors/AuthorizationErrorCode';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [
        StoreDecorator({
            loginForm: { password: 'test', username: 'test' },
        }),
    ],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const LightThemeLoginForm = Template.bind({});
LightThemeLoginForm.args = {};
LightThemeLoginForm.decorators = [
    StoreDecorator({
        loginForm: { error: AuthorizationErrorCode.WrongEmailOrPassword },
    }),
];

export const DarkThemeLoginForm = Template.bind({});
DarkThemeLoginForm.args = {};
DarkThemeLoginForm.decorators = [
    ThemeDecorator(Theme.Dark),
    StoreDecorator({
        loginForm: { error: AuthorizationErrorCode.WrongEmailOrPassword },
    }),
];

export const LightThemeLoginFormWithError = Template.bind({});
LightThemeLoginFormWithError.args = {};
LightThemeLoginFormWithError.decorators = [
    StoreDecorator({
        loginForm: { error: AuthorizationErrorCode.WrongEmailOrPassword },
    }),
];

export const DarkThemeLoginFormWithError = Template.bind({});
DarkThemeLoginFormWithError.args = {};
DarkThemeLoginFormWithError.decorators = [
    ThemeDecorator(Theme.Dark),
    StoreDecorator({
        loginForm: { error: AuthorizationErrorCode.WrongEmailOrPassword },
    }),
];

export const LightThemeLoginFormWithLoading = Template.bind({});
LightThemeLoginFormWithLoading.args = {};
LightThemeLoginFormWithLoading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
];

export const DarkThemeLoginFormWithLoading = Template.bind({});
DarkThemeLoginFormWithLoading.args = {};
DarkThemeLoginFormWithLoading.decorators = [
    ThemeDecorator(Theme.Dark),
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
];
