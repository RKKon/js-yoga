import ThanksMessage from "./ThanksMessage.js";

const Form = () => {
  const form = document.querySelector(".main-form");
  const input = form.getElementsByTagName("input");
  const formContacts = document.querySelector("#form");

  /* const statusMessage = document.createElement("div");
  const message = {
    loading: "Loading...",
    success: "Thank you! Soon we will call you.",
    failure: "Sorry something went wrong",
  };
  statusMessage.classList.add("status");
  const watchStatusRequest = (request = request) => {
    // Для наблюдения за изменениями сос-ния нашего запроса
    request.addEventListener("readystatechange", function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
        //     let data = JSON.parse(request.response);
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });
  }; */

  const sendForm = (typeForm) => {
    typeForm.addEventListener("submit", function (event) {
      event.preventDefault();
      //   typeForm.appendChild(statusMessage); //! if no use messages

      let request = new XMLHttpRequest();
      request.open("POST", "server.php");
      //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //вместо JSON
      request.setRequestHeader("Content-type", "application/json; charset=utf-8");

      let formData = new FormData(typeForm);

      let obj = {}; // используется при др манипуляциях но и для JSON
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      let json = JSON.stringify(obj);

      request.send(json);

      input[0].value = ""; // clear phone input

      if (input.value !== "") {
        ThanksMessage();
      }
      // form with email and phone
      const email = document.querySelector('input[name="email"]');
      const phoneWithEmail = document.querySelector('input[name="phone_email"]');
      email.value = "";
      phoneWithEmail.value = "";

      //   watchStatusRequest(request); //! if no use messages
    });
  };

  sendForm(form);
  sendForm(formContacts);
};

export default Form;
