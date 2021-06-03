/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and rotates a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button rotate when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'rotated' code in style.css
    btn.classList.toggle("rotated");
  };
}

function logSubmit(event) {
  var formValues = 
  {
    email: form.elements.email.value,
    name: form.elements.name.value,
    phone: form.elements.phone.value
  }
  console.log(formValues)
  const data = { username: 'example' };
  event.preventDefault();

  Sheetsu.write("https://sheetsu.com/apis/v1.0su/4fc6c31a1c03", 
                formValues, 
                {}
               )
        .then(function(x) {
         console.log(x);
        }, 
        function(e) {
         console.log(e)
        });
}

var form = document.getElementById('newsletter');
form.addEventListener('submit', logSubmit);

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
