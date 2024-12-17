
//listing element

document.getElementById("resumeform")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Type assertion
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const firstnameElement = document.getElementById("firstname") as HTMLInputElement;
    const LastnameElement = document.getElementById("Lastname") as HTMLInputElement;
    const emailidElement = document.getElementById("emailid") as HTMLInputElement;
    const mobilenumberElement = document.getElementById("mobilenumber") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;


    
    if (profilePictureInput && firstnameElement && LastnameElement && emailidElement && mobilenumberElement && educationElement && experienceElement && skillsElement) {
        const firstname = firstnameElement.value;
        const lastname = LastnameElement.value;
        const emailId = emailidElement.value;
        const mobilenumber = mobilenumberElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Picture element
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";


//creat resum autput
const resumeOutput = `
<h2>Resume</h2>
 ${ profilePictureURL ? `<img scr="${profilePictureURL} alt= "Profile Picture" class="profilePicture"> `:""}
<p><strong>firstName:</strong> ${firstname} </p>
<p><strong>lastName:</strong> ${lastname} </p>
<p><strong>emailid:</strong> ${emailId} </p>
<p><strong>mobileNumber:</strong> ${mobilenumber} </p>



<h3>Education</h3>
<p>${education}</p>


<h3>experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;


const resumeOutputElement = document.getElementById(`resumeOutput`)

if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    
} else {
   console.error(`the resume output elements are missing`);

   
} 


} else {
    console.error(`one or more output element are missing`);
    
}

}); 


