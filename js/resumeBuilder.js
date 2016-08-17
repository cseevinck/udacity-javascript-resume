/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
    JericNote:
    Cleaning out code
    Commenting out previous lessons learned


    --Variable declaration
    var firstName = "Jeric";
    var awesomeThoughts = "I am " + firstName + " and I am AWESOME!";


    --this will add the string just before the ending tag of selected html
    $("#main").append(firstName);


    --this will add the string after the opening tag of selected html
    $("#main").prepend(firstName);

    --this is how you display output at the console
    console.log("Hello "+firstName);
    console.log(awesomeThoughts);

    --this is used to replace the first word with the second word
    var newThoughts = awesomeThoughts.replace("Jeric","Sheila");
    newThoughts = newThoughts.replace("AWESOME","FUN");
    console.log(newThoughts);


    --different ways to create object
    -- dot notation
    var work = {};
    work.position = "position";
    work.employer = "employer";
    work.years = "years";
    -- bracket notation
    var education = {};
    education["name"] = "name";
    education["city"] = "city";
    education["years"] = "years";


    --String manipulation
    var name = bio.name;
    var role = bio.role;
    --(split) will split the string and put it to an array
    --(CharAt) is character of the string of the given index
    --(toUpperCase) and (toLowerCase) changes the Case of the string
    --(join) will combine all the strings in an array to form 1 string
    var nameArray = name.split(" ");
    nameArray[0] = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].charAt(0).toUpperCase() + nameArray[1].slice(1).toLowerCase();
    nameArray[2] = nameArray[2].toUpperCase();
    name = nameArray.join(" ");

 */
// prefered way in making functions
// modular functions - can run in any order
function inName(name) {
    var newNameArray = name.trim().split(" ");
    newNameArray[0] = newNameArray[0].charAt(0).toUpperCase() + newNameArray[0].slice(1).toLowerCase();
    newNameArray[1] = newNameArray[1].toUpperCase();
    var newName = newNameArray.join(" ");
    return newName;
}


var bio = {
    "name": "Jeric Tibayan",
    "role": "Web Developer",
    "contacts": {
        "mobile": "0998-5558145",
        "email": "jeric_tibayan-webdev@yahoo.com",
        "github": "johndoe",
        "twitter": "@jstibayan",
        "location": "Lemery, Batangas",
    },
    "welcomeMessage": "Welcome to My Resume!",
    "skills": [
        "HTML", "CSS", "Javascript", "PHP"
    ],
    "biopic": "images/fry.jpg",
    "display": function() {
        // Bio
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));
        $("#header").prepend(formattedName);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").prepend(formattedLocation);
        $("#footerContacts").prepend(formattedLocation);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").prepend(formattedMobile);
        $("#footerContacts").prepend(formattedMobile);

        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").prepend(formattedTwitter);
        $("#footerContacts").prepend(formattedTwitter);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").prepend(formattedEmail);
        $("#footerContacts").prepend(formattedEmail);

        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);

        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            // prefered way in looping array
            // forEach instead of For In
            bio.skills.forEach(function(skill) {
                var formattedSkills = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkills);
            });
        }
    },
};


