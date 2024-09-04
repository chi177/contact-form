// Get the form element
const form = document.getElementById('contact-form');

// Add event listener to the form
form.addEventListener('submit', (e) => {
  // Prevent default form submission
  e.preventDefault();

  // Get input fields
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const queryType = document.getElementsByName('query-type');
  const message = document.getElementById('message');
  const checkbox = document.getElementById('checkbox');

  // Initialize error messages
  let errors = [];

  // Validate input fields
  if (firstName.value.trim() === '') {
    errors.push('First Name: This field is required');
  }

  if (lastName.value.trim() === '') {
    errors.push('Last Name: This field is required');
  }

  if (email.value.trim() === '') {
    errors.push('Email Address: This field is required');
  } else if (!validateEmail(email.value)) {
    errors.push('Email Address: Please enter a valid email address');
  }

  if (!queryType[0].checked && !queryType[1].checked) {
    errors.push('Query Type: Please select a query type');
  }

  if (message.value.trim() === '') {
    errors.push('Message: This field is required');
  }

  if (!checkbox.checked) {
    errors.push('I consent to being contacted by the team: To submit this form, please consent to being contacted');
  }

  // Display error messages
  if (errors.length > 0) {
    displayErrors(errors);
  } else {
    // Submit the form
    submitForm();
  }
});

// Function to validate email
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Function to display error messages
function displayErrors(errors) {
  const errorList = document.createElement('ul');
  errorList.style.color = 'red';

  errors.forEach((error) => {
    const errorItem = document.createElement('li');
    errorItem.textContent = error;
    errorList.appendChild(errorItem);
  });

  form.appendChild(errorList);
}

// Function to submit the form
function submitForm() {
  // Create a success message
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Message Sent! Thanks for completing the form. We\'ll be in touch soon!';
  successMessage.style.color = 'green';

  // Clear the form
  form.reset();

  // Display the success message
  form.appendChild(successMessage);
}