document.addEventListener('DOMContentLoaded', () =>{
    navigations = document.querySelectorAll(".navigation__ul");

    navigations.forEach(navigation => {
        items = navigation.querySelectorAll(".navigation__li");
        if(items.length > 5){            
            accordionHtml = createAccordion(items);
            navigation.innerHTML += accordionHtml;
        }
    });

    function createAccordion(items) {
        let accordionItems = '';

        for (let i = 5; i < items.length; i++) {                
            accordionItems += `${items[i].outerHTML}`;
            items[i].remove()
        }

        accordion = `
        <div class="accordion">
            <div class="accordion__container">
                ${accordionItems}
            </div>
            <div class="accordion__btn">
                <li class="navigation__li navigation__li--show-all">
                    <button>
                        <span>
                        ПОКАЗАТЬ ВСЕ 
                        </span>
                        <svg class="accordion__icon" width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0699194 0.72845L3.33874 3.93125C3.38544 3.97706 3.43917 4 3.49995 4C3.56073 4 3.61456 3.97706 3.66129 3.93125L6.92984 0.728451C6.97666 0.682567 7 0.62992 7 0.570339C7 0.510782 6.97659 0.458062 6.92984 0.412275L6.57921 0.0687289C6.53245 0.0229179 6.47865 2.45115e-05 6.41787 2.45062e-05C6.35709 2.45009e-05 6.30329 0.0229179 6.25654 0.0687289L3.49995 2.76977L0.743268 0.0685598C0.696541 0.0227489 0.642713 1.59484e-07 0.582031 1.54179e-07C0.521153 1.48857e-07 0.467349 0.0228933 0.420622 0.0685598L0.0699442 0.412251C0.0232166 0.458038 -1.718e-07 0.510782 -1.77005e-07 0.570314C-2.49777e-05 0.629919 0.0231917 0.682639 0.0699194 0.72845Z" fill="#ED2224"/>
                        </svg>
                    </button>
                </li>
            </div>
        </div>
        `

        return accordion;
    }

    const control = document.querySelectorAll('.accordion__btn');
    
    control.forEach(el =>{
        el.addEventListener('click', (e) =>{
            const control = e.currentTarget;
            const controlBtn = control.querySelector('span');
            const content = control.previousElementSibling;
            const icon = control.querySelector('.accordion__icon');

            content.classList.toggle('open');
            
            if(icon){
                icon.classList.toggle('open');  
            }

            if(content.classList.contains('open')){
                content.style.maxHeight = content.scrollHeight + 'px';
                controlBtn.innerHTML = "СКРЫТЬ ВСЁ"
            }else{
                content.style.maxHeight = null;
                controlBtn.innerHTML = "ПОКАЗАТЬ ВСЁ"
            }
        })
    })

    window.addEventListener('resize', (e) =>{
        const content = document.querySelectorAll('.accordion__container');
        maxScrollHeight = 0;

        content.forEach(el => {
            if(el.classList.contains('open')){
                el.style.maxHeight = el.scrollHeight + 'px';
            }
        });
    });
})
