# instagram-likes
Curtidas automatizadas no Instagram

--

### Descrição do Código

Este código JavaScript foi projetado para automatizar o processo de troca de fotos de perfil em um determinado site. Aqui está uma explicação simples do que ele faz:

1. **nextphoto()**: Esta função é responsável por clicar na próxima foto de perfil disponível na página.

2. **document.getElementsByClassName("_abl-")[0].click()**: Esta linha de código localiza o elemento HTML com a classe "_abl-" (que provavelmente representa a foto do perfil) e em seguida simula um clique sobre ele, avançando para a próxima foto.

3. **setTimeout(nextphoto, 5000)**: Após clicar na foto atual, este código define um temporizador para chamar a função nextphoto() novamente após 5000 milissegundos (ou 5 segundos). Isso cria um ciclo que automaticamente avança para a próxima foto a cada 5 segundos.

4. **nextphoto()**: Finalmente, a função nextphoto() é chamada imediatamente para iniciar o processo de troca de fotos de perfil.

Basicamente, esse código automatiza o processo de visualização de fotos de perfil, avançando para a próxima foto a cada 5 segundos.
