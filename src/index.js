module.exports = function check(str, bracketsConfig) {
	let newBrackets = new Map(bracketsConfig);
	let stack = [];

	str.split("").forEach((elem) => {
		if (elem == newBrackets.get(stack[stack.length - 1])) {
			stack.pop();
		} else {
			stack.push(elem);
		}
	});
	return stack.length !== 0 ? false : true;
};
