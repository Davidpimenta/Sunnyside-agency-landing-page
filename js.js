var button_mobile = document.getElementById('menu-mobile-button')
var menu_mobile = document.getElementById('menu-mobile')
button_mobile.addEventListener('click', function menuopen(){
    

    if(menu_mobile.style.display == 'none' || menu_mobile.style.display == ''){
        menu_mobile.style.display = 'flex'
    } else {
        menu_mobile.style.display = 'none'
    }

})