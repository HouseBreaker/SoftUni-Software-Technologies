function threeLargestNumbers(args) {
	let numbers = args.map(Number);
	numbers.sort((a, b) => b - a).splice(3);

	console.log(numbers.join('\n'));
}

threeLargestNumbers(['10', '30', '15', '20', '50', '5']);