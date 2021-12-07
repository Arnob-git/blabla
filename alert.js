console.log('Alert');

// alert('Ma is coming');

const maComing = () => {
    alert('ma coming');
}

const askPicnic = () => {
    const response = confirm('Are yoy going to picnic?')
    console.log(response);
    if (response === true) {
        alert('send money');
    }
    else {
        console.log('dimu na');
    }
}

const askName = () => {
    const name = prompt('What is your name');
    if (name) {
        console.log(name);
    }
}
