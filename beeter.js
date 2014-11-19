var API_BASE_URL = "http://localhost:8080/beeter-api";

$("#button_get_sting").click(function(e) {
	e.preventDefault();
	getSting($("#stingid").val());
});

$("#button_get_sting1").click(function(e) {
	e.preventDefault();
	getSting1($("#stingid1").val());
});

$("#button_delete_sting").click(function(e) {
	e.preventDefault();
	deleteSting($("#stingid2").val());
});

$("#button_post_sting").click(function(e) {
	e.preventDefault();
	createSting();
});

$("#button_get_stings").click(function(e) {
	e.preventDefault();
	getStings();
});

$("#button_update_stings").click(function(e) {
	e.preventDefault();
	updateSting();
});

function getSting(stingid) {
	var url = API_BASE_URL + "/stings/" + stingid;

	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
		username : "raul",
		password : "raul",

	}).done(
			function(data, status, jqxhr) {

				var sting = JSON.parse(jqxhr.responseText);

				$(document)
						.ready(
								function() {
									$("#sting_result").text("");
									var $grouplist = $('#sting_result');
									$('<li>' + sting.stingid + '</li>')
											.appendTo($grouplist);
									$(
											'<li>' + "Nombre de usuario: "
													+ sting.username + '</li>')
											.appendTo($grouplist);
									$(
											'<li>' + "Subject: "
													+ sting.subject + '</li>')
											.appendTo($grouplist);
									$(
											'<li>' + "Contenido: "
													+ sting.content + '</li>')
											.appendTo($grouplist);
									$(
											'<li>' + "Fecha: "
													+ sting.creationTimestamp
													+ '</li>').appendTo(
											$grouplist);

								});

			}).fail(function() {
		$("#sting_result").text("Sting no encontrado");
	});

}

function getSting1(stingid) {
	var url = API_BASE_URL + "/stings/" + stingid;
	$("#subject1").text("");
	$("#content1").text("");
	$("#username").text("");

	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
		username : "raul",
		password : "raul",

	}).done(function(data, status, jqxhr) {
		var sting = JSON.parse(jqxhr.responseText);

		$("#subject1").text(sting.subject);
		$("#content1").text(sting.content);
		$("#username").text(sting.username);

	}).fail(function() {
		$("#sting_result").text("Sting no encontrado");
	});

}

function getStings() {
	var url = API_BASE_URL + "/stings?offset=0&length=10&username=alicia";

	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
		username : "raul",
		password : "raul",

	}).done(
			function(data, status, jqxhr) {
				var response = JSON.parse(jqxhr.responseText);
				var stings = response.stings;

				$("#stings_result").text("");

				$.each(stings, function(i, v) {
					var sting = v;
					var $grouplist = $('#stings_result');
					$('<li>' + "Stingid: " + sting.stingid + '</li>').appendTo(
							$grouplist);
					$('<li>' + "Username: " + sting.username + '</li>')
							.appendTo($grouplist);
					$('<li>' + "Subject: " + sting.subject + '</li>').appendTo(
							$grouplist);
					$('<li>' + "Content: " + sting.content + '</li>').appendTo(
							$grouplist);
					$(
							'<li>' + "Creation Timestamp: "
									+ sting.creationTimestamp + '</li>')
							.appendTo($grouplist);
					$("<HR>").appendTo($grouplist);

				});
			}).fail(function() {
		$("#stings_result").text("El usuario no ha escrito ningun sting");
	});

}

function deleteSting(stingid) {
	var url = API_BASE_URL + '/stings/' + stingid;

	$.ajax({
		url : url,
		type : 'DELETE',
		dataType : 'json',
		crossDomain : true,
		username : 'raul',
		password : 'raul',

	}).done(function(data, status, jqxhr) {
		$("#delete_result").text("Sting borrado correctamente");

	}).fail(function(jqXHR, textStatus) {
		console.log(textStatus);
	});

}

function createSting() {
	var url = API_BASE_URL + '/stings';
	var sting = new Object();
	sting.content = $("#content").val();
	sting.subject = $("#subject").val();
	sting.username = "raul";

	var data = JSON.stringify(sting);
	$.ajax({
		url : url,
		type : 'POST',
		dataType : "json",
		crossDomain : true,
		headers : {
			"Accept" : "application/vnd.beeter.api.sting+json",
			"Content-Type" : "application/vnd.beeter.api.sting+json"
		},
		data : data,
		username : 'raul',
		password : 'raul',
	}).done(function(data, status, jqxhr) {

		$("#post_result").text("Sting aÒadido correctamente");
	}).fail(function(jqXHR, textStatus) {
		$("#post_result").text("Sting NO aÒadido");
	});
}

function updateSting() {
	var url = API_BASE_URL + '/stings/' + $("#stingid1").val();
	var sting = new Object();
	sting.content = $("#content1").val();
	sting.subject = $("#subject1").val();
	sting.username = $("#username").val();

	var data = JSON.stringify(sting);

	$.ajax({
		url : url,
		type : 'PUT',
		dataType : "json",
		crossDomain : true,
		headers : {
			"Accept" : "application/vnd.beeter.api.sting+json",
			"Content-Type" : "application/vnd.beeter.api.sting+json"
		},
		data : data,
		username : 'raul',
		password : 'raul',
	}).done(function(data, status, jqxhr) {

		$("#update_result").text("Sting modificado correctamente");
	}).fail(function(jqXHR, textStatus) {
		$("#update_result").text("Sting no modificado");
	});
}
