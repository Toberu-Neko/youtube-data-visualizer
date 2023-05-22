//API KEY
let key = "";
let id = [];
let SubDivNum = 4000;
let url1 = [6];
let url2 = [6];
//let url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=" + key;
//let url2 = "https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=" + id + "&key=" + key;
let Channel= [6],View= [6],Subscriber= [6];
let SubR = [6];
let timer = 0,subTotal = 0, x =[], y=[];
let Mouse = [6];
//頻道UID
id[0] = "UCoSrY_IQQVpmIRZ9Xf-y93g";
id[1] = "UCHsx4Hqa-1ORjQTh9TYDhww";
id[2] = "UCL_qhgtOy0dy1Agp8vkySQg";
id[3] = "UCMwGHR0BTZuLsmjY_NT5Pwg";
id[4] = "UCyl1z3jo3XHR1riLFKG5UAg";
id[5] = "UC8rcEBzJSleTkf_-agPM20g";
//不同ID：UCKngQgSGHd3Hp3nkPs15YSA
//不同ID：UCuTAXTexrhetbOe3zgskJBQ
//不同ID：UCxUzQ3wu0oJP_8YLWt71WgQ
//不同ID：UCHnyfMqiRRG1u-2MsSQLbXA
//不同ID：UCY_6hFztIrviUiru0FNCjCA
//不同ID：UCOyshL6rKK1GqwoEfy_ehBg

function preload() {

  for(let i=0;i<6;i++){
    url1[i] = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id[i] + "&key=" + key;
    url2[i] = "https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=" + id[i] + "&key=" + key;
  }

  loadJSON(url1[0],getViewSub0);
  loadJSON(url2[0],getName0);
  loadJSON(url1[1],getViewSub1);
  loadJSON(url2[1],getName1);
  loadJSON(url1[2],getViewSub2);
  loadJSON(url2[2],getName2);
  loadJSON(url1[3],getViewSub3);
  loadJSON(url2[3],getName3);
  loadJSON(url1[4],getViewSub4);
  loadJSON(url2[4],getName4);
  loadJSON(url1[5],getViewSub5);
  loadJSON(url2[5],getName5);
}

