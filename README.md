📚 <h1>CRIANDO API COM ANGULAR</h1> 📚
 

🌟 Todos os direitos reservados a Capgemini, empresa pela qual me oportunizou esse treinamento e estou compartilhando os projetos.

🖥️ Todos os projetos foram usados a IDE Visual Studio Code 1.65.1 🖥️

🔖 Me segue no Github: https://github.com/charlesantunes 👨🏻‍💻

🔖 Conecta lá no meu Linkedin: https://www.linkedin.com/in/charles-antunes-49b00057/ 💻

Nesse curso, tive uma experiência com a criação de api usando o Framework Angular, usei o Git Bash pelo VScode para versionamento. vou deixa as pastas que usei no curso para clonar. alguma dúvida, só informar que ajudarei.

🌟 Precisa estar instalado o NodeJs

<h3>Criação do Banco de dados para manipular no projeto em 3 etapas</h3>.

Usei para o Banco de dados o XAMPP e administrador a linguagem MySQL.
1. Abrir o MySQL admin e criar o banco de dados com o nome api.

2.	Depois criei a tabela: 
CREATE TABLE cursos(
idCursos INT AUTO_INCREMENT PRIMARY KEY,
nomeCursos VARCHAR(30),
valorCurso DECIMAL(10,2)
)

3.	Adicionei os dados na tabela:
INSERT INTO cursos VALUES (null, “Angular”, 850)

<h3>Comandos Básicos de criação de projetos e componentes do Angular.</h3>

<table>
 <tr> 
   <td>📚Código completo📚</td>
   <td>📚Código abreviada📚</td>
   <td>📚Descrições📚</td>
 </tr> 
 <tr>
   <td>ng new nomeDoProjeto</td>
   <td>ng n nomeDoProjeto</td>
   <td>Cria um novo Projeto</td>
 </tr>
 <tr>
   <td>ng serve --open</td>
   <td>ng s --o</td>     
   <td>Executa o projeto na página web</td>
 </tr>
 <tr>
   <td>ng generate service cursos/cursos</td>
   <td>ng g s cursos/cursos</td>     
   <td>Dentro da pasta app cria uma pasta cursos
    <br \>que dentro cria outra pasta cursos com<br \>serviços
    do curso dentro </td>
 </tr>
 <tr>
   <td>ng generate component cursos</td>
   <td>ng g c cursos</td>     
   <td>Dentro da pasta app cria uma pasta cursos
    <br \>com componentes dentro</td>
 </tr> 
</table>
