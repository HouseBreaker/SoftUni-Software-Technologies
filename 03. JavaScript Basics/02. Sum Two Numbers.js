function sumTwoNumbers(args) {
	let numbers = args[0].split(' ').map(Number);
	let a = numbers[0];
	let b = numbers[1];
	let c = numbers[2];

	console.log(
		check(a, b, c) ||
		check(a, c, b) ||
		check(b, c, a) ||
		"No"
	);

	function check(num1, num2, num3) {
		if (num1 > num2) {
			[num1, num2] = [num2, num1];
		}

		if (num1 + num2 == num3) {
			return `${num1} + ${num2} = ${num3}`;
		}
	}
}