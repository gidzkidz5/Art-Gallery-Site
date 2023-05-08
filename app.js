// overlay hide and show
const slideshowBtn1 = document.getElementById('start-slideshow');
const slideshowBtn2 = document.getElementById('stop-slideshow');
const overlay = document.getElementById('overlay');

slideshowBtn1.addEventListener('click' , () => {
    enableSlideshow();
})

slideshowBtn2.addEventListener('click' , () => {
    overlay.classList.toggle('hide');
    document.body.style.overflow = 'auto';
})

function enableSlideshow() {
    overlay.classList.toggle('hide');
    document.body.style.overflow = 'hidden';
}
// using json to update overlay on button click
const nameArt = document.querySelector('.lightbox-text').querySelector('h1');
const artistName = document.querySelector('.lightbox-text').querySelector('p');
const nameArt2 = document.querySelector('.footer-text').querySelector('h1');
const artistName2 = document.querySelector('.footer-text').querySelector('p');
const year = document.getElementById('year');
const descText = document.getElementById('description-text').querySelector('p');
const source = document.getElementById('source');
const artImg = document.getElementById('art-slideshow');
const artistImg = document.getElementById('artist-slideshow');

// document.querySelectorAll('.image-text')[0].querySelector('h2').text

const bar1 = document.getElementById('progress-bar');
const bar2 = document.getElementById('remainding-bar');

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');



document.onreadystatechange = () => {
if (document.readyState === "complete") {

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    jsonData = data;
    // Call a function to use the jsonData variable
    updateData(jsonData);
  })
  .catch(error => console.error(error));

function updateData(data) {
  // Use the jsonData variable here
  console.log('Function to be executed')
  let dataLoad = data.find(object => object.name === "Starry Night")
  console.log(dataLoad)


let index = 0;

// function for changing data in slideshow
function changeData(data, index) {
    nameArt.innerHTML = data.name;
    artistName.innerHTML = data.artist.name;
    nameArt2.innerHTML = data.name;
    artistName2.innerHTML = data.artist.name;
    year.innerHTML = data.year;
    descText.innerHTML = data.description;
    source.href = data.source;
    artImg.src = data.images.hero.large;
    artistImg.src = data.artist.image;

    let bar = (100/document.querySelector('main').children.length) * (index+1);

    document.documentElement.style.setProperty('--barWidth1', bar + '%');
}

    // add button event listener
nextBtn.addEventListener('click', ()=>{

    index++;
    if (index >= document.querySelector('main').children.length){
        index = 0;
    }

    dataLoad = data.find(object => object.number === index+1);

    changeData(dataLoad, index)

})

prevBtn.addEventListener('click', ()=>{

    index--;
    if (index < 0){
        index = document.querySelector('main').children.length - 1;
    };

    dataLoad = data.find(object => object.number === index+1)
    
    changeData(dataLoad, index);

    
})

// main gallery image click to enable slideshow
const imgCont = document.querySelectorAll('.image-container');
const imgTextCont = document.querySelectorAll('.image-text');

// console.log(imgCont[1]).querySelectorAll(':scope');

imgCont.forEach(image => image.addEventListener('click', (e) => {
    // imgTextCont.dispatchEvent(new Event('click'));
    // let currentArt = e.target.parentNode
    // .querySelector('.image-text')
    // .querySelector('h2').innerText;

    let currentArt = e.target.closest('.image-container')
    .querySelector('.image-text')
    .querySelector('h2').innerText;
    
    dataLoad = data.find(object => object.name=== currentArt);

    index = dataLoad.number;

    changeData(dataLoad, index);

    enableSlideshow();
}))

// view image button
const lightbox = document.createElement('div');
lightbox.id = 'lightbox2';
document.body.appendChild(lightbox);


document.querySelector('.view-image').addEventListener('click', () => {
    lightbox.classList.add('active')
    img = document.createElement('img')
    img.src = dataLoad.images.gallery;
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img);
})

lightbox.addEventListener('click' , (e) => {
    if (e.target !== e.currentTarget){
        return
    }
    lightbox.classList.remove('active');
})


}    



}
}


let imgCont = document.querySelectorAll('.image-container');


setTimeout( function() {
if (screen.width >= 1430) {
// setTimeout( function() {
    document.querySelectorAll('.image-container')[imgCont.length -1].style.left = '1050px';
    document.querySelectorAll('.image-container')[imgCont.length -1].style.top = '1000px';

// }, 500)
}}, 5000)

if (screen.width >= 767 && screen.width < 810) {
    setTimeout( function() {
        document.querySelectorAll('.image-container')[imgCont.length -1].style.left = '364px';
        document.querySelectorAll('.image-container')[imgCont.length -1].style.top = '2459px';
    
    }, 500)
}
