const imgMario = document.querySelectorAll('.img-mario');
window.addEventListener('scroll', animaScrollMario);
function animaScrollMario(){
 const trigger = window.innerHeight / 5 * 5;
 imgMario.forEach(element => {
 const imgMarioScroll = element.getBoundingClientRect();
  if (imgMarioScroll.top < trigger){
    element.classList.add('animated-mario')
  } else {
    element.classList.remove('animated-mario')
  }
});
}

/*  ------------ Mario's Image ------------  */ 

const descMario = document.querySelectorAll('.animated-mario-desc');

window.addEventListener('scroll', animaScrollDescMario);

function animaScrollDescMario(){
  const trigger = window.innerHeight / 5 * 5;
  descMario.forEach((element) =>{
    const descMarioScroll = element.getBoundingClientRect();
    if (descMarioScroll.top < trigger){
      element.classList.add('animated-mario-desc')
    } else {
      element.classList.remove('animated-mario-desc')
    }
  });
}

/*  ------------  Mario's Description ------------  */ 

const imgLuigi = document.querySelectorAll('.img-luigi');

window.addEventListener('scroll', animeLuigiScroll);

function animeLuigiScroll(){
    const trigger = window.innerHeight / 5 * 3.8;
    imgLuigi.forEach((element) => {
        const imgLuigiScroll = element.getBoundingClientRect();
        if (imgLuigiScroll.top < trigger){
          element.classList.add('animated-luigi');
        }else{
          element.classList.remove('animated-luigi');
        }
    });
}


/*  ------------ Luigi's Image------------  */


/*const descLuigi = document.querySelector('.desc-luigi');
const descAnimation = 'animated-luigi-desc';

function animaDescLuigi(){
  const windowTop = window.pageYOffset + window.innerHeight;

  descLuigi.forEach(element => {
    if (windowTop > element.offsetTop + element.offsetHeight / 10){
      element.classList.add(descAnimation);
    } else {
      element.classList.remove(descAnimation);
    }
  });
}

animaDescLuigi();

if(descLuigi.length){
  window.addEventListener('scroll', animaDescLuigi);
}

it's working but not what a wanted at the moment */

const descLuigi = document.querySelectorAll(".desc-luigi");
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight / 5 * 5;
  descLuigi.forEach((element) => {
    const descluigiScroll = element.getBoundingClientRect().top; 
    if(descluigiScroll < trigger){
      element.classList.add('animated-luigi-desc');
    }else{
      element.classList.remove('animated-luigi-desc');
    }
  });
});


/*  ------------ Luigi's Description  ------------  */


const imgPeach = document.querySelectorAll(".img-peach");
window.addEventListener('scroll', () =>{
  const trigger = window.innerHeight / 5 * 4;
  imgPeach.forEach((element) => {
    const imgPeachScroll = element.getBoundingClientRect().top;
    if(imgPeachScroll < trigger){
      element.classList.add("animated-peach");
    }else{
      element.classList.remove("animated-peach");
    }
  });
});

/*  ------------ Princess Peach's Image   ------------  */

const descPeach = document.querySelectorAll(".desc-peach");
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight / 5 * 5;
  descPeach.forEach((element) => {
    const descPeachScroll = element.getBoundingClientRect().top;
    if(descPeachScroll < trigger){
      element.classList.add('animated-desc-peach');
    }else{
      element.classList.remove('animated-desc-peach');
    }
  });
});

/*  ------------ Princess Peach's Description ------------  */

const imgToad = document.querySelectorAll('.img-toad');
window.addEventListener('scroll', () =>{
  const trigger = window.innerHeight / 5 * 5;
  imgToad.forEach((element) => {
    const imgToadScroll = element.getBoundingClientRect().top;
    if(imgToadScroll < trigger){
      element.classList.add('animated-toad');
    }else{
      element.classList.remove('animated-toad');
    }
  });
});

/*  ------------ Toad's image ------------  */


const descToad = document.querySelectorAll('.desc-toad');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight / 5 * 6;
  descToad.forEach((element) => {
    const descToadScroll = element.getBoundingClientRect().top;
    if(descToadScroll < trigger){
      element.classList.add('animated-desc-toad');
    }else{
      element.classList.remove('animated-desc-toad');
    }
  });
});

/*  ------------ Toad's description ------------  */


const imgMarioFooter = document.querySelectorAll(".img-mario-footer");
window.addEventListener("scroll", () =>{
  const trigger = window.innerHeight / 5 * 4;
  imgMarioFooter.forEach((element) =>{
  const imgMarioFooterScroll = element.getBoundingClientRect().top;
  if(imgMarioFooterScroll < trigger){
    element.classList.add('animated-mario-footer');
  }else{
    element.classList.remove('animated-mario-footer');
  }
  });
});

/*  ------------ Mario's image footer ------------  */

const trailerButton = document.querySelectorAll('.botao-trailer');
window.addEventListener('scroll', () =>{
  const trigger = window.innerHeight / 5 * 5;
  trailerButton.forEach((element) => {
    const trailerButtonScroll = element.getBoundingClientRect().top;
    if(trailerButtonScroll < trigger){
      element.classList.add('animated-button');
    }else{
      element.classList.remove('animated-button');
    }
  });
});


const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
	modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
	// console.log("clicou no botão trailer");
	alternarModal();
	video.setAttribute("src", linkDoVideo);
	// modal.classList.add("aberto");
});

 botaoFecharModal.addEventListener("click", () => {
    // modal.classList.remove("aberto");
 	alternarModal();
 	video.setAttribute("src", "");
 });

