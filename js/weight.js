var abc = function (id) { return document.getElementById(id) };
function bweight() {
    var sex = abc('gender').value;
    var height = abc('height').value;
    if (height == null || height.length == 0) {
        abc('ibw').value = 'Pl. enter data.'
    } else {
        abc('ibw').value = ''
    } if (height > 0 && sex == 'm') {
        abc('ibw').value = Math.round(56.2 * 1 + (height * .39 - 152.4 * .39) * 1.41) * 1 + ' Kgs'
    } else if (height > 0 && sex == 'f') {
        abc('ibw').value = Math.round(53.1 * 1 + (height * .39 - 152.4 * .39) * 1.36) * 1 + ' Kgs'

    } if (height > 0) {
        abc('ibw1').value = Math.round(18.5 * (height * height / 10000)) + ' Kgs-' + Math.round(25 * (height * height / 10000)) + ' Kgs'
    } 
}



