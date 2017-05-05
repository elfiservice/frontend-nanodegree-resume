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
     "currentJob": "Web Dev Freelancer",
     "employer": "Just me",
     "yearsWorked": 8
     "city": "Fortaleza, CE, Brazil"
}

var education = {
     "schools": [
          {
               "name": "Unifor",
               "location": "Fortaleza, CE, Brazil",
               "degree": "BA",
               "majors": ["CS"],
               "graduationYear": 2010,
               "url": "#"
          },
          {
               "name": "Uni7",
               "location": "Fortaleza, CE, Brazil",
               "degree": "Especialist",
               "majors": [""],
               "graduationYear": 2017,
               "url": ""
          }
     ],
     "onlineCourses": [
          {
               "title": "JavaScript Syntax",
               "school": "Udacity",
               "date": 2017,
               "url": "#"
          }
     ]
}

$("#workExperience").append(HTMLworkEmployer.replace("%data%",work.employer));
$("#workExperience").append(HTMLworkTitle.replace("%data%",work["currentJob"]));
$("#workExperience").append(HTMLworkStart);

$("#education").append(HTMLschoolName.replace("%data%", education.schools[0].name));
$("#education").append(HTMLschoolStart);

var project = {
     "websites": [
          {
               "name":"Elfi Service",
               "year":2010,
               "tecUsed":["HTML","CSS","Bootstrap","Ajax","jQuery","PHP OO", "MySQL DB"],
               "url":"https://elfiservice.eco.br"
          },
          {
               "name":"Dra. Karla Bessa - Fisioterapeuta",
               "year":2008,
               "tecUsed":["HTML","CSS","Bootstrap","Ajax","jQuery","PHP OO", "MySQL DB"],
               "url":"https://karlabessa.com.br"
          },
          {
               "name":"Polo Satere",
               "year":2016,
               "tecUsed":["HTML","CSS","Bootstrap","Ajax","jQuery","PHP OO", "MySQL DB"],
               "url":"https://polosatere.com.br"
          },
          {
               "name":"Yoga Santa Felicidade",
               "year":2012,
               "tecUsed":["HTML","CSS","Bootstrap","Ajax","jQuery","PHP OO", "MySQL DB"],
               "url":"https://yogasantafelicidade.com"
          }
     ],
     "ecommerces":[
          {
               "name":"Loja Polo Satere",
               "year":2016,
               "tecUsed":["HTML","CSS","Bootstrap","Ajax","jQuery","PHP OO", "MySQL DB", "JSon"],
               "url":"https://loja.polosatere.com.br"
          }
     ],
     "eads":[
          {
               "name":"Simples Tecnologia",
               "year":2017,
               "tecUsed":["HTML","CSS","Bootstrap","Ajax","jQuery","PHP OO", "MySQL DB", "JSon"],
               "url":"https://simplestecnologia.com.br"
          }
     ]
}
