import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Page } from '../src/atoms/page';

export default {
	title: 'Page',
	component: Page,
	decorators: [withKnobs],
};

export const WithContent = () => <Page>{text('Content', 'You can put anything here!')}</Page>;

WithContent.story = {
	name: 'With content',
};
