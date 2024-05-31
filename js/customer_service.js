getAllCustomer();
var row_index = null;


// Customers Save

function saveCustomer() {
    let custCode = $('#customer_code').val();
    let custName = $('#customer_name').val();
    let custDOB = $('#customer_dob').val();
    let custGender = $('#customer_gender').val();
    let custJoinDate = $('#customer_join_date').val();
    let custLoyaltyPoints = $('#total_points').val();
    let custloyaltyLevel = $('#loyalty_level').val();
    let custAddress = $('#ad_05').val();
    let custContact = $('#customer_contact').val();
    let custEmail = $('#customer_email').val();

    let token = localStorage.getItem('user01');

    // Check if token is available
    if (!token) {
        Swal.fire({
            icon: 'error',
            title: 'Authentication Error',
            text: 'User not authenticated. Please log in.',
        });
        return;
    }

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/customers/saveCustomer",
        async: true,
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: JSON.stringify({
            "customerCode": custCode,
            "customerName": custName,
            "customerDOB": custDOB,
            "customerGender": custGender,
            "customerJoinDate": custJoinDate,
            "customerLoyaltyPoints": custLoyaltyPoints,
            "loyaltyLevel": custloyaltyLevel,
            "customerAddress": custAddress,
            "customerContact": custContact,
            "customerEmail": custEmail

        }),

        success: function (data) {
            Swal.fire({
                icon: 'success',
                title: 'Customer has been saved successfully!',
                showConfirmButton: false,
                timer: 2150
            });
            console.log("Customer saved");
            getAllCustomer();
        },
        error: function (xhr, exception) {
            Swal.fire({
                icon: 'error',
                title: 'Error saving customer!',
                text: 'Please try again later.',
            });
        },
    })
}


// Customer Update

function updateCustomer() {
    let custCode = $('#customer_code').val();
    let custName = $('#customer_name').val();
    let custDOB = $('#customer_dob').val();
    let custGender = $('#customer_gender').val();
    let custJoinDate = $('#customer_join_date').val();
    let custLoyaltyPoints = $('#total_points').val();
    let custloyaltyLevel = $('#loyalty_level').val();
    let custAddress = $('#ad_05').val();
    let custContact = $('#customer_contact').val();
    let custEmail = $('#customer_email').val();

    let token = localStorage.getItem('user01');

    // Check if token is available
    if (!token) {
        Swal.fire({
            icon: 'error',
            title: 'Authentication Error',
            text: 'User not authenticated. Please log in.',
        });
        return;
    }

    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/customers/updateCustomer/" + custCode,
        async: true,
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: JSON.stringify({
            "customerCode": custCode,
            "customerName": custName,
            "customerDOB": custDOB,
            "customerGender": custGender,
            "customerJoinDate": custJoinDate,
            "customerLoyaltyPoints": custLoyaltyPoints,
            "loyaltyLevel": custloyaltyLevel,
            "customerAddress": custAddress,
            "customerContact": custContact,
            "customerEmail": custEmail
        }),

        success: function (data) {
            Swal.fire({
                icon: 'success',
                title: 'Customer has been updated successfully!',
                showConfirmButton: false,
                timer: 2150
            });
            console.log("Customer updated");
            getAllCustomer();
        },
        error: function (xhr, exception) {
            Swal.fire({
                icon: 'error',
                title: 'Error updating customer!',
                text: 'Please try again later.',
            });
        },

    })
}


// Customer Delete

function deleteCustomer() {
    let custCode = $('#customer_code').val();

    let token = localStorage.getItem('user01');

    // Check if token is available
    if (!token) {
        Swal.fire({
            icon: 'error',
            title: 'Authentication Error',
            text: 'User not authenticated. Please log in.',
        });
        return;
    }

    $.ajax({
        method: "DELETE",
        url: "http://localhost:8080/api/v1/customers/deleteCustomer/" + custCode,
        async: true,
        headers: {
            'Authorization': 'Bearer ' + token
        },

        success: function (data) {
            Swal.fire({
                icon: 'success',
                title: 'Customer has been deleted successfully!',
                showConfirmButton: false,
                timer: 2150
            });
            console.log("Customer deleted");
            getAllCustomer();
        },
        error: function (xhr, exception) {
            Swal.fire({
                icon: 'error',
                title: 'Error deleting customer!',
                text: 'Please try again later.',
            });
        },

    })
}


