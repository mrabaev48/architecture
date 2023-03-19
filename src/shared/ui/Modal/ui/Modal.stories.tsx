import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores optio perferendis perspiciatis quis tempora voluptatum. A eligendi eveniet iusto odio?',
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores optio perferendis perspiciatis quis tempora voluptatum. A eligendi eveniet iusto odio?',
};

DarkTheme.decorators = [ThemeDecorator(Theme.Dark)];
