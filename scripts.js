
// Personal Information Input

	const person = {
		first_name: "Jean-Nicolas", 
		last_name: "Rouette",
		age: 20,
		eye_color: "blue",
		proffession: "Student in Software Engineering",
		primary_email: "jeannicolasrouette@gmail.com",
		profile_pic_file: "jean-nic_Ai.jpeg",
		university: {
			name: "University of Calgary",
			location: "Calgary, Canada",
			faculty: "Shulich School of Engineering",
			degree_stream: "Software Engineering"
		}
	};


// Personal Information Implementation

	document.getElementById("full_name_id").innerHTML = person.first_name + " " + person.last_name;
	document.getElementById("proffession_id").innerHTML = person.proffession;
	document.getElementById("primary_email_id").innerHTML = person.primary_email;
	document.getElementById("profile_pic_file_id").src = person.profile_pic_file;
