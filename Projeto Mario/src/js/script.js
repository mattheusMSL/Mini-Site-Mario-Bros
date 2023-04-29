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
 

 const target = document.querySelector(".img-mario");
 const animationClass = '.animated-mario';

 function animeScroll(){
	 const windowTop = window.innerHeight * 0.75;
	 target.forEach(element => {
		if((windowTop) > element.offsetTop){
			element.classList.add(animationClass);
		}else{
			element.classList.remove(animationClass);
		}
	 });
 }

 animeScroll();

 if(target.length){
	window.addEventListener('scroll',() =>{
		animeScroll();
	} )
 }

// const observer = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		if(entry.isIntersecting){
// 			document.querySelector(".animated-mario")[0].classList.add("")
// 		}
// 	})

// })


// observer.observe(document.querySelector(".container"))