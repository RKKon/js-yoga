import { showModalPhone } from "./modal.js";

const Tabs = () => {
  const infoHeader = document.querySelector(".info-header");
  const headerTab = document.querySelectorAll(".info-header-tab");
  const tabContent = document.querySelectorAll(".info-tabcontent");
  const tabsBtn = document.querySelectorAll(".description-btn");

  showModalPhone(tabsBtn[0]); // for start 1 tab can be clicked

  function hideTabContent(index) {
    for (let i = index; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }
  hideTabContent(1);

  function showTabContent(index) {
    if (tabContent[index].classList.contains("hide")) {
      tabContent[index].classList.remove("hide");
      tabContent[index].classList.add("show");
    }
  }

  // делается как делегирование событий
  infoHeader.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < headerTab.length; i++) {
        if (target == headerTab[i]) {
          hideTabContent(0);
          showTabContent(i);
          showModalPhone(tabsBtn[i]);
          break;
        }
      }
    }
  });

  /* let descriptionBtn = document.querySelector('.description-btn');    
    function tabMore() {
        descriptionBtn.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('.more-splash');
            document.body.style.overflow = 'hidden';
        });
    }
    tabMore(); */
};

export default Tabs;
