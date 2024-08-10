import { css } from '@emotion/css';
import { TextAlign } from './text.component';

export const createTextStyle = (textAlign: TextAlign): string => {
	return css`
		text-align: ${textAlign};
	`;
};