var education = {
    "schools": [{
        "name": "De La Salle Lipa",
        "location": "Lipa, Batangas",
        "degree": "Bachelor Degree",
        "majors": ["Computer Science"],
        "dates": "2007",
        "url": "http://example.com",
    }, ],
    "onlineCourses": [{
        "title": "Javascript Crash Course",
        "school": "Udacity",
        "date": "2016",
        "url": "http://www.udacity.com/course/ud804",
    }],
    "display": function() {
        // Education
        if (education.schools.length > 0) {
            education.schools.forEach(function(school) {
                $("#education").append(HTMLschoolStart);

                var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
                var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
                var formattedSchoolDegree = formattedSchoolName + formattedDegree;
                $(".education-entry:last").append(formattedSchoolDegree);

                var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
                $(".education-entry:last").append(formattedSchoolDates);

                var formattedSchoolCity = HTMLschoolLocation.replace("%data%", school.location);
                $(".education-entry:last").append(formattedSchoolCity);
                var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors.join(", "));
                $(".education-entry:last").append(formattedMajors);
            });
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);

            education.onlineCourses.forEach(function(course) {
                $("#education").append(HTMLschoolStart);

                var formattedCourseTitle = HTMLonlineTitle.replace("%data%", course.title);
                var formattedCourseOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
                var formattedCourseTitleSchool = formattedCourseTitle + formattedCourseOnlineSchool;
                $(".education-entry:last").append(formattedCourseTitleSchool);

                var formattedCourseDates = HTMLonlineDates.replace("%data%", course.date);
                $(".education-entry:last").append(formattedCourseDates);

                var formattedCourseUrl = HTMLonlineURL.replace("%data%", course.url);
                $(".education-entry:last").append(formattedCourseUrl);
            });

        }
    },
};


var work = {
    "jobs": [{
        "employer": "Lemery Doctors Medical Center",
        "title": "Systems Administrator",
        "location": "Lemery, Batangas",
        "dates": "2010 - Present",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eligendi necessitatibus minus, impedit modi reprehenderit maxime velit beatae error rem.",
    }, {
        "employer": "Surfers Dimension Internet Cafe",
        "title": "Owner",
        "location": "Lemery, Batangas",
        "dates": "2007 - 2010",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eum voluptate quod asperiores eos error eveniet esse, voluptates architecto cum.",
    }],
    "display": function() {
        // Jobs
        if (work.jobs.length > 0) {
            work.jobs.forEach(function(job) {
                $("#workExperience").append(HTMLworkStart);

                var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);

                var formatedDates = HTMLworkDates.replace("%data%", job.dates);
                $(".work-entry:last").append(formatedDates);

                var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
                $(".work-entry:last").append(formattedLocation);

                var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
                $(".work-entry:last").append(formattedDescription);
            });
        } // End Jobs
    },
};


var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2016",
        "description": "Description here",
        "images": [
            "images/197x148.gif",
            "images/197x148.gif",
            "images/197x148.gif",
        ],
    }, ],
    "display": function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedProjectTitle);

            var fomattedPojectDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(fomattedPojectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProjectDescription);

            if (project.images.length > 0) {
                project.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedImage);
                });
            }
        });
    },
};

var place = {
    "locations": [{
        "header": "Not Found",
        "subheader": "Not Found",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, sed fuga voluptas sunt. Soluta qui, incidunt excepturi voluptates est iure nulla labore quam sunt totam debitis, perferendis distinctio, sed eum aperiam omnis! Inventore iusto officia sapiente sequi, necessitatibus officiis nesciunt dignissimos pariatur accusantium, totam sit, a voluptatibus nisi. Impedit, quam.",
        "url": "http://example.com",
        "lastVisited": "March 11, 2016"
    }, {
        "header": "Lemery, Batangas",
        "subheader": "My Home Town",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, sed fuga voluptas sunt. Soluta qui, incidunt excepturi voluptates est iure nulla labore quam sunt totam debitis, perferendis distinctio, sed eum aperiam omnis! Inventore iusto officia sapiente sequi, necessitatibus officiis nesciunt dignissimos pariatur accusantium, totam sit, a voluptatibus nisi. Impedit, quam.",
        "url": "http://example.com",
        "lastVisited": "March 11, 2016"
    }, {
        "header": "Taal, Batangas",
        "subheader": "Where I went to Highschool",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, sed fuga voluptas sunt. Soluta qui, incidunt excepturi voluptates est iure nulla labore quam sunt totam debitis, perferendis distinctio, sed eum aperiam omnis! Inventore iusto officia sapiente sequi, necessitatibus officiis nesciunt dignissimos pariatur accusantium, totam sit, a voluptatibus nisi. Impedit, quam.",
        "url": "http://example.com",
        "lastVisited": "March 11, 2016"
    }, {
        "header": "Lipa, Batangas",
        "subheader": "Where I went to College",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, sed fuga voluptas sunt. Soluta qui, incidunt excepturi voluptates est iure nulla labore quam sunt totam debitis, perferendis distinctio, sed eum aperiam omnis! Inventore iusto officia sapiente sequi, necessitatibus officiis nesciunt dignissimos pariatur accusantium, totam sit, a voluptatibus nisi. Impedit, quam.",
        "url": "http://example.com",
        "lastVisited": "March 11, 2016"
    }]
};



bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);

//$("#main").append(internationalizeButton);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});




// SPERM
var width = 1500,
    height = 50;

var n = 100,
    m = 12,
    degrees = 180 / Math.PI;

var spermatozoa = d3.range(n).map(function() {
    var x = Math.random() * width,
        y = Math.random() * height;
    return {
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        path: d3.range(m).map(function() {
            return [x, y];
        }),
        count: 0
    };
});

var svg = d3.select("div#d3Sperm")
    .attr("min-height", height)
    .append("div")
    .classed("svg-container", true)
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 600 400")
    .classed("svg-content-responsive", true);
//.attr("width", width)

var g = svg.selectAll("g")
    .data(spermatozoa)
    .enter().append("g");

var head = g.append("ellipse")
    .attr("rx", 6.5)
    .attr("ry", 4);

g.append("path")
    .datum(function(d) {
        return d.path.slice(0, 3);
    })
    .attr("class", "mid");

g.append("path")
    .datum(function(d) {
        return d.path;
    })
    .attr("class", "tail");

var tail = g.selectAll("path");

d3.timer(function() {
    for (var i = -1; ++i < n;) {
        var spermatozoon = spermatozoa[i],
            path = spermatozoon.path,
            dx = spermatozoon.vx,
            dy = spermatozoon.vy,
            x = path[0][0] += dx,
            y = path[0][1] += dy,
            speed = Math.sqrt(dx * dx + dy * dy),
            count = speed * 10,
            k1 = -5 - speed / 3;

        // Bounce off the walls.
        if (x < 0 || x > width) spermatozoon.vx *= -1;
        if (y < 0 || y > height) spermatozoon.vy *= -1;

        // Swim!
        for (var j = 0; ++j < m;) {
            var vx = x - path[j][0],
                vy = y - path[j][1],
                k2 = Math.sin(((spermatozoon.count += count) + j * 3) / 300) / speed;
            path[j][0] = (x += dx / speed * k1) - dy * k2;
            path[j][1] = (y += dy / speed * k1) + dx * k2;
            speed = Math.sqrt((dx = vx) * dx + (dy = vy) * dy);
        }
    }

    head.attr("transform", headTransform);
    tail.attr("d", tailPath);
});

function headTransform(d) {
    return "translate(" + d.path[0] + ")rotate(" + Math.atan2(d.vy, d.vx) * degrees + ")";
}

function tailPath(d) {
    return "M" + d.join("L");
}

//OMG
var width = Math.max(300, innerWidth),
    height = Math.max(1690, innerHeight);

var i = 0;

var svg = d3.select("div#d3omg")
    .append("svg")
    .classed("svg-content-responsive", true)
    .attr("height", height)
    .attr("width", width);

svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

function particle() {
    var m = d3.mouse(this);

    svg.insert("circle", "rect")
        .attr("cx", m[0])
        .attr("cy", m[1])
        .attr("r", 1e-6)
        .style("stroke", d3.hsl((i = (i + 1) % 360), 1, 0.5))
        .style("stroke-opacity", 1)
        .transition()
        .duration(2000)
        .ease(Math.sqrt)
        .attr("r", 100)
        .style("stroke-opacity", 1e-6)
        .remove();

    d3.event.preventDefault();
}