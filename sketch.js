let xMax = 400;
let yMax = 600;
let xgelato = xMax/2;
let ygelato = yMax*0.6;
let xnuvola1 = xMax/2;
let ynuvola1 = yMax*0.6;
let xnuvola2 = xMax/2;
let ynuvola2 = yMax*0.6;
let xnuvola3 = xMax/2;
let ynuvola3 = yMax*0.6;

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(154, 179, 235);

  push();
//senza contorni
  noStroke();

  //nuvole
  // nuvola 1
  fill(249, 243, 219);
  ellipse(xnuvola1+80, ynuvola1-240, 60, 60);
  ellipse(xnuvola1+125, ynuvola1-240, 59, 59);
  ellipse(xnuvola1+100, ynuvola1-260, 48, 48);
  ellipse(xnuvola1+50, ynuvola1-238, 45, 45);

   // nuvola 2
  fill(249, 243, 219);
  ellipse(xnuvola2-95, ynuvola2-100, 90, 90);
  ellipse(xnuvola2-135, ynuvola2-140, 70, 70);
  ellipse(xnuvola2-175, ynuvola2-108, 100, 100);
  ellipse(xnuvola2-135, ynuvola2-80, 60, 60);
  
  //coppetta
  fill("rgb(65 43 115)");
  quad(
    xgelato-70, ygelato-58,   // alto sinistra
    xgelato+70, ygelato-58,   // alto destra
    xgelato+50, ygelato+38,   // basso destra
    xgelato-50, ygelato+38,   // basso sinistra
  );

  //palline

   // pallina dx
  fill("rgb(185 126 166)");
  ellipse(xgelato+35, ygelato-90, 100, 100);

      // pallina centro
  fill("rgb(118 4 76)");
  ellipse(xgelato, ygelato-145, 100, 100);
  
  // pallina sx
  fill("rgb(255 184 229)");
  ellipse(xgelato-35, ygelato-90, 100, 100);


  //goccia1
  fill("rgb(255 184 229)");
  ellipse(xgelato-60, ygelato-48, 33, 38);

    //goccia2
  fill("rgb(255 184 229)");
  ellipse(xgelato-55, ygelato-5, 10, 15);

 // nuvola 3
  fill(249, 243, 219);
  ellipse(xnuvola3+165, ynuvola3+140, 170, 170);
  ellipse(xnuvola3+135, ynuvola3+90, 140, 140);
  ellipse(xnuvola3+55, ynuvola3+160, 190, 190);
  ellipse(xnuvola3-45, ynuvola3+160, 130, 130);

  //goccia2
  fill("rgb(255 184 229)");
  ellipse(xgelato-55, ygelato-5, 10, 15);

   // fiore
  fill("rgb(234 229 255)");
  ellipse(xgelato-19, ygelato-5, 20, 20);
  ellipse(xgelato+19, ygelato-5, 20, 20);
  ellipse(xgelato, ygelato-24, 20, 20);
  ellipse(xgelato, ygelato+14, 20, 20);
  ellipse(xgelato-12, ygelato-18, 20, 20);
  ellipse(xgelato+12, ygelato-18, 20, 20);
  ellipse(xgelato-13, ygelato+8, 20, 20);
  ellipse(xgelato+13, ygelato+8, 20, 20);
  fill("rgb(255 200 0)");
  ellipse(xgelato, ygelato-5, 20, 20);
  
  
  
pop();
  
  xnuvola1 = (xnuvola1 + 0.25);
  if (xnuvola1 > xMax + 30) {
  xnuvola1 = -150;
  }
  xnuvola2 = (xnuvola2 + 0.43) % (xMax + 230); 
 
  xnuvola3 = xnuvola3 + 0.5;

if (xnuvola3 > xMax + 110) {
  xnuvola3 = -260;
}
} 