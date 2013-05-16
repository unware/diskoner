$(document).ready(function(e) {
	$('#daftar_div p a').click(function(e) {
		$('#konten1').show(100).appendTo('#daftar_div');
	});
});

$(window).resize(function(e) {
	var lebar_dok = $(document).innerWidth();
	if(lebar_dok > 768){
		$('#konten1').prependTo('#konten').show(100);
	}
	else
		$('#konten1').hide();
});