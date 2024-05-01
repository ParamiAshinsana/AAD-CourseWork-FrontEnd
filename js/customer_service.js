getAllCustomer();

function getAllCustomer() {


    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/customers/getAllCustomer",
        async:true,
        success: function(data) {
            data.forEach(function(customerService) {
                let record = `<tr><td class="customerCode">${customerService.customerCode}</td>
                                         <td class="customerName">${customerService.customerName}</td>
                                         <td class="customerDOB">${customerService.customerDOB}</td>
                                         <td class="customerGender">${customerService.customerGender}</td>
                                         <td class="customerJoinDate">${customerService.customerJoinDate}</td>
                                         <td class="customerLoyaltyPoints">${customerService.customerLoyaltyPoints}</td>
                                         <td class="loyaltyLevel">${customerService.loyaltyLevel}</td>
                                         <td class="customerAddress">${customerService.customerAddress}</td>
                                         <td class="customerContact">${customerService.customerContact}</td>
                                         <td class="customerEmail">${customerService.customerEmail}</td></tr>`;
                $("#customer-tbl-body").append(record);
            });
        }
    });
}