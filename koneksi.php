<?php
  error_reporting(0);
  header("Access-Control-Allow-Origin: *");
  date_default_timezone_set("Asia/Jakarta");
  $koneksi = mysqli_connect("localhost", "root", "", "crud");
?>