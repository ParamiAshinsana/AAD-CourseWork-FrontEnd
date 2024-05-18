getAllCustomers();
getAllItemCodes();

// Get All Customer Codes
function getAllCustomers() {
    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/customers/getAllCustomerCode",
        async:true,
        success: function(data) {
            $("#custo_code").empty();
            data.forEach(function(customerCode) {
                let option = `<option value="${customerCode}">${customerCode}</option>`;
                $("#custo_code").append(option);
            });
        }
    });
}


// Get Customer Name

function getCustomerName(){
    let cussCode = $('#custo_code').val();

    $.ajax({
        method:"GET",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/customers/getCustomerName/"+cussCode,
        async:true,
        success: function(data) {
            // Populate the supplier name input field
            $('#customer_name').val(data);
        },
        error: function (xhr, exception){
            alert("Error!!!")
        },
    })
}

//-----Get Inventory Details

function handleInventoryClick() {
    getItemDescription();
    // getItemPrice();
    // getShoeSize();
}


// Get All Item Codes
function getAllItemCodes() {
    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/inventory/getAllItemCodes",
        async:true,
        success: function(data) {
            $("#item_code").empty();
            data.forEach(function(itemCode) {
                let option = `<option value="${itemCode}">${itemCode}</option>`;
                $("#item_code").append(option);
            });
        }
    });
}


//Get Item Description
function getItemDescription() {
    // Implementation for getting supplier name
    console.log("Getting Supplier Name");

    let inventoryCode = $('#item_code').val();

    $.ajax({
        method:"GET",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/inventory/getInventoryDescription/"+inventoryCode,
        async:true,
        success: function(data) {
            // Populate the supplier name input field
            $('#item_des').val(data);
            $('#item_price').val(data);
            $('#shoe_size').val(data);
        },
        error: function (xhr, exception){
            alert(" description Error!!!")
        },
    })
}


// Get Item Price
// function getItemPrice() {
//     // Implementation for getting supplier age
//     console.log("Getting Supplier Age");
//
//     let inventoryCode = $('#item_code').val();
//
//     $.ajax({
//         method:"GET",
//         contentType:"application/json",
//         url:"http://localhost:8080/api/v1/inventory/getInventoryPrice/"+inventoryCode,
//         async:true,
//         success: function(data) {
//             // Populate the supplier name input field
//             $('#item_price').val(data);
//         },
//         error: function (xhr, exception){
//             alert(" price Error!!!")
//         },
//     })
// }
//
// // Get Item Size
// function getShoeSize() {
//     // Implementation for getting supplier email
//     console.log("Getting Supplier Email");
//
//     let inventoryCode = $('#item_code').val();
//
//     $.ajax({
//         method:"GET",
//         contentType:"application/json",
//         url:"http://localhost:8080/api/v1/inventory/getShoeSize/"+inventoryCode,
//         async:true,
//         success: function(data) {
//             // Populate the supplier name input field
//             $('#shoe_size').val(data);
//         },
//         error: function (xhr, exception){
//             alert("Shoe Error!!!")
//         },
//     })
// }



$('#pr_date').click(function () {
    GetTodayDate();
});

function GetTodayDate() {
    var tdate = new Date();
    var dd = tdate.getDate(); //yields day
    var MM = tdate.getMonth(); //yields month
    var yyyy = tdate.getFullYear(); //yields year
    var currentDate = dd + "-" + (MM + 1) + "-" + yyyy;

    // return currentDate;

    $("#pr_date").val(currentDate);
}