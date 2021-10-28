<?php


if(isset($_POST['submit'])){
    $name= $_POST['name'];
    $mailfrom= $_POST['email'];
    $phone= $_POST['phone'];
    $message= $_POST['message'];

    $mailto = "shubham.singh@velocitai.com";
    $headers = "From: ".$mailfrom;
    $txt ="From:".$name.".\n\n".$message.".\n\n".$phone ;


    mail($mailto,$mailfrom, $txt, $headers);
    header("location: thank.html?mailsend");

}
else{   
    echo" fail ";
}




    // if(isset($_POST['submit']))
    // {
    //     $name = $_POST['name'];
    //     $mailfrom = $_POST['email'];
    //     $phone  = $_POST['phone'];
    //     $message = $_POST['message'];

    //    if(empty($name) || empty($email) || empty($phone) || empty($message))
    //    {
    //     //    header('location:index.html?error');
    //    }
    //    else
    //    {
    //        $to = "admin@onlineittuts.com";

    //        if(mail($to, $Email,$phone,$Msg))
    //        {
    //            header("location:thank.html?mailsend");
    //        }
    //    }
    // }
    // else
    // {
    //     header("location:index.html");
    // }


?>