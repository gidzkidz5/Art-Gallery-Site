// import Masonry from 'masonry-layout';


window.onload = () => {
    const grid = document.querySelector('.masonry');

    const masonry = new Masonry(grid, {
        itemSelector: '.image-container',
        gutter: 40,
        horizontalOrder: true,
        originTop: true,
        fitWidth: true
    });
};

let imgCont = document.querySelectorAll('.image-container');

if (screen.width >= 1440 && screen.width < 1790) {


setTimeout( function() {
    document.querySelectorAll('.image-container')[imgCont.length -1].style.left = '1050px';
    document.querySelectorAll('.image-container')[imgCont.length -1].style.top = '998px';
}, 400)
}
