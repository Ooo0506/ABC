function adjustFont() {
    var studentIdElement = document.getElementById('student-id');
    var studentNameElement = document.getElementById('student-name');
    
    studentIdElement.style.fontSize = '20px';
    studentNameElement.style.fontSize = '20px';
    studentIdElement.style.color = 'blue';
    studentNameElement.style.color = 'green';
}

function adjustProfile() {
    var profilePicElement = document.getElementById('profile-pic');

    profilePicElement.style.border = '4px solid red';
    profilePicElement.style.borderRadius = '50%';
}

function changePhoto() {
    var profilePicElement = document.getElementById('profile-pic');

    profilePicElement.src = '20231225_145053.webp';
}
