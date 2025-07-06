const otpDisplay = document.getElementById('otpDisplay');
const copiedMsg = document.getElementById('copiedMsg');

const generateOTP = (length, useDigits, useUpper, useLower, useSymbols) => {
  let chars = '';
  if (useDigits) chars += '0123456789';
  if (useUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (useLower) chars += 'abcdefghijklmnopqrstuvwxyz';
  if (useSymbols) chars += '!@#$%^&*';

  if (chars === '') return '------';

  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return otp;
};

function generateAndDisplayOTP() {
  const length = parseInt(document.getElementById('otpLength').value);
  const useDigits = document.getElementById('includeDigits').checked;
  const useUpper = document.getElementById('includeUppercase').checked;
  const useLower = document.getElementById('includeLowercase').checked;
  const useSymbols = document.getElementById('includeSymbols').checked;

  const otp = generateOTP(length, useDigits, useUpper, useLower, useSymbols);
  otpDisplay.textContent = otp;
  copiedMsg.style.opacity = 0;
}

function copyOTP() {
  const text = otpDisplay.textContent;
  if (text && text !== '------') {
    navigator.clipboard.writeText(text).then(() => {
      copiedMsg.style.opacity = 1;
      setTimeout(() => copiedMsg.style.opacity = 0, 2000);
    });
  }
}
