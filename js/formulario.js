const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = "fa.scholarship02@gmail.com";
  const URL_BASE = `https://formsubmit.co/${email}`;

  const input = e.currentTarget.elements;
  const formData = {
    name: input.name.value,
    email: input.email.value,
    message: input.message.value,
  };

  const options = {
    method: "POST",
    header: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  alert("Your message was sent correctly");
});
