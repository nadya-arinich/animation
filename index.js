var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

$(function(){

var planeta_id = 'canvas';

var image = new Image();
image.src = './planeta.jpg';

// загружаем изображение тени и бликов планеты
var img = new Image();
img.src = './blik.png';

// определяем длину и высоту элемента canvas
var width = $('#'+planeta_id).width();
var height = $('#'+planeta_id).height();

var canvas = document.getElementById(planeta_id);
var ctx = canvas.getContext("2d");

var imageWidth = 0;
var imageHeight = 0;

var drawPlaneta = function(){

ctx.clearRect(0, 0, width, height);
// рисуем карту с новыми координатами внутри элемента
ctx.drawImage(image, imageWidth, imageHeight, width, height, 0, 0, width, height); 
//добавляем тень и блики
ctx.drawImage(img, 0, 0, width, height);
// если смещение достигло предела, начинаем сначала
if (imageWidth >= 360) imageWidth = 0; 
else imageWidth = imageWidth+0.5; // иначе двигаем карту дальше

}

setInterval(drawPlaneta, 40); // запускаем анимацию со скоростью 40 мс.

});