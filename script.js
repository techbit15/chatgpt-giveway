document.getElementById("giveaway-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.querySelector("input[type='text']").value;
  const email = this.querySelector("input[type='email']").value;
  alert(`Thank you, ${name}! Your entry has been submitted.`);
  this.reset();
});
