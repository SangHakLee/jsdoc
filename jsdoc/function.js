
/**
 * @typedef document
 * @property {!string} path object path
 * @property {?number} code=0 status code
 */

/**
 * @function
 * @description jsdoc function guide
 * @param {string} file file path
 * @param {string=} encoding=utf-8 file encoding
 * @param {?{callback: function}=} options={} options
 * @param {function=} options.callback callback function
 * @example
 * jsdoc('/home/jsdoc.js', 'euc-kr')
 * @returns {document}
 */
function jsdoc(file, encoding = 'utf-8', options = {}) {
	// ...
	if (!file) throw new Error()
	return {}
}

module.exports = jsdoc