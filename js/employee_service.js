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


// Save the Employee
$(document).ready(function() {
    $('#saveButton').click(function() {
        var emCode = $('#employee_code').val();
        var emName = $('#employee_name').val();
        var fileInput = $('#profileImg')[0].files[0];
        var emDob = $('#emp_dob').val();
        var emGender = $('#gender').val();
        var emStatus = $('#employee_status').val();
        var emDesignation = $('#employee_designation').val();
        var emAccessRole = $('#access_role').val();
        var emJoinedDate = $('#join_date').val();
        var emBranch = $('#emp_branch').val();
        var emAddress = $('#emp_ad05').val();
        var emContact = $('#emp_contact').val();
        var emEmail = $('#emp_email').val();
        var emGuardianName = $('#emp_guardian').val();
        var emEmergencyContact = $('#emp_emergency_contact').val();

        var formData = new FormData();

        formData.append('empCode', emCode);
        formData.append('empName', emName);
        formData.append('files', fileInput);
        formData.append('empDOB', emDob);
        formData.append('empGender', emGender);
        formData.append('empStatus', emStatus);
        formData.append('empDesignation', emDesignation);
        formData.append('empAccessRole', emAccessRole);
        formData.append('empJoinedDate', emJoinedDate);
        formData.append('empBranch', emBranch);
        formData.append('empAddress', emAddress);
        formData.append('empContact', emContact);
        formData.append('empEmail', emEmail);
        formData.append('empGuardianNAme', emGuardianName);
        formData.append('empEmergencyContact', emEmergencyContact);


        $.ajax({
            url:"http://localhost:8080/api/v1/employee/saveEmployee",
            type: 'POST',
            data: formData,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            success: function(response) {
                alert("Saved!!!")
                console.log('Image uploaded successfully.');
                getAllEmployees();
            },
            error: function(xhr, status, error) {
                console.error('Error uploading image:', error);
            }
        });
    });
});

// Employee Delete

$(document).ready(function() {
    $('#deleteButton').click(function() {
        var emCode = $('#employee_code').val();

        if (!emCode) {
            alert("Please enter an employee code.");
            return;
        }

        $.ajax({
            url: "http://localhost:8080/api/v1/employee/deleteEmployee/" + emCode,
            type: 'DELETE',
            success: function(response) {
                alert("Deleted successfully!");
                console.log('Employee deleted successfully.');
                getAllEmployees(); // Assuming you have a function to refresh the employee list
            },
            error: function(xhr, status, error) {
                console.error('Error deleting employee:', error);
                alert('Failed to delete employee.');
            }
        });
    });
});


