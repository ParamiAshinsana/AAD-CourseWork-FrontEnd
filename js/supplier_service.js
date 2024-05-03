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
$("#supplier-tbl-body").on("click", "tr", function() {
    row_index = $(this).index();

    let suppCode = $(this).find(".supplierCode").text();
    let suppName = $(this).find(".supplierName").text();
    let category = $(this).find(".category").text();
    let suppAddress01 = $(this).find(".supplierAddress01").text();
    let suppAddress02 = $(this).find(".supplierAddress02").text();
    let suppAddress03 = $(this).find(".supplierAddress03").text();
    let suppAddress04 = $(this).find(".supplierAddress04").text();
    let suppAddress05 = $(this).find(".supplierAddress05").text();
    let suppAddress06 = $(this).find(".supplierAddress06").text();
    let suppContact01 = $(this).find(".contactNo01").text();
    let suppContact02 = $(this).find(".contactNo02").text();
    let suppEmail = $(this).find(".supplierEmail").text();

    $("#supp_code").val(suppCode);
    $("#supp_name").val(suppName);
    $("#category").val(category);
    $("#ad_01").val(suppAddress01);
    $("#ad_02").val(suppAddress02);
    $("#ad_03").val(suppAddress03);
    $("#ad_04").val(suppAddress04);
    $("#ad_05").val(suppAddress05);
    $("#ad_06").val(suppAddress06);
    $("#supp_contact-1").val(suppContact01);
    $("#supp_contact-2").val(suppContact02);
    $("#supp_email").val(suppEmail);
})