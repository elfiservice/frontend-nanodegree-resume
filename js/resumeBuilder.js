/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // var myName = "Armando Jr.";
 // var myRole = "Front-End Dev.";
 // $("#main").append(myName);
 //
 // var awesomeThoughts = "I am " + myName + " and I am AWESOME!";
 //
 // console.log(awesomeThoughts);
 //
 // //String replace
 // var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 // $("#main").append(funThoughts);

 // var formattedName = HTMLheaderName.replace("%data%",myName);
 // var formattedRole = HTMLheaderRole.replace("%data%",myRole);
 // $("#header").prepend(formattedRole);
 // $("#header").prepend(formattedName);

//Bigraphy quiz - Lesson 9 - Data Type
var bio = {
     name: "Armando Jr.",
     role: "Front-End Dev.",
     contactInf: {
          email: "elfiservice@hotmail.com",
          github: "elfiservice",
          mobile: "+5585994128554",
          "twitter":"elfiservice",
          "blog":"https://ajudanaweb.com.br/blog"
          "location":"Fortaleza, Ce, Brazil"
     },
     image: "images/me.jpg",
     welcomeMessage: "Hi, I love God, my family and Coding",
     skills: ["HTML", "CSS", "Javascript", "Git", "GitHub"]
}

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contactInf.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contactInf.github));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contactInf.mobile));
$("#header").prepend(HTMLbioPic.replace("%data%", bio.image));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").append(HTMLskillsStart);
$("#skills").prepend(HTMLskills.replace("%data%", bio.skills));

//Practice with objects quiz - Lesson 9 - Data Type
var work = {
     jobs:[
          {
               "title": "Web Dev Freelancer",
               "employer": "Just me",
               "dates": "2008 - Future"
               "city": "Fortaleza, CE, Brazil",
               "description":"Developing some WebSites, Ecommerces and ERPs"
          },
          {
               "title": "Partner - Manager",
               "employer": "Elfi Service",
               "dates": "1999 - Future"
               "city": "Fortaleza, CE, Brazil",
               "description":"Manager a company of Electrical engineering"
          }
     ]

}

var education = {
     "schools": [
          {
               "name": "Unifor",
               "city": "Fortaleza, CE, Brazil",
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
          }
     ]
}

$("#workExperience").append(HTMLworkEmployer.replace("%data%",work.employer));
$("#workExperience").append(HTMLworkTitle.replace("%data%",work["title"]));
$("#workExperience").append(HTMLworkStart);

$("#education").append(HTMLschoolName.replace("%data%", education.schools[0].name));
$("#education").append(HTMLschoolStart);

var project = {
     "projects": [
          {
               "title": "Elfi Service WebSite",
               "dates": "2010-2017",
               "description": "",
               "images": ["#1","#2"]
          },
          {
               "title": "Dra. Karla Bessa WebSite",
               "dates": "2008-2017",
               "description": "",
               "images": ["#1","#2"]
          },
          {
               "title": "Yoga Santa Felicidade WebSite",
               "dates": "2012-2017",
               "description": "",
               "images": ["#1","#2"]
          },
          {
               "title": "Polo Satere WebSite",
               "dates": "2016-2017",
               "description": "",
               "images": ["#1","#2"]
          }

     ]
}
