<?php

class HomeModel extends BaseModel
{
	public function getLastPosts(int $max_count = 5) : array
	{
		$statement = self::$db->query("SELECT posts.id, title, content, date, full_name " .
			"FROM posts LEFT JOIN users ON posts.user_id = users.id " .
			"ORDER BY date DESC LIMIT " . $max_count);

		return $statement->fetch_all(MYSQLI_ASSOC);
	}

	public function getPostById(int $id)
	{
		$statement = self::$db->prepare("SELECT posts.id, title, content, date, full_name " .
			"FROM posts LEFT JOIN users ON posts.user_id = users.id " .
			"WHERE posts.id = ?");

		$statement->bind_param("i", $id);
		$statement->execute();

		return $statement->get_result()->fetch_assoc();
	}
}
