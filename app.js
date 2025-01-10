
    function checkCompatibility() {
      const donor = document.getElementById("donor").value;
      const recipient = document.getElementById("recipient").value;

   
      const compatibility = {
        "O-": ["O-", "O+", "B-", "B+", "A-", "A+", "AB-", "AB+"],
        "O+": ["O+", "A+", "B+", "AB+"],
        "B-": ["B-", "B+", "AB-", "AB+"],
        "B+": ["B+", "AB+"],
        "A-": ["A-", "A+", "AB-", "AB+"],
        "A+": ["A+", "AB+"],
        "AB-": ["AB-", "AB+"],
        "AB+": ["AB+"]
      };

    
      const resultDiv = document.getElementById("result");
      if (compatibility[donor] && compatibility[donor].includes(recipient)) {
        resultDiv.textContent = `Compatible: ${donor} → ${recipient}`;
        resultDiv.style.color = "green";
      } else {
        resultDiv.textContent = `Incompatible: ${donor} → ${recipient}`;
        resultDiv.style.color = "red";
      }
    }
