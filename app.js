function checkCompatibility() {
  const donor = document.getElementById("donor").value;

  const resultDiv = document.getElementById("result");

  let samegroup = "";

  if (donor === "O-") {
    samegroup = "O-, O+, B-, B+, A-, A+, AB-, AB+";
  } else if (donor === "O+") {
    samegroup = "O+, A+, B+, AB+";
  } else if (donor === "B-") {
    samegroup = "B-, B+, AB-, AB+";
  } else if (donor === "B+") {
    samegroup = "B+, AB+";
  } else if (donor === "A-") {
    samegroup = "A-, A+, AB-, AB+";
  } else if (donor === "A+") {
    samegroup = "A+, AB+";
  } else if (donor === "AB-") {
    samegroup = "AB-, AB+";
  } else if (donor === "AB+") {
    samegroup = "AB+";
  } else {
    samegroup = "Invalid donor type.";
  }

  resultDiv.textContent = `Compatible groups for ${donor}: ${samegroup}`;
  resultDiv.style.color = "blue";
}
