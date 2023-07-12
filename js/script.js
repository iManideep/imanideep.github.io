const experienceobserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('experience-show');
            document.getElementsByClassName('navbar-experience')[0].classList.add('active')
        }
        else{
            entry.target.classList.remove('experience-show');
            document.getElementsByClassName('navbar-experience')[0].classList.remove('active')
        }
    });
});

const experiencehiddenElements = document.querySelectorAll('.experience-hidden');
experiencehiddenElements.forEach((elem) => experienceobserver.observe(elem));

const aboutobserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('about-show');
            document.getElementsByClassName('navbar-about')[0].classList.add('active')
        }
        else{
            entry.target.classList.remove('about-show');
            document.getElementsByClassName('navbar-about')[0].classList.remove('active')
        }
    });
});

const abouthiddenElements = document.querySelectorAll('.about-hidden');
abouthiddenElements.forEach((elem) => aboutobserver.observe(elem));
