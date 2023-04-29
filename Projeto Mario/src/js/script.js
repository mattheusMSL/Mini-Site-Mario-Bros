const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
	modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {

	console.log("clicou no botão trailer");
	alternarModal();
	video.setAttribute("src", linkDoVideo);
	// modal.classList.add("aberto");
});

 botaoFecharModal.addEventListener("click", () => {
    // modal.classList.remove("aberto");
 	alternarModal();
 	video.setAttribute("src", "");
 });




 