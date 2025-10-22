//!About section
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  // Remove active-link from all tab links
  // for (let tabLink of tabLinks) {
  //   tabLink.classList.remove("active-link");
  // }
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link")
  }
  
  // Remove active-tab from all tab contents
  for (let tabContent of tabContents) {
   tabContent.classList.remove("active-tab")
 }
  
  // Add active-link to clicked tab
  event.currentTarget.classList.add("active-link");

  // Add active-tab to corresponding content
  document.getElementById(tabname).classList.add("active-tab");
}


//! Mobile Menu Functions
function openmenu() {
  document.querySelector('nav ul').style.right = "0";
}

function closemenu() {
  document.querySelector('nav ul').style.right = "-200px";
}






