$(document).ready(function() {


	$('#formid').on('submit', function(e){
	  e.preventDefault();

	  var input = $('textarea').val();
		//console.log(typeof input);
		postFile(input);

	});


	var postFile = function(input) {
		$.ajax({
			url: 'http://127.0.0.1:7000',
			type: 'POST',
			data: input,
			contentType: 'application/json',
			success: function(response) {
				console.log('Ajax success!');
				console.log(response)
			},
			error: function() {
				//console.log(error);
				console.log('Ajax post error!');
			},
		});



	};
	


});



