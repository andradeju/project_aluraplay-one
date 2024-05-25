async function listaVideos() {
  const conexao = await fetch('http://localhost:3000/videos');
  const conexaoConvert = await conexao.json();

  return conexaoConvert;
}

async function criaVideo(titulo, descricao, url, imagem){
  const conexao = await fetch('http://localhost:3000/videos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem
    })
  });
  if(!conexao.ok) {
    throw new Error("Não foi possível enviar o vídeo")
  }

  const conexaoConvert = await conexao.json();
  return conexaoConvert;
}

async function buscaVideo(termoBusca) {
  const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`);
  const conexaoConvert = await conexao.json();

  return conexaoConvert;
}


export const conectaApi = {
  listaVideos,
  criaVideo,
  buscaVideo
}
