// Top menu navbar and search

let searchBtn = document.querySelector('.searchBtn')
let closeBtn = document.querySelector('.closeBtn')
let searchBox = document.querySelector('.searchBox')
let navbar = document.querySelector('.navbar')
let navbarToggle = document.querySelector('.navbarToggle')
let topMenu = document.querySelector('.top-menu')

searchBtn.onclick = function () {
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
}

closeBtn.onclick = function () {
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}

navbarToggle.onclick = function () {
    topMenu.classList.toggle('open')
}

// Contact page

const onSubmit = event => {
    event.preventDefault()
    validate(event)
}

const validate = (event) => {
    switch(event.type) {
        case 'keyup':
            validateElement(event.target)

            break;

        case 'submit':
            for(let element of event.target)
                validateElement(element)

            break;
    }
}

const validateElement = (element) => {
    if (element.required) {
        let label = document.getElementById(`${element.id}-label`).innerText
        let error = ""
        switch(element.type) {
            case 'text':
                if (!isNullOrEmpty(element.value)) {
                    if(!isMinimumLength(element.value, element.dataset.requiredMin)) {
                        error = `${label} must contain at least ${element.dataset.requiredMin} letters`
                    }
                } else {
                    error = `You must enter ${label.toLocaleLowerCase()}`
                }

                break;
            
            case 'email':
                if (!isNullOrEmpty(element.value)) {
                    if(!isEmailValid(element.value)) {
                        error = `Your ${label.toLocaleLowerCase()} must be valid (e.g. name@domain.com)`
                    }
                } else {
                    error = `You must enter ${label.toLocaleLowerCase()}`
                }
                break;
        }

        if (element.id == "contactMessage") {
            if (!isNullOrEmpty(element.value)) {
                if(!isMinimumLength(element.value, element.dataset.requiredMin)) {
                    error = `${label} must contain at least ${element.dataset.requiredMin} letters`
                }
            } else {
                error = `Please enter a ${label.toLocaleLowerCase()}`
            }
        }

        document.getElementById(`${element.id}-error`).innerText = error
        document.getElementById(`${element.id}-error`).style.display = "inherit"
    }
}


const isNullOrEmpty = value => {
    if (value.length === 0)
        return true
    
    return false
}

const isMinimumLength = (value, minLength = 2) => {
    if (value.length >= minLength) 
        return true
    
        return false
}

const isEmailValid = (email) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regEx.test(email))
        return true

    return false
}

// Product details page


