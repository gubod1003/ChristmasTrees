const buttonsOrder = document.querySelectorAll('.product__button_order');
const buttonsConsultation = document.querySelectorAll('.product__button_more');
const overlayOrder = document.querySelector('.overlay_order');
const overlayConsultation = document.querySelector('.overlay_consultation');
const buttonGeneralOrder = document.querySelector('.hero__down')
const buttonGeneralConsultation = document.querySelector('.header__consultation');



buttonsConsultation.header__consultation = document.querySelector('.header__consultation');

buttonsOrder.forEach(buttonOrder => {
    buttonOrder.addEventListener('click', () => {
        overlayOrder.classList.add('overlay_active');
        const order = overlayOrder.querySelector('.modal__order');
        order.value = buttonOrder.dataset.order;
    })
});

buttonGeneralOrder.addEventListener('click', () => {
    overlayOrder.classList.add('overlay_active');
    const order = overlayOrder.querySelector('.modal__order');
    order.value = buttonGeneralOrder.dataset.order;
});

buttonsConsultation.forEach(buttonConsultation => {
    buttonConsultation.addEventListener('click', () => {
        overlayConsultation.classList.add('overlay_active');
        const consultation = overlayConsultation.querySelector('.modal__consultation');
        consultation.value = buttonConsultation.dataset.consultation;
    })
})

buttonGeneralConsultation.addEventListener('click', () => {
    overlayConsultation.classList.add('overlay_active');
    const consultation = overlayConsultation.querySelector('.modal__consultation');
    consultation.value = buttonGeneralConsultation.dataset.consultation;
});

overlayOrder.addEventListener('click', event => {
    const target = event.target;
    if (target === overlayOrder || target.closest('.modal__close')) {
        overlayOrder.classList.remove('overlay_active');
    }
    
});

overlayConsultation.addEventListener('click', event => {
    const target = event.target;
    if (target === overlayConsultation || target.closest('.modal__close')) {
        overlayConsultation.classList.remove('overlay_active');
    }
    
});