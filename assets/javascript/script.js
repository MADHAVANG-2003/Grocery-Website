const menu = document.querySelector('.menu');
const nav =document.querySelector('.navlinks');
const bento = document.querySelector('.bento');
const cross = document.querySelector('.cross');
const form = document.querySelector('.appoinment');


menu.addEventListener('click',()=>{
  nav.classList.toggle('reveal');
})

bento.addEventListener('click',()=>{
  form.classList.add('out');
})
cross.addEventListener('click',()=>{
  form.classList.remove('out')
})