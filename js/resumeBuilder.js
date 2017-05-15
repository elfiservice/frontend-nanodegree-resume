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
          $("#topContacts").append(HTMLemail.replace("#", bio.contacts.email).replace("%data%", bio.contacts.email));
          $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
          $("#topContacts").append(HTMLmobile.replace("#", bio.contacts.mobile).replace("%data%", bio.contacts.mobile));


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
               "description":"Developing some WebSites, Ecommerces and ERPs",
               "url":"https://ajudanaweb.com.br/"
          },
          {
               "title": "Partner - Manager",
               "employer": "Elfi Service",
               "dates": "1999 - Future",
               "city": "Fortaleza, CE, Brazil",
               "description":"Manager a company of Electrical engineering",
               "url":"https://elfiservice.eco.br/"
          }
     ],
     display: function(){
          work.jobs.forEach(function(job){
               $(".workExperience-container").append(HTMLworkStart);
               workEmployerReplacedHref = HTMLworkEmployer.replace("#",job.url);
               workEmployerReplaced = workEmployerReplacedHref.replace("%data%",job.employer);
               $(".work-entry:last").append(workEmployerReplaced + HTMLworkTitle.replace("%data%",job.title));
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
               "images": ["images/elfi1.png","images/elfi2.png"],
               "url":"https://elfiservice.eco.br/"
          },
          {
               "title": "Dra. Karla Bessa WebSite",
               "dates": "2008-2017",
               "description": "",
               "images": ["images/karla1.png","images/karla2.png"],
               "url":"https://karlabessa.com.br/"
          },
          {
               "title": "Yoga Santa Felicidade WebSite",
               "dates": "2012-2017",
               "description": "",
               "images": ["images/yoga1.png","images/yoga2.png"],
               "url":"https://yogasantafelicidade.com/"
          },
          {
               "title": "Polo Satere WebSite",
               "dates": "2016-2017",
               "description": "",
               "images": ["images/polo1.png","images/polo2.png"],
               "url":"http://www.polosatere.com.br/"
          }

     ],
     display: function(){
          project.projects.forEach(function(project){
               $(".project-container").append(HTMLprojectStart);
               projectTitleReplacedHref = HTMLprojectTitle.replace("#", project.url);
               projectTitleReplaced = projectTitleReplacedHref.replace("%data%", project.title);
               $(".project-entry:last").append(projectTitleReplaced);
               $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
               $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
               for(var i = 0; i < project.images.length; i++){
                    $(".project-entry:last").prepend(HTMLprojectImage.replace("%data%", project.images[i]));
               }

          });
     }
}

var education = {
     "schools": [
          {
               "name": "Unifor",
               "city": "Fortaleza, Ce, Brazil",
               "degree": "BA",
               "majors": ["CS"],
               "dates": 2010,
               "url": "http://www.unifor.br/"
          },
          {
               "name": "Uni7",
               "city": "Fortaleza, CE, Brazil",
               "degree": "Especialist",
               "majors": [""],
               "dates": 2017,
               "url": "http://www.uni7setembro.edu.br/"
          }
     ],
     "onlineCourses": [
          {
               "title": "JavaScript Syntax",
               "school": "Udacity",
               "dates": 2017,
               "url": "https://br.udacity.com/course/javascript-basics--ud804/"
          },
          {
               "title": "Front-End Developer",
               "school": "Udacity",
               "dates": 2017,
               "url": "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
          }
     ],
     display: function(){
          education.schools.forEach(function(school){
               $(".education-container").append(HTMLschoolStart);
               schoolNameReplacedHref = HTMLschoolName.replace("#", school.url);
               schoolNameReplaced = schoolNameReplacedHref.replace("%data%", school.name)
               $(".education-entry:last").append(schoolNameReplaced + HTMLschoolDegree.replace("%data%", school.degree));
               $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
               for(var i = 0; i < school.majors.length; i++){
                    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors));
               }
          });

          if(education.onlineCourses.length > 0){
               $(".education-container").append(HTMLonlineClasses);
               education.onlineCourses.forEach(function(school){
                    $(".education-container").append(HTMLschoolStart);
                    schoolUrl = school.url;
                    onlineTitleReplacedHref = HTMLonlineTitle.replace("#", schoolUrl);
                    onlineTitleReplaced = onlineTitleReplacedHref.replace("%data%", school.title);
                    $(".education-entry:last").append(onlineTitleReplaced + HTMLonlineSchool.replace("%data%", school.school));
                    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", school.dates));
                    onlineUrlReplacedHref = HTMLonlineURL.replace("#", schoolUrl);
                    onlineUrlReplaced = onlineUrlReplacedHref.replace("%data%", schoolUrl);
                    $(".education-entry:last").append(onlineUrlReplaced);
               });
          }
     }
}

bio.display();
work.display();
project.display();
education.display();

$("title").html("Resume | " + bio.name + " | " + bio.role);
$("#mapDiv").append(googleMap);

$("#header ul").mouseover(function(){
$("#topContacts .click-me").fadeIn("slow");
     setTimeout(function(){
          $("#topContacts .click-me").fadeOut("slow");
     }, 3000);
});

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
