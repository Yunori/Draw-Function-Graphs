$("#search").prop("disabled",false);
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
	$("#functions").append('<div id="'+nb+'"style="display:inline-block; color:white;"></div>');
	//$("#functions").append('<p>fonction 1</p><input type="text" placeholder="fonction 1" id="input1"></input>');
});

$("#go").click(function() {
	$(this).prop("disabled",true);
	$("#create").prop("disabled",true);
	$("#graph").text('');
	var input1 = $("#input1").val();
	var input2 = $("#input2").val();
	var input3 = $("#input3").val();
	var input4 = $("#input4").val();
	//for(var x = 1; $("#input"+x).val() != ''; x++)
		//var input+x = $("#input"+x).val();
	var xint = $("#xint").val();
	var yint = $("#yint").val();
	var zoom = $("#zoom").val();
	var start = $("#start").val();
	var end = $("#end").val();
	var pasx = $("#pasx").val();
	var decalx = $("#decalx").val();
	var decaly = $("#decaly").val();
	
	$.ajax(
		{
			url: "./sandbottle.php",
			type: "post",
			data: {input1: input1, input2: input2, input3: input3, input4: input4, xint: xint, yint: yint, zoom: zoom, start: start, end: end, pasx: pasx, decalx: decalx, decaly: decaly},
			error: function(data){console.log("error");},
			success: function(data) {$("#graph").append(data); $("#go").prop("disabled",false); $("#create").prop("disabled",false);}
		});
});