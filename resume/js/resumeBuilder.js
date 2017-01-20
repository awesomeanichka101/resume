// Bio object
var bio = {
	"name" : "Anna Stein",
	"role" : "Web Developer",
	"email" : "gymnastics.level15@gmail.com",
    "github" : "awesomeanichka101",
    "location" : "Bryant, IN",
	"welcomeMessage" : "Hi there! Welcome to my interactive resume!",
	"biopic" : "file:///C:/Users/Anna/resume/images/fry.jpg",
	"skills" : ["Quick learning", "Programming", "JavaScript", "Music"]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedEmail = HTMLemail.replace("%data%", bio.email);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.location);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedWelcomeMessage);
	$("#header").append(formattedBiopic);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGitHub);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedLocation);
}

bio.display();

// Adding if statement to make sure bio has skills
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

// Work object
var work = {
    "jobs": [
        {
            "employer": "MyFarms",
            "title" : "Website Tester",
            "dates" : "July 2016 - present",
            "location" : "Portland, IN",
            "description" : "Thoroughly test website for bugs and report to other developers. May also include assisting in fixing bugs and teaching clients how to use the website."
        }
    ]
}

// Formatting and adding Work with a function
function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEverything = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

		$(".work-entry:last").append(formattedEverything);
	}
}

// Calling function
displayWork();

// Projects object
var projects = {
	"projects" : [
		{
			"title" : "Future Limberlost Layers Website",
			"dates" : "December 2016 - February 2017",
			"description" : "This is the website for my dad's egg business, \
			Limberlost Layers. Started from a WordPress theme and revised for accuracy.",
			"images" : ["file:///C:/Users/Anna/resume/images/197x148.gif"]
		},
		{
			"title" : "Another Future Project",
			"dates" : "March 2017 - July 2017",
			"description" : "Whatever future project I do goes here.\
			 I have no idea what it will be right now though.",
			"images" : ["file:///C:/Users/Anna/resume/images/197x148.gif"]
		}
	]
};
// Formatting and adding Projects using a function
projects.display = function() {
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		// if you don't have images of your projects in var project, then leave this commented; no images + below code uncommented = broken resume
		// if you now have images of your projects in var project, then uncomment everything after this and you will see them in resume
		if (projects.projects[project].images.length >= 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
// Calling function
projects.display();

// Education object
var education = {
	"schools": [
		{
			"name": "Homeschooled K-12 School",
			"degree": " ",
			"dates": "September 2004 - May 2017",
			"location": "Bryant, IN",
			"major": "N/A"
		}
	],

	"onlineCourses": [
		{
			"title": "How to use Git and GitHub - Udacity",
			"school": "Udacity",
			"dates": "August 2016 - September 2016",
			"URL": "https://www.udacity.com/"
		},
		{
			"title": "JavaScript basics - Udacity",
			"school": "Udacity",
			"dates": "September 2016 - November 2016",
			"URL": "https://www.udacity.com/"
		},
		{
			"title": "Learn SQL - Codecademy",
			"school": "Codecademy",
			"dates": "December 14th - December 28th, 2016",
			"URL": "https://www.codecademy.com/"
		},
		{
			"title": "SQL: Table Transformation - Codecademy",
			"school": "Codecademy",
			"dates": "December 2016 - January 2017",
			"URL" : "https://www.codecademy.com/"
		},
		{
			"title": "SQL: Analyzing Business Metrics - Codecademy",
			"school": "Codecademy",
			"dates": "January 3rd - January 19th 2017",
			"URL": "https://www.codecademy.com/"
		},
		{
			"title": "HTML & CSS - Codecademy",
			"school": "Codecademy",
			"dates": "January 9th - January 20th, 2017",
			"URL": "https://www.codecademy.com/"
		}
	]	
};

// Formatting and appending Education with a function
education.display = function() {
	$('#education').append(HTMLschoolStart);

	for (school in education.schools) {

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry").append(formattedSchoolName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry.last").append(formattedDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
	
	$(".education-entry").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		//$(".education-entry:last").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].URL);
		$(".education-entry:last").append(formattedURL);
	}	
}

// Calling the function
education.display();

// Adding Google Map
$("#mapDiv").append(googleMap);