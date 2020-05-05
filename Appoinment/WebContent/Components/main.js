
$(document).ready(function()
{
	$("#alert").hide();
}); 

$(document).on("click", "#btnCreate", function(event)
{
	$("#alert").text("");
	$("#alert").hide();
	
	var status = validateForm();
	if (status != true)
	{
		$("#alert").text(status);
		$("#alert").show();
		return;
	}
	
	$.ajax(
		{
			url : "AppoinmentAPI",
			type : "POST",
			data : $("#formAppointment").serialize(),
			dataType : "text",
			complete : function(response, status)
				{
					onCreateComplete(response.responseText, status);
				}
	});
});

function validateForm()
{
	
	if ($("#PatientID").val() == "")
	 {
		return "Insert Patient ID";
	 }
	if ($("#DoctorID").val().trim() == "")
	 {
		return "Insert Doctor ID";
	 }
	if($("#DoctorID").val() > 2 || $("#DoctorID").val() <= 0) {
		return "Doctor ID Must Be In A Range Of 1 - 2";
	}
	if ($("#HospitalID").val().trim() == "")
	 {
		return "Insert Hospital ID";
	 }
	if($("#HospitalID").val() > 2 || $("#HospitalID").val() <= 0) {
		return "Hospital ID Must Be In A Range Of 1 - 2";
	}
	if ($("#TreatmentID").val().trim() == "")
	 {
		return "Insert Treatment ID";
	 }
	if($("#TreatmentID").val() > 5 || $("#TreatmentID").val() <= 0) {
		return "TreatmentID ID Must Be In A Range Of 1 - 5";
	}
	if ($("#Time").val().trim() == "")
	 {
		return "Insert Time";
	 }
	if($("#Time").val() > 8 || $("#Time").val() <= 0) {
		return "Time Slot Must Be In A Range Of 1 - 8";
	}
	return true;
}

function onCreateComplete(response, status)
{ 
	var resultSet = JSON.parse(response);
	
	if (status == "success") {
		var resultSet = JSON.parse(response);
		$("#alert").text(resultSet.status);
		$("#alert").show();
		$("#divAppoinmentsGrid").html(resultSet.data);
	 } else if (status == "error") {
		 $("#alert").text("Error while saving.");
		 $("#alert").show();
	 } else {
		 $("#alert").text("Unknown error while saving..");
		 $("#alert").show();
	 }
	 $("#formAppointment")[0].reset(); 
}
function onDeleteClick(AppointmentID){
	
	$.ajax(
			{
				url : "AppoinmentAPI",
				type : "DELETE",
				data : "AppointmentID=" +AppointmentID ,
				dataType : "text",
				complete : function(response, status)
					{
						onItemDeleteComplete(response.responseText, status);
					}
		});
}

function onUpdatesClick(AppointmentID){
	
	$.ajax(
			{
				url : "AppoinmentAPI",
				type : "PUT",
				data : "AppointmentID=" +AppointmentID ,
				dataType : "text",
				complete : function(response, status)
					{
						onItemPutComplete(response.responseText, status);
					}
		});
}

function onItemPutComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		$("#alert").text(resultSet.status);
		$("#alert").show();
		$("#divAppoinmentsGrid").html(resultSet.data);
	} else if (status == "error") {
		$("#alert").text("Error while deleting.");
		$("#alert").show();
	} else {
		$("#alert").text("Unknown error while deleting..");
		$("#alert").show();
	}
}

function onItemDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		$("#alert").text(resultSet.status);
		$("#alert").show();
		$("#divAppoinmentsGrid").html(resultSet.data);
	} else if (status == "error") {
		$("#alert").text("Error while deleting.");
		$("#alert").show();
	} else {
		$("#alert").text("Unknown error while deleting..");
		$("#alert").show();
	}
}