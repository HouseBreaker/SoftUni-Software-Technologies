function symmetricalNumbers(args) {
	let n = Number(args[0]);

	let result = '';

	function isSymmetric(num) {
		num = '' + num;
		for (let i = 0; i < num.length / 2; i++)
			if (num[i] != num[num.length - i - 1]) {
				return false;
			}

		return true
	}

	for (let i = 1; i <= n; i++) {
		if (isSymmetric(i)) {
			result += i + ' ';
		}
	}

	console.log(result);
}

symmetricalNumbers(['1000']);