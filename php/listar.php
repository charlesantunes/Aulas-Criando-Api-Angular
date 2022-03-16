<?php

//03-Incluir conexao
include("conexao.php");

$sql = "SELECT * FROM cursos"; 

$executar = mysqli_query($conexao, $sql); 

$cursos = [];

$indice = 0;

while ($linha = mysqli_fetch_assoc($executar)) {   
    $cursos[$indice]['idCursos'] = $linha['idCurso'];   
    $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];           
    $cursos[$indice]['valorCurso'] = $linha['valorCurso'];         
    $indice++;      
}

//09-JSON
json_encode(['cursos'=>$cursos]); 
?>