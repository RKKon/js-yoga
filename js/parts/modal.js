import ThanksMessage from "./ThanksMessage.js";

export const showModalPhone = (btnGetSelector, overlaySelector = ".overlay") => {
  btnGetSelector.addEventListener("click", function (e) {
    document.querySelector(overlaySelector).style.display = "block";
    document.querySelector(".popup-form__input").focus();
    this.classList.add(".more-splash");
    document.body.style.overflow = "hidden"; //при модальном окне нельзя прокручивать стр на сайте(if need
  });
};

export const closeModalPhone = () => {
  const popupClose = document.querySelector(".popup-close");
  const overlayCloseModal = document.querySelector(".overlay.fade");
  const overlay = document.querySelector(".overlay");
  const btnMore = document.querySelector(".more");
  const btnEnterPhone = document.querySelector(".popup-form__btn");
  const input = document.querySelector(".popup-form__input");

  const closeThisModal = () => {
    overlay.style.display = "none";
    btnMore.classList.remove(".more-splash");
    document.body.style.overflow = "";
  };

  popupClose.addEventListener("click", closeThisModal);

  overlayCloseModal.addEventListener("click", function (e) {
    if (e.target.matches(".overlay.fade")) {
      closeThisModal();
    }
  });

  document.addEventListener("keydown", function (e) { // Esc on keyboard to close
    if (e.code === "Escape" && overlay.style.display === "block") {
      closeThisModal();
    }
  });

  btnEnterPhone.addEventListener("click", () => {
    if (!(input.value.trim() === "")) {
      closeThisModal();
      ThanksMessage();
    }
  });
};

const Modal = () => {
  showModalPhone(document.querySelector(".more"));
  closeModalPhone();
};

export default Modal;
