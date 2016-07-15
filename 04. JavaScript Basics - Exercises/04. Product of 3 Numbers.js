function multiplyNumbers(args) {
	let a = Number(args[0]);
	let b = Number(args[1]);
	let c = Number(args[2]);

	let numbers = [a, b, c];
	console.log(getProductPolarity(numbers));

	function getProductPolarity(numbers) {

		const pos = 'Positive';
		const neg = 'Negative';

		if (numbers.includes(0)) {
			return pos;
		}

		let negativeNumbersCountIsOdd = numbers.filter(a => a < 0).length % 2 == 1;
		if (negativeNumbersCountIsOdd) {
			return neg;
		} else {
			return pos;
		}
	}
}

multiplyNumbers(['2', '3', '-1']);