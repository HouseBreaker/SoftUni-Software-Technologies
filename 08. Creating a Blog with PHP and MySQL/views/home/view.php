<h1><?= htmlspecialchars($this->post['title']) ?></h1>

<main id="posts">
	<article>
		<div class="date"><i>Posted on</i></div> <?= (new DateTime($this->post['date']))->format("d-M-Y") ?>
		<i>by</i> <?= htmlentities($this->post['full_name']); ?>
		<p class="content"><?= $this->post['content'] ?></p>
	</article>
</main>