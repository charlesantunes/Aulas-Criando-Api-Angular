<?php
//Para excluir faremos 2 mudanças nos códigos do alterar e exluir a manipulação do json, número da alteração: 23 e 24.

//12-incluir conexao
include("conexao.php");

//13-Obter dados
$obterDados = file_get_contents("php://input");  //file_get_contents() é como vai pegar os dados ou manipular

//14-Extrair os dados do JSON (dencode é abrir o json que foi armazenado)
$extrair = json_decode($obterDados);    //vai abrir os dados do json encode('cursos') e armazenar no $obterDados

//15-separar os dados do JSON
$idCurso = $extrair->cursos->idCurso;   //23-para excluir só precisa do idCurso para excluir


//18-SQL - comando do sql para inserir dados no BD
$sql = "DELETE FROM cursos WHERE idCurso=$idCurso" ; //24- usar o DELETE no idCursos
mysqli_query($conexao, $sql);   //19-comando de conexão

?>