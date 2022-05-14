document.querySelectorAll('a.anchor[href*="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        const href = this.getAttribute('href').substring(1)
        const scrollTarget = document.getElementById(href)
        const topOffset = 150
        const elemPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elemPosition - topOffset

        window.scrollBy({
            behavior: "smooth",
            top: offsetPosition,
        })
    })
})
