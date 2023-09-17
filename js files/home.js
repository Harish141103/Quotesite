// scroll up button
            // Get the button:
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// scroll down to main content
document.getElementById('scroll-button').addEventListener('click', function() {
                  const elementToScrollTo = document.getElementById('scroll-to-me');
          
                  // Scroll to the element smoothly
                  elementToScrollTo.scrollIntoView({ behavior: 'smooth' });
              });





             const menuIcon = document.querySelector('.menu-icon');
             const menuLinks = document.querySelector('.menu-links');
             menuIcon.addEventListener('click', () => { 
               menuLinks.classList.toggle('show-menu');
                });
           
           
           
           
                //  for animated menu icon 
           function myFunction(x){
             x.classList.toggle("change");
           }
           
           const arrows = document.querySelectorAll('.arrow');
           arrows.forEach((arrow) => {
           arrow.addEventListener('click', () => {
             e.preventDefault();
           arrow.classList.toggle('active');
           const subMenu=arrow.nextElementSibling;
           subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
           });
           });
           
        //    <!--To get username  -->
                   const urlParms = new URLSearchParams(window.location.search);
                   const userName = urlParms.get('user_name');
                   
                   if (userName) {
                       const greetingElement = document.getElementById('username');
                       greetingElement.textContent = `${userName}!`;
                       
                   }
      

//   <!-- for Dropdown sidebar items -->

           //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
           var dropdown = document.getElementsByClassName("catitle");
           var i;
           
           for (i = 0; i < dropdown.length; i++) {
             dropdown[i].addEventListener("click", function() {
               this.classList.toggle("active");
               var dropdownContent = this.nextElementSibling;
               if (dropdownContent.style.display === "block") {
                 dropdownContent.style.display = "none";
               } else {
                 dropdownContent.style.display = "block";
               }
             });
           }


/*
<!-- to pass username to iframe 

<script>
  // Function to send the username to the iframe content
  function sendUsernameToIframe(username) {
      const iframe = document.getElementById("nestedIframe");

      // Send the username to the iframe's content window
      iframe.contentWindow.postMessage(username, "*");
  }

  // Get the username from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const usernameFromURL = urlParams.get('user_name');

  // Send the username to the iframe
  sendUsernameToIframe(usernameFromURL);
</script>
  -->


<!-- 
<script>
  // Function to send the username to the iframe content
  function sendUsernameToIframe() {
      const username = document.getElementById("username").value;
      const iframe = document.getElementById("nestedIframe");

      // Send the username to the iframe's content window
      iframe.contentWindow.postMessage(username, "*");
  }
</script>

<script>
  // Handle the form submission to pass the username to the iframe
  document.getElementById("userForm").addEventListener("submit", function (e) {
      e.preventDefault();
      sendUsernameToIframe();
  });
</script>
  -->
*/