function copyToClipboard() {
    console.log('Copy to Clipboard function triggered');
    const passwordText = document.querySelector('.password-output');
    
    if (passwordText) {
      const range = document.createRange();
      range.selectNode(passwordText);
  
      // Clear any previous selections
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
  
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          alert("Password copied to clipboard!");
        } else {
          alert("Failed to copy password.");
        }
      } catch (err) {
        alert("Failed to copy password.");
      }
  
      window.getSelection().removeAllRanges();
    } else {
      alert("No password to copy.");
    }
  }
  