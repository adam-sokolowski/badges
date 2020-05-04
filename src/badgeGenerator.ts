import { isNumber, toString } from 'lodash';
import { BADGE_TEMPLATE } from './badge.const';
import { COLORS } from './colors.const';

export function generateBadge(coverage: number | string): string {

  const level = isNumber(coverage) ? coverage : parseFloat(coverage);

  const color = level >= 90
    ? COLORS.green
    : level >= 70
      ? COLORS.blue
      : level >= 50
        ? COLORS.yellow
        : COLORS.red;

  const badge = BADGE_TEMPLATE
    .replace('{{level}}', toString(level))
    .replace('{{color}}', color);

  return badge;
}
