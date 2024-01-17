function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Hardcoded credentials for demo purposes
    if (username === 'admin' && password === 'password') {
        window.location.href = 'homepage.html';
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
}
// Initialize an array to store student data
var students = [];

function addStudent() {
    var studentName = document.getElementById('studentName').value;
    if (studentName.trim() !== "") {
        students.push({ name: studentName, present: false });
        document.getElementById('studentName').value = "";
        displayStudents();
    }
}

function displayStudents() {
    var tableBody = document.getElementById('attendanceBody');
    tableBody.innerHTML = "";

    for (var i = 0; i < students.length; i++) {
        var row = tableBody.insertRow();
        var cellName = row.insertCell(0);
        var cellAttendance = row.insertCell(1);

        cellName.innerHTML = students[i].name;
        cellAttendance.innerHTML = students[i].present ? "Present" : "Absent";
    }
}

function markAttendance() {
    for (var i = 0; i < students.length; i++) {
        // Prompt the user for attendance status
        var attendanceStatus = prompt("Is " + students[i].name + " present? (Yes/No)").toLowerCase();
        
        // Update attendance based on user input
        if (attendanceStatus === 'yes') {
            students[i].present = true;
        } else {
            students[i].present = false;
        }
    }
    displayStudents();
}

function goToAttendanceDisplayPage() {
    // Encode the student data as a JSON string and pass it as a URL parameter
    var studentData = encodeURIComponent(JSON.stringify(students));
    window.location.href = 'attendancedisplaypage.html?students=' + studentData;
}