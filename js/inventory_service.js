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
        var I_desc = $('#exampleFormControlInput2').val();
        var fileInput = $('#profileImg')[0].files[0];
        var i_category = $('#exampleFormControlInput1').val();
        var i_qty = $('#exampleFormControlInput2').val();
        var i_size = $('#exampleFormControlInput1').val();
        var i_unitPriceSale = $('#exampleFormControlInput2').val();
        var i_unitPriceBuy = $('#exampleFormControlInput1').val();
        var i_expectedProfit = $('#exampleFormControlInput2').val();
        var i_profitMargin = $('#exampleFormControlInput1').val();

        var formData = new FormData();

        formData.append('files', fileInput);
        formData.append('id', studentId);
        formData.append('name', studentName);

        $.ajax({
            url:"http://localhost:9090/api/v1/student/saveStudent",
            type: 'POST',
            data: formData,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            success: function(response) {
                console.log('Image uploaded successfully.');
            },
            error: function(xhr, status, error) {
                console.error('Error uploading image:', error);
            }
        });
    });
});
