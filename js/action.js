
$(function(){
	$('#little a img').click(function(){
		$('#little a img').fadeTo(500, 1);
		$(this).fadeTo(500, 0.5);
	  });

$('#little a').click(function(e){
	if($('#large img').attr('src') != $(this).attr('href')){
	$('#large img').hide().attr('src',$(this).attr('href'));
	$('#large img').load(function(){
		$(this).fadeIn(600);
		});
	}
	e.preventDefault();
	});

	$('#little img').click(function(e){
	var name=$(this).attr('title');
		$('#large h3').text(name);
			$(this).fadeIn(500);
			});
		e.preventDefault();
	});

		$('#little a img').click(function(e){
			$('#little a img').fadeTo(1000, 1);
			$(this).fadeTo(1000, 0.5);
		  })
	


