getAllSuppliers();
getAllInventories();

var row_index = null;

// Get All Supplier Codes
function getAllSuppliers() {
    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/suppliers/getAllSupplierCode",
        async:true,
        success: function(data) {
            $("#supp_code").empty();
            data.forEach(function(supplierCode) {
                let option = `<option value="${supplierCode}">${supplierCode}</option>`;
                $("#supp_code").append(option);
            });
        }
    });
}

// Get Supplier Name

function getSupplierName(){
    let supplCode = $('#supp_code').val();

    $.ajax({
        method:"GET",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/suppliers/getSupplierName/"+supplCode,
        async:true,
            success: function(data) {
                // Populate the supplier name input field
                $('#supp_name').val(data);
            },
        error: function (xhr, exception){
            alert("Error!!!")
        },
    })
}

// Save the Inventory

$(document).ready(function() {
    $('#saveButton').click(function() {
        var i_code = $('#item_code').val();
        var I_desc = $('#item_desc').val();
        var fileInput = $('#profileImg')[0].files[0];
        var i_category = $('#item_category').val();
        var i_size = $('#item_qty').val();
        var i_qty = $('#shoe-size').val();
        var supplier_code = $('#supp_code').val();
        var i_unitPriceSale = $('#sale_unit_price').val();
        var i_unitPriceBuy = $('#buy_unit_price').val();
        var i_expectedProfit = $('#expected_profit').val();
        var i_profitMargin = $('#profit_margin').val();

        var formData = new FormData();

        formData.append('iCode', i_code);
        formData.append('iDesc', I_desc);
        formData.append('files', fileInput);
        formData.append('iCategory', i_category);
        formData.append('iSize', i_size);
        formData.append('iQty', i_qty);
        formData.append('supCode', supplier_code);
        formData.append('iUnitPriceSale', i_unitPriceSale);
        formData.append('iUnitPriceBuy', i_unitPriceBuy);
        formData.append('iExpectedProfit', i_expectedProfit);
        formData.append('iProfitMargin', i_profitMargin);


        $.ajax({
            url:"http://localhost:8080/api/v1/inventory/saveInventory",
            type: 'POST',
            data: formData,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            success: function(response) {
                alert("Saved!!!")
                getAllInventories();
                console.log('Image uploaded successfully.');
            },
            error: function(xhr, status, error) {
                console.error('Error uploading image:', error);
            }
        });
    });
});

// Update the Inventory
$(document).ready(function() {
    $('#updateButton').click(function() {
        var i_code = $('#item_code').val();
        var I_desc = $('#item_desc').val();
        var fileInput = $('#profileImg')[0].files[0];
        var i_category = $('#item_category').val();
        var i_size = $('#item_qty').val();
        var i_qty = $('#shoe-size').val();
        var supplier_code = $('#supp_code').val();
        var i_unitPriceSale = $('#sale_unit_price').val();
        var i_unitPriceBuy = $('#buy_unit_price').val();
        var i_expectedProfit = $('#expected_profit').val();
        var i_profitMargin = $('#profit_margin').val();

        var formData = new FormData();

        formData.append('iDesc', I_desc);
        formData.append('files', fileInput);
        formData.append('iCategory', i_category);
        formData.append('iSize', i_size);
        formData.append('iQty', i_qty);
        formData.append('supCode', supplier_code);
        formData.append('iUnitPriceSale', i_unitPriceSale);
        formData.append('iUnitPriceBuy', i_unitPriceBuy);
        formData.append('iExpectedProfit', i_expectedProfit);
        formData.append('iProfitMargin', i_profitMargin);

        $.ajax({
            url: `http://localhost:8080/api/v1/inventory/updateInventory/${i_code}`,
            type: 'PUT',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                alert("Inventory updated successfully!");
                console.log('Inventory updated successfully.');
                getAllEmployees();
            },
            error: function(xhr, status, error) {
                console.error('Error updating Inventory :', error);
            }
        });
    });
});


// Get All Inventories
// function getAllInventories() {
//     console.log("1232343Inventory")
//     $.ajax({
//         method:"GET",
//         url:"http://localhost:8080/api/v1/inventory/getAllInventory",
//         async:true,
//         success: function(data) {
//             $("#inventory-tbl-body").empty();
//             data.forEach(function(inventoryService) {
//                 let record = `<tr><td class="itemCode">${inventoryService.itemCode}</td>
//                                          <td class="itemDescription">${inventoryService.itemDescription}</td>
//                                          <td class="category">${inventoryService.category}</td>
//                                          <td class="itemSize">${inventoryService.itemSize}</td>
//                                          <td class="itemQty">${inventoryService.itemQty}</td>
//                                          <td class="supplierEntity">${inventoryService.supplierEntity}</td>
//                                          <td class="unitPriceSale">${inventoryService.unitPriceSale}</td>
//                                          <td class="expectedProfit">${inventoryService.expectedProfit}</td>
//                                          <td class="profitMargin">${inventoryService.profitMargin}</td></tr>`;
//                 $("#inventory-tbl-body").append(record);
//             });
//         }
//     });
// }


function getAllInventories() {
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
    console.log("1232343Inventory")
    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/inventory/getAllInventory",
        async:true,
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function(data) {
            $("#inventory-tbl-body").empty();
            data.forEach(function(inventoryService) {
                let record = `<tr><td class="itemCode">${inventoryService.itemCode}</td>
                                         <td class="itemDescription">${inventoryService.itemDescription}</td>
                                         <td class="category">${inventoryService.category}</td>
                                         <td class="itemSize">${inventoryService.itemSize}</td>
                                         <td class="itemQty">${inventoryService.itemQty}</td>
                                         <td class="supplierEntity">${inventoryService.supplierEntity.supplierCode}</td>
                                         <td class="unitPriceSale">${inventoryService.unitPriceSale}</td>
                                         <td class="expectedProfit">${inventoryService.expectedProfit}</td>
                                         <td class="profitMargin">${inventoryService.profitMargin}</td></tr>`;
                $("#inventory-tbl-body").append(record);
            });
        },
        error: function (xhr, exception) {
            Swal.fire({
                icon: 'error',
                title: 'Error fetching inventories!',
                text: 'Please try again later.',
            });
        },
    });
}


// when click a row
$("#inventory-tbl-body").on("click", "tr", function() {
    console.log("Hello Parami")
    row_index = $(this).index();

    let i_code = $(this).find(".itemCode").text();
    let I_desc = $(this).find(".itemDescription").text();
    let i_category = $(this).find(".category").text();
    let i_size = $(this).find(".itemSize").text();
    let i_qty = $(this).find(".itemQty").text();
    let supplierEntity = $(this).find(".supplierEntity").text();
    let i_unitPriceSale = $(this).find(".unitPriceSale").text();
    let i_unitPriceBuy = $(this).find(".unitPriceBuy").text();
    let i_expectedProfit = $(this).find(".expectedProfit").text();
    let i_profitMargin = $(this).find(".profitMargin").text();


    $("#item_code").val(i_code);
    $("#item_desc").val(I_desc);
    $("#item_category").val(i_category);
    $("#item_qty").val(i_size);
    $("#shoe-size").val(i_qty);
    $("#supp_code").val(supplierEntity);
    $("#sale_unit_price").val(i_unitPriceSale);
    $("#buy_unit_price").val(i_unitPriceBuy);
    $("#expected_profit").val(i_expectedProfit);
    $("#profit_margin").val(i_profitMargin);

})