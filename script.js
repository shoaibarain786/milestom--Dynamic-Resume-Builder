//listing element
var _a;
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Type assertion
    var profilePictureInput = document.getElementById("profilePicture");
    var firstnameElement = document.getElementById("firstname");
    var LastnameElement = document.getElementById("Lastname");
    var emailidElement = document.getElementById("emailid");
    var mobilenumberElement = document.getElementById("mobilenumber");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput && firstnameElement && LastnameElement && emailidElement && mobilenumberElement && educationElement && experienceElement && skillsElement) {
        var firstname = firstnameElement.value;
        var lastname = LastnameElement.value;
        var emailId = emailidElement.value;
        var mobilenumber = mobilenumberElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Picture element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        //creat resum autput
        var resumeOutput = "\n<h2>Resume</h2>\n ".concat(profilePictureURL ? "<img scr=\"".concat(profilePictureURL, " alt= \"Profile Picture\" class=\"profilePicture\"> ") : "", "\n<p><strong>Name:</strong>  <span id\"eidit-name\"class=\"eidtable\">").concat(firstname, " </span></p>\n<p><strong>LastName:</strong>  <span id\"eidit-LastName\"class=\"eidtable\">").concat(lastname, " </span></p>\n<p><strong>email:</strong> <span id\"eidit-email\"class=\"eidtable\"> ").concat(emailId, " </span></p>\n<p><strong>phone Number:</strong> <span id\"eidit-phone\"class=\"eidtable\"> ").concat(mobilenumber, " </span></p>\n\n\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n\n<h3>experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("the resume output elements are missing");
        }
    }
    else {
        console.error("one or more output element are missing");
    }
});
