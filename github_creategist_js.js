var API_BASE_URL = "https://api.github.com";
var USERNAME = "raulgonzalez83";
var PASSWORD = "gonzalez83";

$.ajaxSetup({
    headers: { 'Authorization': "Basic "+ btoa(USERNAME+':'+PASSWORD) }
});


$("#button_create_repos").click(function(e) {
	e.preventDefault();
	
	 var newRepos = {
	 "description": $("#description_to_create").val(),
		"public": true,
		"files": {
		"Nwdfnlsadngklgalsgn": {  
      "content": $("#gist_name_to_create").val()
			}
	
		}
	 }


	
		if($("#description_to_create").val()=="" ){//Condición si el campo Description está vacio
		//$("#create_result").text("Campo vacío.");
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Rellena el campo de descripción </div>').appendTo($("#create_result"));
		
	}
			if($("#gist_name_to_create").val()=="" ){//Condición si el campo Content está vacio
		//$("#create_result").text("Campo vacío.");
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Rellena el campo de contenido del Gist </div>').appendTo($("#create_result"));
		
	}
	else{
		createRepos(newRepos);
	}
	
});


function createRepos(newRepos) {
	var url = API_BASE_URL + '/user';
	var data = JSON.stringify(newRepos);

	$("#create_result").text('');

	$.ajax({
		url : url,
		type : 'POST',
		crossDomain : true,
		dataType : 'json',
		data : data,
	}).done(function(data, status, jqxhr) {
		$('<div class="alert alert-success"> <strong>Ok!</strong> Repository Created</div>').appendTo($("#create_result"));				
  	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#create_result"));
	});

}
