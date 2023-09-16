const abilitiesSection = document.getElementById('abilities-container')
const projectsSection = document.getElementById('projects-container')
const experiencesSection = document.getElementById('experiences-container')

const clickSrollTo = (id) => document.getElementById(id).scrollIntoView(id)

document.addEventListener('scroll', () => {
    if(window.scrollY > 370) abilitiesSection.style.opacity = '1'
    
    if(window.scrollY > 1170) projectsSection.style.opacity = '1'

    if(window.scrollY > 1870) experiencesSection.style.opacity = '1'
})