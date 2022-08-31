var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
ctx.font = "45px Time";
ctx.strokeStyle = "gold";
ctx.strokeText("ERROR", 500, 80);
ctx.strokeText("404", 540, 135);
ctx.strokeText("Page not found", 450, 190);



var img = new Image();
img.src = './kosmonavt.png';
var CanvasXSize = 1210;
var CanvasYSize = 555;
var speed = [] ; 
var scale = .2;
var y = 280;

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width*scale;
    imgH = img.height*scale;
    if (imgW > CanvasXSize) { x = CanvasXSize-imgW; } 
    if (imgW > CanvasXSize) { clearX = imgW; } 
    else { clearX = CanvasXSize; }
    if (imgH > CanvasYSize) { clearY = imgH; } 
    else { clearY = CanvasYSize; }
    return setInterval(draw, speed*200);
}

function draw() {
    ctx.clearRect(0,0,clearX,clearY);
    if (imgW <= CanvasXSize) {
    if (x > (CanvasXSize)) { x = 0; }
    if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
    }
    
    else {
    if (x > (CanvasXSize)) { x = CanvasXSize-imgW; }
    if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-imgW+1,y,imgW,imgH); }
    }
    ctx.drawImage(img,x,y,imgW,imgH);
    x += dx;
}


