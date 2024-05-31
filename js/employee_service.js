getAllEmployees();
var row_index = null;

// Get All Employees
function getAllEmployees() {
    let token = localStorage.getItem('user01');

    // Check if token is available
    if (!token) {
        Swal.fire({
            icon: 'error',
            title: 'Authentication Error',
            text: 'User not authenticated. Please log in.',
        });
        return;
    }

    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/employee/getAllEmployee",
        async:true,
        headers: {
            'Authorization': 'Bearer ' + token
        },
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
        },
        error: function (xhr, exception) {
            Swal.fire({
                icon: 'error',
                title: 'Error fetching employees!',
                text: 'Please try again later.',
            });
        },
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

        let token = localStorage.getItem('user01');

        // Check if token is available
        if (!token) {
            Swal.fire({
                icon: 'error',
                title: 'Authentication Error',
                text: 'User not authenticated. Please log in.',
            });
            return;
        }


        $.ajax({
            url:"http://localhost:8080/api/v1/employee/saveEmployee",
            type: 'POST',
            data: formData,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            success: function (data) {
                Swal.fire({
                    icon: 'success',
                    title: 'Employee has been saved successfully!',
                    showConfirmButton: false,
                    timer: 2150
                });
                console.log("Employee saved");
                getAllEmployees();
            },
            error: function (xhr, exception) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error saving employee!',
                    text: 'Please try again later.',
                });
            },
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

// Update the Employee
$(document).ready(function() {
    $('#updateButton').click(function() {
        var empCode = $('#employee_code').val();
        var empName = $('#employee_name').val();
        var fileInput = $('#profileImg')[0].files[0];
        var empDOB = $('#emp_dob').val();
        var empGender = $('#gender').val();
        var empStatus = $('#employee_status').val();
        var empDesignation = $('#employee_designation').val();
        var empAccessRole = $('#access_role').val();
        var empJoinedDate = $('#join_date').val();
        var empBranch = $('#emp_branch').val();
        var empAddress = $('#emp_address').val();
        var empContact = $('#emp_contact').val();
        var empEmail = $('#emp_email').val();
        var empGuardianName = $('#emp_guardian').val();
        var empEmergencyContact = $('#emp_emergency_contact').val();

        var formData = new FormData();

        formData.append('empName', empName);
        formData.append('files', fileInput);
        formData.append('empDOB', empDOB);
        formData.append('empGender', empGender);
        formData.append('empStatus', empStatus);
        formData.append('empDesignation', empDesignation);
        formData.append('empAccessRole', empAccessRole);
        formData.append('empJoinedDate', empJoinedDate);
        formData.append('empBranch', empBranch);
        formData.append('empAddress', empAddress);
        formData.append('empContact', empContact);
        formData.append('empEmail', empEmail);
        formData.append('empGuardianNAme', empGuardianName);
        formData.append('empEmergencyContact', empEmergencyContact);

        let token = localStorage.getItem('user01');

        // Check if token is available
        if (!token) {
            Swal.fire({
                icon: 'error',
                title: 'Authentication Error',
                text: 'User not authenticated. Please log in.',
            });
            return;
        }

        $.ajax({
            url: `http://localhost:8080/api/v1/employee/updateEmployee/${empCode}`,
            type: 'PUT',
            data: formData,
            processData: false,
            contentType: false,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            success: function (data) {
                Swal.fire({
                    icon: 'success',
                    title: 'Employee has been updated successfully!',
                    showConfirmButton: false,
                    timer: 2150
                });
                console.log("Employee Updated");
                getAllEmployees();
            },
            error: function (xhr, exception) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error updating employee!',
                    text: 'Please try again later.',
                });
            },
        });
    });
});


// when click a row
$("#employee-tbl-body").on("click", "tr", function() {
    row_index = $(this).index();

    let emCode = $(this).find(".employeeCode").text();
    let emName = $(this).find(".employeeName").text();
    let emDob = $(this).find(".employeeDob").text();
    let emGender = $(this).find(".employeeGender").text();
    let emStatus = $(this).find(".employeeStatus").text();
    let emDesignation = $(this).find(".employeeDesignation").text();
    let emAccessRole = $(this).find(".employeeAccessRole").text();
    let emJoinedDate = $(this).find(".employeeJoinedDate").text();
    let emBranch = $(this).find(".attachedBranch").text();
    let emAddress = $(this).find(".employeeAddress").text();
    let emContact = $(this).find(".employeeContact").text();
    let emEmail = $(this).find(".employeeEmail").text();
    let emGuardianName = $(this).find(".nameTheGuardian").text();
    let emEmergencyContact = $(this).find(".emergencyContact").text();


    $("#employee_code").val(emCode);
    $("#employee_name").val(emName);
    $("#emp_dob").val(emDob);
    $("#gender").val(emGender);
    $("#employee_status").val(emStatus);
    $("#employee_designation").val(emDesignation);
    $("#access_role").val(emAccessRole);
    $("#join_date").val(emJoinedDate);
    $("#emp_branch").val(emBranch);
    $("#emp_ad05").val(emAddress);
    $("#emp_contact").val(emContact);
    $("#emp_email").val(emEmail);
    $("#emp_guardian").val(emGuardianName);
    $("#emp_emergency_contact").val(emEmergencyContact);
})


