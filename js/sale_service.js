getAllCustomers();

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