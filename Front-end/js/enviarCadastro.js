async function enviarCadastro(){
  const mensagem = document.getElementById('text');
  const popap = document.querySelector('.enviado');
  const email = document.getElementById('email').value;

  if( email==null || email=="" && email.indexOf('@')==-1 && email.indexOf('.')==-1 ){
    
  }else{
    popap.style.position = "absolute";
    mensagem.style.animation = "enviarComeco 4s";
    try {
      const resposta = await fetch("http://165.227.48.126:3333/enviarCadastro",{
        method:'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          email
        })
      });
      const retorno = await resposta.json();
      mensagem.innerHTML = retorno.envio + "<hr><hr class='preto'></hr>";
      console.log(mensagem.innerText)
    }catch (error) {
      mensagem.innerHTML = "Algo deu errado, por favor tente novamente ! <hr><hr class='preto'></hr>";
    }
    mensagem.style.animation = "enviarFinal 4s";
    setTimeout(()=>{
      popap.style.position = "static";
      mensagem.innerHTML= "<img src='../img/load.gif' width='5%'>";
    },4000);
    
  }
  
}