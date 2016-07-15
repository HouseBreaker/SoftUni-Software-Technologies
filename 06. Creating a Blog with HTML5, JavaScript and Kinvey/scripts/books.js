const kinveyAppId = 'kid_r1a7y-ZU';
const kinveyAppSecret = '9000894877644e9ab65e3b7049510b7a';
const kinveyServiceBaseUrl = 'https://baas.kinvey.com/';
const authBase64 = btoa(kinveyAppId + ':' + kinveyAppSecret);

function userIsLoggedIn() {
	return sessionStorage.authToken != null;
}

function showHideNavigationLinks() {
	if (userIsLoggedIn()) {
		$('#linkLogin').hide();
		$('#linkRegister').hide();
		$('#linkListBooks').show();
		$('#linkCreateBook').show();
		$('#linkLogout').show();
	} else {
		$('#linkLogin').show();
		$('#linkRegister').show();
		$('#linkListBooks').hide();
		$('#linkCreateBook').hide();
		$('#linkLogout').hide();
	}

	$('#errorBox').fadeOut(500);
}

function showView(viewId) {
	$('main > section').hide();
	$('#' + viewId).fadeIn(250);

	showHideNavigationLinks();
}

function showHomeView() {
	showView('viewHome');
}

function showLoginView() {
	$('#loginUsername').val('');
	$('#loginPassword').val('');

	showView('viewLogin');
}

function showRegisterView() {
	$('#registerUsername').val('');
	$('#registerPassword').val('');

	showView('viewRegister');
}

function showListBooksView() {
	showView('viewListBooks');

	loadBooks();
}

function showCreateBookView() {
	showView('viewCreateBook');
}

function login() {
	let username = $('#loginUsername').val();
	let password = $('#loginPassword').val();

	let loginUrl = `${kinveyServiceBaseUrl}user/${kinveyAppId}/login`;
	let loginData = {
		username: username,
		password: password
	};

	$.ajax({
		method: 'POST',
		url: loginUrl,
		headers: {'Authorization': 'Basic ' + authBase64},
		data: loginData,
		success: loggedIn,
		error: showAjaxError
	});
}

function loggedIn(data) {
	sessionStorage.authToken = data._kmd.authtoken;
	showListBooksView();

	showInfo('Login successful!');
}

function register() {
	let username = $('#registerUsername').val();
	let password = $('#registerPassword').val();

	let registerUrl = `${kinveyServiceBaseUrl}user/${kinveyAppId}/`;
	let loginData = {
		username: username,
		password: password
	};

	$.ajax({
		method: 'POST',
		url: registerUrl,
		headers: {'Authorization': 'Basic ' + authBase64},
		data: loginData,
		success: registered,
		error: showAjaxError
	});
}

function registered(data) {
	sessionStorage.authToken = data._kmd.authtoken;
	showListBooksView();

	showInfo('Registration successful!');
}

function loadBooks() {
	let booksUrl = `${kinveyServiceBaseUrl}appdata/${kinveyAppId}/books`;
	$.ajax({
		method: 'GET',
		url: booksUrl,
		headers: {'Authorization': 'Kinvey ' + sessionStorage.authToken},
		success: booksLoaded,
		error: showAjaxError
	});
}

