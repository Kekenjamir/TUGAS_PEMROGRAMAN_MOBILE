<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Credentials:true");
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE,OPTIONS");
header("Access-Control-Max-Age:604800");
header("Access-Control-Request-Headers: x-requested-with");
header("Access-Control-Allow-Headers: x-requested-with, x-requested-by");
include("koneksi.php");
$a = $_POST["id"];
$b = $_POST["kode"];
$c = $_POST["nama"];
$simpan = mysqli_query($koneksi, "UPDATE tbl_mapel SET kd_mapel='$b', nama_mapel='$c' WHERE id_mapel='$a' ") or die(mysqli_error());