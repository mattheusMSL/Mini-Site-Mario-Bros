
const target = document.querySelectorAll('.img-mario');
 
window.addEventListener('scroll', animaScroll);

function animaScroll(){
 const trigger = window.innerHeight / 5 * 5;

target.forEach(element => {
  const targetScroll = element.getBoundingClientRect();
  
  if (targetScroll.top < trigger){
    element.classList.add('animated-mario')
  } else {
    element.classList.remove('animated-mario')
  }

});

}



//  const target = document.querySelector(".img-mario");
//  const animationClass = '.animated-mario';

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