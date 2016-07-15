const fadeDuration = 200;

function addCountryToTable(country, capital) {
	let row = $('<tr>')
		.append($('<td>').text(country))
		.append($('<td>').text(capital))
		.append($('<td>')
			.append($('<a href="#" onclick="moveRowUp(this)">[Up]</a>'))
			.append($('<a href="#" onclick="moveRowDown(this)">[Down]</a>'))
			.append($('<a href="#" onclick="deleteRow(this)">[Delete]</a>'))
		);


	row.appendTo('#countriesTable');

	row.hide();
	row.fadeIn(fadeDuration);
}

function deleteRow(link) {
	let row = $(link).parent().parent();

	row.fadeOut(fadeDuration, function () {
		row.remove();
		fixRowLinks();
	});
}

function moveRowUp(link) {
	let row = $(link).parent().parent();

	row.fadeOut(fadeDuration, function () {
		row.insertBefore(row.prev());
		row.fadeIn(fadeDuration);
	});
}

function moveRowDown(link) {
	let row = $(link).parent().parent();

	row.fadeOut(fadeDuration, function () {
		row.insertAfter(row.next());
		row.fadeIn(fadeDuration);
	});
}

function fixRowLinks() {
	let countriesTable = $('#countriesTable');
	countriesTable.find('a').show();

	let tableRows = countriesTable.find('tr');

	$(tableRows[1]).find('a:contains("Up")').hide();
	$(tableRows[tableRows.length - 1]).find('a:contains("Down")').hide();
}

$('#addCountryButton').click(function () {
	let countryTextbox = $('#countryTextbox');
	let capitalTextbox = $('#capitalTextbox');

	let country = countryTextbox.val();
	let capital = capitalTextbox.val();

	addCountryToTable(country, capital);

	countryTextbox.val('');
	capitalTextbox.val('');
});

$('#countriesTable').bind('DOMNodeInserted DOMNodeRemoved', function () {
	fixRowLinks();
});

$(function () {
	addCountryToTable('Bulgaria', 'Sofia');
	addCountryToTable('England', 'London');
	addCountryToTable('Germany', 'Berlin');
	addCountryToTable('Poland', 'Warsaw');
	addCountryToTable('Sweden', 'Stockholm');
});
		