<%@page import="model.appoinment.Appoinment"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Appointment Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/items.js"></script>
</head>
<body>
<div class="container">
	<div class="row">
		<div class="col-6">
			<h1>Appointment Management</h1>
			
			<form id="formAppointment" name="formAppointment">
		 		Patient ID:
		 		<input id="PatientID" name="PatientID" type="text" class="form-control form-control-sm">
		 
		 		<br> Doctor ID:
		 		<input id="DoctorID" name="DoctorID" type="text" class="form-control form-control-sm">
		 
		 		<br> Hospital ID:
		 		<input id="HospitalID" name="HospitalID" type="text" class="form-control form-control-sm">
		 
		 		<br> Treatment ID:
		 		<input id="TreatmentID" name="TreatmentID" type="text" class="form-control form-control-sm">
		 		
				<br> Time:
		 		<input id="Time" name="Time" type="date" class="form-control form-control-sm">
				 		
		 		<input id="btnSave" name="btnSave" type="button" value="Create Appoinment" class="btn btn-primary">
		 		<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
			</form>
			
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
			
			<br>
			<div id="divItemsGrid">
		 		<%
		 			Appoinment APP = new Appoinment();
		 			out.print(APP.readAppointments());
		 		%>
			</div>
		</div>
	</div>
</div>

</body>
</html>
