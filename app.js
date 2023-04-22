// overlay hide and show
const slideshowBtn1 = document.getElementById('start-slideshow');
const slideshowBtn2 = document.getElementById('stop-slideshow');
const overlay = document.getElementById('overlay');

slideshowBtn1.addEventListener('click' , () => {
    overlay.classList.toggle('hide');
    document.body.style.overflow = 'hidden';
})

slideshowBtn2.addEventListener('click' , () => {
    overlay.classList.toggle('hide');
    document.body.style.overflow = 'auto';
})


// using json to update overlay on button click
const nameArt = document.querySelector('.lightbox-text').querySelector('h1');
const artistName = document.querySelector('.lightbox-text').querySelector('p');
const year = document.getElementById('year');
const descText = document.getElementById('description-text').querySelector('p');
const source = document.getElementById('source');
const artImg = document.getElementById('art-slideshow');
const artistImg = document.getElementById('artist-slideshow');

// document.querySelectorAll('.image-text')[0].querySelector('h2').text

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

    // add button event listener
nextBtn.addEventListener('click', ()=>{

    // update text and images
    index++;
    if (index >= document.querySelector('main').children.length){
        index = 0;
    }
     let nextArt = document.querySelectorAll('.image-text')[index].querySelector('h2').innerText

    dataLoad = data.find(object => object.name === nextArt)
    nameArt.innerHTML = dataLoad.name;
    artistName.innerHTML = dataLoad.artist.name;
    year.innerHTML = dataLoad.year;
    descText.innerHTML = dataLoad.description;
    source.src = dataLoad.source;
    artImg.src = dataLoad.images.hero.large;
    artistImg.src = dataLoad.artist.image;
 
})

prevBtn.addEventListener('click', ()=>{

    // update text and images
    index--;
    if (index < 0){
        index = document.querySelector('main').children.length - 1;
    }
     let nextArt = document.querySelectorAll('.image-text')[index].querySelector('h2').innerText

    dataLoad = data.find(object => object.name === nextArt)
    nameArt.innerHTML = dataLoad.name;
    artistName.innerHTML = dataLoad.artist.name;
    year.innerHTML = dataLoad.year;
    descText.innerHTML = dataLoad.description;
    source.src = dataLoad.source;
    artImg.src = dataLoad.images.hero.large;
    artistImg.src = dataLoad.artist.image;
})

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
