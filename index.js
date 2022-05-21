$(window).scrollTop(0);

$('.arrow').hover(function(){
  $(this).toggleClass('blur');
})

//Displaying recorded videos when clicked
$('#don.arrow').click(function(){
   $(this).toggleClass('down');
   $('#donVid.recordings').toggleClass('hidden');
});

$('#boog.arrow').click(function(){
   $(this).toggleClass('down');
   $('#boogVid.recordings').toggleClass('hidden');
});

$('#pouis.arrow').click(function(){
   $(this).toggleClass('down');
   $('#pouisVid.recordings').toggleClass('hidden');
});

$('#jubie.arrow').click(function(){
   $(this).toggleClass('down');
   $('#jubie.recordings').toggleClass('hidden');
});

$('#vinny.arrow').click(function(){
   $(this).toggleClass('down');
   $('#vinnyVid.recordings').toggleClass('hidden');
});

$('#sarai.arrow').click(function(){
   $(this).toggleClass('down');
   $('#saraiVid.recordings').toggleClass('hidden');
});

$('#ev.arrow').click(function(){
   $(this).toggleClass('down');
   $('#evVid.recordings').toggleClass('hidden');
});
$('#anthony.arrow').click(function(){
   $(this).toggleClass('down');
   $('#anthony.recordings').toggleClass('hidden');
});
