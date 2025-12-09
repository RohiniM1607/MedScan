// Function to handle the login method selection (QR or User ID)
function handleLoginMethodSelection(method) {
  if (method === 'qr') {
      // Redirect to QR code scanning page
      window.location.href = "login-method.html?method=qr";
  } else if (method === 'userid') {
      // Redirect to User ID entry page
      window.location.href = "login-method.html?method=userid";
  }
}

// Function to handle User ID or QR code submission
function handleMethodSubmission() {
  const urlParams = new URLSearchParams(window.location.search);
  const method = urlParams.get('method');

  if (method === 'qr') {
      // Simulating QR code scanning logic
      alert("Simulating QR scanning...");
      window.location.href = "choose-role.html"; // Redirect after simulated QR scanning
  } else if (method === 'userid') {
      const userIdInput = document.getElementById('method-input').value;
      if (userIdInput) {
          window.location.href = "choose-role.html"; // Redirect after entering User ID
      } else {
          alert("Please enter your User ID.");
      }
  }
}

// Function to handle role selection
function handleRoleSelection(role) {
  if (role === 'patient') {
      window.location.href = "password-verification.html?role=patient";
  } else if (role === 'insurance') {
      window.location.href = "password-verification.html?role=insurance";
  } else if (role === 'doctor') {
      window.location.href = "password-verification.html?role=doctor";
  }
}

// Function to verify password and open dashboard
function handlePasswordVerification() {
  const urlParams = new URLSearchParams(window.location.search);
  const role = urlParams.get('role');
  const passwordInput = document.getElementById('password').value;

  if (passwordInput) {
      // Password verification logic (dummy for now)
      // Ideally, implement an actual backend password check
      window.location.href = "dashboard.html"; // Redirect to dashboard after "verification"
  } else {
      alert("Please enter your password.");
  }
}

// Function to update instruction text and form based on login method
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const method = urlParams.get('method');
  const instructionText = document.getElementById('instruction-text');
  const methodLabel = document.getElementById('method-label');
  const methodInput = document.getElementById('method-input');

  if (method === 'qr') {
      instructionText.textContent = 'Please scan your QR code:';
      methodLabel.textContent = 'QR Code:';
      methodInput.setAttribute('type', 'text'); // Simulated QR code field
      methodInput.placeholder = 'Scan your QR code here';
  } else if (method === 'userid') {
      instructionText.textContent = 'Please enter your User ID:';
      methodLabel.textContent = 'User ID:';
      methodInput.setAttribute('type', 'text');
      methodInput.placeholder = 'Enter your User ID here';
  }
});

// Service Worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
              console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
              console.log('Service Worker registration failed:', error);
          });
  });
}

// Password validation and dashboard redirection
function validatePassword(event) {
  event.preventDefault(); // Prevent default form submission behavior
  const password = document.getElementById('password').value;
  
  if (password) {
      window.location.href = 'dashboard.html'; // Redirect to dashboard on successful validation
  } else {
      alert('Invalid password. Please try again.');
  }
}
