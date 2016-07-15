function printLines(args) {
	let lines = args.splice(0, args.indexOf('Stop'));
	console.log(lines.join('\n'));
}

printLines(['Line 1', 'Line 2', 'Line 3', 'Stop']);