const liga = ["Brasil", "Alemanha", "Espanha", "França","Inglaterra","Itália"]
const posicao = ["GOL", "ZAG", "LD", "LE", "VOL", "MC", "MD", "ME", "MEI", "PE", "PD", "SA", "ATA"]
const timesBrasil = ["América-MG","Athletico","Atlético-GO","Atlético-MG","Avaí","Botafogo","Bragantino","Ceará","Corinthians","Coritiba","Cuiabá","Flamengo","Fluminense","Fortaleza","Goiás","Juventude","Internacional","Palmeiras","Santos","São Paulo"]
const timesAlemanha = ["Bayern de Munique", "Borussia Dortmund"]
const timesEspanha = ["Real Madrid", "Barcelona", "Valencia"]
const timesFranca = ["PSG","Olympique de Marselle", "Montpellier"]
const timesInglaterra = ["Manchester United","Manchester City","Liverpool","Chelsea"]
const timesItalia = ["Milan","Inter de Milão"]

sorteioLiga = Math.floor(Math.random() * 6);
sorteioTime = Math.floor(Math.random() * 20);

function timeEscolhido(sorteioTime){
   
}

console.log(sorteioLiga);

function ligaEscolhida(sorteioLiga){
   if (sorteioLiga == 0) {
     console.log('Jogue o campeonato do ' + liga[sorteioLiga] + ' com o time ' + timesBrasil[sorteioTime]);
   } else if(sorteioLiga == 1) {
      console.log('Jogue o campeonato do ' + liga[sorteioLiga] + ' com o time ' + timesAlemanha[sorteioTime]);
   } else if(sorteioLiga == 1) {
      console.log('Jogue o campeonato do ' + liga[sorteioLiga] + ' com o time ' + times[sorteioTime]);
   }else if(sorteioLiga == 1) {
      console.log('Jogue o campeonato do ' + liga[sorteioLiga] + ' com o time ' + timesAlemanha[sorteioTime]);
   }else if(sorteioLiga == 1) {
      console.log('Jogue o campeonato do ' + liga[sorteioLiga] + ' com o time ' + timesAlemanha[sorteioTime]);
   }
   else {
      console.log('campeonato nao registrado');
   }
 }

 ligaEscolhida(sorteioLiga);



