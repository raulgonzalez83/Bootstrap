var API_BASE_URL = "https://api.github.com";
var USERNAME = "raulgonzalez83";
var PASSWORD = "gonzalez83";
$.ajaxSetup({
    headers: { 'Authorization': "Basic "+ btoa(USERNAME+':'+PASSWORD) }
});


$("#button_Delete_Repositories").click(function(e){
e.preventDefault();
$("#Delete_result").text('');
	if ($("#Del_Name").val()==""){
	$('<div class="alert alert-danger"> <strong>Oh!</strong> No has puesto un nombre </div>').appendTo($("#Delete_result"));
	}
else
	DeleteRepo($("#Del_Name").val());
});


function DeleteRepo(Nombre){

var url = API_BASE_URL + 'repos/'+USERNAME+'/'+Nombre;

$("#RepositorieEdit_result").text('');

$.ajax({
		url : url,
		type : 'DELETE',
		crossDomain : true,
		dataType : 'json',
}).done(function(data, status, jqxhr) {
		$('<div class="alert alert-success"> <strong>Ok!</strong> Repository Deleted</div>').appendTo($("#Delete_result"));
	
	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#Delete_result"));
		});
}
