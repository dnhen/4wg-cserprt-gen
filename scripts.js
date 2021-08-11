var incr = 1; // Global increment counter (for adding rows)

function deleteRow(row){
	if(document.getElementsByClassName("cadet-row").length == 1){ // Ensure we at least have 1 row left.
		$(document).ready(function(){ // Display row cant be deleted toast
			$('.delete-row-toast-error').toast('show');
		});

		return false;
	}
	var delRow = document.getElementById("cadet-row-" + row); // Get row that we are deleting

	delRow.classList.remove("cadet-row"); // Remove the class
	delRow.innerHTML = "";

	$(document).ready(function(){ // Display row successfully deleted toast
		$('.delete-row-toast').toast('show');
	});

	// Update total number of cadets indicator
	document.getElementById("totalNumber").innerHTML = document.getElementsByClassName("cadet-row").length;
}

function addRow(){
	//var table = document.getElementById("cadet-table");
	var finalDelRow = document.getElementById("finalDeleteRow");
	incr++;

	var newTableRow = '<tr class="cadet-row" id="cadet-row-' + incr + '"> <th scope="row"> <div class="form-group"><input type="text" class="form-control is-invalid" placeholder="Last Name" id="name' + incr + '" onchange="inputFormChange(' + incr + ');"> </div> </th> <td> <div class="btn-group" role="group"><input type="radio" class="btn-check" name="ld' + incr + '" id="ld' + incr + '-1" autocomplete="off" value="1"><label class="btn btn-outline-danger" for="ld' + incr + '-1">1</label><input type="radio" class="btn-check" name="ld' + incr + '" id="ld' + incr + '-2" autocomplete="off" value="2" checked=""> <label class="btn btn-outline-warning" for="ld' + incr + '-2">2</label><input type="radio" class="btn-check" name="ld' + incr + '" id="ld' + incr + '-3" autocomplete="off" value="3"><label class="btn btn-outline-success" for="ld' + incr + '-3">3</label></div> </td> <td> <div class="btn-group" role="group"><input type="radio" class="btn-check" name="pda' + incr + '" id="pda' + incr + '-1" autocomplete="off" value="1"><label class="btn btn-outline-danger" for="pda' + incr + '-1">1</label> <input type="radio" class="btn-check" name="pda' + incr + '" id="pda' + incr + '-2" autocomplete="off" value="2" checked=""><label class="btn btn-outline-warning" for="pda' + incr + '-2">2</label><input type="radio" class="btn-check" name="pda' + incr + '" id="pda' + incr + '-3" autocomplete="off" value="3"> <label class="btn btn-outline-success" for="pda' + incr + '-3">3</label></div> </td> <td> <div class="btn-group" role="group"><input type="radio" class="btn-check" name="cnc' + incr + '" id="cnc' + incr + '-1" autocomplete="off" value="1"> <label class="btn btn-outline-danger" for="cnc' + incr + '-1">1</label><input type="radio" class="btn-check" name="cnc' + incr + '" id="cnc' + incr + '-2" autocomplete="off" value="2" checked=""><label class="btn btn-outline-warning" for="cnc' + incr + '-2">2</label><input type="radio" class="btn-check" name="cnc' + incr + '" id="cnc' + incr + '-3" autocomplete="off" value="3"><label class="btn btn-outline-success" for="cnc' + incr + '-3">3</label></div> </td> <td> <div class="btn-group" role="group"><input type="radio" class="btn-check" name="rom' + incr + '" id="rom' + incr + '-1" autocomplete="off" value="1"><label class="btn btn-outline-danger" for="rom' + incr + '-1">1</label><input type="radio" class="btn-check" name="rom' + incr + '" id="rom' + incr + '-2" autocomplete="off" value="2" checked=""><label class="btn btn-outline-warning" for="rom' + incr + '-2">2</label> <input type="radio" class="btn-check" name="rom' + incr + '" id="rom' + incr + '-3" autocomplete="off" value="3"> <label class="btn btn-outline-success" for="rom' + incr + '-3">3</label></div> </td> <td> <div class="btn-group" role="group"><input type="radio" class="btn-check" name="uni' + incr + '" id="uni' + incr + '-1" autocomplete="off" value="1"><label class="btn btn-outline-danger" for="uni' + incr + '-1">1</label> <input type="radio" class="btn-check" name="uni' + incr + '" id="uni' + incr + '-2" autocomplete="off" value="2" checked=""> <label class="btn btn-outline-warning" for="uni' + incr + '-2">2</label><input type="radio" class="btn-check" name="uni' + incr + '" id="uni' + incr + '-3" autocomplete="off" value="3"> <label class="btn btn-outline-success" for="uni' + incr + '-3">3</label></div> </td> <td> <div class="btn-group" role="group"><input type="radio" class="btn-check" name="beh' + incr + '" id="beh' + incr + '-1" autocomplete="off" value="1"><label class="btn btn-outline-danger" for="beh' + incr + '-1">1</label> <input type="radio" class="btn-check" name="beh' + incr + '" id="beh' + incr + '-2" autocomplete="off" value="2" checked=""> <label class="btn btn-outline-warning" for="beh' + incr + '-2">2</label> <input type="radio" class="btn-check" name="beh' + incr + '" id="beh' + incr + '-3" autocomplete="off" value="3"> <label class="btn btn-outline-success" for="beh' + incr + '-3">3</label> </div> </td> <td> <div class="btn-group" role="group"> <input type="radio" class="btn-check" name="ovr' + incr + '" id="ovr' + incr + '-1" autocomplete="off" value="1"> <label class="btn btn-outline-danger" for="ovr' + incr + '-1">1</label> <input type="radio" class="btn-check" name="ovr' + incr + '" id="ovr' + incr + '-2" autocomplete="off" value="2" checked=""> <label class="btn btn-outline-warning" for="ovr' + incr + '-2">2</label> <input type="radio" class="btn-check" name="ovr' + incr + '" id="ovr' + incr + '-3" autocomplete="off" value="3"> <label class="btn btn-outline-success" for="ovr' + incr + '-3">3</label> </div> </td> <td> <button type="button" class="btn btn-outline-danger" onclick="deleteRow(' + incr + ')"> <svg width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"> <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path></svg></button></td></tr>';

	finalDelRow.insertAdjacentHTML('beforebegin', newTableRow) // Add the above HTML just before the plus button

	$(document).ready(function(){ // Display row successfully added toast
		$('.add-row-toast').toast('show');
	});

	// Update total number of cadets indicator
	document.getElementById("totalNumber").innerHTML = document.getElementsByClassName("cadet-row").length;
}

