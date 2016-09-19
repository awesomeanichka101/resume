// First working with objects
var bio = {
	"name" : "Anna Stein",
	"role" : "Web Developer",
	"email" : "gymnastics.level15@gmail.com",
	"github" : "awesomeanichka101",
	"welcomeMessage" : "Hi there! Welcome to my interactive resume!",
	"skills" : ["Awesomeness ", "programming ", "JS ", "and music!"]
};

// Formatting bio
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.github);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

// Adding bio
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedEmail);
$("#header").append(formattedGitHub);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);

// Working with dot and bracket notation
var work = {};
work.position = "Intern";
work.employer = "MyFarms";
work.yearsWorked = "2016-present";
work.city = "Portland, IN";

//JSON practice
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

var project = {};		