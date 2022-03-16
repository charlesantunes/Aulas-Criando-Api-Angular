<?php

include("conexao.php");

$obterDados = file_get_contents("php://input");

$extrair = json_decode($obterDados);

//separar os dados do JSON
$nomeCurso = $extrair->cursos->nomeCurso;   
$valorCurso = $extrair->cursos->valorCurso;

$sql = "INSERT INTO cursos (nomeCurso, valorCurso) VALUE ('$nomeCurso', $valorCurso)";
mysqli_query($conexao, $sql);

//Exportar os dados cadastrado em um novo json
$curso = [
    'nomeCurso' = $nomeCurso,
    'valorCurso' = $valorCurso
]

json_encode(['curso']=>$curso);
?>