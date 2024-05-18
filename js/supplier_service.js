getAllSuppliers();
var row_index = null;


// Get All Suppliers
function getAllSuppliers() {
    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/suppliers/getAllSupplier",
        async:true,
        success: function(data) {
            $("#supplier-tbl-body").empty();
            data.forEach(function(supplierService) {
                let record = `<tr><td class="supplierCode">${supplierService.supplierCode}</td>
                                         <td class="supplierName">${supplierService.supplierName}</td>
                                         <td class="category">${supplierService.category}</td>
                                         <td class="supplierAddress01">${supplierService.supplierAddress01}</td>
                                         <td class="supplierAddress02">${supplierService.supplierAddress02}</td>
                                         <td class="supplierAddress03">${supplierService.supplierAddress03}</td>
                                         <td class="supplierAddress04">${supplierService.supplierAddress04}</td>
                                         <td class="supplierAddress05">${supplierService.supplierAddress05}</td>
                                         <td class="supplierAddress06">${supplierService.supplierAddress06}</td>
                                         <td class="contactNo01">${supplierService.contactNo01}</td>
                                         <td class="contactNo02">${supplierService.contactNo02}</td>
                                         <td class="supplierEmail">${supplierService.supplierEmail}</td></tr>`;
                $("#supplier-tbl-body").append(record);
            });
        }
    });
}

// when click a row
// $("#supplier-tbl-body").on("click", "tr", function() {
//     row_index = $(this).index();
//
//     let suppCode = $(this).find(".supplierCode").text();
//     let suppName = $(this).find(".supplierName").text();
//     let category = $(this).find(".category").text();
//     let suppAddress01 = $(this).find(".supplierAddress01").text();
//     let suppAddress02 = $(this).find(".supplierAddress02").text();
//     let suppAddress03 = $(this).find(".supplierAddress03").text();
//     let suppAddress04 = $(this).find(".supplierAddress04").text();
//     let suppAddress05 = $(this).find(".supplierAddress05").text();
//     let suppAddress06 = $(this).find(".supplierAddress06").text();
//     let suppContact01 = $(this).find(".contactNo01").text();
//     let suppContact02 = $(this).find(".contactNo02").text();
//     let suppEmail = $(this).find(".supplierEmail").text();
//
//     $("#supp_code").val(suppCode);
//     $("#supp_name").val(suppName);
//     $("#category").val(category);
//     $("#ad_01").val(suppAddress01);
//     $("#ad_02").val(suppAddress02);
//     $("#ad_03").val(suppAddress03);
//     $("#ad_04").val(suppAddress04);
//     $("#ad_05").val(suppAddress05);
//     $("#ad_06").val(suppAddress06);
//     $("#supp_contact-1").val(suppContact01);
//     $("#supp_contact-2").val(suppContact02);
//     $("#supp_email").val(suppEmail);
// })

// Supplier Save

function saveSupplier(){
    let suppCode = $('#supp_code').val();
    let suppName = $('#supp_name').val();
    let category = $('#category').val();
    let suppAddress01 = $('#ad_01').val();
    let suppAddress02 = $('#ad_02').val();
    let suppAddress03 = $('#ad_03').val();
    let suppAddress04 = $('#ad_04').val();
    let suppAddress05 = $('#ad_05').val();
    let suppAddress06 = $('#ad_06').val();
    let suppContact01 = $('#supp_contact-1').val();
    let suppContact02 = $('#supp_contact-2').val();
    let suppEmail = $('#supp_email').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/suppliers/saveSupplier",
        async:true,
        data:JSON.stringify({
            "supplierCode":suppCode,
            "supplierName":suppName,
            "category":category,
            "supplierAddress01":suppAddress01,
            "supplierAddress02":suppAddress02,
            "supplierAddress03":suppAddress03,
            "supplierAddress04":suppAddress04,
            "supplierAddress05":suppAddress05,
            "supplierAddress06":suppAddress06,
            "contactNo01":suppContact01,
            "contactNo02":suppContact02,
            "supplierEmail":suppEmail

        }),

        success: function (data){
            alert("Saved!!!")
            getAllSuppliers();
        },
        error: function (xhr, exception){
            alert("Error!!!")
        },
    })
}

// Supplier Update

function updateSupplier(){
    let suppCode = $('#supp_code').val();
    let suppName = $('#supp_name').val();
    let category = $('#category').val();
    let suppAddress01 = $('#ad_01').val();
    let suppAddress02 = $('#ad_02').val();
    let suppAddress03 = $('#ad_03').val();
    let suppAddress04 = $('#ad_04').val();
    let suppAddress05 = $('#ad_05').val();
    let suppAddress06 = $('#ad_06').val();
    let suppContact01 = $('#supp_contact-1').val();
    let suppContact02 = $('#supp_contact-2').val();
    let suppEmail = $('#supp_email').val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/suppliers/updateSupplier/"+suppCode,
        async:true,
        data:JSON.stringify({
            "supplierCode":suppCode,
            "supplierName":suppName,
            "category":category,
            "supplierAddress01":suppAddress01,
            "supplierAddress02":suppAddress02,
            "supplierAddress03":suppAddress03,
            "supplierAddress04":suppAddress04,
            "supplierAddress05":suppAddress05,
            "supplierAddress06":suppAddress06,
            "contactNo01":suppContact01,
            "contactNo02":suppContact02,
            "supplierEmail":suppEmail
        }),

        success: function (data){
            alert("Updated!!!")
            getAllSuppliers();
        },
        error: function (xhr, exception){
            alert("Error!!!")
        },

    })
}

// Supplier Delete

function deleteSupplier(){
    let suppCode = $('#supp_code').val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8080/api/v1/suppliers/deleteSupplier/"+suppCode,
        async:true,

        success: function (data){
            alert("Deleted!!!")
            getAllSuppliers();
        },
        error: function (xhr, exception){
            alert("Error!!!")
        },

    })
}