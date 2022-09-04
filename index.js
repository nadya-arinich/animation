var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

$(function(){

var planeta_id = 'canvas';

var image = new Image();
image.src = './4128.jpg';

// загружаем изображение тени и бликов планеты
var fxShadow = new Image();
fxShadow.src = './123.png';

// определяем длину и высоту элемента canvas
var width = $('#'+planeta_id).width();
var height = $('#'+planeta_id).height();

// рассчитываем угол вращения планеты
var beta = 360/1000;
var beta = (beta*Math.PI)/180;
var l = (Math.sqrt(width*width+width*width))/2;
var gam = Math.PI - ((Math.PI - (beta * Math.PI)/360)/2) - (Math.PI/4);
var b = 2*l*Math.sin(beta/2);
var x = b*Math.sin(gam);
var y = b*Math.cos(gam);
var p1 = Math.cos(beta);
var p2 = Math.sin(beta);

var canvas = document.getElementById(planeta_id);
var ctx = canvas.getContext("2d");

var imageWidth = 0;
var imageHeight = 0;

var drawPlaneta = function(){

ctx.clearRect(0, 0, width, height);
// применяем к нашей планете вращение
ctx.transform(p1, p2, -p2, p1, x, -y);
// рисуем карту с новыми координатами внутри элемента
ctx.drawImage(image, imageWidth, imageHeight, width, height, 0, 0, width, height); 
//добавляем тень и блики
ctx.drawImage(fxShadow, 0, 0, width, height);
// если смещение достигло предела, начинаем сначала
if (imageWidth >= 300) imageWidth = 0; 
else imageWidth = imageWidth+0.5; // иначе двигаем карту дальше

}

setInterval(drawPlaneta, 50); // запускаем анимацию со скоростью 50 мс.

});