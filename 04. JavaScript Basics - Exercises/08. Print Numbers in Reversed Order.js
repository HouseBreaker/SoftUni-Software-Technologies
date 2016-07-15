function printNumbersInReversedOrder(args) {
	let numbers = args.map(Number).reverse();

	console.log(numbers.join('\n'))
}

printNumbersInReversedOrder(['1', '2', '3', '4']);