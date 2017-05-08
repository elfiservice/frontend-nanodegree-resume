/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Bigraphy quiz - Lesson 9 - Data Type
var bio = {
     name: "Armando Jr.",
     role: "Front-End Dev.",
     contacts: {
          "email": "elfiservice@hotmail.com",
          "github": "elfiservice",
          "mobile": "+5585994128554",
          "twitter":"elfiservice",
          "blog":"https://ajudanaweb.com.br/blog",
          "location":"Fortaleza, Ce, Brazil",
          "facebook": "elfiservice",
          "instagram": "elfiservice",
          "youtube": "elfiservice",
          "linkedIn": "armando-junior-elfiservice"
     },
     image: "images/me.jpg",
     welcomeMessage: "Hi, I love God, my family and Coding",
     skills: ["HTML", "CSS", "Javascript", "Git", "GitHub"],
     display: function(){
          $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
          $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
          $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email).replace("%data%", bio.contacts.email));
          $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
          $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile).replace("%data%", bio.contacts.mobile));

          $("#header").append(HTMLbioPic.replace("%data%", bio.image));
          $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
          var skillsCount = bio.skills.length;
          if(skillsCount > 0){
               $("#header").append(HTMLskillsStart);
               for(var i = 0; i < skillsCount; i++){
                    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
               }
          }
          (bio.contacts.facebook ? $("#footerContacts").append(HTMLfacebook.replace("%data%", bio.contacts.facebook)) : "");
          (bio.contacts.instagram ? $("#footerContacts").append(HTMLinstagram.replace("%data%", bio.contacts.instagram)) : "");
          (bio.contacts.youtube ? $("#footerContacts").append(HTMLyoutube.replace("%data%", bio.contacts.youtube)) : "");
                    (bio.contacts.linkedIn ? $("#footerContacts").append(HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn)) : "");
     }
}
//Practice with objects quiz - Lesson 9 - Data Type
var work = {
     jobs:[
          {
               "title": "Web Dev Freelancer",
               "employer": "Just me",
               "dates": "2008 - Future",
               "city": "Fortaleza, CE, Brazil",
               "description":"Developing some WebSites, Ecommerces and ERPs"
          },
          {
               "title": "Partner - Manager",
               "employer": "Elfi Service",
               "dates": "1999 - Future",
               "city": "Fortaleza, CE, Brazil",
               "description":"Manager a company of Electrical engineering"
          }
     ],
     display: function(){
          work.jobs.forEach(function(job){
               $("#workExperience").append(HTMLworkStart);
               $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",job.employer) + HTMLworkTitle.replace("%data%",job.title));
               $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
               $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.city));
               $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
          });
     }

}

var project = {
     "projects": [
          {
               "title": "Elfi Service WebSite",
               "dates": "2010-2017",
               "description": "",
               "images": ["images/elfi1.png","images/elfi2.png"]
          },
          {
               "title": "Dra. Karla Bessa WebSite",
               "dates": "2008-2017",
               "description": "",
               "images": ["images/karla1.png","images/karla2.png"]
          },
          {
               "title": "Yoga Santa Felicidade WebSite",
               "dates": "2012-2017",
               "description": "",
               "images": ["images/yoga1.png","images/yoga2.png"]
          },
          {
               "title": "Polo Satere WebSite",
               "dates": "2016-2017",
               "description": "",
               "images": ["images/polo1.png","images/polo2.png"]
          }

     ],
     display: function(){
          project.projects.forEach(function(itemObj){
               $("#projects").append(HTMLprojectStart);
               $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", itemObj.title));
               $(".project-entry:last").append(HTMLprojectDates.replace("%data%", itemObj.dates));
               $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", itemObj.description));
               for(var i = 0; i < itemObj.images.length; i++){
                    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", itemObj.images[i]));
               }

          });
     }
}

var education = {
     "schools": [
          {
               "name": "Unifor",
               "city": "Sao Paulo, SP, Brazil",
               "degree": "BA",
               "majors": ["CS"],
               "dates": 2010,
               "url": "#"
          },
          {
               "name": "Uni7",
               "city": "Fortaleza, CE, Brazil",
               "degree": "Especialist",
               "majors": [""],
               "dates": 2017,
               "url": ""
          }
     ],
     "onlineCourses": [
          {
               "title": "JavaScript Syntax",
               "school": "Udacity",
               "dates": 2017,
               "url": "#"
          },
          {
               "title": "Front-End Developer",
               "school": "Udacity",
               "dates": 2017,
               "url": "#"
          }
     ],
     displaySchools: function(){
          education.schools.forEach(function(school){
               $("#education").append(HTMLschoolStart);
               $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name + HTMLschoolDegree.replace("%data%", school.degree)));
               $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
               for(var i = 0; i < school.majors.length; i++){
                    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors));
               }
          });
     },
     displayOnlineCourses: function(){
          if(education.onlineCourses.length > 0){
               $("#education").append(HTMLonlineClasses);
               education.onlineCourses.forEach(function(school){
                    $("#education").append(HTMLschoolStart);
                    $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", school.title + HTMLonlineSchool.replace("%data%", school.school)));
                    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", school.dates));
                    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", school.url));
               });
          }


     }
}

bio.display();
work.display();
project.display();
education.displaySchools();
education.displayOnlineCourses();

$("title").html("Resume | " + bio.name + " | " + bio.role);
$("#mapDiv").append(googleMap);
// $("#main").append(internationalizeButton);
// function inName(originName){
//      var stringArray = originName.split(" ");
//      var formattedFirtName = stringArray[0].toLowerCase();
//      formattedFirtName = formattedFirtName.slice(1);
//      formattedFirtName = stringArray[0][0].toUpperCase() + formattedFirtName;
//      var formattedSecondName = stringArray[1].toUpperCase();
//      var newString = formattedFirtName + " " + formattedSecondName;
//      return newString;
// }
