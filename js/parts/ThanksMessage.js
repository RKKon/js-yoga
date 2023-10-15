const ThanksMessage = () => {
  let statusMessage = document.createElement("div");
  statusMessage.classList.add("thanksMessage");
  statusMessage.classList.add("thanksForm");
  statusMessage.innerHTML = `<span>Thanks. Soon we will contact you.</span> 
  <span class="thanksCross">&times;</span>`;
  document.querySelector(".timer-numbers").append(statusMessage);

  const cross = document.getElementsByClassName("thanksCross")[0];
  cross.addEventListener("click", () => statusMessage.remove());

  setTimeout(() => {
    statusMessage.remove();
  }, 2000);
};

export default ThanksMessage;
