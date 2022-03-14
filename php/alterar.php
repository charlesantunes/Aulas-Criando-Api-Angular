<?php
//Para alterar faremos 3 mudanças nos códigos do cadastrar, nos números 20, 21 e 22.

//12-incluir conexao
include("conexao.php");

//13-Obter dados
$obterDados = file_get_contents("php://input");  //file_get_contents() é como vai pegar os dados ou manipular

//14-Extrair os dados do JSON (dencode é abrir o json que foi armazenado)
$extrair = json_decode($obterDados);    //vai abrir os dados do json encode('cursos') e armazenar no $obterDados

//15-separar os dados do JSON
$idCurso = $extrair->cursos->idCurso;   //20-primeira mudança do alterar, pq precisa do id na consulta sql
$nomeCurso = $extrair->cursos->nomeCurso;   //$extrair tem acesso ao json aberto, cursos é o json encode, nomeCurso é o dados que tiramos do cursos.
$valorCurso = $extrair->cursos->valorCurso;

//18-SQL - comando do sql para inserir dados no BD
$sql = "UPDATE cursos SET nomeCurso='$nomeCurso', valorCurso=$valorCurso WHERE idCurso=$idCurso" ; //21-segunda mundança do alterar
mysqli_query($conexao, $sql);   //19-comando de conexão

//16-Exportar os dados cadastrado em um novo json
$curso = [
    'idCurso' = $idCurso,       //22-terceira mudança e última para alterar.
    'nomeCurso' = $nomeCurso,
    'valorCurso' = $valorCurso
];

json_encode(['curso']=>$curso); //17-'curso' pode ser qualquer nome, usei um parecido, vai armazenar o json antigo e o novo cadastrado.

?>