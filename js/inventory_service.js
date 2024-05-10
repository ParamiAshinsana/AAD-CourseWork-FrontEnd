getAllSuppliers();

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
                console.log('Image uploaded successfully.');
            },
            error: function(xhr, status, error) {
                console.error('Error uploading image:', error);
            }
        });
    });
});
