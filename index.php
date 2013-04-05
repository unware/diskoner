<!doctype html>
<?php
	include('engine/gambar.php');
?>

<html>
<head>
<meta charset="utf-8">
<title>Halaman Utama Diskoner</title>
<link rel="stylesheet" type="text/css" href="js/sly/vertical.css">
<link rel="stylesheet" type="text/css" href="js/sly/normalize.css">
<link rel="stylesheet" type="text/css" href="style/screen.css">
<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/jquery.mCustomScrollbar.concat.min.js"></script>

<!-- script utk Sly Paling penting -->
<script src="js/sly/sly.js"></script>
<script src="js/sly/vertical.js"></script>
<script src="js/sly/plugins.js"></script>
<!-- script utk Sly Paling penting -->

	<script language="javascript">
		$(document).ready(function(e) {
				var kontainer = $("#kontainer");
				var navigasi = $("#nav");
				var header = $("#header");
				
				navigasi.height(kontainer.innerHeight());
				$('#nav').on('click',function (e) {
					$("#nav").animate({width:200},250);
				});
								
		});
		$(window).ready(function(e) {
			$('#nav').mCustomScrollbar();
		});
	</script>


</head>

<body>
<div id="kontainer">

	<div id="status_maker">
		Tempat buat status
	</div>
	
	<div id="nav">
		Navigasi User Online
	</div>


<!-- Halaman utk Konten Dari sini -->
	<div id="konten" class="wrap">
		<div >

			<!-- Skrollbar disini -->
			<div class="scrollbar">
				<div style="transform: translateZ(0px) translateY(0px);" class="handle">
					<div class="mousearea"></div>
				</div>
			</div>
			<!-- End of Skrollbar disini -->

			<!-- Konten dari sini -->
			<div class="frame" id="nonitembased">
				<div style="transform: translateZ(0px);" class="slidee">
					<h1>Asa Konten</h1><br>
					<p>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. 
Consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
				</div>
			</div>
			<!-- Konten disini -->

			<!-- Navigasi Bulatan -->
<!--			<ul class="pages"><li class="active">1</li><li>2</li><li>3</li><li>4</li></ul>
-->			<!-- Navigasi Bulatan -->
		</div>
		
	</div>
<!-- Akhir Halaman utk Konten Dari sini -->

	<div id="footer">
		Footer
	</div>


</div>
</body>
</html>