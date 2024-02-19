/**
 * Aligns the lines of a block of code by removing leading spaces.
 *
 * This function calculates the number of leading spaces on the first line of the code,
 * then creates a regular expression that matches this number of leading spaces.
 * It finally replaces these leading spaces in each line of the code.
 *
 * @param {string} code - The block of code to align.
 * @returns {string} The aligned block of code.
 */
function alignLines(code) {
  // Remove leading and trailing new lines.
  const normalizeCode = code.replace(/^[\r\n]+|[\r\n]+$/g, '');
  // Calculate the number of leading spaces on the first line
  const firstLine = normalizeCode.split('\n')[0];
  const leadingSpaces = firstLine.match(/^ */)[0].length;
  // Create a regular expression that matches 'leadingSpaces' number of leading spaces
  const regex = new RegExp(`^ {${leadingSpaces}}`, 'gm');

  // Replace leading spaces in each line
  return normalizeCode.replace(regex, '');
}

const parser = new DOMParser();

/**
 * Parses an HTML string and returns the text content of the first element that matches the provided selector.
 *
 * @param {string} html - The HTML string to parse.
 * @param {string} [selector='[data-implementation]'] - The CSS selector to match elements. Defaults to '[data-example]'.
 * @returns {string} The text content of the first matching element. If no elements match the selector, it returns an empty string.
 *
 * @example
 * const html = '<div data-example>Hello, world!</div>';
 * const content = parseHTML(html);
 * console.log(content);  // Logs: 'Hello, world!'
 */
export function getTextFromHTML(html, selector = '[data-implementation]') {
  return alignLines(
    parser.parseFromString(html, 'text/html').querySelector(selector).textContent
  );
}
