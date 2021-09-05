// Select the button
const btn = document.querySelector('.btn-toggle');

// Listen for a click on the button
btn.addEventListener('click', function() {
  // Toggling body dark theme
  document.body.classList.toggle('dark-theme');

  // Changing icon in the button
  document.getElementById("buttonStyleNavbar").classList.toggle('dark-theme');
  var myElement = document.getElementById("dark-mode-toggle-img");
  if (myElement.className == "fas fa-moon") {
      myElement.className = "fas fa-sun";
  } else {
      myElement.className = "fas fa-moon";
  }

  //Changing navbar
  var navbarElement = document.getElementById("navbarBlock");
  if (navbarElement.className == "navbar fixed-top navbar-expand-lg navbar-light") {
      navbarElement.className = "navbar fixed-top navbar-expand-lg navbar-dark dark-theme";
  } else {
      navbarElement.className = "navbar fixed-top navbar-expand-lg navbar-light";
  }

  //Changing blockHello
  document.getElementById("blockHello-section").classList.toggle('dark-theme');
  document.getElementById("blockHello-div").classList.toggle('dark-theme');
  var iconElements = document.getElementsByTagName("I")
  for (var i = 0; i < iconElements.length -1; i++) {
      iconElements[i+1].classList.toggle('dark-theme');
  }

  //Changing blockAbout
  document.getElementById("blockAbout-section").classList.toggle('dark-theme');
  document.getElementById("blockAbout-div").classList.toggle('dark-theme');
  document.getElementById("buttonCV").classList.toggle('dark-theme');

  //Changing blockMyJourney
  document.getElementById("blockMyJourney-section").classList.toggle('dark-theme');
  document.getElementById("blockMyJourney-div").classList.toggle('dark-theme');

  //Changing blockProjects
  document.getElementById("blockProjects-section").classList.toggle('dark-theme');
  document.getElementById("blockProjects-div").classList.toggle('dark-theme');

  //Changing footer
  document.getElementById("footer-div").classList.toggle('dark-theme');
  document.getElementById("footer-div-2").classList.toggle('dark-theme');
  document.getElementById("footer-div-3").classList.toggle('dark-theme');
})
