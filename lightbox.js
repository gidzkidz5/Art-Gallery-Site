// //  for single image lightbox
// const lightbox = document.createElement('div');
// lightbox.id = 'lightbox2';
// document.body.appendChild(lightbox);

// document.querySelector('.view-image').addEventListener('click', () => {
//     lightbox.classList.add('active')
//     const img = document.createElement('img')
//     img.src = gallery
// })


// const images = document.getElementById('art-slideshow');
// images.forEach(image => {
//     image.addEventListener('click', e => {
//         lightbox.classList.add('active')
//         const img = document.createElement('img')
//         img.src = image.src;
//         while (lightbox.firstChild) {
//             lightbox.removeChild(lightbox.firstChild)
//         }
//         lightbox.appendChild(img);
//     })
// })

// lightbox.addEventListener('click' , (e) => {
//     if (e.target !== e.currentTarget){
//         return
//     }
//     lightbox.classList.remove('active');
// })