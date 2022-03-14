<?php
//01-Variáveis
$url = "localhost";
$usuario = "root";
$senha = "";
$base = "api";

//02-Conexção
$conexao = mysqli_connect($url,$usuario,$senha,$base)

//25-Corrigindo erros de caracteres especiais no Banco de dados
mysqli_set_charset($conexao, "utf8");

?>