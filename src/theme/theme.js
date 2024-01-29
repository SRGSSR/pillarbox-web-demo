import themeCSS from './theme.scss?inline';
import animationsCSS from './animations.scss?inline';
import { unsafeCSS } from 'lit';

export const theme = unsafeCSS(themeCSS);
export const animations = unsafeCSS(animationsCSS);
