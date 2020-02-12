'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	$.get(window.location.origin + "/project/" + idNumber, function(res) {
		console.log("called: ", window.location.origin + "/project/" + res.id);
		console.log(res);

		$('#project' + res.id + ' ' + '.details')
			.html('<h3>' + res.title + '</h3><p>' + res.date + '</p><p>' + res.summary + '</p><img src="' + res.image + '"/>')
		
	})
}
