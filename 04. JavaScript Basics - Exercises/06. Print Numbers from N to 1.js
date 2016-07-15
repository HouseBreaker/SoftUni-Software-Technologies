function printNumbersfrom1ToN(args) {
	let n = Number(args[0]);

	for (let i = n; i > 0; i--) {
		console.log(i);
	}
}

printNumbersfrom1ToN(['5']);