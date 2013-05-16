$(document).ready(function(e) {
	
				$('#gbr_atc').on('change',handleFileSelect);
				
			  function handleFileSelect(evt) {
				var files = evt.target.files; // FileList object
			
				// Loop through the FileList and render image files as thumbnails.
				for (var i = 0, f; f = files[i]; i++) {
			
				  // Hanya Menerima File Gambar Dari Komputer
				  if (!f.type.match('image.*')) {
					continue;
				  }
			
				  var reader = new FileReader();
			
				  // Closure to capture the file information.
				  reader.onload = (function(theFile) {
					return function(e) {
					  // Render thumbnail.
					  
					  var span = document.createElement('span');
					  span.innerHTML = ['<img class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('');
							
					  $('#isi_attach').html(span);
					};
				  })(f);
			
				  // Read in the image file as a data URL.
				  reader.readAsDataURL(f);
//				  $('#gbr_atc').attr('disabled','true');
				}
			  }
	
	
					//Kotak Modal utk attch
				$('#input_foto').on('click',function(e) {
					e.preventDefault();
					var lebar = $(document).innerWidth();
					var tinggi = $(document).innerHeight();
					activeWindow = $('#dialog_box')
					.css('opacity', '0')
					.css('top', '50%')
					.css('left', '50%')
					.fadeTo(500, 1);
					
					$('body')
					.append('<div id="blind" />')
					.find('#blind')
					.css('opacity', '0')
					.width(lebar)
					.height(tinggi)
					.fadeTo(500, 0.8)
					.click(function (e) {
						closeModal();
					});
					
					$('.linkKu').click(function(e) {
						closeModal();
					});

				});
					//Utk pilih url atau Upload
					$('#navigasi_dialog_box a').on('click a',function(){
						if($(this).attr('id') == "url_link"){
							$('#upload_link').removeClass('active');
							$('#url_link').addClass('active');
							$('#upload').hide(200);
							$('#url').show(200);	
						}
						else
						{
							$('#upload_link').addClass('active');
							$('#url_link').removeClass('active');
							$('#upload').show(200);
							$('#url').hide(200);	
						}
					});
				
				function closeModal() {
					activeWindow.fadeOut(250, function () {
						$(this)
					.css('top', '-1000px')
					.css('left', '-1000px');
					});
		
					$('#blind').fadeOut(250, function () {
						$(this).remove();
		
					});
				};
				//End of Kotak Attch

	
//End of Ready Function	
});
