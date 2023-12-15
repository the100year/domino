const navMoreBtn = document.querySelector('.wowo')
const subNav = document.querySelector('.sub_menu')

navMoreBtn.addEventListener('click', function(){
    subNav.classList.toggle('active');
})
const tabMenus = document.querySelectorAll('.tab_menu');
const tabName = document.querySelector('#tab_name')
// for(tabmenu of tabMenus)
// tabMenus.forEach(function(tabMenu){
//         tabMenu.addEventListener('click', function(){  
//             console.log(tabMenu.dataset.text);  //data-txt의 값을 찾는 방법
//             tabName.innerHTML = tabMenu.dataset.text;
//             console.log(tabMenu.dataset.id)
//             let id = tabMenu.dataset.id;
//             if(id){
//                 document.getElementById(id).style.display='block';}
//                 })
//             })
            
const menuNav = document.querySelector('.kind');
const contents = document.querySelectorAll('.dis_none');

menuNav.addEventListener('click' , function(e){
    // e.currentTarget 자기자신을 찾는거
    let id = e.target.dataset.id;      //자식을 찾는거
    console.log(id);
    contents.forEach(function(content){
        content.classList.remove('active')
    })
    let secID = document.getElementById(id);
    secID.classList.add('active');
})




const leftPizza = document.querySelector('.left_pizza')
const rightPizza = document.querySelector('.right_pizza')
const select1Pizza = document.querySelector('.select_1')
const select2Pizza = document.querySelector('.select_2')
const selects = document.querySelectorAll('.select_pizza>select')
let array = ['뉴욕 오리진 슈퍼시드 화이버 함유 도우 트리플 치즈 버스트 엣지.png','반쪽.png','오리진피자.png']

//피자를 선택하면 왼쪽에 이미지가 보이도록 하는 크르비트
selects.forEach(function(selected){
    selected.addEventListener('change',function(){
        let num = selected.options.selectedIndex;
        if(selected == select1Pizza){
            leftPizza.innerHTML = `<img src="./img/${array[num]}" alt="">`
            //if (왼쪽에 이미지가 있는지??)
        }else if(leftPizza.children.length == 0){
            alert('첫번째 피자부터 선택하세요');
        }else if(selected == select2Pizza){
            rightPizza.innerHTML = `<img src="./img/${array[num]}" alt="">`
        }
    })
})
const sizeCheck = document.querySelector(`.btn_size`)
const sizeChoices = document.querySelectorAll('.btn_size>div');
sizeCheck.addEventListener('click',function(e){
    let tar = e.target;
sizeChoices.forEach(function(sizeChoice){
    sizeChoices.calssList.remove('active')
    if(tar == sizeChoice){
        tar.classList.add('active');
    }
})
})

const btns = document.querySelectorAll('.btn');
const minusBtns = document.querySelectorAll('.minus_btn');
const plusBtns = document.querySelectorAll('.plus_btn');
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        console.log(e.target);
        let t= e.target;
        let f= btn.firstElementChild;
        let l= btn.lastElementChild;
        if(t  == f){
            minusFunc(t);
        }else if(t == l){
            plusFunc(t)
        }
    })
});

function minusFunc(t){
     const next = t.nextElementSibling;
     if(next.value > 0){
        next.value--;
     }
}
function plusFunc(t){
    const prev = t.previousElementSibling;
    if(prev.value <10){
        prev.value++;
    }
}




const btns2 = document.querySelectorAll('.btn2');
const minusBtns2 = document.querySelectorAll('.minus_btn2');
const plusBtns2 = document.querySelectorAll('.plus_btn2');
btns2.forEach(function(btn2){
    btn2.addEventListener('click',function(e){
        console.log(e.target);
        let t= e.target;
        let f= btn2.firstElementChild;
        let l= btn2.lastElementChild;
        if(t  == f){
            minusFunc(t);
        }else if(t == l){
            plusFunc(t)
        }
    })
});

function minusFunc(t){
     const next = t.nextElementSibling;
     if(next.value > 0){
        next.value--;
     }
}
function plusFunc(t){
    const prev = t.previousElementSibling;
    if(prev.value <10){
        prev.value++;
    }
}



const btns3 = document.querySelectorAll('.btn3');
const minusBtns3 = document.querySelectorAll('.minus_btn3');
const plusBtns3 = document.querySelectorAll('.plus_btn3');
btns3.forEach(function(btn3){
    btn3.addEventListener('click',function(e){
        console.log(e.target);
        let t= e.target;
        let f= btn3.firstElementChild;
        let l= btn3.lastElementChild;
        if(t  == f){
            minusFunc(t);
        }else if(t == l){
            plusFunc(t)
        }
    })
});

function minusFunc(t){
     const next = t.nextElementSibling;
     if(next.value > 0){
        next.value--;
     }
}
function plusFunc(t){
    const prev = t.previousElementSibling;
    if(prev.value <10){
        prev.value++;
    }
}
