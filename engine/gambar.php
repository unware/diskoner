<?php
	class gambar{
		
		function ulang($n, $url){
			for($i = 1; $i<=$n; $i++){
				echo "<li><span class='user_wrap'><img src='$url'><span>Contoh User Online dengan Nama Panjang Sekali</span></span></li>";	
			}
		}
		
		function galeri($n, $url){
			for($i = 1; $i <= $n; $i++){
				echo "<li><a href='$url' target='konten_galeri' id='$i'><img src='$url' alt='$i'></a></li>";	
			}
		}
	}
?>