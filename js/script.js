searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}
window.onscroll = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');

    }else{document.querySelector('.header .header-2').classList.remove('active');

    }
}
// use this to show active link
// using .remove make top header go away when scrolling 
window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');

    }else{document.querySelector('.header .header-2').classList.remove('active');

    }
}