import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.Clear,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.Outline,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.Outline,
};
OutlineDark.decorators = [ThemeDecorator(Theme.Dark)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.Background,
};

export const BackgroundThemeDark = Template.bind({});
BackgroundThemeDark.args = {
    children: 'Text',
    theme: ButtonTheme.Background,
};
BackgroundThemeDark.decorators = [ThemeDecorator(Theme.Dark)];

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BackgroundInverted,
};

export const BackgroundInvertedThemeDark = Template.bind({});
BackgroundInvertedThemeDark.args = {
    children: 'Text',
    theme: ButtonTheme.BackgroundInverted,
};
BackgroundInvertedThemeDark.decorators = [ThemeDecorator(Theme.Dark)];

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
};

export const SquareDark = Template.bind({});
SquareDark.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
};
SquareDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
    size: ButtonSize.M,
};

export const SquareSizeMDark = Template.bind({});
SquareSizeMDark.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
    size: ButtonSize.M,
};
SquareSizeMDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeLDark = Template.bind({});
SquareSizeLDark.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
    size: ButtonSize.L,
};
SquareSizeLDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
    size: ButtonSize.XL,
};

export const SquareSizeXLDark = Template.bind({});
SquareSizeXLDark.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
    size: ButtonSize.XL,
};
SquareSizeXLDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SizeM = Template.bind({});
SizeM.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    size: ButtonSize.M,
};

export const SizeMDark = Template.bind({});
SizeMDark.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    size: ButtonSize.M,
};
SizeMDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SizeL = Template.bind({});
SizeL.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    size: ButtonSize.L,
};

export const SizeLDark = Template.bind({});
SizeLDark.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    size: ButtonSize.L,
};
SizeLDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SizeXL = Template.bind({});
SizeXL.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    size: ButtonSize.XL,
};

export const SizeXLDark = Template.bind({});
SizeXLDark.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    size: ButtonSize.XL,
};
SizeXLDark.decorators = [ThemeDecorator(Theme.Dark)];
