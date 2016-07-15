<?php $this->title = 'Create new post'; ?>

<h1><?= htmlspecialchars($this->title) ?></h1>

<form method="post">
	<div><label for="title">Title:</label></div>
	<input type="text" id="title" name="title">

	<div><label for="content">Content: </label></div>
	<textarea rows="10" name="content"></textarea>

	<div><input type="submit" value="Create"></div>
	<a href="<?= APP_ROOT ?>/posts">[Cancel]</a>
</form>
