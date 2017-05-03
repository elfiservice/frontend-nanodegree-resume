/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var myName = "Armando Jr.";
 var myRole = "Front-End Dev.";
 // $("#main").append(myName);
 //
 // var awesomeThoughts = "I am " + myName + " and I am AWESOME!";
 //
 // console.log(awesomeThoughts);
 //
 // //String replace
 // var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 // $("#main").append(funThoughts);

 var formattedName = HTMLheaderName.replace("%data%",myName);
 var formattedRole = HTMLheaderRole.replace("%data%",myRole);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
