import { Flex, Link, Text } from '@primer/components';
import React from 'react';
import { Page } from 'src/atoms/page';
import { AppLogo } from 'src/molecules/app-logo';

export const PeakfijnPage: React.FC = () => (
	<Page>
		<Flex
			minHeight='100vh'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
		>
			<AppLogo />
			<Text as='h1' color='white'>
				Peakfijn ❤️ <Link href='https://github.com/zeit/next.js' color='inherit' underline>NextJS</Link>
			</Text>
		</Flex>
	</Page>
);
