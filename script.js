$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let heroAP = 100;

function onReady() {

    $('.arcane-sceptre').on('click', handleSceptreAttack);
    $('.entangle').on('click', handleEntangleAttack);
    $('.dragon-blade').on('click', handleBladeAttack);
    $('.star-fire').on('click', handleFireAttack);

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
    render();
}

function handleSceptreAttack() {
    handleAttack('sceptre');
}

function handleEntangleAttack() {
    handleAttack('entangle');
}

function handleBladeAttack() {
    handleAttack('blade');
}

function handleFireAttack() {
    handleAttack('fire');
}

function handleAttack(type) {
    if (type === 'sceptre') {
        fungusHP -= 14;
        heroAP -= 12;
        render();
    }
    if (type === 'entangle') {
        fungusHP -= 9;
        heroAP -= 23;
        render();
    }
    if (type === 'blade') {
        fungusHP -= 47;
        heroAP -= 38;
        render();
    }
    if (type === 'fire') {
        fungusHP -= 25;
        heroAP -= 33;
        render();
    }
}

function render() {
    console.log('rendering!')
    console.log({fungusHP})
    console.log({ heroAP })
    if (heroAP < 0) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('jump');
        $('.attack-btn').attr('disabled', 'disabled');
        heroAP = 0;
    }
    if (fungusHP < 0) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
        fungusHP = 0;
    } 
    $('.hp-text').empty();
    $('.hp-text').append(`${fungusHP} AP`);
    $('.ap-text').empty();
    $('.ap-text').append(`${heroAP} AP`);
}