function inputFormChange(row){ // When the name field is edited
	var field = document.getElementById("name" + row);

	if(field.value.length > 0){ // If the name is not empty...
		// Add a valid class and remove invalid class
		field.classList.remove("is-invalid");
		field.classList.add("is-valid");
	} else { // If the name field is empty
		// Add invalid class and remove valid class
		field.classList.remove("is-valid");
		field.classList.add("is-invalid");
	}
}

function getRandomInt(min, max) { // Generate a random int between min and max (inclusive)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateReports(){
	localStorage.setItem('reportArray', ''); // Set the localStorage to be empty

	var reportArray = [];
	var rows = document.getElementsByClassName("cadet-row"); // Get all the rows in the table

	for(var i = 0; i < rows.length; i++){
		var rowID = rows[i].id.split("-")[2]; // Get the ID of the row (the last item in format name-name-ID)
		var currRow = rows[i].children;

		// Get all the row details
		var name = currRow[0].getElementsByTagName("input")[0].value

		if(name.length <= 0){ // Ensure all names are filled
			$(document).ready(function(){
				$('.failure-no-last-name-toast').toast('show');
			});

			return false;
		}

		var outputText = "";

		// Get all values of each category
		var ld = parseInt($('input[name=ld' + rowID + ']:checked').val()) - 1;
		var pda = parseInt($('input[name=pda' + rowID + ']:checked').val()) - 1;
		var cnc = parseInt($('input[name=cnc' + rowID + ']:checked').val()) - 1;
		var rom = parseInt($('input[name=rom' + rowID + ']:checked').val()) - 1;
		var uni = parseInt($('input[name=uni' + rowID + ']:checked').val()) - 1;
		var beh = parseInt($('input[name=beh' + rowID + ']:checked').val()) - 1;
		var ovr = parseInt($('input[name=ovr' + rowID + ']:checked').val()) - 1;

		// Add the values to the output text after randomly getting a phrase
		outputText += templates["ld"][ld][getRandomInt(1, templates["ld"][ld].length)-1] + " ";
		outputText += templates["pda"][pda][getRandomInt(1, templates["pda"][pda].length)-1] + " ";
		outputText += templates["cnc"][cnc][getRandomInt(1, templates["cnc"][cnc].length)-1] + " ";
		outputText += templates["rom"][rom][getRandomInt(1, templates["rom"][rom].length)-1] + " ";
		outputText += templates["uni"][uni][getRandomInt(1, templates["uni"][uni].length)-1] + " ";
		outputText += templates["beh"][beh][getRandomInt(1, templates["beh"][beh].length)-1] + " ";
		outputText += templates["ovr"][ovr][getRandomInt(1, templates["ovr"][ovr].length)-1];

		outputText = outputText.replace(/\$/g, name); // Replace all $ with the name.

		reportArray.push([name, outputText]);
	}

	localStorage.setItem('reportArray', JSON.stringify(reportArray)); // Save reports to local storage (for confirmation page).

	window.location.replace("confirm.html"); // Redirect to confirmation page.
}

