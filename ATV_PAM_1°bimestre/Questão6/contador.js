
var contador =0;
function contaclick() {
contador++;
var cs = document.querySelector("#contador"); 
			cs.textContent="Você clicou "+contador+" vezes!";
}