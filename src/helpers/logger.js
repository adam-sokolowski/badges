"use strict";
exports.__esModule = true;
exports.logger = void 0;
function logger(error) {
    if (error) {
        return console.error('Error writing file:', error);
    }
    console.info('File saved successfully!');
}
exports.logger = logger;