function setup() {
  if(windowWidth<1230)
  createCanvas(1230, 900);
  else
  createCanvas(windowWidth, 900);

  for(let i=0;i<6;i++){
    Subscriber[i] = int(Subscriber[i])
    subTotal +=Subscriber[i];
    Mouse[i] = false;
    print("---");
    print(Channel[i]);
    print(url1[i]);
    print(url2[i]);
  }
  print(subTotal);

  
  for(let i=0;i<6;i++){
    x[i] =[];
    y[i] =[];
    for(let g=0;g<Subscriber[i]/SubDivNum;g++)
    {
      if(i<3)
      {
        x[i][g] = random(width/3*i+5,width/3*(i+1)-5);
        y[i][g] =random(5,height/2-5);
      }
      if(i>=3)
      {
        x[i][g] = random(width/3*(i-3)+5,width/3*((i-3)+1)-5);
        y[i][g] =random(height/2+5,height-5);
      }

    }
  }
}
function draw() {
  //background(220);
 // randomSeed(1);
  textSize(24);
  textAlign(CENTER, CENTER);
  timer ++;
  for(let i=0;i<6;i++)
  {
    Mouse[i] = false;
  }


  for(let i=0;i<3;i++){
    if(i==0)
    fill(105,152,207,40);
    if(i==1)
    fill(253,133,103,40);
    if(i==2)
    fill(245,146,165,40);

    stroke(0);
    rect(0+width/3*i,0,width/3,height/2);


    
    if(i==0)
    fill(191,207,207);
    if(i==1)
    fill(253,212,202);
    if(i==2)
    fill(245,208,215);

    if(i==0 && mouseX>0 && mouseX <width/3 && mouseY>0 &&mouseY<height/2)
    {
      Mouse[0] = true;
    }
    if(i==1 && mouseX>width/3 && mouseX <width/3*2 && mouseY>0 &&mouseY<height/2)
    {
      Mouse[1] = true;
    }
    if(i==2 && mouseX>width/3*2 && mouseX <width && mouseY>0 &&mouseY<height/2)
    {
      Mouse[2] = true;
    }

    noStroke();
    for(let g=0;g<Subscriber[i]/SubDivNum;g++)
    {
      circle(x[i][g],y[i][g],8);
      if(Mouse[i])
      {
        if(x[i][g]<mouseX)
        x[i][g]+=map(mouseX,0,width,0,random(0.5,0.8));
        if(x[i][g]>mouseX)
        x[i][g]-=map(mouseX,0,width,0,random(0.5,0.8));
        if(y[i][g]<mouseY)
        y[i][g]+=map(mouseY,0,height,0,random(0.4,0.7));
        if(y[i][g]>mouseY)
        y[i][g]-=map(mouseY,0,height,0,random(0.4,0.7));
      }
      else
      y[i][g]+=random(1,2);
      if(y[i][g]>height/2-4)
      {
        x[i][g] = random(width/3*i+5,width/3*(i+1)-5);
        y[i][g] =random(-4,-34);
      }
    }
    fill(255);
    stroke(0,0,0,20);
    text(Channel[i],width/6+width/3*i,height/20);
    text("Now Sub: "+Subscriber[i],width/6+width/3*i,height/10);
  }
  for(let i=3;i<6;i++){
    if(i==3)
    fill(87,74,103,40);
    if(i==4)
    fill(223,168,123,40);
    if(i==5)
    fill(47,19,35,40);
  
    if(i==3 && mouseX>0 && mouseX <width/3 && mouseY>height/2 &&mouseY<height)
    {
      Mouse[3] = true;
    }
    if(i==4 && mouseX>width/3 && mouseX <width/3*2 && mouseY>height/2 &&mouseY<height)
    {
      Mouse[4] = true;
    }
    if(i==5 && mouseX>width/3*2 && mouseX <width && mouseY>height/2 &&mouseY<height)
    {
      Mouse[5] = true;
    }
    stroke(0);
    rect(0+width/3*(i-3),height/2,width/3,height/2);
    
    
    textAlign(CENTER, CENTER);
    noStroke();
    for(let g=0;g<Subscriber[i]/SubDivNum;g++)
    {
      if(i==3)
      fill(161,145,187);
      if(i==4)
      fill(240,217,177);
      if(i==5)
      fill(232,165,195);


      circle(x[i][g],y[i][g],8);
      if(Mouse[i])
      {
        if(x[i][g]<mouseX)
        x[i][g]+=map(mouseX,0,width,0,random(0.5,0.8));
        if(x[i][g]>mouseX)
        x[i][g]-=map(mouseX,0,width,0,random(0.5,0.8));
        if(y[i][g]<mouseY)
        y[i][g]+=map(mouseY,0,height,0,random(0.4,0.7));
        if(y[i][g]>mouseY)
        y[i][g]-=map(mouseY,0,height,0,random(0.4,0.7));
      }
      else
      y[i][g]-=random(1,2);
      if(y[i][g]<height/2+4)
      {
        x[i][g] = random(width/3*(i-3)+5,width/3*((i-3)+1)-5);
        y[i][g] = height+random(0,30)-4;
      }
    }

    fill(250);
    text(Channel[i],width/6+width/3*(i-3),height/20+height/2);
    text("Now Sub: "+Subscriber[i],width/6+width/3*(i-3),height/10+height/2);
  }

  textSize(30);
  textAlign(CENTER, CENTER);
  /*if(timer>900){
    for(let i=0;i<6;i++){
     // loadJSON(url1[i],getViewSub);
    //  loadJSON(url2[i],getName);
    }
    timer = 0;
  }*/

 /* for(let i=0;i<6;i++){
    SubR[i] = map(Subscriber[i],0,Subscriber[0],0,500);
    fill(255,255,255,10);
    circle(width/2 ,height/2 ,SubR[i]);
  }*/
  //  circle(height/2,width/2,map(subTotal,0,subTotal,0,500));
  //  alert("A");

}
function getViewSub0(data){
  
  Subscriber[0] = data.items[0].statistics.subscriberCount;
  View[0] = data.items[0].statistics.viewCount;
 }
function getName0(data){
  Channel[0] = data.items[0].brandingSettings.channel.title;
}
function getViewSub1(data){
  
  Subscriber[1] = data.items[0].statistics.subscriberCount;
  View[1] = data.items[0].statistics.viewCount;
 }
function getName1(data){
  Channel[1] = data.items[0].brandingSettings.channel.title;
}
function getViewSub2(data){
  
  Subscriber[2] = data.items[0].statistics.subscriberCount;
  View[2] = data.items[0].statistics.viewCount;
 }
function getName2(data){
  Channel[2] = data.items[0].brandingSettings.channel.title;
}
function getViewSub3(data){
  
  Subscriber[3] = data.items[0].statistics.subscriberCount;
  View[3] = data.items[0].statistics.viewCount;
 }
function getName3(data){
  Channel[3] = data.items[0].brandingSettings.channel.title;
}
function getViewSub4(data){
  
  Subscriber[4] = data.items[0].statistics.subscriberCount;
  View[4] = data.items[0].statistics.viewCount;
 }
function getName4(data){
  Channel[4] = data.items[0].brandingSettings.channel.title;
}
function getViewSub5(data){
  
  Subscriber[5] = data.items[0].statistics.subscriberCount;
  View[5] = data.items[0].statistics.viewCount;
 }
function getName5(data){
  Channel[5] = data.items[0].brandingSettings.channel.title;
}