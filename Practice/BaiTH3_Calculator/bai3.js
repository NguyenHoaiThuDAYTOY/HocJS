const validateDOT = () => {
    let input = document.getElementById('display').value
    const soHang = input.split(/[\+\-\*\/]/);
    for (let i = 0; i < soHang.length; i++) {
        if (soHang[i].split('.').length >= 2) {
            return display.value = display.value;
        } else {
            return display.value += '.';
        }
    }
}

