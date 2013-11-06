// jQuery code goes here.

$(document).ready(function() {

    // Your code here.

	$("form").submit( function( event ) {
		event.preventDefault();
		
		var input = $("#textinput").val();
		var btn = $('<button class="btn-remove">X</button>');
		var li = $("<li>" + input + "</li>");

		li.append(btn)
		$('#list').append(li);
		li.slideDown();
	});
	$('#list').on('click', '.btn-remove', function() { $(this).closest('li').slideUp();
	});
});