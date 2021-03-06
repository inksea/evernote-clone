/**
 * Reduce the number of api calls.
 * @param {*} a
 * @param {*} b
 * @param {*} c
 */
export default function debounce(a, b, c) {
	var d, e;
	return function() {
		function h() {
			d = null;
			c || (e = a.apply(f, g));
		}
		var f = this,
			g = arguments;
		return clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e;
	};
}

/**
 * Help preview the markdown being written.
 * @param {*} str
 */
export function removeHTMLTags(str) {
	return str.replace(/<[^>]*>?/gm, '');
}
