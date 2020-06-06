import { toString } from 'lodash';
import { BADGE_TEMPLATE } from './badge.const';
import { COLORS } from './colors.const';

export function generateBadge(value: string, color = COLORS.red, label = 'Average', hasDynamicWidth = false): string {

  const textLength = label.length + value.length;

  const badgeWidth = hasDynamicWidth ? (textLength + 2) * 6 : 110;
  const labelWidth = hasDynamicWidth ? (label.length + 2) * 6 : 65;
  const valueWidth = hasDynamicWidth ? (badgeWidth - labelWidth) : '45';
  const labelPosition = hasDynamicWidth ? toString((labelWidth * 10) + 30) : '700';

  const badge = BADGE_TEMPLATE
    .replace(/{{badgeWidth}}/g, toString(badgeWidth))
    .replace(/{{label}}/g, toString(label))
    .replace(/{{labelWidth}}/g, toString(labelWidth))
    .replace('{{value}}', toString(value))
    .replace(/{{valueWidth}}/g, toString(valueWidth))
    .replace('{{labelPosition}}', labelPosition)
    .replace('{{color}}', color);

  return badge;
}
