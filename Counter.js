const count = document.getElementById('count');
let counter = 0;


function increaseBtn() {
    counter = counter + 1;
    count.innerHTML = counter;
    
};

function decreaseBtn() {
    counter = counter - 1;
    count.textContent = counter;
};

function reset() {
    counter = 0;
    count.innerHTML = counter;
};

function doublex2() {
    counter = counter * 2;
    count.textContent = counter;
};

function square() {
    counter = counter * counter;
    count.innerHTML = counter;
};

function x5() {
    counter = counter * 5;
    count.textContent = counter.toFixed(2);
};

function x10() {
    counter = counter * 10;
    count.innerHTML = counter.toFixed(2);
};

function x15() {
    counter = counter * 15;
    count.innerHTML = counter.toFixed(2);
    
};

function squareroot() {
    counter = Math.sqrt(counter);
    count.innerHTML = counter.toFixed(2)
};

function cube() {
    counter = counter * 3;
    count.innerHTML = counter;
};

function x25() {
    counter = counter * 25;
    count.innerHTML = counter;
};

function x50() {
    counter = counter * 50;
    count.textContent = counter;
}

function divide20() {
    counter = counter /20;
    count.textContent = counter.toFixed(2);
    
};

function divide25() {
    counter = counter /25;
    count.innerHTML = counter.toFixed(2);
};

function divide35() {
    counter = counter /35;
    count.innerHTML = counter.toFixed(2);
};

function divide40() {
    counter = counter /40;
    count.textContent = counter.toFixed(2);
};

function x7() {
    counter = counter * 7;
    count.innerHTML = counter;
    
};
function x15() {
    counter = counter * 15;
    count.textContent = counter;
    
};
function minustwo() {
    counter = counter - 2;
    count.textContent = counter;
};

function minusfour() {
    counter = counter - 4;
    count.innerHTML = counter;
};

function x9() {
    counter = counter * 9;
    count.textContent = counter;
};









