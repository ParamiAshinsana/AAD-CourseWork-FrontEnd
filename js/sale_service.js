getAllCustomers();
getAllItemCodes();
getAllSaleDetails();

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
            console.log(data[0].itemDescription)
            // Populate the supplier name input field
            $('#item_des').val(data[0].itemDescription);
            $('#item_price').val(data[0].unitPriceSale);
            $('#shoe_size').val(data[0].itemSize);
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


// function saveSale() {
//     let orderNo = $('#order_no').val();
//     let customerCode = $('#custo_code').val();
//     let itemCode = $('#item_code').val();
//     let itemQty = $('#item_qty').val();
//     let purchaseDate = $('#pr_date').val();
//     let addedPoints = $('#points').val();
//     let totalPrice = $('#total_price').val();
//     let paymentMethod = $('#payment_method').val();
//     let cashierName = $('#cashier_name').val();
//
//     $.ajax({
//         method: "POST",
//         contentType: "application/json",
//         url: "http://localhost:8080/api/v1/sales/saveSale",
//         async: true,
//         data: JSON.stringify({
//             "orderNo": orderNo,
//             "customerCode": customerCode,
//             "itemCode": itemCode,
//             "orderItemQty": itemQty,
//             "totalPrice": totalPrice,
//             "purchaseDate": purchaseDate,
//             "paymentMethod": paymentMethod,
//             "addedPoints": addedPoints,
//             "cashierName": cashierName
//         }),
//
//         success: function (data) {
//             alert("Sale saved successfully!");
//             console.log("Saved")
//             // Refresh the sales list or perform any other actions
//         },
//
//         error: function (xhr, exception) {
//             alert("Error saving sale!");
//             console.log("Error")
//         },
//     });
// }

function saveSale() {
    let orderNo = $('#order_no').val();
    let customerCode = $('#custo_code').val();
    let itemCode = $('#item_code').val();
    let itemQty = $('#item_qty').val();
    let purchaseDate = $('#pr_date').val();
    let addedPoints = $('#points').val();
    let totalPrice = $('#total_price').val();
    let paymentMethod = $('#payment_method').val();
    let cashierName = $('#cashier_name').val();

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/sales/saveSale",
        async: true,
        data: JSON.stringify({
            "orderNo": orderNo,
            "cusDTO": {
                "customerCode": customerCode
            },
            "invDTO": {
                "itemCode": itemCode
            },
            "orderItemQty": itemQty,
            "totalPrice": totalPrice,
            "purchaseDate": purchaseDate,
            "paymentMethod": paymentMethod,
            "addedPoints": addedPoints,
            "cashierName": cashierName
        }),
        success: function (data) {
            alert("Sale saved successfully!");
            console.log("Saved");
            // Refresh the sales list or perform any other actions
            getAllSaleDetails();
        },
        error: function (xhr, exception) {
            alert("Error saving sale!");
            console.log("Error");
        },
    });
}


// Get All Sales
function getAllSaleDetails() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/sales/getAllSales",
        async: true,
        success: function(data) {
            $("#sale-tbl-body").empty();
            data.forEach(function (saleService) {
                let record = `<tr>
                                <td class="orderNo">${saleService.orderNo}</td>
                                <td class="inventoryEntities">${saleService.inventoryEntities.itemCode}</td>
                                <td class="customerEntity">${saleService.customerEntity.customerCode}</td>
                                <td class="orderItemQty">${saleService.orderItemQty}</td>
                                <td class="totalPrice">${saleService.totalPrice}</td>
                                <td class="purchaseDate">${saleService.purchaseDate}</td>
                                <td class="paymentMethod">${saleService.paymentMethod}</td>
                                <td class="addedPoints">${saleService.addedPoints}</td>
<!--                                <td class="action">-->
<!--                                    <button class="btn btn-primary" onclick="deleteSale()">Refund</button>-->
<!--                                </td>-->
                                <td class="action">
                                    <button class="btn btn-primary" onclick="deleteSale('${saleService.orderNo}' , '${saleService.purchaseDate}')">Refund</button>
                                </td>
                              </tr>`;
                $("#sale-tbl-body").append(record);
            });
        }
    });
}


// function deleteSale(orderNo, purchaseDate) {
//     let today = new Date();
//     let purchaseDateObj = new Date(purchaseDate);
//     let timeDifference = today.getTime() - purchaseDateObj.getTime();
//     let dayDifference = timeDifference / (1000 * 3600 * 24); // Convert time difference from milliseconds to days
//
//     if (dayDifference <= 3) {
//         $.ajax({
//             method: "DELETE",
//             url: "http://localhost:8080/api/v1/sales/deleteSales/" + orderNo,
//             async: true,
//             success: function(data) {
//                 alert("Sale deleted successfully!");
//                 getAllSaleDetails();
//             },
//             error: function(xhr, exception) {
//                 alert("Error deleting sale!");
//                 console.log("Error deleting sale:", xhr, exception);
//             }
//         });
//     } else {
//         alert("Refund cannot be processed. The purchase date exceeds the 3-day limit.");
//     }
// }
































// Function to handle refund
// function refundSale(orderNo) {
//     // Implement the refund functionality here
//     // alert("Refund functionality not implemented yet for order: " + orderNo);
//     let orderNo = $('#order_no').val();
//
//     $.ajax({
//         method:"DELETE",
//         url:"http://localhost:8080/api/v1/sales/deleteSales/"+orderNo,
//         async:true,
//
//         success: function (data){
//             alert("Deleted!!!")
//             getAllSaleDetails();
//         },
//         error: function (xhr, exception){
//             alert("Error!!!")
//         },
//
//     })
// }



// function deleteSale(orderNo,purchaseDate) {
//     console.log("Refund clicked for order: " + orderNo + " Purchase Date is : "+ purchaseDate);
//     alert("Refund functionality not implemented yet for order: " + orderNo);
// }

// function deleteSale(){
//     let orderNo = $('#order_no').val();
//
//     $.ajax({
//         method:"DELETE",
//         url:"http://localhost:8080/api/v1/sales/deleteSales/"+orderNo,
//         async:true,
//
//         success: function (data){
//             alert("Deleted!!!")
//             getAllSaleDetails();
//         },
//         error: function (xhr, exception){
//             alert("Error!!!")
//         },
//
//     })
//
// }



// Get All Sales
// function getAllSaleDetails() {
//     $.ajax({
//         method:"GET",
//         url:"http://localhost:8080/api/v1/sales/getAllSales",
//         async:true,
//         success: function(data) {
//             $("#sale-tbl-body").empty();
//             data.forEach(function (saleService) {
//                 let record = `<tr><td class="orderNo">${saleService.orderNo}</td>
//                                          <td class="invDTO">${saleService.invDTO.itemCode}</td>
//                                          <td class="cusDTO">${saleService.cusDTO.customerCode}</td>
//                                          <td class="orderItemQty">${saleService.orderItemQty}</td>
//                                          <td class="totalPrice">${saleService.totalPrice}</td>
//                                          <td class="purchaseDate">${saleService.purchaseDate}</td>
//                                          <td class="paymentMethod">${saleService.paymentMethod}</td>
//                                          <td class="addedPoints">${saleService.addedPoints}</td></tr>`;
//                 $("#sale-tbl-body").append(record);
//             });
//         }
//     });
// }



