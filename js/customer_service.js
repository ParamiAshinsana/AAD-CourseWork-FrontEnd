getAllCustomer();

function getAllCustomer() {
    $("#customer-tbl-body").empty();

    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/customers/getAllCustomer",
        async:true,
        success: function(data) {
            data.forEach(function(customer) {
                let record = `<tr><td class="customerId">${customer.customerId}</td><td class="customerName">${customer.customerName}</td><td class="customerAddress">${customer.customerAddress}</td><td class="customerNumber">${customer.customerNumber}</td></tr>`;
                $("#customer-tbl-body").append(record);
            });
        }
    });
}