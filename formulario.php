<?php
header('Content-Type: text/html; charset=UTF-8');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST["name"];
  $telefone = $_POST["phone"];
  $empresa = $_POST["empresa"];
  $email = $_POST["email"];
  $mensagem = $_POST["message"];

  $destinatario = "wagstalos@hotmail.com";

  $assunto = "Novo Formulário de Contato";

  $corpoEmail = "Nome: $nome\nTelefone: $telefone\nEmpresa: $empresa\nEmail: $email\nMensagem: $mensagem";

  // Use a função mail() para enviar o email
  if (mail($destinatario, $assunto, $corpoEmail)) {
    $resposta = array("status" => "enviado", "mensagem" => "Email enviado com sucesso!");
  } else {
    $resposta = array("status" => "erro", "mensagem" => "Erro ao enviar o email. Por favor, tente novamente.");
  }

  // Retorna a resposta como JSON
  echo json_encode($resposta);
}
?>