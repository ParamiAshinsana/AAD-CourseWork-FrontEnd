getAllSuppliers();

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