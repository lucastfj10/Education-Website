// CHANGE NAVBAR STYLES ON SCROLL

window.addEventListener ('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// SHOW/HIDE FAQ ANSWER
const faqs = document