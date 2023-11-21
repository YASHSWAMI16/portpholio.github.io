let mountain = document.getElementById("mountain");
let me = document.getElementById("me");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    mountain.style.top = value * 0.7 + 'px';
    me.style.bottom = value * 0.5 + 'px';
    text.style.bottom = value * -1 + 'px';
})


// window.addEventListener('scroll', ()=>{
//     let value = window.scrollY;
    
//     text.style.marginTop = value * 2.5 + 'px';
//     leaf.style.Top = value * -1.5 + 'px';
//     leaf.style.left = value * 1.5 + 'px';
//     hill5.style.left = value * 1.5 + 'px';
//     hill4.style.left = value * -1.5 + 'px';
//     hill1.style.left = value * 1 + 'px';

// })