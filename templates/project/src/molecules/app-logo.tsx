import React from 'react';
import { Avatar, Link } from '@primer/components';

export const AppLogo: React.SFC = () => (
	<Link href='https://peakfijn.nl'>
		<Avatar src='/images/peakfijn-logo.svg' size={128} alt='peakfijn' />
	</Link>
);
