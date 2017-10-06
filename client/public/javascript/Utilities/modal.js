
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('nav-icon2');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.addEventListener(interactiveEvent, function() {
    modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.addEventListener(interactiveEvent, function() {
    modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener(interactiveEvent, function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})
