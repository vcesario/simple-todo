//cross list item
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
	e.stopPropagation();
})

//add todo
$("input[type='text']").keypress(function(e) {
	if (e.which === 13){
		var todoText = $(this).val();
		if (todoText !== ""){
			$(this).val("");
			$("ul").append("<li><span><i class=\"fa fa-trash-alt\"></i></span> " + todoText + "</li>");
		}
	}
});

//toggle input
$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
})