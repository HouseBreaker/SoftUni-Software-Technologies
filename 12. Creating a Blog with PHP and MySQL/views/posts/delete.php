<?php $this->title = "Delete post"; ?>

<h1><?= htmlspecialchars($this->title) ?></h1>

<h1>Are you sure you want to delete this post?</h1>

<form method="post">
	<div>
		<label for="title">Title</label></div>
	<input type="text" name="title" id="title" value="<?= htmlspecialchars($this->post['title']) ?>" disabled>


	<div><label for="content">Content</label></div>
		<textarea rows="10" name="content" id="content"
		          disabled><?= htmlspecialchars($this->post['content']) ?></textarea>

	<div><label for="date">Date</label></div>
	<input type="text" name="date" id="date" value="<?= htmlspecialchars($this->post['date']) ?>" disabled>


	<div><label for="user_id">Author ID</label></div>
	<input type="text" name="user_id" id="user_id" value="<?= htmlspecialchars($this->post['user_id']) ?>" disabled>


	<div><input type="submit" value="Delete"></div>
	<a href="<?= APP_ROOT ?>/posts">[Cancel]</a>
</form>
