// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyA09K5iYuDS1VvcufjzqAyGcuhnoQME9Gs",
    authDomain: "piaic-e1485.firebaseapp.com",
    databaseURL: "https://piaic-e1485.firebaseio.com",
    projectId: "piaic-e1485",
    storageBucket: "piaic-e1485.appspot.com",
    messagingSenderId: "93065547308",
    appId: "1:93065547308:web:78fb84eb7f5d7637f20b89",
    measurementId: "G-JC8LNVS9W8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}