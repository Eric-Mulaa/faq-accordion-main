let toggle = document.getElementsByClassName('toggle');
let iconsPlus = document.getElementsByClassName('icon-plus');
let iconsMinus = document.getElementsByClassName('icon-minus');
let description = document.getElementsByClassName('description');

for (let i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', () => {
        if (parseInt(description[i].style.maxHeight) !== description[i].scrollHeight) {
            description[i].style.maxHeight = description[i].scrollHeight + 'px';
            iconsPlus[i].style.display = 'none';
            iconsMinus[i].style.display ='block';

        } else {
            description[i].style.maxHeight = '0px';
            iconsPlus[i].style.display = 'block';
            iconsMinus[i].style.display = 'none';
        }

        for (let j = 0; j < description.length; j++) {
            if (j !== i) {
                description[j].style.maxHeight = '0px';
                iconsPlus[j].style.display = 'block';
                iconsMinus[j].style.display = 'none';
            }
        }
    });
}
