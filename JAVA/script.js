document.addEventListener("DOMContentLoaded", function() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');

 
  burger.addEventListener('click', function() {
      menu.classList.toggle('open');
      overlay.classList.toggle('show');  
  });


  overlay.addEventListener('click', function() {
      menu.classList.remove('open');
      overlay.classList.remove('show'); 
  });
});



let images = [];
let currentImageIndex = 0;

function preload() {
  images.push(loadImage('images/image-1.jpg'));
  images.push(loadImage('images/image-2.jpg'));
  images.push(loadImage('images/image-3.jpg'));
  images.push(loadImage('images/image-4.jpg'));
}

function setup() {
  let canvas = createCanvas(659, 445); 
  canvas.parent('canvas-container');
}

function draw() {
  background(255);
  image(images[currentImageIndex], 0, 0, width, height);
}

function mousePressed() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
}


function setup() {
  let canvas = createCanvas(659, 445);
  canvas.parent('canvas-container');
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }, 2200); 
}





$(document).ready(function () {
  $.getJSON('java/json.json', function (events) {
    const container = $('.body-v2 .container');
    let cardIndex = 0;
    const cardClasses = ['card-1v', 'card-2v', 'card-3v', 'card-4v'];

    events.forEach(event => {
      const eventCard = `
              <div class="card ${cardClasses[cardIndex]}">
                  <img src="${event.image}" alt="${event.name}" class="card-img img-1v">
                  <h2 class="h2-1v">${event.name}</h2>
                  <h4 class="h4-1v">${event.date}</h4>
                  <p class="p-1v">${event.description}</p>
                  <a href="${event.link}" class="card-link a-1v">Register now</a>
              </div>`;

      container.append(eventCard); 


      cardIndex = (cardIndex + 1) % cardClasses.length;
    });
  }).fail(function () {
    console.error("Failed to load JSON file.");
  });
});





