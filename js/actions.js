// Funcionalidad
/*$(document).ready(function(e) {
	document.addEventListener('deviceready',function(){
	var src="";
	var nom="";
    $('#main ul li a').tap(function(){
		src=$(this).attr('rel');
		nom=$(this).text();
		$('#descargar').attr('title',nom);
	});
	$('#descargar a').tap (function(){
		if($(this).text()=='Descargar'){
			//Descarga de Archivos con transaction
			var fileTransfer = new FileTransfer();
			filTransfer.download(src,'file:///mnt/sdcard/ringtoneApp/'+nom+'.mp3',function(entry){
				//Verificar que no existia el nombre de la carpeta
				navigator.notification.alert("Archivos Descargado", null, "Completado", "OK");
			},function(error) {
				navigator.notification.alert("upload error code" + error.code, null, "Error", "Aceptar");
			});
		}
		if($(this).text()=='Probar'){
			//Play Media
             // Create Media object from src
            my_media = new Media(src, null, function(){
            alert('Error');
            });

            // Play audio
            my_media.play();
    
		}
	});
	},false);
	$('#descargar a').tap (function(){
		$('.over').show();
		alert('');
	});
});*/
$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
	var src = "";
	var nom="";
    $('#main ul li a').tap(function(){
		src=$(this).attr('rel');
		nom=$(this).text();
		$('#descargar').attr('title',nom);
	});
    var audio = document.getElementById('Reproductor');
	$('#descargar a').tap(function(){
		if($(this).text()== 'Descargar'){//Accion de descargar
		var ruta="";
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
			 ruta = fileSystem.root.fullPath;
			 var fileTransfer = new FileTransfer();
			filTransfer.download(src,ruta+'/ringtoneApp/'+nom+'.mp3',function(entry){
				//Verificar que no existia el nombre de la carpeta
				navigator.notification.alert("Archivo Descargado", null, "Completado", "OK");
			},function(error) {
				navigator.notification.alert("Código de error" + error.code, null, "Error", "Aceptar");
			}); 
		}, null);		
		}else{//Reproducir Audio
		audio.src = src;
		audio.play();
		}
	});
	}, false);
});