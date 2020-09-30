function setup(){
    createCanvas(600,600);
    }
    
  function draw(){
    background(203,195,184);
    fill(255);
    
    drawgirl();
  }
  
  function drawgirl(){
    
    stroke(254,219,126);
    strokeWeight(2);
    fill(78,61,53);
    beginShape();
    vertex(130,600);
    bezierVertex(-50,470,230,470,80,350);
    bezierVertex(20,290,100,260,135,220);
    bezierVertex(180,150,150,70,300,60);
    bezierVertex(450,70,420,150,465,220);
    bezierVertex(500,260,580,290,520,350);
    bezierVertex(370,470,650,470,470,600);
    endShape();//hair
  
  
    fill(50,50,50);
    stroke(252,235,160);
    beginShape();
    vertex(180,600);
    bezierVertex(180,600,300,100,420,600);  
    endShape(CLOSE);//body
    
    
    fill(255);
    stroke(244,206,200);
    beginShape();
    vertex(180,220);
    bezierVertex(180,400,290,300,290,380);
    bezierVertex(290,410,310,410,310,380);
    bezierVertex(310,300,420,400,420,220);
    bezierVertex(420,220,330,200,300,130);
    bezierVertex(270,200,180,220,180,220);
    endShape(CLOSE);//face
  
  
    beginShape()
    vertex(179,223);
    bezierVertex(150,225,150,250,181,258);
    endShape(CLOSE);
    beginShape()
    vertex(421,223);
    bezierVertex(450,225,450,250,419,258);
    endShape(CLOSE);//ear
    
    
    noFill();
    stroke(254,219,126);
    beginShape();
    vertex(420,220);
    bezierVertex(420,220,330,200,300,130);
    bezierVertex(270,200,180,220,180,220);
    bezierVertex(180,220,270,200,300,130);
    bezierVertex(330,200,420,220,420,220);
    endShape(CLOSE);//
  
  
    stroke(227,156,160);
    strokeWeight(3);
    beginShape();
    vertex(230,210)
    bezierVertex(245,200,260,200,270,210);
    bezierVertex(260,200,245,200,230,210);
    endShape(CLOSE);
    beginShape();
    vertex(370,210);
    bezierVertex(355,200,340,200,330,210);
    bezierVertex(340,200,355,200,370,210);
    endShape(CLOSE);//
    
    
    stroke(227,109,115);
    beginShape();
    vertex(290,300);
    bezierVertex(295,310,305,310,310,300);
    endShape();//mouth
  
  
    fill(0);
    ellipse(250,240,25,35);
    ellipse(350,240,25,35);//eye
    
    
    fill(255);
    noStroke();
    ellipse(253,235,5,10);
    ellipse(353,235,5,10);
  
  
    noStroke();
    fill(254,221,224);
    ellipse(230,280,25,25);
    ellipse(370,280,25,25);
  
  
    var t=millis()/500;
    stroke(254,219,126);
    strokeWeight(2);
    fill(78,61,53);
    beginShape();
    vertex(300,70);
    bezierVertex(260+20*abs(sin(t)),60,275+20*abs(sin(t)),50,270+20*abs(sin(t)),30);
    bezierVertex(280+20*abs(sin(t)),50,275+20*abs(sin(t)),60,300,70);
    endShape(CLOSE);
    beginShape();
    vertex(300,70);
    bezierVertex(310+20*abs(sin(t)),60,315+20*abs(sin(t)),50,320+20*abs(sin(t)),40);
    endShape(CLOSE);
    }
  
  
  
  