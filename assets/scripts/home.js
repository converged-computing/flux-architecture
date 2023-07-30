var sr = ScrollReveal({
	origin   : "bottom",
	distance : "64px",
	duration : 800,
	delay    : 0,
	scale    : 1
});

sr.reveal('.projects-list a');
sr.reveal('.posts-list a');

$("#searchbox").on("keyup", function () {
    var search = $(this).val().trim().toLowerCase();
    sr.reveal('.card');
    $('.card').hide();
    $(".card").show().filter(function () {
        return $(this).text().toLowerCase().indexOf(search) < 0;
    }).hide();        
});
