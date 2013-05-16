<!doctype html>
<?php
	include('engine/gambar.php');
?>

<html>
<head>
<meta charset="utf-8">
<title>Halaman Utama Diskoner</title>
<link rel="stylesheet" type="text/css" href="style/screen.css">
<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/jquery-ui-1.10.1.custom.min.js"></script>
<script src="js/jquery.slimscroll.js"></script>

	<script language="javascript">
		$(document).ready(function(e) {
				var kontainer = $("#kontainer");
				var navigasi = $("#nav_kiri, #nav_kanan");
				var header = $("#header");
				
				navigasi.height(kontainer.innerHeight());
				
				//Animasi Navigasi Kanan
				$('#nav_kanan').on('mouseenter mouseup ',function(e) {
					$(this).animate({width:200});
						$(this).mouseleave(function(e) {
							$(this).animate({width:100},200);
						});
				});
				
				//Galeri Foto
				$('.foto_galeri a img').on('click', function(e){
					e.preventDefault();
					var foto = "<img width='704px' src='" + $(this).attr('src') + "'>";		
					$('#lokasi_foto').fadeIn(200).html(foto);
				});
				
				
				$('#photo_wrapper').hover(function(e) {
					$('#ket_foto').slideToggle(200);
				});
				
		});
		
		$(window).ready(function(e) {
			$('#nav_kanan').mCustomScrollbar({
					mouseWheelPixels: 180,
					theme:"light-thin"

				});
		});

	</script>


</head>

<body>
<div style="width:1024px; height:650px; margin:0 auto; background-color:#333;" id="kontainer">

<div id="nav_kiri">
		<img src="images/cth_user.png">
		<br>
		User Aktif
	<a href="index.php">Home</a> </div>
	
	
	<!-- Konten Foto Galeri -->
	
		
		<div id="konten_galeri">
			<div id="photo_wrapper" style="overflow:hidden; height:auto; padding-bottom:25px;">
				<div id="ket_foto">Keterangan Foto</div>
				<div id="lokasi_foto"></div>
			</div>
		</div>

	
	<!-- End of Konten Foto Galeri -->
	
	
	<div id="nav_kanan">
		<div id="orang">
			<ul>
			<?php
				$foto = new gambar;
				$foto->ulang(54,"images/cth_user.png");
			?>
			</ul>
		</div>
	</div>

</div>
</body>
</html>