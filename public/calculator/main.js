$(function() { 

	$("#send-form-pd").click(function() { //Change
		var th = $(this);
			var name = 1;
            var phone = $("input#phone_act").val();
			var bell = 1;
            var pd = 'zam';
		  
	
		$.ajax({
			type: "POST",
			url: "recall_me1.php", //Change
			data: {
				name: name,
                phone: phone,
				bell: bell,
				tyy: pd,
				check : "true"
			}
		}).done(function(rt) {
		console.log(rt)

			   if(rt == 'no_phone'){
			   $('#rt').html("<div class='alert alert-danger'>");
                    $('#rt > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#rt > .alert-danger').append("Не отправлено - укажите телефон!");
                    $('#rt > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			 
			
			if(rt == 1){
			   targetCounter('sendForm');
				
				ym(34712515,'reachGoal','send_popup')
                    $('#rt').html("<div class='alert alert-success'>");
                    $('#rt > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#rt > .alert-success').append("<strong>Спасибо! Ваше сообщение отправлено.</strong>");
                    $('#rt > .alert-success').append('</div>');
                    $('#contactForm').trigger("reset");
                    setTimeout(function() {
                        $(".closeBtn").click();
                    }, 2000);}
		});
		return false;
	});
	
	$("#zv_btn_li").click(function() { //Change
		var th = $(this);
			var name = $("input#name_li").val();
            var phone = $("input#phone_li").val();
			var bell = $("input#time_li").val();
            var pd = 'zam';
		    if ($('#zv_ch_li').is(':checked')){
				var check = 1
			} else {
				var check = 0
			}
	
		$.ajax({
			type: "POST",
			url: "recall_me1.php", //Change
			data: {
				name: name,
                phone: phone,
				bell: bell,
				li: pd,
				check : check
			}
		}).done(function(rt) {
		
			   if(rt == 'No arguments Provided!'){
			   $('#success_li').html("<div class='alert alert-danger'>");
                    $('#success_li > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_li > .alert-danger').append("Вы не ввели никаких данных.");
                    $('#success_li > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			
			   if(rt == 'no_name'){
			   $('#success_li').html("<div class='alert alert-danger'>");
                    $('#success_li > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_li > .alert-danger').append("Не отправлено - укажите имя!.");
                    $('#success_li > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			   if(rt == 'no_phone'){
			   $('#success_li').html("<div class='alert alert-danger'>");
                    $('#success_li > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_li > .alert-danger').append("Не отправлено - укажите телефон!");
                    $('#success_li > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			   if(rt == 'no_check'){
			   $('#success_li').html("<div class='alert alert-danger'>");
                    $('#success_li > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_li > .alert-danger').append("Вы не дали согласие!");
                    $('#success_li > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			
			if(rt == 1){
			   targetCounter('sendForm');
				
				ym(34712515,'reachGoal','zayavka-listing')
                    $('#success_li').html("<div class='alert alert-success'>");
                    $('#success_li > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_li > .alert-success').append("<strong>Спасибо! Ваше сообщение отправлено.</strong>");
                    $('#success_li > .alert-success').append('</div>');
                    $('#contactForm').trigger("reset");
                    setTimeout(function() {
                        $(".close").click();
                    }, 2000);}
		});
		return false;
	});
	
	$("#zv_btn_zkz").click(function() { //Change
		var th = $(this);
			var name = $("input#name_zkz").val();
            var phone = $("input#phone_zkz").val();
			var bell = $("input#time_zkz").val();
            var pd = 'zam';
		    if ($('#zv_ch_zkz').is(':checked')){
				var check = 1
			} else {
				var check = 0
			}
	
		$.ajax({
			type: "POST",
			url: "recall_me1.php", //Change
			data: {
				name: name,
                phone: phone,
				bell: bell,
				zkz: pd,
				check : check
			}
		}).done(function(rt) {
		
			   if(rt == 'No arguments Provided!'){
			   $('#success_zkz').html("<div class='alert alert-danger'>");
                    $('#success_zkz > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_zkz > .alert-danger').append("Вы не ввели никаких данных.");
                    $('#success_zkz > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			
			   if(rt == 'no_name'){
			   $('#success_zkz').html("<div class='alert alert-danger'>");
                    $('#success_zkz > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_zkz > .alert-danger').append("Не отправлено - укажите имя!.");
                    $('#success_zkz > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			   if(rt == 'no_phone'){
			   $('#success_zkz').html("<div class='alert alert-danger'>");
                    $('#success_zkz > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_zkz > .alert-danger').append("Не отправлено - укажите телефон!");
                    $('#success_zkz > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			   if(rt == 'no_check'){
			   $('#success_zkz').html("<div class='alert alert-danger'>");
                    $('#success_zkz > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_zkz > .alert-danger').append("Вы не дали согласие!");
                    $('#success_zkz > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			
			if(rt == 1){
			   targetCounter('sendForm');
				
				ym(34712515,'reachGoal','zakaz-zvonok-banner')
                    $('#success_zkz').html("<div class='alert alert-success'>");
                    $('#success_zkz > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_zkz > .alert-success').append("<strong>Спасибо! Ваше сообщение отправлено.</strong>");
                    $('#success_zkz > .alert-success').append('</div>');
                    $('#contactForm').trigger("reset");
                    setTimeout(function() {
                        $(".close").click();
                    }, 2000);}
		});
		return false;
	});
	
	$("#zv_btn").click(function() { //Change
		var th = $(this);
			var name = $("input#name").val();
            var phone = $("input#phone").val();
			var bell = $("input#time").val();
            var pd = 'zam';
		    if ($('#zv_ch').is(':checked')){
				var check = 1
			} else {
				var check = 0
			}
	
		$.ajax({
			type: "POST",
			url: "recall_me1.php", //Change
			data: {
				name: name,
                phone: phone,
				bell: bell,
				zv: pd,
				check : check
			}
		}).done(function(rt) {
		console.log(rt)
			   if(rt == 'No arguments Provided!'){
			   $('#success_zv').html("<div class='alert alert-danger'>");
                    $('#success_zv > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_zv > .alert-danger').append("Вы не ввели никаких данных.");
                    $('#success_zv > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			
			   if(rt == 'no_name'){
			   $('#success_zv').html("<div class='alert alert-danger'>");
                    $('#success_zv > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_zv > .alert-danger').append("Не отправлено - укажите имя!.");
                    $('#success_zv > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			   if(rt == 'no_phone'){
			   $('#success_zv').html("<div class='alert alert-danger'>");
                    $('#success_zv > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_zv > .alert-danger').append("Не отправлено - укажите телефон!");
                    $('#success_zv > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			   if(rt == 'no_check'){
			   $('#success_zv').html("<div class='alert alert-danger'>");
                    $('#success_zv > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_zv > .alert-danger').append("Вы не дали согласие!");
                    $('#success_zv > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			
			if(rt == 1){
			   targetCounter('sendForm');
				
				ym(34712515,'reachGoal','zakazat-zvonok')
                    $('#success_zv').html("<div class='alert alert-success'>");
                    $('#success_zv > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_zv > .alert-success').append("<strong>Спасибо! Ваше сообщение отправлено.</strong>");
                    $('#success_zv > .alert-success').append('</div>');
                    $('#contactForm').trigger("reset");
                    setTimeout(function() {
                        $(".close").click();
                    }, 2000);}
		});
		return false;
	});
	    
	$("#zam_btn").click(function() { //Change
		var th = $(this);
			var name = $("input#name2").val();
            var phone = $("input#phone2").val();
			var bell = $("input#time2").val();
            var pd = 'zam';
		    if ($('#ck_id2').is(':checked')){
				var check = 1
			} else {
				var check = 0
			}
	
		$.ajax({
			type: "POST",
			url: "recall_me1.php", //Change
			data: {
				name: name,
                phone: phone,
				bell: bell,
				zam: pd,
				check : check
			}
		}).done(function(rt) {
		
			   if(rt == 'No arguments Provided!'){
			   $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-danger').append("Вы не ввели никаких данных.");
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			
			   if(rt == 'no_name'){
			   $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-danger').append("Не отправлено - укажите имя!.");
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			   if(rt == 'no_phone'){
			   $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-danger').append("Не отправлено - укажите телефон!");
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			   if(rt == 'no_check'){
			   $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-danger').append("Вы не дали согласие!");
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			
			if(rt == 1){
			   targetCounter('sendForm');
				
				ym(34712515,'reachGoal','vizov-zamer-forma')
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-success').append("<strong>Спасибо! Ваше сообщение отправлено.</strong>");
                    $('#success > .alert-success').append('</div>');
                    $('#contactForm').trigger("reset");
                    setTimeout(function() {
                        $(".close").click();
                    }, 2000);}
		});
		return false;
	});
	
	$("#zam_btn_sh").click(function() { //Change
		var th = $(this);
			var name = $("input#name3").val();
            var phone = $("input#phone3").val();
			var bell = $("input#time3").val();
            var pd = 'zam';
		    if ($('#ck_id3').is(':checked')){
				var check = 1
			} else {
				var check = 0
			}
	
		$.ajax({
			type: "POST",
			url: "recall_me1.php", //Change
			data: {
				name: name,
                phone: phone,
				bell: bell,
				zam_sh: pd,
				check : check
			}
		}).done(function(rt) {
		
			   if(rt == 'No arguments Provided!'){
			   $('#success_sh').html("<div class='alert alert-danger'>");
                    $('#success_sh > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_sh > .alert-danger').append("Вы не ввели никаких данных.");
                    $('#success_sh > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			
			   if(rt == 'no_name'){
			   $('#success_sh').html("<div class='alert alert-danger'>");
                    $('#success_sh > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_sh > .alert-danger').append("Не отправлено - укажите имя!.");
                    $('#success_sh > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			   if(rt == 'no_phone'){
			   $('#success_sh').html("<div class='alert alert-danger'>");
                    $('#success_sh > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_sh > .alert-danger').append("Не отправлено - укажите телефон!");
                    $('#success_sh > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			   if(rt == 'no_check'){
			   $('#success_sh').html("<div class='alert alert-danger'>");
                    $('#success_sh > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_sh > .alert-danger').append("Вы не дали согласие!");
                    $('#success_sh > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			
			if(rt == 1){
			   targetCounter('sendForm');
				
				ym(34712515,'reachGoal','vizov-zamer-shapka')
                    $('#success_sh').html("<div class='alert alert-success'>");
                    $('#success_sh > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_sh > .alert-success').append("<strong>Спасибо! Ваше сообщение отправлено.</strong>");
                    $('#success_sh > .alert-success').append('</div>');
                    $('#contactForm').trigger("reset");
                    setTimeout(function() {
                        $(".close").click();
                    }, 2000);}
		});
		return false;
	});
	
	
	
	
  /*  $("form:not(.jot-form) input, form:not(.jot-form) textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {},
        submitSuccess: function($form, event) {
            event.preventDefault();
            targetCounter('submitForm');
            var name = $("input#name").val();
            var phone = $("input#phone").val();
            var email = $("input#email").val();
			var bell = $("input#bell").val();
            var message = $("textarea#message").val();
            var firstName = name;
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "recall_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
					bell: bell
                },
                cache: false,
                success: function() {
                    targetCounter('sendForm');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-success').append("<strong>Спасибо! Ваше сообщение отправлено.</strong>");
                    $('#success > .alert-success').append('</div>');
                    $('#contactForm').trigger("reset");
                    setTimeout(function() {
                        $("#myModal").modal('hide');
                    }, 4000);
                },
                error: function() {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-danger').append("<strong>Извините " + firstName + " кажется проблемы на сервере отправки писем...</strong> Вы не могли бы написать напрямую на адрес <a href='youremail@mail.com?Subject=Перезвоните мне'>youremail@mail.com</a> ? Приносим извинения за это неудобство!");
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });*/

	
	
	
	
	/*

$("#contactForm1").submit(function() {
            var name = 'Pd';
            var phone = $("input#phonePD").val();
            var email = 1;
			var bell = 1;
            var tyy = 'pd';

            $.ajax({
                url: "recall_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
					bell: bell,
					tyy: 'pd'

                },
                cache: false,
                success: function(rt) {
					console.log(rt)
                    targetCounter('sendForm');
                    $('#rt').html("<div class='alert alert-success'>");
                    $('#rt > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#rt > .alert-success').append("<strong>Спасибо! Ваше сообщение отправлено.</strong>");
                    $('#rt > .alert-success').append('</div>');
                    $('#contactForm1').trigger("reset");
                    setTimeout(function() {
                        $('.close-hover').click();
                    }, 4000);
					//ym(34712515, 'reachGoal', 'send_popup');
					yaCounter34712515.reachGoal("send_popup");
					return true;
                },
                error: function() {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-danger').append("<strong>Извините " + firstName + " кажется проблемы на сервере отправки писем...</strong> Вы не могли бы написать напрямую на адрес <a href='youremail@mail.com?Subject=Перезвоните мне'>youremail@mail.com</a> ? Приносим извинения за это неудобство!");
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
                },
            })

});
*/
/*$("#zam_form").submit(function() {
            var name = $("input#name").val();
            var phone = $("input#phone").val();
            var email = $("input#email").val();
			var bell = $("input#bell").val();
            var pd = 'zam';

            $.ajax({
                url: "recall_me.php",
                type: "POST",
                data: {
                    name_zam: name,
                    phone_zam: phone,
                    email_zam: email,
					bell_zam: bell,
					zam: pd

                },
                cache: false,
                success: function() {
                    targetCounter('sendForm');
                    $('#rt').html("<div class='alert alert-success'>");
                    $('#rt > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#rt > .alert-success').append("<strong>Спасибо! Ваше сообщение отправлено.</strong>");
                    $('#rt > .alert-success').append('</div>');
                    $('#contactForm1').trigger("reset");
                    setTimeout(function() {
                        $('.close-hover').click();
                    }, 4000);
					//ym(34712515,'reachGoal','vizov-zamer-forma')
					yaCounter34712515.reachGoal("vizov-zamer-forma");
					
					return true;
                },
                error: function() {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-danger').append("<strong>Извините " + firstName + " кажется проблемы на сервере отправки писем...</strong> Вы не могли бы написать напрямую на адрес <a href='youremail@mail.com?Subject=Перезвоните мне'>youremail@mail.com</a> ? Приносим извинения за это неудобство!");
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
                },
            })

});*/


    $(".slider-bg .slider2").click(function() {
        targetCounter('zvonok');
    });
    $('.viz_zamer button').click(function() {
        targetCounter('zamer');
    });
    $('.link-button').click(function() {
        targetCounter('zayavka');
    });
    $('#calculate').click(function() {
        targetCounter('calculate');
    });
    $('#form_calc').submit(function() {
        targetCounter('submitForm');
        targetCounter('sendForm');
    });
    $("#form_calc input[type=submit]").click(function(e) {
        e.preventDefault();
        
        var d0 = $("#d[0]").val();
        var d1 = $("#d[1]").val();
        var d2 = $("#d[2]").val();
        var d3 = $("#d[3]").val();
        var d4 = $("#d[4]").val();
        var msg = $('#form_calc').serialize();
		
		if ($('#calc_id').is(':checked')){
		} else {
		$('#success_sh').html("<div class='alert alert-danger'>");
        $('#success_sh > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
        $('#success_sh > .alert-danger').append("Вы не дали согласие!");
        $('#success_sh > .alert-danger').append('</div>');
			return
		}

        $.ajax({
            url: "recall_calc1.php",
            type: "POST",
            data: msg,
            cache: false,
            success: function(rt) {
                console.log(rt);
				
				if(rt == 1){
					
					ym(34712515,'reachGoal','zayavka-kalk')
                    $('#success_sh').html("<div class='alert alert-success'>");
                    $('#success_sh > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_sh > .alert-success').append("<strong>Спасибо! Ваше сообщение отправлено.</strong>");
                    $('#success_sh > .alert-success').append('</div>');
                    $('#form_calc').trigger("reset");
				}
			if(rt == 'no_name'){
			   $('#success_sh').html("<div class='alert alert-danger'>");
                    $('#success_sh > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_sh > .alert-danger').append("Не отправлено - укажите имя!.");
                    $('#success_sh > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			   if(rt == 'no_phone'){
			   $('#success_sh').html("<div class='alert alert-danger'>");
                    $('#success_sh > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_sh > .alert-danger').append("Не отправлено - укажите телефон!");
                    $('#success_sh > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
			   if(rt == 'no_check'){
			   $('#success_sh').html("<div class='alert alert-danger'>");
                    $('#success_sh > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success_sh > .alert-danger').append("Вы не дали согласие!");
                    $('#success_sh > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
			   }
            },
            error: function() {
                console.log('error');
                $('#form_calc').trigger("reset");
            },
        });
    });

	$(function(){
		$("#send-form-zamer").click(function(){
			var name = $('#name-zamer').val(),
				phone = $('#phone-zamer').val(),
				adress = $('#address-zamer').val(),
				msg = $('#msg-zamer').val();

			if(name == '' || phone == '' || adress == ''){
				alert('Не заполнены обязательные поля!');
				return false;
			}

			$.ajax({
				url: "recall_me1.php",
				type: "POST",
				data: {name: name, phone: phone, adress: adress, msg: msg},
				success: function(){
					alert('Ваша заявка отправлена! Спасибо!');
					$('#send-zamer .close').click();
				}
			});
		});
	});




    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
		blazy.revalidate();
    });
});
$('#name').focus(function() {
    $('#success').html('');
});

/*$(function() {
    $("#slider").responsiveSlides({
        auto: true,
        nav: true,
        speed: 3000,
        timeout: 5000,
        random: false,
        manualControls: '#slider-pager',
        before: function(){
            $(this).find('.wow').addClass('animated');
            new WOW().init();
        }
    });
    new WOW().init();
});*/


function targetCounter(target) {
    if (typeof yaCounter34712515 !== "undefined") {
        yaCounter34712515.reachGoal(target);
    }
}

jQuery(document).ready(function() {
 // Javascript to enable link to tab
var hash = document.location.hash;
var prefix = "tab_";
if (hash) {
    $('.nav-tabs a[href="'+hash.replace(prefix,"")+'"]').tab('show').scrollTop(0);
	
}

	$('.nav-tabs.people-block a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

	if($('.nav-tabs.wot_tabs').length){
		$('.nav-tabs.wot_tabs a').click(function(){
			let href = $(this).data('href');

			$('html, body').animate({
				scrollTop: $(href).offset().top - 90
			}, 500);
		});
	}

});
$(function(){
    $('ul.service-menu li').each(function () {if (this.getElementsByTagName("a")[0].href == location.href) this.className = "active";});

});
$(document).ready(function() {
//прикрепляем клик по заголовкам acc-head
$('#accordeon .acc-head').on('click', f_acc);
});

function f_acc(){
//скрываем все кроме того, что должны открыть
  $('#accordeon .acc-body').not($(this).next()).slideUp(500);
// открываем или скрываем блок под заголовоком, по которому кликнули
    $(this).next().slideToggle(1000);
blazy.revalidate();
}

$('.section-question').click(function(){
  $(this).next('.section-answer').slideToggle();
});
// модальное городов
document.addEventListener('DOMContentLoaded', openModal, false);
function openModal() {
[].forEach.call(document.querySelectorAll('.prefix-open'), function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('.prefix-Dialog').classList.toggle('active');
        });
	});
}
$(document).ready(function() {
	$('.jsclose').click(function(){
		$('.prefix-Dialog').removeClass("active");
	});
});

//*************Всплывающее окно*************************
$(document).ready(function(){
	if (!jQuery.cookie('form-beforeupdate')) {
		
		setTimeout(function() {
			$('.form-beforeupdate').show();
			$('.overlay').show();
			jQuery.cookie('form-beforeupdate', 'fbfupdate', {expires: 1});
		}, 20000);
	}
});

// Закрываем модальное подарка
function closeActionFormBU() {
	$('.form-beforeupdate').hide();
	$('.overlay').hide();
}


jQuery(window).scroll(function() {
    var the_top = jQuery(document).scrollTop();
    if (the_top > 60) {
        jQuery('.btn_bord').addClass('mobile_bord');
    }
    else {
        jQuery('.btn_bord').removeClass('mobile_bord');
    }
});


$(document).ready(function () {

    $('.tabi_price ul.tabs-price li').click(function () {
        $('.tabi_price li').removeClass('active');
        $(this).addClass('active');
        $('.tabi_price ul.tabs-rezult li').eq($(this).index()).addClass('active');
    });

    $('.tabi_price ul.tabs-rezult li').eq($('.tabi_price ul.tabs-price li.active').index()).addClass('active');
});
$(document).ready(function () {

    $('.photo_tab ul.new_tabfoto li').click(function () {
        $('.photo_tab li').removeClass('active');
        $(this).addClass('active');
        $('.photo_tab ul.new_tabfototwo li').eq($(this).index()).addClass('active');
    });

    $('.photo_tab ul.new_tabfototwo li').eq($('.photo_tab ul.new_tabfoto li.active').index()).addClass('active');
});
$(document).ready(function () {
	$('.acc-head a').html(function(_, oldHtml) { return oldHtml.replace(/\▼/g, ''); })
	let urlhash = document.URL.substr(document.URL.indexOf('#')+1);
	//$('html,body').stop().animate({ scrollTop: $('#'+urlhash+'').offset().top - 380 }, 1000);
});

// запрет скролла карты без клика
document.addEventListener('click', function (e) {
	var map = document.querySelector('#map-wrap iframe')
	if (e.target.id === 'map-wrap') {
		map.style.pointerEvents = 'all'
	} else {
		//map.style.pointerEvents = 'none'
	}
});

// Плавный скролл в фото сотрудников
$(function() {
   $("[data-scroll]").on("click", function(event) {
      event.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      $("html, body").animate({
         scrollTop: elementOffset - 130
      }, 700);
   });
});

$(window).on("load", function(){
    $(".before-after").twentytwenty({
        no_overlay: true
    });
});