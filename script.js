let locationMultiplier = 1;
let housingCost = 0;
let carCost = 0;
let foodCost = 0;
let vacaCost = 0;
let dogCost = 0;
let catCost = 0;
let hamsterCost = 0;

function changeButtonColor(button, petType) {
    const buttons = document.querySelectorAll(`#${petType}-options button`);
    
    buttons.forEach(btn => {
        if (btn !== button) {
            btn.style.backgroundColor = '';
        }
    });
    
    button.style.backgroundColor = "#275a2a";
}

function locationOptions() {
    const locationOptions = document.getElementById('location-options');
    locationOptions.style.display = 'block';
    document.getElementById('begin-button').style.display = "none"
}

function houseOptions(multiplier) {
    locationMultiplier = multiplier;
    const houseOptions = document.getElementById('house-options');
    houseOptions.style.display = 'block';
    document.getElementById('location-options').style.display="none"
}

function carOptions(cost) {
    housingCost = cost;
    const carOptions = document.getElementById('car-options');
    carOptions.style.display = 'block';
    document.getElementById('house-options').style.display="none"
}

function foodOptions(cost) {
    carCost = cost;
    const foodOptions = document.getElementById('food-options');
    foodOptions.style.display = 'block';
    document.getElementById('car-options').style.display="none"
}

function vacaOptions(cost) {
    foodCost = cost;
    const vacaOptions = document.getElementById('vaca-options');
    vacaOptions.style.display = 'block';
    document.getElementById('food-options').style.display="none"
}

function spendingOptions(cost) {
    vacaCost = cost;
    const spendingOptions = document.getElementById('spending-options');
    spendingOptions.style.display = 'block';
    document.getElementById('vaca-options').style.display="none"
}

function petOptions(cost) {
    spendingOptions = cost;
    const petOptions = document.getElementById('pet-options');
    petOptions.style.display = 'block';
    document.getElementById('spending-options').style.display="none"
}

function updatePetCount(petType, count) {
    if (petType === 'dog') {
        dogCost = count * 30;
    } else if (petType === 'cat') {
        catCost = count * 30;
    } else if (petType === 'hamster') {
        hamsterCost = count * 5;
    }
}

function summaryFunc() {
    const totalMonthlyCost = locationMultiplier * (housingCost + carCost + foodCost + vacaCost + dogCost + catCost + hamsterCost);
    const yearlySalary = totalMonthlyCost * 12;
    const summaryFunc = document.getElementById('summary');
    summaryFunc.style.display = 'block';
    document.getElementById('pet-options').style.display="none"
    summaryFunc.innerHTML = `<h2>Yearly Salary: $${yearlySalary.toFixed(2)}</h2>`;
}