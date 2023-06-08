// CHANGE NAVBAR STYLES ON SCROLL

window.addEventListener ('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// SHOW/HIDE FAQ ANSWER
const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        // CHANGE ICON
        const icon = faq.querySelector('.faq_icon i')
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus"
        }
    })
})