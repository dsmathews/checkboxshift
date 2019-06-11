const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
    console.log(e);
    // check if shift key is down and check they are checking the box
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween
                console.log('%c Starting check','font-size: 25px');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));