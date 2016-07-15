function multiplyOrDivideNumbers(args) {
	let n = Number(args[0]);
	let x = Number(args[1]);

	if (x >= n) {
		return n * x
	} else {
		return n / x;
	}
}

multiplyOrDivideNumbers(['2', '3']);