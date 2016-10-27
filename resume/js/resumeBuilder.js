// First working with objects
var bio = {
	"name" : "Anna Stein",
	"role" : "Web Developer",
	"email" : "gymnastics.level15@gmail.com",
	"github" : "awesomeanichka101",
	"location" : "Portland, IN",
	"welcomeMessage" : "Hi there! Welcome to my interactive resume!",
	"skills" : ["Quick learning", "Programming", "JavaScript", "Music"]
};

// Formatting bio
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// Adding bio
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWelcomeMessage);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);

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

var work = {
    "jobs": [
        {
            "employer": "MyFarms",
            "title" : "Website Tester",
            "dates" : "July 2016 - present",
            "location" : "404 East Arch St, Portland, IN 47371",
            "description" : "The people at MyFarms are passionate about maximizing the global food supply. We build practical technology that helps input suppliers, farmers, and grain buyers work together more efficiently.  Today, MyFarms is used by thousands of farmers and dozens of companies on millions of acres from the Midwest to South Africa to maximize farming efficiency."
        }
    ]
}

// Working with for-in loops
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedEverything = formattedEmployer + formattedTitle + formattedDates + formattedWorkLocation + formattedDescription;

	$(".work-entry:last").append(formattedEverything);
}

//JSON practice

var project = {};

var education = {
	"schools": [
	  {
	  	"name": "Homeschool",
	  	"city": "Bryant, IN",
	  	"gradYear": "2017"
	  }
	],
	"online courses": [
	  {
	  	"name": "Udacity",
	  	"courseWork": ["Computer Programming"]
	  }
	]
}