$(document).ready(function(){

  $('.cover').click(function(){
    $(this).fadeOut();
    $('.letter').fadeIn();
  });

  $('#soman-1').click(function(){
  	$(this).hide();
  	$('#soman').show();
  });

  $('#helloimg').click(function(){
  	$(this).hide();
  	$('#hello').show();
  });

  $('#todayimg').click(function(){
  	$(this).hide();
  	$('#today').show();
  });

  $('#birthdayimg').click(function(){
  	$(this).hide();
  	$('#birthday').show();
  });

  $('#thisimg').click(function(){
  	$(this).hide();
  	$('#this').show();
  });

  $('#presentimg').click(function(){
  	$(this).hide();
  	$('#present').show();
  });

  $('#everydayimg').click(function(){
  	$(this).hide();
  	$('#everyday').show();
  });

  $('#likeimg').click(function(){
  	$(this).hide();
  	$('#like').show();
  });

  $('#happyimg').click(function(){
  	$(this).hide();
  	$('#happy').show();
  });

  $('#celebrateimg').click(function(){
  	$(this).hide();
  	$('#celebrate').show();
  });

  $('#veryimg').click(function(){
  	$(this).hide();
  	$('#very').show();
  });

  $('#fromimg').click(function(){
  	$(this).hide();
  	$('#from').show();
  });


});