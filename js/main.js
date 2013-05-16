$(document).ready(function(e) {
				var kontainer = $("#kontainer");
				var nav = $("#nav_kiri");
				var stat = $("#status_maker");
			
				
				//Notif Untuk Notifikasi Berita
				$('#btn_nav_wrapper div').on('click div',function(e) {
					var nav_btn = $(this).attr('id');
					
					if(nav_btn == "notif"){
						$('#notif span.arrow-left').show();
						$('#notif_wrapper').show().animate({marginLeft:75},300,'easeOutExpo');
						$('#tutup_notif_wrapper h1').html("Pemberitahuan");
						$('#notif_wrapper div#notif_konten_notif').animate({width:'toggle'},300,'easeOutExpo');
					}
					else if(nav_btn == "online"){
						$('#online span.arrow-left').show();
						$('#notif_wrapper').show().animate({marginLeft:75},300,'easeOutExpo');
						$('#tutup_notif_wrapper h1').html("Pengguna Online");
						$('#notif_wrapper div#notif_konten_online').animate({width:'toggle'},300,'easeOutExpo');	
					}
					else if(nav_btn == "settings"){
						$('#settings span.arrow-left').show();
						$('#notif_wrapper').show().animate({marginLeft:75},300,'easeOutExpo');
						$('#tutup_notif_wrapper h1').html("Pengaturan");
						$('#notif_wrapper div#notif_konten_settings').animate({width:'toggle'},300,'easeOutExpo');	
					}
					else if(nav_btn == "search"){
						$('#search span.arrow-left').show();
						$('#notif_wrapper').show().animate({marginLeft:75},300,'easeOutExpo');
						$('#tutup_notif_wrapper h1').html("Pencarian Data");
						$('#notif_wrapper div#notif_konten_cari').animate({width:'toggle'},300,'easeOutExpo');	
					}
					
					$('body')
					.append('<div id="blind" />')
					.find('#blind')
					.css('opacity', '0')
					.fadeTo(0, 0.0)
					.click(function (e) {
						TutupNotif();						
					});
					
					$('#tutup_notif_wrapper a').click(function(e) {
						TutupNotif();
					});

				});
				//End of Notif Untuk Notifikasi Berita
				
				//Tutup notif wrapper
				function TutupNotif(){
						$('span.arrow-left').hide();
						$('#notif_wrapper').fadeOut(200).animate({marginLeft:50},300,'easeOutExpo');
						$('#notif_wrapper div.konten').hide();
						
						
						$('#blind').fadeOut(100, function () {
							$(this).remove();
	
						});
				}
				
				
				
				//Untuk Status Maker
				//Tampilkan Status Maker Board
				$('a.buka_status_maker').click(function(e) {
					var kondisi = $(this).text();
					$('#status_maker_group').slideToggle(250, 'easeInOutQuart');
					
					if(kondisi == "-"){
						$('#status_maker').fadeOut(150);
						$(this).html('+');
						$(this).css('background-color','#3399FF').css('color','#000');
					}
					else
					{
						$(this).html('-');
						$(this).css('background-color','#900').css('color','#FFF');
						$("span.arrow_status_maker").hide();
					}
				});
				
				
				//Kontrol utk grup tombol status
				$('#status_maker_group ul li a').on('click a',function(){
					var btn_aktif = $(this).attr('href');
					var arrow = $("#btn_status li span.arrow_status_maker");
					
					$('#status_maker').fadeIn().show();
					
					switch(btn_aktif){
						case "#Update":
						{
							$("span.arrow_status_maker").fadeIn(100).animate({marginLeft:5},200);
							$(this).addClass('klik');
							$('#status_maker div.inner_status_maker_wrapper').hide();
							$('#biasa').fadeIn().show();
							break;	
						}
						case "#Music":
						{
							$("span.arrow_status_maker").fadeIn(100).animate({marginLeft:83},200);
							$('#status_maker div.inner_status_maker_wrapper').hide();
							$('#musik').fadeIn().show();
							break;	
						}
						case "#Movie":
						{
							$("span.arrow_status_maker").fadeIn(100).animate({marginLeft:163},200);
							$('#status_maker div.inner_status_maker_wrapper').hide();
							$('#movie').fadeIn().show();
							break;	
						}
						case "#Book":
						{
							$("span.arrow_status_maker").fadeIn(100).animate({marginLeft:243},200);
							$('#status_maker div.inner_status_maker_wrapper').hide();
							$('#book').fadeIn().show();
							break;	
						}
					}
						
				});
				
				//Tombol Status Biasa
				$('#btn_status span').on('click span', function(e) {
					var btn = $(this).attr('id');
					
					if(btn == "foto"){
						$('#konten_btn_status .konten_video').hide();
						$('#konten_btn_status .konten_video').animate({marginLeft:0},200).fadeOut();
						$('#konten_btn_status .konten_foto').show().animate({marginLeft:20},200);
						$('#video').removeClass('active').css('cursor','pointer');
						$(this).addClass('active').css('cursor','default');
					}
				});

				
		//End of ready Function		
		});
		$(window).ready(function(e) {
			$('#konten').slimscroll({
				    position: 'right',
					height: '520px'
				}).bind('slimscrolling', function(e, pos) {
					
					if(pos >= 5){
						$('#shadow').show();
						$('#kontrol_status a').fadeTo(50,0.4);
						$('#kontrol_status a').hover(
						function(){
							$(this).fadeTo(100,1);
							},function(){
									$(this).fadeTo(100,0.4);
								});
					}else{
						$('#shadow').fadeOut(300);
						$('#kontrol_status a').fadeTo(50,1);
					}
      			});
				
				
				$('#isi_attach').slimscroll({
				    position: 'right',
					height: '220px',
					width:'720px',
					railVisible: false,
					alwaysVisible: false
				})
				
				
				$('#hasil_pencarian, #online_people').slimscroll({
					color:'#ffffff',
				    position: 'right',
					height: '508px',
					width:'320px',
					railVisible: false,
					railColor: '#fff',
					railOpacity: 0.8,
					alwaysVisible: false
				})
				
				$('#tampil_data_status').slimscroll({
					color:'#ffffff',
				    position: 'right',
					height: '345px',
					width:'685px',
					railVisible: false,
					railColor: '#fff',
					railOpacity: 0.8,
					alwaysVisible: false
				})

				
		});
		//Slim Scroll Bar 
		