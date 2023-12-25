function adjustFont() {
    var studentIdElement = document.getElementById('student-id');
    var studentNameElement = document.getElementById('student-name');

    // 調整字體和顏色
    studentIdElement.style.fontSize = '20px';
    studentNameElement.style.fontSize = '20px';
    studentIdElement.style.color = 'blue';
    studentNameElement.style.color = 'green';
}

function adjustProfile() {
    var profilePicElement = document.getElementById('profile-pic');

    // 調整大頭照外觀
    profilePicElement.style.border = '4px solid red';
    profilePicElement.style.borderRadius = '50%';
}

function changePhoto() {
    var profilePicElement = document.getElementById('profile-pic');

    // 換圖
    profilePicElement.src = 'new-photo.jpg';
}
