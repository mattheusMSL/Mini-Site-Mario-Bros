
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

/*  ------------ imagem do mario ------------  */ 

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

/*  ------------ descrição do mario ------------  */ 

const imgLuigi = document.querySelectorAll('.img-luigi');

window.addEventListener('scroll', animeLuigiScroll);

function animeLuigiScroll(){
    const trigger = window.innerHeight / 5 * 3;
    imgLuigi.forEach((element) => {
        const imgLuigiScroll = element.getBoundingClientRect();
        if (imgLuigiScroll.top < trigger){
          element.classList.add('animated-luigi');
        }else{
          element.classList.remove('animated-luigi');
        }
    });
}


/*  ------------ imagem luigi ------------  */


const descLuigi = document.querySelector('.desc-luigi');
const descAnimation = 'animated-luigi-desc';

function animaDescLuigi(){
  const windowTop = window.pageYOffset + window.innerHeight;

  descLuigi.forEach(element => {
    if (windowTop > element.offsetTop + element.offsetHeight / 2){
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




/*window.addEventListener('scroll', descLuigiScroll);

function descLuigiScroll(){
  const trigger = window.innerHeight / 5 * 3.5;
  descLuigi.forEach((element))
}
*/



//  const target = document.querySelector(".img-mario");
//  const animationClass = 'animated-mario';

//  function animeScroll(){
// 	 const windowTop = window.innerHeight * 0.75;
// 	 target.forEach(element => {
// 		if((windowTop) > element.offsetTop){
// 			element.classList.add(animationClass);
// 		}else{
// 			element.classList.remove(animationClass);
// 		}
// 	 });
//  }

//  animeScroll();

//  if(target.length){
// 	window.addEventListener('scroll',() =>{
// 		animeScroll();
// 	} )
//  }





// const observer = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		if(entry.isIntersecting){
// 			document.querySelector(".animated-mario")[0].classList.add("")
// 		}
// 	})

// })


// observer.observe(document.querySelector(".container"))