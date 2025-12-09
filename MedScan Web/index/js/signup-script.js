// Function to handle role selection and show corresponding signup fields
document.addEventListener('DOMContentLoaded', function() {
    const roleSelect = document.getElementById('role');
    const patientFields = document.getElementById('patient-fields');
    const insuranceFields = document.getElementById('insurance-fields');
    const doctorFields = document.getElementById('doctor-fields');

    roleSelect.addEventListener('change', function() {
        // Hide all role-specific fields
        patientFields.style.display = 'none';
        insuranceFields.style.display = 'none';
        doctorFields.style.display = 'none';

        // Show fields based on selected role
        if (roleSelect.value === 'patient') {
            patientFields.style.display = 'block';
        } else if (roleSelect.value === 'insurance') {
            insuranceFields.style.display = 'block';
        } else if (roleSelect.value === 'doctor') {
            doctorFields.style.display = 'block';
        }
    });
});
