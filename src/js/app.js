$("a.modal-anchor").on("click", function(e){
	$(".projects-modal").addClass('projects-modal-on-hover');
	$("body").addClass('on-modal-open');
	$(".projects-modal .container").hide();
	$("#"+this.dataset.modalId).show();
	e.preventDefault();
	e.stopPropagation();
})

$(".close-icon").on("click", function(e){
	$('.projects-modal-on-hover').removeClass("projects-modal-on-hover");
	$("body").removeClass('on-modal-open');
	e.preventDefault();
	e.stopPropagation();	
})