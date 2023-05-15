// Add your code here
let form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
  if (form.elements.email.value && form.elements.username.value) {
    console.group("========== Form Submission ========== ");
    console.log("Name:", form.elements.name.value);
    console.log("Username:", form.elements.username.value);
    console.log("Email:", form.elements.email.value);
    console.log(
      "Date of Birth:",
      moment(form.elements.dob.value).format("MMMM D, Y")
    );
    console.log("Preferred Pronouns:", form.elements.pronouns.value);
    console.groupEnd();
  } else {
    alert("Please enter username and email to submit the form");
    console.warn("Please enter username and email to submit the form");
  }
};
