<?php 
// geral settings
$hostname = "localhost";
$username = "root";
$password = "usbw";
$db_name = "miaujuda";

// Database connection
$connect = mysqli_connect($hostname, $username, $password, $db_name);

// Db connection ERROR
if (mysqli_connect_error()) {
    echo "Falha na conexão: ".mysqli_connect_error();
    exit;
}
// Db charset UTF-8 (especial char)
mysqli_set_charset($connect, "utf8");

// Query
$query = "SELECT nome, raca, descricao, categoria 
          FROM ANIMAL ANIM 
          JOIN ANIMAL_ADOCAO ADOC 
          ON (ANIM.id = ADOC.FK_ANIMAL_id)
          join TIPO ON (TIPO.id = ANIM.FK_TIPO_id)
          ";
// fetch query
$data = mysqli_query($connect, $query);

// If query exist
if ($data) {
    $result = [];
    while ($row = mysqli_fetch_assoc($data)) {
        $result[] = $row;
    }
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
    // clear cache of fetch
    mysqli_free_result($data);
}else {
    // query error
    echo "Erro na consulta: " . mysqli_error($connect);
}

// Close DB connection
mysqli_close($connect);
?>
