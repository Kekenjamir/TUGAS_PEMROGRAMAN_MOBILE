<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Credentials:true");
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE,OPTIONS");
header("Access-Control-Max-Age:604800");
header("Access-Control-Request-Headers: x-requested-with");
header("Access-Control-Allow-Headers: x-requested-with, x-requested-by");
include("koneksi.php");
$data = array();
$cari = mysqli_query($koneksi, "select * FROM tbl_mapel");
while ($row = mysqli_fetch_object($cari)) {
    $data[] = $row;
}
echo json_encode($data);