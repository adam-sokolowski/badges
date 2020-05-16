"use strict";
exports.__esModule = true;
exports.generateBadge = void 0;
var lodash_1 = require("lodash");
var badge_const_1 = require("./badge.const");
var colors_const_1 = require("./colors.const");
function generateBadge(coverage) {
    var level = lodash_1.isNumber(coverage) ? coverage : parseFloat(coverage);
    var color = level >= 90
        ? colors_const_1.COLORS.green
        : level >= 70
            ? colors_const_1.COLORS.blue
            : level >= 50
                ? colors_const_1.COLORS.yellow
                : colors_const_1.COLORS.red;
    var badge = badge_const_1.BADGE_TEMPLATE
        .replace('{{level}}', lodash_1.toString(level))
        .replace('{{color}}', color);
    return badge;
}
exports.generateBadge = generateBadge;
