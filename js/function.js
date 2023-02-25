const btn_nightmode = document.getElementById('nightmode');

btn_nightmode.addEventListener('click', function(){
    if (document.body.classList.contains('night') ) {
    document.body.classList.remove('night');
    }else{
    document.body.classList.add('night');
    }
});