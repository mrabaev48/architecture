import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TitleAndText = Template.bind({});
TitleAndText.args = {
    title: 'Hello World!',
    text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
};

export const TitleAndTextDark = Template.bind({});
TitleAndTextDark.args = {
    title: 'Hello World!',
    text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
};
TitleAndTextDark.decorators = [ThemeDecorator(Theme.Dark)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Hello World!',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Hello World!',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.Dark)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.Dark)];

export const TitleAndTextWithError = Template.bind({});
TitleAndTextWithError.args = {
    title: 'Hello World!',
    text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    theme: TextTheme.Error,
};

export const TitleAndTextDarkWithError = Template.bind({});
TitleAndTextDarkWithError.args = {
    title: 'Hello World!',
    text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    theme: TextTheme.Error,
};
TitleAndTextDarkWithError.decorators = [ThemeDecorator(Theme.Dark)];

export const OnlyTitleWithError = Template.bind({});
OnlyTitleWithError.args = {
    title: 'Hello World!',
    theme: TextTheme.Error,
};

export const OnlyTitleDarkWithError = Template.bind({});
OnlyTitleDarkWithError.args = {
    title: 'Hello World!',
    theme: TextTheme.Error,
};
OnlyTitleDarkWithError.decorators = [ThemeDecorator(Theme.Dark)];

export const OnlyTextWithError = Template.bind({});
OnlyTextWithError.args = {
    text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    theme: TextTheme.Error,
};

export const OnlyTextDarkWithError = Template.bind({});
OnlyTextDarkWithError.args = {
    text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    theme: TextTheme.Error,
};
OnlyTextDarkWithError.decorators = [ThemeDecorator(Theme.Dark)];
