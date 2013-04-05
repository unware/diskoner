<?php
	class gambar{
		
		function ulang($n, $url){
			for($i = 1; $i<=$n; $i++){
				echo "<li><span class='user_wrap'><img src='$url'><span>Contoh User Online dengan Nama Panjang Sekali</span></span></li>";	
			}
		}
	}
?>