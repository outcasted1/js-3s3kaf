$(document).ready(function() {
  // Click event handler for the button
  $(".clcontrol-button").on("click", function() {
      // Clone the existing textbox
      var newTextbox = $(this).closest("tr").find(".clcontainer input").first().clone();
      
      // Clear the value of the new textbox
      newTextbox.val("");
      
      // Append the new textbox below the existing one
      $(this).closest("tr").append("<td class='clcontainer'></td>");
      $(this).closest("tr").find(".clcontainer").last().append($newTextbox);
  });
});