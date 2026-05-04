// TROCA DE VETORES (DE DESKTOP PARA MOBILE)

function changeOfVectors() {

    const vectors = document.querySelectorAll(`.vector`)

    vectors.forEach(vector => {
        if (window.innerWidth <= 1170) {
            vector.src = "./img/mobile-header-vector.png"
        } else {
            vector.src = "./img/vector.png"
        }
    })
}

changeOfVectors()

window.addEventListener(`resize`, changeOfVectors)

// ENTRADA E SAÍDA DO MOBILE HEADER OPTIONS

const mobileHeaderBtn = document.querySelector(`.options-button`)
const mobileHeaderMenu = document.querySelector(`.mobile-header-options`)

function headerBtnClick() {
    mobileHeaderMenu.classList.toggle(`active`)
}

mobileHeaderBtn.addEventListener(`click`, headerBtnClick)

const mobileHeaderA = document.querySelectorAll(`.mobile-link`)

function aClick() {
    mobileHeaderMenu.classList.remove(`active`)
}

mobileHeaderA.forEach(link => {
    link.addEventListener(`click`, aClick)
})

// ANIMAÇÃO DE PRODUTOS DO MENU MOBILE

const cakeOption = document.querySelectorAll(`.cake-option`)

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (window.innerWidth <= 1170) {
            if (entry.isIntersecting) {
                cakeOption.forEach(cake => cake.classList.remove(`active`));

                entry.target.classList.add(`active`);
            }
        }
    })
}, {
    root: null,
    threshold: 0.1,
    rootMargin: `-45% 0px -45% 0px`
})

cakeOption.forEach(cake => observer.observe(cake))