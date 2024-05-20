let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

document.getElementById('apply-btn').addEventListener('click', function() {
    var selectedFont = document.getElementById('font').value;
    var selectedColor = document.getElementById('color').value;
    document.body.style.fontFamily = selectedFont;
    var elementsToColor = document.querySelectorAll('.content, header, footer');
    elementsToColor.forEach(function(element) {
        element.style.color = selectedColor;
    });
});

let customizeBtn = document.getElementById('customize-btn');
let customizationPanel = document.getElementById('customization-panel');

customizeBtn.addEventListener('click', function() {
    customizationPanel.classList.toggle('show');
});

// Apply Button Click Event
document.getElementById("apply-btn").addEventListener("click", function() {
    var font = document.getElementById("font").value;
    var bgcolor = document.getElementById("bgcolor").value;
    document.body.style.fontFamily = font;
    document.body.style.backgroundColor = bgcolor;
});

document.addEventListener("DOMContentLoaded", function() {
    var seeMoreButtons = document.querySelectorAll('.see-more');

    seeMoreButtons.forEach(function(button) {
        button.style.display = 'none';
        setTimeout(function() {
            button.style.display = 'inline-block';
            button.previousElementSibling.style.display = 'block'; 
        }, 3000); 
    });
});


