function toggleNav(){
    let nav = document.querySelector('nav');
    
    if (nav.style.visibility == 'hidden'){
        nav.style.visibility = 'visible';
    }
    else{
        nav.style.visibility = 'hidden';
    }
}