function postComment() {
	let bookId = $(this).closest($('tr')).prev().attr('data-bookId');

	$(this).fadeOut(100);
	$(this).parent()
		.append($('<form class="postCommentForm" style="display: none">')
			.append($('<label for="commentAuthor">Your name: </label><input type="text" id="commentAuthor" required>'))
			.append($('<label for="commentContent">Text: </label><input type="text" id="commentContent" required>'))
			.append($('<input type="submit" id="commentSubmitButton" value="Post">'))
		);

	$(this).parent().find('form').fadeIn(200);

	$(this).parent().find('form').submit(function (e) {
		e.preventDefault();

		let author = e.currentTarget[0].value;
		let content = e.currentTarget[1].value;

		let currentBook = {};

		let currentBookUrl = `${kinveyServiceBaseUrl}appdata/${kinveyAppId}/books/${bookId}`;

		// get book
		$.ajax({
			method: 'GET',
			async: false,
			url: currentBookUrl,
			headers: {'Authorization': 'Kinvey ' + sessionStorage.authToken},
			success: function (data) {
				currentBook = data;
			},
			error: function (data) {
				showAjaxError(data);
			}
		});

		if(!currentBook.comments) {
			currentBook.comments = [];
		}

		currentBook.comments.push({author: author, content: content});

		// post book with updated comments
		$.ajax({
			method: 'PUT',
			url: currentBookUrl,
			headers: {
				'Authorization': 'Kinvey ' + sessionStorage.authToken,
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(currentBook),
			success: function () {
				loadBooks();
				showInfo('Comment posted!');
			},
			error: function (data) {
				showAjaxError(data);
			}
		});
	});
}

function booksLoaded(books) {
	showInfo('Books loaded successfully!');

	let booksTable = $('<table>')
		.append($('<tr>')
			.append($('<th>Title</th>'))
			.append($('<th>Author</th>'))
			.append($('<th>Description</th>'))
		);

	for (let book of books) {
		booksTable.append(
			$('<tr>')
				.attr('data-bookId', book._id)
				.append($('<td>').text(book.title))
				.append($('<td>').text(book.author))
				.append($('<td>').text(book.description))
		);


		let comments = book.comments;
		// if (comments.length > 0) {

		let commentsBlock = $('<tr class="bookComments">');

		if (comments) {
			for (let comment of comments) {
				commentsBlock.append($('<div class="comment">')
					.append($('<span class="commentContent">').text(comment.content))
					.append($('<span class="commentAuthor">').text(comment.author))
				);
			}
		}

		commentsBlock.append('<a href="#" class="addCommentButton">Add comment</a>');

		commentsBlock.wrapInner('<td colspan="3">');

		$(booksTable).append(commentsBlock);
		// }

	}

	$('#books').empty().append(booksTable);

	$('.addCommentButton').click(function () {
		postComment.call(this);
	});
}

function createBook() {
	let booksUrl = `${kinveyServiceBaseUrl}appdata/${kinveyAppId}/books`;
	let bookData = {
		title: $('#bookTitle').val(),
		author: $('#bookAuthor').val(),
		description: $('#bookDescription').val(),
		comments: []
	};

	$.ajax({
		method: 'POST',
		url: booksUrl,
		headers: {
			'Authorization': 'Kinvey ' + sessionStorage.authToken,
			'Content-Type': 'application/json'
		},
		data: JSON.stringify(bookData),
		success: bookCreated,
		error: showAjaxError
	});
}

function bookCreated(data) {
	showListBooksView();

	showInfo('Book created!');
}

function logout() {
	sessionStorage.clear();

	showHomeView();

	showInfo('Logged out successfully.');
}

function showInfo(messageText) {
	$('#infoBox').text(messageText).show().delay(2000).fadeOut();
}

function showAjaxError(data, status) {
	let errorMessage = '';

	if (data.readyState == 0) {
		errorMessage = 'Network error. Please try again.';
	} else if (data.status && data.status == 401) {
		errorMessage = 'Incorrect username or password. Please try again.';
	} else {
		errorMessage = 'Error: ' + data.description;
	}

	$('#errorBox').text(errorMessage).show();
}

$(function () {
	$('#linkHome').click(showHomeView);
	$('#linkLogin').click(showLoginView);
	$('#linkRegister').click(showRegisterView);
	$('#linkListBooks').click(showListBooksView);
	$('#linkCreateBook').click(showCreateBookView);
	$('#linkLogout').click(logout);

	$('form').submit(function (e) {
		e.preventDefault();
	});

	$('#formLogin').submit(login);
	$('#formRegister').submit(register);
	$('#formCreateBook').submit(createBook);

	showHomeView();

	$(document)
		.ajaxStart(function () {
			$('#loadingBox').fadeIn(100);
		})
		.ajaxStop(function () {
			$('#loadingBox').hide();
		})
});