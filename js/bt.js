// const menuNav = document.querySelector('.kind');
// const contents = document.querySelectorAll('.dis_none');

// menuNav.addEventListener('click' , function(e){
//     // e.currentTarget 자기자신을 찾는거
//     let id = e.target.dataset.id;      //자식을 찾는거
//     console.log(id);
//     contents.forEach(function(content){
//         content.classList.remove('active')
//     })
//     let secID = document.getElementById(id);
//     secID.classList.add('active');
// })





const Pizzas = document.querySelector('.pizza_1')
const leftPizza = document.querySelector('.left_pizza')
const rightPizza = document.querySelector('.right_pizza')
const select1Pizza = document.querySelector('.select_1')
const select2Pizza = document.querySelector('.select_2')
const selects = document.querySelectorAll('.select_pizza>select')
let array = ['뉴욕 오리진 슈퍼시드 화이버 함유 도우 트리플 치즈 버스트 엣지.png','와일드 와일드 에스트.png']
console.log(selects);
//피자를 선택하면 왼쪽에 이미지가 보이도록 하는 크르비트

selects.forEach(function(selected){
    selected.addEventListener('change',function(){
        let num = selected.options.selectedIndex;
        console.log(selected.options.selectedIndex);
        //선택한 옵션의 index를 찾는 방법
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
//console.log(sizeCheck.firstElementChild);
//console.log(sizeCheck.lastElementChild);
const sizeChoices = document.querySelectorAll('.btn_size>div');
sizeCheck.addEventListener('click',function(e){
    let tar = e.target;//이벤트가 일어난 자식
sizeChoices.forEach(function(sizeChoice){
    sizeChoice.classList.remove('active')
    if(tar == sizeChoice){
        tar.classList.add('active');
    }
})
})



//버튼에 - ,+  눌럿을때 숫자 조정할수있는 방법

const btns = document.querySelectorAll('.btn');
const minusBtns = document.querySelectorAll('.minus_btn');
const plusBtns = document.querySelectorAll('.plus_btn');
// console.log(minusBtns)
// minusBtns.forEach(function(minusbtn){

//     minusbtn.addEventListener('click', minusFunc)
// })
// plusBtns.forEach(function(plusbtn){

//     plusbtn.addEventListener('click', plusFunc)
// })
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        console.log(e.target);
        let t= e.target;
        let f= btn.firstElementChild;
        let l= btn.lastElementChild;
        if(t  == f){
            // if(btn_2의 자식이 minusBTN 이니??)
            minusFunc(t);
        }else if(t == l){
            plusFunc(t)
        }
    })
});


function minusFunc(t){
    // console.log(e.currentTarget.nextElementSibling);//다음에 오는 태그 찾는 방법
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
const plusBtns2 = document.querySelectorAll('.plus_bt2');
// console.log(minusBtns)
// minusBtns.forEach(function(minusbtn){

//     minusbtn.addEventListener('click', minusFunc)
// })
// plusBtns.forEach(function(plusbtn){

//     plusbtn.addEventListener('click', plusFunc)
// })
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        console.log(e.target);
        let t= e.target;
        let f= btn.firstElementChild;
        let l= btn.lastElementChild;
        if(t  == f){
            // if(btn_2의 자식이 minusBTN 이니??)
            minusFunc(t);
        }else if(t == l){
            plusFunc(t)
        }
    })
});


function minusFunc(t){
    // console.log(e.currentTarget.nextElementSibling);//다음에 오는 태그 찾는 방법
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