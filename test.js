var f = function(){

  var canvas  = document.getElementsByTagName('canvas')[0];
  var c  = canvas.getContext('2d');

  // c.beginPath();
  // c.moveTo(100,100);
  // c.lineTo(400,400);
  //
  // c.lineTo(300,800);
  // c.closePath();
  // c.lineWidth= 4;
  // c.strokeStyle = "rgba(0,0,255,.5)";
  //
  //
  //
  // c.lineTo(300,500);
  // c.lineTo(300,800);
  // c.moveTo(300,500);
  // c.lineTo(400,400);
  //
  // c.moveTo(700,800);
  // c.lineTo(800,800);
  // c.lineTo(700,100);
  // c.closePath();
  //
  //
  // c.lineTo(750,750);
  // c.lineTo(700,100);
  // c.moveTo(750,750);
  // c.lineTo(800,800);
  // c.fillStyle = "rgba(55,145,0,.5)";
  // c.fill();
  // c.stroke();

  // c.beginPath();
  // for (var column = 0, color = 0, color2 = 0; column<20; column++){
  //   for (var row = 0; row<20; row++){
  //     c.fillStyle ='hsla(' + color + ', 100%, 50%, .5';
  //     c.fillRect(column*25,row*25,22,22);
  //     c.lineWidth = 2+column/2;
  //     c.strokeStyle = 'hsla(' + color2 + ', 100%, 50%, .5)';
  //     c.strokeRect(column*30,row*30,22,22);
  //     color += 17;
  //     color2 +=19;
  //   }
  // }

  // for (var i= 5, color3 = 0, color4 = 0; i<15; i++){
  //   for (var j = 5; j<15; j++){
  //     c.beginPath();
  //     c.arc(i*50, j*50, 18, 0, Math.PI*2, false);
  //     c.strokeStyle = 'hsla(' + color3 + ', 100%, 50%, .5)';
  //     c.lineWidth = 25;
  //     c.lineCap = "round";
  //
  //
  //     color4 +=19;
  //     c.stroke();
  //     color3+= 17;
  //   }
  // }

    // c.beginPath();
    // c.strokeStyle = "yellow";
    // c.moveTo(100,100);
    // c.lineTo(300,500);
    // c.lineTo(600,100);
    // c.lineTo(800,500);
    // c.lineTo(300,500);
    // c.stroke();
    //
    // c.beginPath();
    // c.strokeStyle = "purple";
    // c.lineWidth = 15;
    // c.moveTo(100,100);
    // c.arcTo(300,500,600,100,50);
    // c.arcTo(600,100,800,500,100);
    // c.arcTo(800,500,300,500,50);
    // c.stroke();


    // c.beginPath();
    // c.strokeStyle = "yellow";
    // c.moveTo(400,200);
    // c.lineTo(500,100);
    // c.lineTo(800,400);
    // c.stroke();
    //
    // c.beginPath();
    // c.strokeStyle = "purple";
    // c.lineWidth = 15;
    // c.moveTo(400,200);
    // c.arcTo(500,100,800,400,650);
    // //c.arcTo(600,100,800,500,100);
    // //c.arcTo(800,500,300,500,50);
    // c.stroke();

//Box with rounded corners
    // c.beginPath();
    // c.strokeStyle = "yellow";
    // c.moveTo(100,100);
    // c.lineTo(600,100);
    // c.lineTo(600,600);
    // c.lineTo(100,600);
    // c.closePath();
    // c.stroke();
    //
    // c.beginPath();
    // c.strokeStyle = "purple";
    // c.lineWidth = 15;
    // c.moveTo(400,100);
    // c.arcTo(600,100,600,600,100);
    // c.arcTo(600,600,100,600,100);
    // c.arcTo(100,600,100,100,100);
    // c.arcTo(100,100, 600,100, 100);
    // c.closePath();
    // c.stroke();

// Arrow
    // c.beginPath();
    // c.strokeStyle = "red";
    // c.fillStyle = "red";
    // c.moveTo(150,400);
    // c.lineTo(400,400);
    // c.lineTo(380,370);
    // c.arcTo(400,400, 380, 430, 50);
    // c.lineTo(400,400);
    // c.fill();
    // c.stroke();

// Quadratic Curve
    //
    // function change(YLabels, maxColor){
    //   var distance  = 25;
    //   var YLabel  = YLabels;
    //   var radius  = 15;
    //   for (var x = 100; x<900; x+=distance){
    //     var midPoint  = x + distance/2;
    //     c.beginPath();
    //     c.moveTo(x, YLabel);
    //     c.quadraticCurveTo(midPoint, 800*Math.random(), x+distance, YLabel);
    //     c.arc(midPoint, YLabel, radius, 0, 2*Math.PI, false );
    //     c.fillStyle = 'hsla('+ maxColor*Math.random() + ', 100%, 50%, .4)';
    //     c.fill();
    //
    //   }
    // }
    // for (var i = 0; i<20000; i++){
    //   change(1000*Math.random(), 360*Math.random());
    // }

// Bezier Curve
    //
    // var width  = 500;
    // var YLabel = 500;
    // var XC1 = -150;
    // var XC2 = 200;
    // var YC1 = -100;
    // var YC2 = 100;
    //
    //
    //   c.beginPath();
    //   c.fillStyle = 'hsla('+ 360*Math.random() + ', 100%, 50%, .4)';
    //   c.moveTo(width, YLabel);
    //   c.bezierCurveTo(XC1, YLabel+YC1, XC2, YLabel+YC2, width, YLabel);
    //   c.fill();

  // function changeBezier(YLabels, YC1S){
  //   var width  = 1;
  //   var YLabel = YLabels;
  //   var XC1 = -150;
  //   var XC2 = 200;
  //   var YC1 = YC1S;
  //   var YC2 = 100;
  //
  //   for (var x = 100; x<900; x+=width){
  //     c.beginPath();
  //     c.fillStyle = 'hsla('+ 360*Math.random() + ', 100%, 50%, .4)';
  //     c.moveTo(x, YLabel);
  //     c.bezierCurveTo(x+XC1*Math.random(), YLabel+YC1, x+XC2, YLabel+YC2*Math.random(),x+width, YLabel);
  //     c.fill();
  //   }
  // }
  // for (var i = 0; i<2000; i++){
  //   changeBezier(1000*Math.random(), -10*Math.random());
  // }

  // bezier curve with rect
  // var w = 200;
  // var h = 200;
  // c.lineWidth = 4;
  //
  // for (var x = 50, y = 50; x < 1500; x+=w){
  //   c.beginPath();
  //   c.fillStyle = 'hsl('+ 360*Math.random() +', 100%, 50%)';
  //   c.strokeStyle =  'hsl('+ 360*Math.random() +', 100%, 50%)';
  //   c.rect(x,y,w,h);
  //   c.bezierCurveTo(x, y+h, x+w, y+h, x+w, y);
  //   c.bezierCurveTo(x, y, x, y+h, x+w, y+h);
  //   c.bezierCurveTo(x+w, y, x, y, x, y+h);
  //   c.bezierCurveTo(x+w, y+h, x+w, y, x, y);
  //   c.fill();
  // }

  //polar curve
  // c.beginPath();
  // c.fillStyle = 'hsl('+ 360*Math.random() +', 100%, 50%)';
  // c.strokeStyle =  'hsl('+ 360*Math.random() +', 100%, 50%)';
  // c.moveTo(800,400);
  //
  // for(var angle = 0; angle <=2*Math.PI; angle+=.01){
  //   var x = 400 + 400*Math.cos(20*angle)*Math.cos(angle);
  //   var y = 400 + 200*Math.cos(20*angle)*Math.sin(angle);
  //   c.lineTo(x,y);
  // }
  // c.stroke();
  // //c.fill();

  // bunch of circles in circle
  // c.translate(400,400);
  //
  // var maxCircle = 15;
  // var radius  = 100;
  // var size = 15;
  //
  // for (var i= 1; i<= maxCircle; i++){
  //   c.fillStyle = 'hsla('+ 360*Math.random() +', 100%, 50%,.5)';
  //   c.beginPath();
  //   c.arc(0, radius, size, 0, 2*Math.PI, false);
  //   c.rotate(2*Math.PI/maxCircle);
  //   c.fill();
  // }

// var grd = c.createLinearGradient(0,0,1000,0);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"green");
// c.globalAlpha = .2;
// // Fill with gradient
// c.fillStyle = grd;
// c.fillRect(0,0,1000,1000);
//
// c.beginPath();
// c.moveTo(1000,500);
// c.fillStyle = 'hsla('+ 360*Math.random() +', 100%, 50%,.9)';
// c.strokeStyle =  'hsla('+ 360*Math.random() +', 100%, 50%,.9)';
//
//
// for(var angle = 0; angle <=2*Math.PI; angle+=.005){
//   var x = 500 + 500*Math.cos(100*angle)*Math.cos(angle);
//   var y = 500 + 500*Math.cos(100*angle)*Math.sin(angle);
//   c.lineTo(x,y);
// }
// //c.stroke();
// c.fill();

var rg = c.createRadialGradient(330,300,55,400,400,200);
rg.addColorStop(0,"white");
rg.addColorStop(.5,"grey");
rg.addColorStop(1,"black");
c.fillStyle = rg;
c.beginPath();
c.arc(400,400,200,0,2*Math.PI, false);

c.fill();



};

window.addEventListener('load', f, false);
