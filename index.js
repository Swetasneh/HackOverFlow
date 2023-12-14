var randbox;
var titlerandcolor ;
var titlerandomR;
var titlerandomB;
var titlerandomG;
var flag=0;
var level="start";
starterhard();
$(".newgame").click(function(){
  if(level=="start"||level=="hard")
  starterhard();
  else
  startereasy();
});
$(".easygame").click(startereasy);
$(".hardgame").click(starterhard);
function startereasy(){
  if(flag==0||flag==2)
  {
  flag=0;
  level="easy";
  $(".yellow-bar").css("background-color","orange");
  $(".newgame").text("New Colors");
  $(".box4").hide();
  $(".box5").hide();
  $(".box6").hide();
titlerandomR = Math.floor(Math.random()*256);
titlerandomB = Math.floor(Math.random()*256);
titlerandomG = Math.floor(Math.random()*256);
randbox = Math.floor(Math.random()*3)+1;
 titlerandcolor = "rgb("+titlerandomR+","+titlerandomB+","+titlerandomG+")";
$(".title-rgb").text("rgb("+titlerandomR+","+titlerandomB+","+titlerandomG+")");
$(".box"+randbox).css("background-color",titlerandcolor);
for(var i=1;i<=3;i++)
{
  if(i!=randbox)
  { var randomR = Math.floor(Math.random()*256);
   var randomG = Math.floor(Math.random()*256);
   var randomB = Math.floor(Math.random()*256);
   var randcolor = "rgb("+randomR+","+randomB+","+randomG+")";
  $(".box"+i).css("background-color",randcolor);}
}}};

function starterhard(){
  if(flag==0||flag==2){
  flag=0;
  level="hard";
  $(".yellow-bar").css("background-color","orange");
  $(".newgame").text("New Colors");
  $(".box4").show();
  $(".box5").show();
  $(".box6").show();
titlerandomR = Math.floor(Math.random()*256);
titlerandomB = Math.floor(Math.random()*256);
titlerandomG = Math.floor(Math.random()*256);

randbox = Math.floor(Math.random()*6)+1;
 titlerandcolor = "rgb("+titlerandomR+","+titlerandomB+","+titlerandomG+")";
$(".title-rgb").text("rgb("+titlerandomR+","+titlerandomB+","+titlerandomG+")");
$(".box"+randbox).css("background-color",titlerandcolor);
for(var i=1;i<=6;i++)
{
  if(i!=randbox)
  { var randomR = Math.floor(Math.random()*256);
   var randomG = Math.floor(Math.random()*256);
   var randomB = Math.floor(Math.random()*256);
   var randcolor = "rgb("+randomR+","+randomB+","+randomG+")";
  $(".box"+i).css("background-color",randcolor);}
}}};

$(".btn").click(function(){
  if(flag==0||flag==1){
    flag=1;
  if(this.id==randbox){

    $(".yellow-bar").css("background-color",titlerandcolor);
    $(".status").text("Corrrect!");
    $(".newgame").text("Try Again");
    flag=2;
    for(var i=1;i<=6;i++)
    {

      $(".box"+i).animate({ opacity: 100 });
      $(".box"+i).css("background-color",titlerandcolor);}
    }
  else
  {$("#"+this.id).animate({ opacity: 0 });
   $(".status").text("Try Again!");}
}
});
