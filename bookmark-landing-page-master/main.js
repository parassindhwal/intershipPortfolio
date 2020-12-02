// alert('hi');

//get all the siblings of an element
let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

const bookmarking = document.getElementById('bookmarking');
const searching = document.getElementById('searching');
const sharing = document.getElementById('sharing');

const bookmarking_div = document.getElementById('bookmarking-div');
const searching_div = document.getElementById('searching-div');
const sharing_div = document.getElementById('sharing-div');

bookmarking.addEventListener('click', function() {
    // bookmarking.style.color = "red";
    bookmarking_div.classList.remove('hidden');
    bookmarking.classList.add('border-red');
    let siblings = getSiblings(document.querySelector('#bookmarking-div'));
    let s = getSiblings(document.querySelector('#bookmarking'));
    siblings.map(e => e.classList.add('hidden'));
    // s.map(e => e.style.color = "#000");
    s.map(e => e.classList.remove('border-red'));
});

searching.addEventListener('click', function() {
    // searching.style.color = "red";
    searching_div.classList.remove('hidden');
    searching.classList.add('border-red');
    let siblings = getSiblings(document.querySelector('#searching-div'));
    let s = getSiblings(document.querySelector('#searching'));
    siblings.map(e => e.classList.add('hidden'));
    // s.map(e => e.style.color = "#000");
    s.map(e => e.classList.remove('border-red'));
});

sharing.addEventListener('click', function() {
    // sharing.style.color = "red";
    sharing_div.classList.remove('hidden');
    sharing.classList.add('border-red');
    let siblings = getSiblings(document.querySelector('#sharing-div'));
    let s = getSiblings(document.querySelector('#sharing'));
    siblings.map(e => e.classList.add('hidden'));
    // s.map(e => e.style.color = "#000");
    s.map(e => e.classList.remove('border-red'));
});


//accordian section
var acc = document.getElementsByClassName("accordion");

for(var i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function()  {
        this.getElementsByClassName('rot-img')[0].classList.toggle('rotate');
        this.getElementsByClassName('fill')[0].classList.toggle('fill-red');
        // this.classList.toggle('active');

        var panel = this.nextElementSibling;
        // console.log(panel.innerText);
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//email validation
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;

    if ( email === "") {
        addError('Email is requird');
    } else if (!isValid(email)) {
        addError("Whoops, make sure it's an email");
    } else {
        removeError();
    }
});

function addError(msg) {
    const formControl = document.getElementById('form-control');
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = msg; 
    small.classList.add('error');
}

function removeError() {
    const formControl = document.getElementById('form-control');
    formControl.classList.remove('error');
    const small = formControl.querySelector('small');
    small.classList.remove('error');
}

function isValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//humburger

const hamburger = document.getElementById('hamburger');
const dkHeader = document.getElementById('header');
const mbHeader = document.getElementById('mobile-header');
const close = document.getElementById('close');

hamburger.addEventListener('click', () => {
    mbHeader.style.display = "block";
    dkHeader.style.display = "none";
});

close.addEventListener("click", () => {
    mbHeader.style.display = "none";
    dkHeader.style.display = "block";
});