// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function moveScreenAbout() {
  window.location.href = 'standardScreen.html';
}
function moveScreenHome() {
  window.location.href = 'index.html';
}
function moveScreenIndex() {
  window.location.href = 'index.html';
}
function moveScreenContact() {
  window.location.href = 'contactScreen.html';
}

function compareText() {
  var inputText = document.getElementById('uname').value;
  var errorMessage = document.getElementById('errorMessage');
  if (inputText === '1234' || inputText === '4321') {
    window.location.href = 'adminScreen.html'; // Replace 'new_page.html' with the desired URL
  } else {
    errorMessage.style.display = 'block';
  }
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById('uname');
  var showPasswordCheckbox = document.getElementById('showPassword');

  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

function openForm() {
  document.getElementById("myForm").classList.add("show");
}

function closeForm() {
  document.getElementById("myForm").classList.remove("show");
}

function moveScreen() {
  window.location.href = 'standardScreen.html';
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


 function myFunction() {
  var input, filter, table, tr, td, i, j, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    for (j = 0; j < 2; j++) { // loop through all columns
      td = tr[i].getElementsByTagName("td")[j];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break; // show row if match is found in any column
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
}

function openForm() {
  document.getElementById("myForm").classList.add("show");
}

function compareText() {
  var inputText = document.getElementById('uname').value;
  var errorMessage = document.getElementById('errorMessage');
  if (inputText === '1234' || inputText === '4321') {
    window.location.href = 'adminScreen.html'; // Replace 'new_page.html' with the desired URL
  } else {
    errorMessage.style.display = 'block';
  }
}