$(document).ready(function(){
	$('#btnPing').click(function(event){
		event.preventDefault();

		$.get('/api/ping', function(data, status, xhr){
			console.log(data);
		});
	});
});
