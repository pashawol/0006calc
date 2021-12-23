var calc = {};
calc.init = function () {
    calc.ind = 0;
    calc.curreny = " руб.";    
    var $calc = $("#calc");

    calc.e = {};
    calc.e.container = $calc;
    calc.e.btn = $calc.find(".type_btn");
    calc.e.result_total = $("#result-total");
    calc.e.result_discount = $("#result-discount");
    calc.e.result_materials = $("#result-materials");
    calc.e.result_worktime = $("#result-worktime");
    calc.e.form = $calc.find("form");
    calc.e.button = $("#calculate");
    calc.e._form = $calc.next();

    calc.e.button.click(function () {
        calc.calculate();
        calc.e._form.show();
    });
};
calc.format_price = function (price) {
    price = Math.round(price * 100)/100;
    price = ("" + price).split(".");
    var p = price[0].split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
    return price[1] ? p + "." + price[1] : p;
};
calc.calculate = function () { 
    calc.ind = $('#categor option:selected').val();
    var result = 0;
    var discount = 0;
    var materials = 0;
    var worktime = 0;
    var dataForm = $(".calc .type_btn.active").text()+'\n';
    calc.e.form.find("input:text, select").not('#categor').each(function(){
        var $this = $(this);
        if ($this.is(":text")) {
            result += (parseInt($this.val(), 10) * $this.attr("data-val").split(" ")[calc.ind]) || 0;
            dataForm += $this.parents('tr:first').find('th').text()+' '+$this.val()+'\n';
            
        } else {
            result += +$this.val().split(" ")[calc.ind];
            dataForm += $this.parents('tr:first').find('th').text()+' '+$this.find('option:selected').text()+'\n';
        }
        
    });
    if ($('input[name="square"]').val() !=""){
      materials = parseInt($('#calc').data('materials').split(" ")[calc.ind]) * $('input[name="square"]').val();
	
      $('#result-materials').html(calc.format_price(materials) + calc.curreny);
      worktime = parseFloat($('#calc').data('worktime').split(" ")[calc.ind]) * parseFloat($('input[name="square"]').val());
      $('#result-worktime').html(worktime.toFixed(0) + ' дней');
    }
    discount = result - (result * calc.discount_percent / 100);
    calc.e.result_total.text(calc.format_price(result) + calc.curreny);
    /*calc.e.result_discount.text(calc.format_price(discount) + calc.curreny);*/
    dataForm+= '\n\nИтого: '+calc.format_price(result) + calc.curreny+'\nЧерновые материалы: ' + calc.format_price(materials) + calc.curreny + '\nСроки выполнения: ' + worktime.toFixed(0) + 'дней';
    calc.e._form.find('#data textarea').text(dataForm);
};