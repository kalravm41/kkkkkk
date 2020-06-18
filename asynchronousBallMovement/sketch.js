 var ball,database,k,i,a;
 var drawing = [];
 var currentPath = [];

 function setup(){
    var canvas = createCanvas(500,500);
    canvas.mousePressed(startPath);
    database = firebase.database();
     ball = createSprite(250,250,20,20);
    var d = database.ref('Drawing');
    d.on("value",function(data){
        drawing = data.val();
    })
    database.ref('Drawing').update({
           sketch : drawing
     })
 } 


function startPath(){
    currentPath = [];
    drawing = [currentPath];
}

 function draw(){
   background(0);
//  // console.log(database);
  if(mouseIsPressed){
      var points = {
          x : mouseX,
          y : mouseY
      }
      currentPath.push(points);
  }
  
  stroke(255);
  strokeWeight(4);
 noFill();
  for(var i = 0;i < drawing.length;i++){
     var path = drawing[i];
     beginShape();
     for(var j = 0;j < path.length;j++){
        vertex(path[j].x,path[j].y)
     }
     endShape();
  }
// drawSprites();
   }
//  function mousePressed(){
//   i = ball.x;
//   a = ball.y;
//  }
// function mouseDragged(){
//       ball.x = mouseX;
//       ball.y = mouseY;
//       drawing.push(k);
//       for(var i = 0;i<=drawing.length;i = i+0.1){
//        k = createSprite(ball.x,ball.y,10,10);     
//       }
// }

