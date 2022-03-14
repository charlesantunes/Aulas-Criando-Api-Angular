<?php

//03-Incluir conexao
include("conexao.php"); // chama ou importa o arquivo conexao.php como herança

//04-Sql
$sql = "SELECT * FROM cursos"; //selecionando dentro do banco de dados a tabela cursos.

//05-Executar
$executar = mysqli_query($conexao, $sql);  //executa a conexao do arquivo conexao e faz a chamada select

//06- Criando um laço de repetição para adicionar os dados em um json, precisa criar um vetor e índice
//07-vetor
$cursos = [];

//08-Índice
$indice = 0;

//09-Laço de repetição
while ($linha = mysqli_fetch_assoc($executar)) {   //função percorre no bd linha por linha da tabela e armazena na $linha.
    $cursos[$indice]['idCursos'] = $linha['idCurso'];   //o array cursos vai receber no indice que inicia de zero, o primeiro idCursos do BD.
    $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];           // 
    $cursos[$indice]['valorCurso'] = $linha['valorCurso'];         //
    $indice++;      //no final de armazenar na primeira linha os dados do BD, soma + 1 no indice e repete o laço.
}

//09-JSON (encode é armazenar)- Encapsulando os dados no json para segurança.
json_encode(['cursos'=>$cursos]);  //'cursos' essa variável/objeto pode ser qualquer nome, é p/ armazenar os dados do vetor $cursos e transformar em json, ou seja, encapsular no 'cursos'

//10-Função para testar conexão
//var_dump($cursos);      // essa funação é só para testar se a comunicação deu certo e exibiu os dados do BD, depois tem de apagar
                        //11-Digitar no navegador http://localhost/api/
?>