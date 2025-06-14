function direcWhatsapp() {
  if($('#stUnidade').val()=='Pirituba'){
    window.location.href = "https://api.whatsapp.com/send?phone=5511975112048&text=Olá, gostaria de saber mais referente a mutvet!";
  }else{
    window.location.href = "https://api.whatsapp.com/send?phone=5511987869253&text=Olá, gostaria de saber mais referente a mutvet!";
  }
}