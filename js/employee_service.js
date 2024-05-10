getAllEmployees();

// Get All Employees
function getAllEmployees() {
    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/employee/getAllEmployee",
        async:true,
        success: function(data) {
            $("#employee-tbl-body").empty();
            data.forEach(function(employeeService) {
                let record = `<tr><td class="employeeCode">${employeeService.employeeCode}</td>
                                         <td class="employeeName">${employeeService.employeeName}</td>
                                         <td class="employeeDob">${employeeService.employeeDob}</td>
                                         <td class="employeeGender">${employeeService.employeeGender}</td>
                                         <td class="employeeDesignation">${employeeService.employeeDesignation}</td>
                                         <td class="employeeAccessRole">${employeeService.employeeAccessRole}</td>
                                         <td class="employeeJoinedDate">${employeeService.employeeJoinedDate}</td>
                                         <td class="attachedBranch">${employeeService.attachedBranch}</td>
                                         <td class="employeeAddress">${employeeService.employeeAddress}</td>
                                         <td class="employeeContact">${employeeService.employeeContact}</td>
                                         <td class="employeeEmail">${employeeService.employeeEmail}</td>
                                         <td class="emergencyContact">${employeeService.emergencyContact}</td></tr>`;
                $("#employee-tbl-body").append(record);
            });
        }
    });
}