// // Get All Customers
// function getAllCustomer() {
//     $.ajax({
//         method: "GET",
//         url: "http://localhost:8080/api/v1/customers/getAllCustomer",
//         async: true,
//         success: function (data) {
//             $("#customer-tbl-body").empty();
//             data.forEach(function (customerService) {
//                 let record = `<tr><td class="customerCode">${customerService.customerCode}</td>
//                                          <td class="customerName">${customerService.customerName}</td>
//                                          <td class="customerDOB">${customerService.customerDOB}</td>
//                                          <td class="customerGender">${customerService.customerGender}</td>
//                                          <td class="customerJoinDate">${customerService.customerJoinDate}</td>
//                                          <td class="customerLoyaltyPoints">${customerService.customerLoyaltyPoints}</td>
//                                          <td class="loyaltyLevel">${customerService.loyaltyLevel}</td>
//                                          <td class="customerAddress">${customerService.customerAddress}</td>
//                                          <td class="customerContact">${customerService.customerContact}</td>
//                                          <td class="customerEmail">${customerService.customerEmail}</td></tr>`;
//                 $("#customer-tbl-body").append(record);
//             });
//         }
//     });
// }




// Get All Customers Function
function getAllCustomer() {
    let token = localStorage.getItem('user01');

    // Check if token is available
    if (!token) {
        Swal.fire({
            icon: 'error',
            title: 'Authentication Error',
            text: 'User not authenticated. Please log in.',
        });
        return;
    }

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/customers/getAllCustomer",
        async: true,
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (data) {
            $("#customer-tbl-body").empty();
            data.forEach(function (customerService) {
                let record = `<tr>
                                <td class="customerCode">${customerService.customerCode}</td>
                                <td class="customerName">${customerService.customerName}</td>
                                <td class="customerDOB">${customerService.customerDOB}</td>
                                <td class="customerGender">${customerService.customerGender}</td>
                                <td class="customerJoinDate">${customerService.customerJoinDate}</td>
                                <td class="customerLoyaltyPoints">${customerService.customerLoyaltyPoints}</td>
                                <td class="loyaltyLevel">${customerService.loyaltyLevel}</td>
                                <td class="customerAddress">${customerService.customerAddress}</td>
                                <td class="customerContact">${customerService.customerContact}</td>
                                <td class="customerEmail">${customerService.customerEmail}</td>
                              </tr>`;
                $("#customer-tbl-body").append(record);
            });
        },
        error: function (xhr, exception) {
            Swal.fire({
                icon: 'error',
                title: 'Error fetching customers!',
                text: 'Please try again later.',
            });
        },
    });
}


// Get All Customers
// function getAllCustomer() {
//     $.ajax({
//         method: "GET",
//         url: "http://localhost:8080/api/v1/customers/getAllCustomer",
//         async: true,
//         success: function (ud) {
//             // $("#customer-tbl-body").empty();
//             // data.forEach(function (customerService) {
//             //     let record = `<tr><td class="customerCode">${customerService.customerCode}</td>
//             //                              <td class="customerName">${customerService.customerName}</td>
//             //                              <td class="customerDOB">${customerService.customerDOB}</td>
//             //                              <td class="customerGender">${customerService.customerGender}</td>
//             //                              <td class="customerJoinDate">${customerService.customerJoinDate}</td>
//             //                              <td class="customerLoyaltyPoints">${customerService.customerLoyaltyPoints}</td>
//             //                              <td class="loyaltyLevel">${customerService.loyaltyLevel}</td>
//             //                              <td class="customerAddress">${customerService.customerAddress}</td>
//             //                              <td class="customerContact">${customerService.customerContact}</td>
//             //                              <td class="customerEmail">${customerService.customerEmail}</td></tr>`;
//             //     $("#customer-tbl-body").append(record);
//             // });
//             console.log(ud.customerName)
//             localStorage.setItem('token',ud.customerName)
//             alert(localStorage.getItem('token'))
//
//
//         }
//     });
// }

//  <td class="customerGender">${customerService.customerGender},${customerService.customerGender}</td>


// when click a row
$("#customer-tbl-body").on("click", "tr", function () {
    row_index = $(this).index();

    let custCode = $(this).find(".customerCode").text();
    let custName = $(this).find(".customerName").text();
    let custDOB = $(this).find(".customerDOB").text();
    let custGender = $(this).find(".customerGender").text();
    let custJoinDate = $(this).find(".customerJoinDate").text();
    let custLoyaltyPoints = $(this).find(".customerLoyaltyPoints").text();
    let custloyaltyLevel = $(this).find(".loyaltyLevel").text();
    let custAddress = $(this).find(".customerAddress").text();
    let custContact = $(this).find(".customerContact").text();
    let custEmail = $(this).find(".customerEmail").text();

    $("#customer_code").val(custCode);
    $("#customer_name").val(custName);
    $("#customer_dob").val(custDOB);
    $("#customer_gender").val(custGender);
    $("#customer_join_date").val(custJoinDate);
    $("#total_points").val(custLoyaltyPoints);
    $("#loyalty_level").val(custloyaltyLevel);
    $("#ad_05").val(custAddress);
    $("#customer_contact").val(custContact);
    $("#customer_email").val(custEmail);
})
