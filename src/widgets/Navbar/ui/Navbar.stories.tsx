import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            loginForm: { password: 'test', username: 'test' },
        }),
    ],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const LightWithLoggedUser = Template.bind({});
LightWithLoggedUser.args = {};
LightWithLoggedUser.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: 1,
                password: 'test',
                username: 'test',
            },
        },
    }),
];

export const DarkWithLoggedUser = Template.bind({});
DarkWithLoggedUser.args = {};
DarkWithLoggedUser.decorators = [
    ThemeDecorator(Theme.Dark),
    StoreDecorator({
        user: {
            authData: {
                id: 1,
                password: 'test',
                username: 'test',
            },
        },
    }),
];
