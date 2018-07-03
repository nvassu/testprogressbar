var value3 = 0;
var value1 = 0; 
var value2 = 0;

tb = document.getElementById("tb"),
progress1 = document.getElementById("progress1"); 
function increase25(){
 var sel_id = $('#multi-bar').val();
	 if($('#multi-bar').val() == "progressbar1"){
		 value1 = value1 + 25;  
		 $("#tb1").val(value1);
		 $("#progressbar1 .progress-bar").css("width", value1+"%");
		 document.getElementById("htmlval1").innerHTML = value1+"%";
	 }
	 if($('#multi-bar').val() == "progressbar2"){
		 value2 = value2 + 25;  
		 $("#tb2").val(value2);
		 $("#progressbar2 .progress-bar").css("width", value2+"%");
		 document.getElementById("htmlval2").innerHTML = value2+"%";
	 }
	 if($('#multi-bar').val() == "progressbar3"){
		 value3 = value3 + 25;  
		 $("#tb2").val(value2);
		 $("#progressbar3 .progress-bar").css("width", value3+"%");
		 document.getElementById("htmlval3").innerHTML = value3+"%";
	 }

} 
function decrease25(){ 
	if($('#multi-bar').val() == "progressbar1"){ 
		value1 = value1 - 25;
		if(value1 < 0){
		 $("#tb1").val(0);
		 $("#progressbar1 .progress-bar").css("width", 0+"%");
		 document.getElementById("htmlval1").innerHTML = 0+"%";
		 value1 = 0;
		}else{
			$("#tb1").val(value1);
			$("#progressbar1 .progress-bar").css("width", value1+"%");
			document.getElementById("htmlval1").innerHTML = value1+"%";
		}
	}
	if($('#multi-bar').val() == "progressbar2"){
		 value2 = value2 - 25;  
		 if(value2 < 0){
			$("#tb2").val(0);
			$("#progressbar2 .progress-bar").css("width", 0+"%");
			document.getElementById("htmlval2").innerHTML = 0+"%";
			value2 = 0;
		 }else{
			$("#tb2").val(value2);
			$("#progressbar2 .progress-bar").css("width", value2+"%");
			document.getElementById("htmlval2").innerHTML = value2+"%";
		 }
	}
	if($('#multi-bar').val() == "progressbar3"){
		 value3 = value3 - 25;  
		 if(value3 < 0){
			$("#tb3").val(0);
			$("#progressbar3 .progress-bar").css("width", 0+"%");
			document.getElementById("htmlval3").innerHTML = 0+"%";
			value3 = 0;
		 }else{
			$("#tb3").val(value3);
			$("#progressbar3 .progress-bar").css("width", value3+"%");
			document.getElementById("htmlval3").innerHTML = value3+"%";
		 }
	}
} 
function increase10(){ 
	if($('#multi-bar').val() == "progressbar1"){
		 value1 = value1 + 10;  
		 $("#tb1").val(value1);
		 $("#progressbar1 .progress-bar").css("width", value1+"%");
		 document.getElementById("htmlval1").innerHTML = value1+"%";
	}
	if($('#multi-bar').val() == "progressbar2"){
		 value2 = value2 + 10;  
		 $("#tb2").val(value2);
		 $("#progressbar2 .progress-bar").css("width", value2+"%");
		 document.getElementById("htmlval2").innerHTML = value2+"%";
	}
	if($('#multi-bar').val() == "progressbar3"){
		 value3 = value3 + 10;  
		 $("#tb2").val(value3);
		 $("#progressbar3 .progress-bar").css("width", value3+"%");
		 document.getElementById("htmlval3").innerHTML = value3+"%";
	}
} 
function decrease10(){ 
	if($('#multi-bar').val() == "progressbar1"){
		 value1 = value1 - 10;  
		 if(value1 < 0){
		 $("#tb1").val(0);
		 $("#progressbar1 .progress-bar").css("width", 0+"%");
		 document.getElementById("htmlval1").innerHTML = 0+"%";
		 value1 = 0;
		}else{
			$("#tb1").val(value1);
			$("#progressbar1 .progress-bar").css("width", value1+"%");
			document.getElementById("htmlval1").innerHTML = value1+"%";
		}
	}
	if($('#multi-bar').val() == "progressbar2"){
		 value2 = value2 - 10;  
		 if(value2 < 0){
			$("#tb2").val(0);
			$("#progressbar2 .progress-bar").css("width", 0+"%");
			document.getElementById("htmlval2").innerHTML = 0+"%";
			value2 = 0;
		 }else{
			$("#tb2").val(value2);
			$("#progressbar2 .progress-bar").css("width", value2+"%");
			document.getElementById("htmlval2").innerHTML = value2+"%";
		 }
	}
	if($('#multi-bar').val() == "progressbar3"){
		 value3 = value3 - 10;  
		 if(value3 < 0){
			$("#tb3").val(0);
			$("#progressbar3 .progress-bar").css("width", 0+"%");
			document.getElementById("htmlval3").innerHTML = 0+"%";
			value3 = 0;
		 }else{
			$("#tb3").val(value3);
			$("#progressbar3 .progress-bar").css("width", value3+"%");
			document.getElementById("htmlval3").innerHTML = value3+"%";
		 }
	}
	
} 