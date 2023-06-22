<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Credentials:true");
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE,OPTIONS");
header("Access-Control-Max-Age:604800");
header("Access-Control-Request-Headers: x-requested-with");
header("Access-Control-Allow-Headers: x-requested-with, x-requested-by");
include("koneksi.php");
$a = $_POST["kode"];
$b = $_POST["nama"];
$simpan = mysqli_query($koneksi, "INSERT INTO tbl_mapel (kd_mapel,nama_mapel) VALUES ('$a','$b')") or die(mysqli_error());