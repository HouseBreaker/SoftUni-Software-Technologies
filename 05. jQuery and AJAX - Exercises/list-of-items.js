function addItemFromTextbox() {
	let newItemTextbox = $('#newItemText');
	let text = newItemTextbox.val();
	addItem(text);

	newItemTextbox.val('');
}

function addItem(text) {
	let li = $('<li>')
		.append($('<span>')).text(text)
		.append(' ')
		.append('<a href="#" onclick="deleteItem(this)">[Delete]</a>');

	li.appendTo('#items');

	li.hide();
	li.fadeIn(200);
}

function deleteItem(item) {
	let row = $(item).parent();

	row.fadeOut(200, function () {
		row.remove();
	})
}

function addTestItems() {
	addItem('gosho');
	addItem('pesho');
	addItem('ivan');
	addItem('georgi');
	addItem('bogomil');
}

addTestItems();

$('#newItemText').keypress(function (e) {
	if (e.keyCode == 13) {
		addItemFromTextbox();
	}
});