<?php

//12-incluir conexao
include("conexao.php");

//13-Obter dados
$obterDados = file_get_contents("php://input");  //file_get_contents() é como vai pegar os dados ou manipular

//14-Extrair os dados do JSON (dencode é abrir o json que foi armazenado)
$extrair = json_decode($obterDados);    //vai abrir os dados do json encode('cursos') e armazenar no $obterDados

//15-separar os dados do JSON
$nomeCurso = $extrair->cursos->nomeCurso;   //$extrair tem acesso ao json aberto, cursos é o json encode, nomeCurso é o dados que tiramos do cursos.
$valorCurso = $extrair->cursos->valorCurso;

//18-SQL - comando do sql para inserir dados no BD
$sql = "INSERT INTO cursos (nomeCurso, valorCurso) VALUE ('$nomeCurso', $valorCurso)"; //$nomeCurso no BD é VARCHAR
mysqli_query($conexao, $sql);   //19-comando de conexão

//16-Exportar os dados cadastrado em um novo json
$curso = [
    'nomeCurso' = $nomeCurso,
    'valorCurso' = $valorCurso
]

json_encode(['curso']=>$curso); //17-'curso' pode ser qualquer nome, usei um parecido, vai armazenar o json antigo e o novo cadastrado.

?>