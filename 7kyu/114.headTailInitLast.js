function head(arr) {
	const result = [...arr].shift();
	return result;
}

function tail(arr) {
	const result = [...arr].slice(1, arr.length);
	return result;
}

function init(arr) {
	const result = [...arr].slice(0, arr.length - 1);
	return result;
}

function last(arr) {
	const result = [...arr].pop();
	return result;
}
