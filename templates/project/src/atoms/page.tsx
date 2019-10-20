import React from 'react';
import styled from 'styled-components';
import {
	BackgroundProps,
	background,
	ColorProps,
	color,
	SpaceProps,
	space,
} from 'styled-system';

export const Page: React.FC = (props) => (
	<Background
		backgroundColor='peakfijn'
		backgroundImage='url("/images/peakfijn-background.svg")'
		backgroundPosition='center'
		backgroundRepeat='repeat'
		paddingX={4}
	>
		{props.children}
	</Background>
);

const Background = styled.div<BackgroundProps & ColorProps & SpaceProps>`
	${background}
	${color}
	${space}
`;
