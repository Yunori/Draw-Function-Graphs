$("#go").prop("disabled",false);
$("#create").prop("disabled",false);
$("#input1").val('3*((8/10*x^3)/(3/2*x^2-50))');
$("#input2").val('x^2');
$("#input3").val('3*x+5');
$("#input4").val('4*x^2');
$("#xint").val('7');
$("#yint").val('1');
$("#zoom").val('0.5');
$("#start").val('-100');
$("#end").val('100');
$("#pasx").val('0.1');
$("#decalx").val('0');
$("#decaly").val('0');

var nb = 4;
$("#create").click(function() {
	//var nb = 999;
	$("#functions").append('<div id="'+nb+'"style="display:inline-block; color:white;">');
	$("#functions").append('<p>fonction X</p><input type="text" placeholder="fonction X" id="inputX"></input>');
	//if pair
	$("#functions").append('</div>');
});

$("#go").click(function() {
	$(this).prop("disabled",true);
	$("#create").prop("disabled",true);
	$("#graph").text('');

	var iarr = [[$("#input1").val(), $("#input2").val(), $("#input3").val(), $("#input4").val()],
	[$("#zoom").val(), $("#start").val(), $("#end").val(), $("#xint").val(), $("#yint").val(), $("#pasx").val(), $("#decalx").val(), $("#decaly").val()]
	];

	$.ajax(
		{
			url: "./sandbottle.php",
			type: "post",
			data: {iarr: iarr},
			error: function(data){console.log("error");},
			success: function(data) {$("#graph").append(data); $("#go").prop("disabled",false); $("#create").prop("disabled",false);}
		});
});
