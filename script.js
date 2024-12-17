const a = document.querySelector('.recent-works');
a.addEventListener('click', () => {
    const portfolio = document.querySelector('.portfolio1');
    if (portfolio) {
        portfolio.scrollIntoView({
            behavior: 'smooth'
        });
    }
});

const b = document.querySelector('[class="about me"]');
b.addEventListener("click", () => {
    const about = document.querySelector(".righty");
    if (about) {
        about.scrollIntoView({
            behavior: "smooth"
        });
    }
});


const c = document.querySelector('.servicess');
c.addEventListener("click", () => {
    const services = document.querySelector(".services")
    if (services) {
        services.scrollIntoView({
            behavior: "smooth"
        })
    }
})

const d = document.querySelector(".testimonialss")
d.addEventListener("click", () => {
    const reviews = document.querySelector(".reviews")
    if (reviews) {
        reviews.scrollIntoView({
            behavior: 'smooth'
        })
    }
})

const e = document.querySelector(".contactt")
e.addEventListener("click", () => {
    const contact = document.querySelector(".contact")
    if(contact) {
        contact.scrollIntoView({
            behavior:'smooth'
        })
    }
});