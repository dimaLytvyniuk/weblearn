<?php
    $username = htmlspecialchars($_POST["username"]);
    $usermail = htmlspecialchars($_POST["usermail"]);
    $password = htmlspecialchars($_POST["password"]);

    if (check_names($username,$usermail,$password) === FALSE)
         echo 'Дані не коректні';
    else
    {
        echo 'Дані коректні';
    }

    function check_names($str1, $str2, $str3)
    {
        if (strcmp(substr($str1,0),strtoupper(substr($str1,0))) !== 0)
            return FALSE;
        if (strlen($str1) <= 5)
            return FALSE;
        if (strlen($str2) <= 5)
            return FALSE;
        if (strlen($str3) <= 5)
            return FALSE;

        return TRUE;
    }
?>