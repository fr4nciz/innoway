$(document).on("scroll", function () {
	if ($(document).scrollTop() > 100) {
        
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {             
            $("header").addClass("");
           } else {
       
            $("header").addClass("small");
                   }
	
        $('.home').addClass("mghome");
       
        
        $('.sec-home').addClass("mghome");
	
	} else {
		$("header").removeClass("small");

        $('.home').removeClass("mghome");
        $('.sec-home').removeClass("mghome");
	}
});


$(document).ready(function () {

  $(".lupa").click(function() {
    $('#modal-busca').modal('show');
  });

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
		$(this).toggleClass('active');
	});

    $('.fechar-menu').on('click', function () {
		$('#sidebar').toggleClass('active');	
        $('#sidebarCollapse').toggleClass('active');
	});

    $('.bt-data').click(function() {
        $(this).fadeOut();
        $('.header-content ').toggleClass('act')
      });

      $('.fechar-h').click(function() {   
        $('.bt-data').fadeIn();   
        $('.header-content ').removeClass('act')
      });


      

   
});

x = 0
function changeOwner() {
    if (!x) {
        x=1
        document.querySelector('body').classList.remove('partner-report')
        document.querySelector('body').classList.add('own-report')
    } else {
        x=0
        document.querySelector('body').classList.remove('own-report')
        document.querySelector('body').classList.add('partner-report')

    }

}


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
