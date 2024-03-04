// Get all elements with the class "accordion"
var acc = document.getElementsByClassName("accordion");

// Loop through each "accordion" element
for (var i = 0; i < acc.length; i++) {
    // Add a click event listener to the current "accordion" element
    acc[i].addEventListener("click", function() {
        // Toggle the "active" class to expand or collapse the panel
        this.classList.toggle("active");

        // Get the next sibling element, which is the panel
        var panel = this.nextElementSibling;

        // If the panel is currently open (has a max-height), close it by setting max-height to null
        // Otherwise, open the panel by setting max-height to its scrollHeight
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}














// // Get all elements with the class "accordion"
// var acc = document.getElementsByClassName("accordion");

// // Loop through each "accordion" element
// for (var i = 0; i < acc.length; i++) {
//     // Add a click event listener to the current "accordion" element
//     acc[i].addEventListener("click", function() {
//         // Close all other panels
//         for (var j = 0; j < acc.length; j++) {
//             // If the current "accordion" element is not the clicked element and it is active, remove the "active" class and collapse its panel
//             if (acc[j] !== this && acc[j].classList.contains("active")) {
//                 acc[j].classList.remove("active");
//                 acc[j].nextElementSibling.style.maxHeight = null;
//             }
//         }
            
//         // Toggle the "active" class of the clicked "accordion" element
//         this.classList.toggle("active");

//         // Get the next sibling element, which is the panel
//         var panel = this.nextElementSibling;

//         // If the panel is currently open (has a max-height), close it by setting max-height to null
//         // Otherwise, open the panel by setting max-height to its scrollHeight
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }




