/*
This is empty on purpose! Your code to build the resume will go here.
 */

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
     biopic: "images/fixed/me.jpg",
     welcomeMessage: "Hi, I love God, my family and Coding",
     skills: ["HTML", "CSS", "Javascript", "Git", "GitHub"],
     display: function(){
          $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
          $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
          $("#topContacts").append(HTMLemail.replace("#", bio.contacts.email).replace("%data%", bio.contacts.email));
          $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github).replace("#", bio.contacts.github));
          $("#topContacts").append(HTMLmobile.replace("#", bio.contacts.mobile).replace("%data%", bio.contacts.mobile));
          $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

          $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
          $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
          var skillsCount = bio.skills.length;
          if(skillsCount > 0){
               $("#header").append(HTMLskillsStart);
               for(var i = 0; i < skillsCount; i++){
                    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
               }
          }

          $("#footerContacts").append(HTMLemail.replace("#", bio.contacts.email).replace("%data%", bio.contacts.email));
          $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github).replace("#", bio.contacts.github));
          $("#footerContacts").append(HTMLmobile.replace("#", bio.contacts.mobile).replace("%data%", bio.contacts.mobile));
          $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

          (bio.contacts.facebook ? $("#social-network").append(HTMLfacebook.replace("%data%", bio.contacts.facebook)) : "");
          (bio.contacts.instagram ? $("#social-network").append(HTMLinstagram.replace("%data%", bio.contacts.instagram)) : "");
          (bio.contacts.youtube ? $("#social-network").append(HTMLyoutube.replace("%data%", bio.contacts.youtube)) : "");
          (bio.contacts.linkedIn ? $("#social-network").append(HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn)) : "");
     }
};

var work = {
     jobs:[
          {
               "title": "Web Dev Freelancer",
               "employer": "Just me",
               "dates": "2008 - Future",
               "location": "Fortaleza, CE, Brazil",
               "description":"Developing some WebSites, Ecommerces and ERPs. 8 years of experience with web systems development, web sites, using HTML5, CSS3, PHP OO, MySQL on my own, I am open to opportunities in this area (I have knowledge of C# and JAVA and Frameworks). I wish to participate in innovative projects.",
               "url":"https://ajudanaweb.com.br/"
          },
          {
               "title": "Partner - Manager",
               "employer": "Elfi Service",
               "dates": "1999 - Future",
               "location": "Fortaleza, CE, Brazil",
               "description":"15 years of experience in business management, provision of services in Electricity and Electrotechnology, make reports, budgets, pricing and financial management in Small and Medium Enterprises.",
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
               $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
               $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
          });
     }

};

var projects = {
     "projects": [
          {
               "title": "Elfi Service WebSite",
               "dates": "2010-2017",
               "description": "Website and Web System for Elfi Service company to divulge your services and manage your proposts",
               "images": ["images/elfi1-500_medium_2x.png","images/elfi2-500_medium_2x.png"],
               "url":"https://elfiservice.eco.br/"
          },
          {
               "title": "Dra. Karla Bessa WebSite",
               "dates": "2008-2017",
               "description": "Website for divulgue your services",
               "images": ["images/karla1-500_medium_2x.png","images/karla2-500_medium_2x.png"],
               "url":"https://karlabessa.com.br/"
          },
          {
               "title": "Yoga Santa Felicidade WebSite",
               "dates": "2012-2017",
               "description": "Website and Blog system for divulgue your services and highlights",
               "images": ["images/yoga1-500_medium_2x.png","images/yoga2-500_medium_2x.png"],
               "url":"https://yogasantafelicidade.com/"
          },
          {
               "title": "Polo Satere WebSite",
               "dates": "2016-2017",
               "description": "Website and E-commerce for divulgue your services and products",
               "images": ["images/polo1-500_medium_2x.png","images/polo2-500_medium_2x.png"],
               "url":"http://www.polosatere.com.br/"
          }

     ],
     display: function(){
          projects.projects.forEach(function(project){
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
};

var education = {
     "schools": [
          {
               "name": "Unifor",
               "location": "Fortaleza, Ce, Brazil",
               "degree": "BA Electrical Eng.",
               "majors": ["CS"],
               "dates": "2010",
               "url": "http://www.unifor.br/"
          },
          {
               "name": "Uni7",
               "location": "Fortaleza, CE, Brazil",
               "degree": "Especialist Web System Dev",
               "majors": [""],
               "dates": "2017",
               "url": "http://www.uni7setembro.edu.br/"
          },
          {
               "name": "Strathfield College",
               "location": "Sydney, NSW, Australia",
               "degree": "General English",
               "majors": [""],
               "dates": "2015",
               "url": "http://sc.nsw.edu.au/"
          }
     ],
     "onlineCourses": [
          {
               "title": "JavaScript Syntax",
               "school": "Udacity",
               "dates": "2017",
               "url": "https://br.udacity.com/course/javascript-basics--ud804/"
          },
          {
               "title": "Front-End Developer",
               "school": "Udacity",
               "dates": "2017",
               "url": "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
          }
     ],
     display: function(){
          education.schools.forEach(function(school){
               $(".education-container").append(HTMLschoolStart);
               schoolNameReplacedHref = HTMLschoolName.replace("#", school.url);
               schoolNameReplaced = schoolNameReplacedHref.replace("%data%", school.name);
               $(".education-entry:last").append(schoolNameReplaced + HTMLschoolDegree.replace("%data%", school.degree));
               $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
               $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
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
};

var setSeo = {
     "favicon": "favicon.png",
     "siteDescription": "Portifolio resume",
     setOut: function(){
          $("title").html("Resume | " + bio.name + " | " + bio.role);
          $("link[rel~=shortcut]").attr("href","images/fixed/" + setSeo.favicon);
          $("meta[name~=description]").attr("content", setSeo.siteDescription);
     }
};

setSeo.setOut();
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

// Show a mensage Click Me for 3 seconds
$("#header ul").mouseover(function(){
$("#topContacts .click-me").fadeIn("slow");
     setTimeout(function(){
          $("#topContacts .click-me").fadeOut("slow");
     }, 3000);
});
