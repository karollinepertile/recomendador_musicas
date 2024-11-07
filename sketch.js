let campoIdade;
let campoSertanejo;
let campoPagode;

function setup() {
  createCanvas(850, 400);
  createElement("h2", "Recomendador de musicas");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoSertanejo = createCheckbox("Gosta de Sertanejo?");
  campoPagode = createCheckbox("Gosta de Pagode?");
}

function draw() {
  background("pink");
  let idade = campoIdade.value();
  let gostaDeSertanejo = campoSertanejo.checked();
  let gostaDePagode = campoPagode.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeSertanejo, gostaDePagode);

  fill(color(86, 7, 100));
  textAlign(CENTER, CENTER);
  textSize(45);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeSertanejo, gostaDePagode) {
  if (idade >= 10) {
    if (idade >= 15) {
      return "sem você- Paula fernandes";
    } else {
      if (idade >= 12) {
        if(gostaDeSertanejo || gostaDePagode) {
          return "sol nascer-Ferrugem";          
        } else{
         return "sem sal-Marília Mendonça";
        }
      } else {
        if (gostaDeSertanejo) {
          return "fã clube-Miara e maraisa";
        } else {
          return "O mundo e tão pequeno-Jorge e Mateus";
        }
      }
    }
  } else {
    if (gostaDeSertanejo) {
      return "amo noite e dia- Jorge e Mateus ";
    } else {
      return "Quando a chuva passar-Paula Fernandes";
    }
  }
}
