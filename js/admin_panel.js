// $(document).ready(function(){
//     // Initialize Datepicker
//     $("#datepicker").datepicker({
//         format: 'mm/dd/yyyy',
//         autoclose: true,
//         todayHighlight: true
//     });
//
//     // Show calendar when button is clicked
//     $("#show-calendar-btn").click(function(){
//         // Toggle the visibility of the datepicker container
//         $("#datepicker-container").toggleClass("d-none");
//
//         // If the datepicker container is visible, show the datepicker
//         if (!$("#datepicker-container").hasClass("d-none")) {
//             // Set the position of the datepicker container relative to the button
//             var buttonOffset = $("#show-calendar-btn").offset();
//             $("#datepicker-container").css({
//                 "position": "absolute",
//                 "top": buttonOffset.top + $("#show-calendar-btn").outerHeight(),
//                 "left": buttonOffset.left
//             });
//         }
//     });
//
//     // Handle date selection
//     $("#datepicker").on("changeDate", function(event) {
//         var selectedDate = event.date;
//         var formattedDate = selectedDate.getMonth() + 1 + '/' + selectedDate.getDate() + '/' + selectedDate.getFullYear();
//         $("h2").text("Selected Date: " + formattedDate);
//         // Hide the calendar after a date is selected
//         $("#datepicker-container").addClass("d-none");
//     });
// });

$(document).ready(function(){
    // Initialize Datepicker
    $("#datepicker").datepicker({
        format: 'mm/dd/yyyy',
        autoclose: true,
        todayHighlight: true
    });

    // Show calendar when button is clicked
    $("#show-calendar-btn").click(function(event){
        event.preventDefault(); // Prevent default action of button click

        // Toggle the visibility of the datepicker container
        $("#datepicker-container").toggleClass("d-none");

        // If the datepicker container is visible, show the datepicker
        if (!$("#datepicker-container").hasClass("d-none")) {
            // Set the position of the datepicker container relative to the button
            var buttonOffset = $("#show-calendar-btn").offset();
            $("#datepicker-container").css({
                "position": "absolute",
                "top": buttonOffset.top + $("#show-calendar-btn").outerHeight(),
                "left": buttonOffset.left
            });
        }
    });

    // Handle date selection
    $("#datepicker").on("changeDate", function(event) {
        var selectedDate = event.date;
        var formattedDate = selectedDate.getMonth() + 1 + '/' + selectedDate.getDate() + '/' + selectedDate.getFullYear();
        $("#selected_sale_date").text("Selected Date : " + formattedDate);
        // Hide the calendar after a date is selected
        $("#datepicker-container").addClass("d-none");
    });
});



// ###############  TOTAL PROFIT OF A SELECTED DATE

$(document).ready(function(){
    // Initialize Datepicker
    $("#datepicker-profit").datepicker({
        format: 'mm/dd/yyyy',
        autoclose: true,
        todayHighlight: true
    });

    // Show calendar when button is clicked
    $("#show-calendar-btn-profit").click(function(event){
        event.preventDefault(); // Prevent default action of button click

        // Toggle the visibility of the datepicker container
        $("#datepicker-profit-container").toggleClass("d-none");

        // If the datepicker container is visible, show the datepicker
        if (!$("#datepicker-profit-container").hasClass("d-none")) {
            // Set the position of the datepicker container relative to the button
            var buttonOffset = $("#show-calendar-btn-profit").offset();
            $("#datepicker-profit-container").css({
                "position": "absolute",
                "top": buttonOffset.top + $("#show-calendar-btn-profit").outerHeight(),
                "left": buttonOffset.left
            });
        }
    });

    // Handle date selection
    $("#datepicker-profit").on("changeDate", function(event) {
        var selectedDate = event.date;
        var formattedDate = selectedDate.getMonth() + 1 + '/' + selectedDate.getDate() + '/' + selectedDate.getFullYear();
        $("#selected_profit_date").text("Selected Date : " + formattedDate);
        // Hide the calendar after a date is selected
        $("#datepicker-profit-container").addClass("d-none");
    });
});


// ################ TOTAL SALE ITEMS DETAILS OF A SELECTED DATE

$(document).ready(function(){
    // Initialize Datepicker
    $("#datepicker-sale-item").datepicker({
        format: 'mm/dd/yyyy',
        autoclose: true,
        todayHighlight: true
    });

    // Show calendar when button is clicked
    $("#show-calendar-btn-sale-item").click(function(event){
        event.preventDefault(); // Prevent default action of button click

        // Toggle the visibility of the datepicker container
        $("#datepicker-sale-item-container").toggleClass("d-none");

        // If the datepicker container is visible, show the datepicker
        if (!$("#datepicker-sale-item-container").hasClass("d-none")) {
            // Set the position of the datepicker container relative to the button
            var buttonOffset = $("#show-calendar-btn-sale-item").offset();
            $("#datepicker-sale-item-container").css({
                "position": "absolute",
                "top": buttonOffset.top + $("#show-calendar-btn-sale-item").outerHeight(),
                "left": buttonOffset.left
            });
        }
    });

    // Handle date selection
    $("#datepicker-sale-item").on("changeDate", function(event) {
        var selectedDate = event.date;
        var formattedDate = selectedDate.getMonth() + 1 + '/' + selectedDate.getDate() + '/' + selectedDate.getFullYear();
        $("#selected_date_sale_item").text("Selected Date : " + formattedDate);
        // Hide the calendar after a date is selected
        $("#datepicker-sale-item-container").addClass("d-none");
    });
});