<?php
    $username = htmlspecialchars($_POST["username"]);
    $usermail = htmlspecialchars($_POST["usermail"]);
    $password = htmlspecialchars($_POST["password"]);

    if (check_names($username,$usermail,$password) === TRUE)
         echo '$var1 не равно $var2 при регистрозависимом сравнении';
?>
<?php
    fuction check_names($str1, $str2, $str3)
    {
        if (strcmp(substr($username,0),strtoupper(substr($username,0))) !== 0)
            return FALSE;
        if (strlen($username) <= 5)
            return FALSE;
        if (strlen($usermail) <= 5)
            return FALSE;
        if (strlen($password) <= 5)
            return FALSE;

        return TRUE;
    }
?>