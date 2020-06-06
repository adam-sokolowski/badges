import { toString } from 'lodash';
import { BADGE_TEMPLATE } from './badge.const';
import { COLORS } from './colors.const';

export function generateBadge(value: string, color = COLORS.red, label = 'Average'): string {

  const badge = BADGE_TEMPLATE
    .replace(/{{label}}/g, toString(label)) 
    .replace('{{value}}', toString(value) )
    .replace('{{color}}', color);

  return badge;
}
