<?php

class UsersController extends BaseController
{
	public function index()
    {
        $this->authorize();
        $this->users = $this->model->getAll();
    }
	
	public function register()
	{
		if ($this->isPost) {
			$username = $_POST['username'];

			$min_username_length = 2;
			$max_username_length = 50;
			if (strlen($username) < $min_username_length || strlen($username) > $max_username_length) {
				$this->setValidationError("username", "Username must be between $min_username_length and $max_username_length characters long.");
			}

			$password = $_POST['password'];

			$min_password_length = 2;
			$max_password_length = 50;
			if (strlen($password) < $min_password_length || strlen($password) > $max_password_length) {
				$this->setValidationError("password", "Password must be between $min_password_length and $max_password_length");
			}

			$password_confirm = $_POST['password_confirm'];
			if ($password != $password_confirm) {
				$this->setValidationError("password", "Passwords must match.");
			}

			$full_name = $_POST['full_name'];

			$max_full_name_length = 50;
			if (strlen($full_name) > $max_full_name_length) {
				$this->setValidationError("full_name", "Full name must not be longer than $max_full_name_length characters");
			}

			if ($this->formValid()) {
				$user_id = $this->model->register($username, $password, $full_name);
				if ($user_id) {
					$_SESSION['username'] = $username;
					$_SESSION['user_id'] = $user_id;

					$this->addInfoMessage("Registration successful");
					$this->redirect("posts");
				} else {
					$this->addErrorMessage("Registration failed.");
				}
			}
		}
	}

	public function login()
	{
		if ($this->isPost) {
			$username = $_POST['username'];
			$password = $_POST['password'];

			$loggedUserId = $this->model->login($username, $password);

			if ($loggedUserId) {
				$_SESSION['username'] = $username;
				$_SESSION['user_id'] = $loggedUserId;
				$this->addInfoMessage("Successfully logged in. Redirecting...");
				$this->redirect("posts");
			} else {
				$this->addErrorMessage("Incorrect username or password. Please try again.");
			}
		}
	}

	public function logout()
	{
		session_destroy();
		$this->addInfoMessage("Logged out.");
		$this->redirect("");
	}
}
