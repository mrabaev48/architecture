import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from 'shared/ui/Input';

export default {
    title: 'shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const LightThemeInput = Template.bind({});

LightThemeInput.args = {
    placeholder: 'Type text',
    value: 'Test text is here',
};

export const DarkThemeInput = Template.bind({});
DarkThemeInput.args = {
    placeholder: 'Type text',
    value: 'Test text is here',
};
DarkThemeInput.decorators = [ThemeDecorator(Theme.Dark)];
