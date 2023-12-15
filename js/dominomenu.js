const navMoreBtn = document.querySelector('.wowo')
const subNav = document.querySelector('.sub_menu')

navMoreBtn.addEventListener('click', function(){
    subNav.classList.toggle('active');
})
const tabMenus = document.querySelectorAll('.tab_menu');
// for(tabmenu of tabMenus)
tabMenus.forEach(function(tabMenu){
    tabMenu.addEventListener('click', function(){  
    console.log(tabMenu.dataset.txt);  //data-txt의 값을 찾는 방법
    })
})