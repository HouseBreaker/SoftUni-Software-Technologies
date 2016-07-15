function symmetricalNumbers(args) {
	let objects = args.map(a => JSON.parse(a));

	let sums = {};

	for (let obj of objects) {
		sums[obj.town] = sums[obj.town] || 0;
		sums[obj.town] += obj.income;
	}

	for (let town of Object.keys(sums).sort()) {
		console.log(`${town} -> ${sums[town]}`)
	}
}

symmetricalNumbers([
	'{"town":"Sofia","income":200}',
	'{"town":"Varna","income":120}',
	'{"town":"Pleven","income":60}',
	'{"town":"Varna","income":70}'
]);