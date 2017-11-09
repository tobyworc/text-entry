$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var text = $('#textinput').val();
	alert(text);
	localStorage.inputText = text;
}

//function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
	
	//var inputText = $('#textinput').val();
	
	localStorage.inputTxt = inputText;
	
//}