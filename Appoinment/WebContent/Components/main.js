
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
	if ($("#HospitalID").val().trim() == "")
	 {
		return "Insert Hospital ID";
	 }
	if ($("#TreatmentID").val().trim() == "")
	 {
		return "Insert Treatment ID";
	 }
	if ($("#Time").val().trim() == "")
	 {
		return "Insert Time";
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

$(document).on("click", ".btnUpdate", function(event)
{
	$.ajax(
		 {
		 url : "AppoinmentAPI",
		 type : "PUT",
		 data : "appID=" + $(this).data("appID"),
		 dataType : "text",
		 complete : function(response, status)
		 				{
			 				onItemDeleteComplete(response.responseText, status);
		 				}
	});
});

$(document).on("click", ".btnRemove", function(event)
{
	$.ajax(
		{
			url : "AppoinmentAPI",
			type : "DELETE",
			data : "appID=" + $(this).data("appID"),
			dataType : "text",
			complete : function(response, status)
				{
					onItemDeleteComplete(response.responseText, status);
				 }
	});
});