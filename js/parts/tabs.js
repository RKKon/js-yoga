function tabs() {
    let infoHeader = document.querySelector('.info-header'),
    headerTab = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    // делается как делегирование событий
    infoHeader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < headerTab.length; i++) {
                if (target == headerTab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
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
}

export default tabs;