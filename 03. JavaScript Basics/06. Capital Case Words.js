function threeLargestNumbers(args) {
	let allWords = args.join(',').split(/\W+/).map(a => a.trim()).filter(a => a != '').filter(a => a == a.toUpperCase());
	console.log(allWords.join(', '));
}

threeLargestNumbers([
	'We start by HTML, CSS, JavaScript, JSON and REST.',
	'Later we touch some PHP, MySQL and SQL.',
	'Later we play with C#, EF, SQL Server and ASP.NET MVC.',
	'Finally, we touch some Java, Hibernate and Spring.MVC.'
]);