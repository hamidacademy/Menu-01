let arrowimg = document.querySelector('.arrow-img');
let ulmenu = document.querySelector('.ulmenu');
let menutext = document.querySelectorAll('.menu-text');
let menudiv = document.querySelectorAll('.menu-div')

var aa = 1
function responsive(){
if(aa == 1){
    ulmenu.style.width = '260px';

        for(var i = 0 ; i<menutext.length ; i++){
            menutext[i].style.display = 'flex';
        }

        for(var i = 0 ; i<menudiv.length ; i++){
            menudiv[i].style.width = '240px';
        }

    arrowimg.setAttribute('src', 'arrow1.png');
    aa = 0
}else{
    ulmenu.style.width = '60px' ;

        for(var i = 0 ; i<menutext.length ; i++){
            menutext[i].style.display = 'none';
        }

        for(var i = 0 ; i<menudiv.length ; i++){
            menudiv[i].style.width = '38px';
        }

    arrowimg.setAttribute('src', 'arrow2.png')
    aa = 1
    }
};

arrowimg.addEventListener('click', responsive)
