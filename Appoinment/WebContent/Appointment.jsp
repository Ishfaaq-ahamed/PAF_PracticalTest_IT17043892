<%@page import="model.appoinment.Appoinment"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Appointment Management</title>
<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/main.js"></script>
</head>
<body>
<div class="container">
	<div class="row">
		<div class="col-6">
			<h1>Appointment Management</h1>
			
			<form id="formAppointment" name="formAppointment">
		 		Patient ID:
		 		<input id="PatientID" name="PatientID" type="text" class="form-control form-control-sm">
		 
		 		<br><br> Doctor ID:
		 		<input id="DoctorID" name="DoctorID" type="text" class="form-control form-control-sm">
		 
		 		<br><br> Hospital ID:
		 		<input id="HospitalID" name="HospitalID" type="text" class="form-control form-control-sm">
		 
		 		<br><br> Treatment ID:
		 		<input id="TreatmentID" name="TreatmentID" type="text" class="form-control form-control-sm">
		 		
				<br><br> Time:
		 		<input id="Time" name="Time" type="date" class="form-control form-control-sm">
				
				<br><br>
		 		<input id="btnCreate" name="btnCreate" type="button" value="Create Appoinment">
		 		<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
			</form>
			
			<br><br>
			<div id="alert"></div>
			
			<br><br>
			<div id="divAppoinmentsGrid">
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
