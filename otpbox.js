// Function to move focus to the next input box
function moveToNextBox(input, index) {
    const value = input.value;
    const maxLength = input.maxLength;

    // Allow only numbers
    input.value = value.replace(/[^0-9]/g, '');

    // Move focus to the next box if filled
    if (value.length >= maxLength && index < 6) {
        const nextBox = document.querySelectorAll('.otp-box')[index];
        nextBox.focus();
    }

    // Move focus back if user clears input
    if (value.length === 0 && index > 1) {
        const prevBox = document.querySelectorAll('.otp-box')[index - 2];
        prevBox.focus();
    }
}

// Function to collect and verify OTP
function verifyOTP() {
    const otpBoxes = document.querySelectorAll('.otp-box');
    let otp = '';

    otpBoxes.forEach((box) => {
        otp += box.value;
    });

    if (otp.length === 6) {
        alert('OTP Entered: ' + otp);
        // Add further verification logic here
    } else {
        alert('Please enter a valid 6-digit OTP');
    }
}
