var API_BASE_URL = "https://api.github.com";
var USERNAME = "raulgonzalez83";
var PASSWORD = "gonzalez83";

/*
$("#button_get_gist").click(function(e) {
	e.preventDefault();
	getGist($("#gist_name").val());
});



function getGist(gist_name) {
	var url = 'https://api.github.com/gists/' + gist_name;

	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
	}).done(function(data, status, jqxhr) {
				var gist = data;
				
					$('<h4> url: ' + gist.url + '</h4>').appendTo($('#gist_result'));
					$('<p>').appendTo($('#gist_result'));	
					$('<strong> ID: </strong> ' + gist.id + '<br>').appendTo($('#gist_result'));
					$('<strong> description: </strong> ' + gist.description + '<br>').appendTo($('#gist_result'));
					$ ('<strong> html url : </strong> ' + gist.html_url + '<br>').appendTo($('#gist_result'));
					$('</p>').appendTo($('#gist_result'));
				
				

	}).fail(function() {
		$("#repos_result").text("No repositories.");
	});

}

*/
$("#button_get_repo").click(function(e) {
	e.preventDefault();
	getRepo($("#repository_name").val());
});


function getRepo(repository_name) {
	var url = API_BASE_URL + '/repos/' + USERNAME + '/' + repository_name;
	$("#get_repo_result").text('');

	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
	}).done(function(data, status, jqxhr) {

				var repo = data;

				$("#get_repo_result").text('');
				$('<h4> Name: ' + repo.name + '</h4>').appendTo($('#get_repo_result'));
				$('<p>').appendTo($('#get_repo_result'));	
				$('<strong> ID: </strong> ' + repo.id + '<br>').appendTo($('#get_repo_result'));
				$('<strong> URL: </strong> ' + repo.html_url + '<br>').appendTo($('#get_repo_result'));
				$('<strong> Description: </strong> ' + repo.description + '<br>').appendTo($('#get_repo_result'));
				$('</p>').appendTo($('#get_repo_result'));

			}).fail(function() {
				$('<div class="alert alert-danger"> <strong>Oh!</strong> Repository not found </div>').appendTo($("#get_repo_result"));
	});

}