function updateIndicator(i){ // Ran when the checkbox is clicked
	if(document.getElementById("checkbox" + i).checked){ // Is checked
		var ind = document.getElementById("indicator" + i);

		// Remove and add classes to the display next to checkbox to show it is "Confirmed"
		ind.classList.remove("bg-danger");
		ind.classList.add("bg-success");
		ind.innerHTML = "Confirmed";

		document.getElementById("text" + i).setAttribute("disabled", ""); // Make the text box disabled
	} else { // Not checked
		var ind = document.getElementById("indicator" + i);

		// Remove and add classes to the display next to checkbox to show it is "UNconfirmed"
		ind.classList.remove("bg-success");
		ind.classList.add("bg-danger");
		ind.innerHTML = "Unconfirmed";

		
		document.getElementById("text" + i).removeAttribute("disabled"); // Make the text box un-disabled
	}
	
}

function displayReports(){
	var reportArray = JSON.parse(localStorage.getItem('reportArray')); // Get the report array from local storage
	var finalExportRow = document.getElementById("finalExportRow"); // Get the static last row in the list (the export button row)

	for(var i = 0; i < reportArray.length; i++){
		// Get name and report from localStorage variable
		var name = reportArray[i][0];
		var report = reportArray[i][1];

		var newRow = '<tr class="cadet-row" id="cadet-row-' + i + '"><th scope="row"><div class="form-group"><input type="text" class="form-control" placeholder="Last Name" id="name' + i + '" value="' + name + '" disabled></div></th><td><textarea class="form-control" id="text' + i + '" rows="5">' + report + '</textarea></td><td><input class="form-check-input" type="checkbox" value="" id="checkbox' + i + '" onclick="updateIndicator(' + i + ');"></td><td><span class="badge bg-danger" id="indicator' + i + '">Unconfirmed</span></td></tr>';

		// Add the HTML above to just above the last row
		finalExportRow.insertAdjacentHTML('beforebegin', newRow);
	}
}

function exportReports(){
	window.jsPDF = window.jspdf.jsPDF;
	const doc = new jsPDF(); // Create new PDF file

	var reports = document.getElementsByClassName("cadet-row"); // Get each row that a report is on

	// Create blank output text
	var output = "";

	for(var i = 0; i < reports.length; i++){
		if(!document.getElementById("checkbox" + i).checked){ // Ensure its confirmed
			$(document).ready(function(){ // Display error toast
				$('.export-confirm-error-toast').toast('show');
			});

			return false
		}

		// Get name and the text in report field
		var name = document.getElementById("name" + i).value;
		var report = document.getElementById("text" + i).value;

		output += name + "\n\n" + report + "\n\n\n";
	}

	output = doc.splitTextToSize(output, 180);

	// Add to PDF text to export...
	doc.text(output, 15, 15);
	doc.save("CSEREPORTS.pdf");
}

// Text Templates
var templates = {};
templates["ld"] = // LEADERSHIP
[["$ has had an average level of leadership ability throughout the duration of the course, with a constant need for guidance as $ progressed throughout the detachment. $ will greatly benefit from strong guidance in leadership styles and strategies back at their home squadron."],
["$ showed a good standard of leadership throughout the course, and during the leadership assessment. $ will benefit from some mentoring back at their home squadron."],
["$ had a great level of leadership ability during the whole detachment and especially during the leadership assessment; and as duty cadet. $ will make a great leader back at their home squadron, and will be a great role model for their peers."]];
templates["pda"] = // PDA
[["$ should work on their standard of drill once they get back to their home squadron, and should seek guidance from their fellow senior cadets and staff at their squadron."],
["$ maintained an accaptable level of drill whilst on course, and displayed the expected standard for drill and ceremonial in the daily parades and their personal drill assessment."],
["$ showed a high standard of drill and consistantly maintained an above average level of drill. $ should use their skills in drill to assist junior cadets back at their home squadron."]];
templates["cnc"] = // C&C
[["CNC level one $."],
["CNC level two $."],
["CNC level three $."]];
templates["rom"] = // ROOM
[["ROOM level one $."],
["ROOM level two $."],
["ROOM level three $."]];
templates["uni"] = // UNIFORM
[["UNIFORM level one $."],
["UNIFORM level two $."],
["UNIFORM level three $."]];
templates["beh"] = // BEHAVIOUR
[["BEHAVIOUR level one $."],
["BEHAVIOUR level two $."],
["BEHAVIOUR level three $."]];
templates["ovr"] = // OVERALL
[["OVERALL level one $."],
["OVERALL level two $."],
["OVERALL level three $."]];