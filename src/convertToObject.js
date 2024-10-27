'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString.split(';').forEach((line) => {
    const trimedLine = line.trim();

    if (trimedLine) {
      const [property, value] = trimedLine
        .split(':')
        .map((part) => part.trim());

      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
