$(document).ready(function(){
  var usr="X";
  var com="0";
  var turns=["","","","","","","","",""];
  var gameOn=false;
  $(".x").hide();
  $(".x").click(function(){
    usr="X";
    com="0";
    $(this).hide();
    $(".o").show();
    $(".alert-success").text("");
    reset();
  })
  $(".o").click(function(){
    usr="0";
    com="X";
    $(this).hide();
    $(".x").show();
    $(".alert-success").text("");
    reset();
  })
  function win(arr,curTurn){
    if (arr[0]==curTurn && arr[1]==curTurn && arr[2]==curTurn) {
      reset();
      gameOn=true;
      $(".alert-success").html(curTurn+" has won");
    }
    else if (arr[0]==curTurn && arr[3]==curTurn && arr[6]==curTurn) {
      reset();
      gameOn=true;
    $(".alert-success").html(curTurn+" has won");
    }
    else if (arr[2]==curTurn && arr[4]==curTurn && arr[6]==curTurn) {
      reset();
      gameOn=true;
      $(".alert-succes").html(curTurn+" has won");
    }
    else if (arr[0]==curTurn && arr[4]==curTurn && arr[8]==curTurn) {
      reset();
      gameOn=true;
      $(".alert-success").html(curTurn+" has won");
    }
    else if (arr[1]==curTurn && arr[4]==curTurn && arr[7]==curTurn) {
      reset();
      gameOn=true;
      $(".alert-success").html(curTurn+" has won");
    }
    else if (arr[2]==curTurn && arr[5]==curTurn && arr[8]==curTurn) {
      reset();
      gameOn=true;
      $(".alert-success").html(curTurn+" has won");
    }
    else if (arr[3]==curTurn && arr[4]==curTurn && arr[5]==curTurn) {
      reset();
      gameOn=true;
      $(".alert-success").html(curTurn+" has won");
    }
    else if (arr[6]==curTurn && arr[7]==curTurn && arr[8]==curTurn) {
      reset();
      gameOn=true;
      $(".alert-success").html(curTurn+" has won");
  }
  else{
    gameOn=false;
  }
}
  function computersTurn(arr2,curTurn2){
    var click=false;
    while (click==false) {
      var computersMove=(Math.random()*10).toFixed();
      var spot=$("#"+computersMove).text();
      if (spot=="") {
        $("#"+computersMove).text(curTurn2);
        click=true;
        arr2[computersMove]=curTurn2;
        win(turns,com);
      }
    }
  }
  function play(usr,id){
    $(".alert-success").text("");
    var slotTaken=$("#"+id).text();
    if(slotTaken===""){
      turns[id]=usr;
      $("#"+id).text(usr);
      win(turns,usr)
      if(gameOn===false){
        computersTurn(turns,com);
      }
    }
  }
  $(".tic").click(function(){
    var slot=$(this).attr('id');
      play(usr,slot);
  })
  function reset(){
  turns=["","","","","","","","",""];
  $(".tic").text("");
  gameOn=false;
  }
})
