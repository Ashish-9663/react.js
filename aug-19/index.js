// console.log("connetJS");

// const a={};
// const b={key:"b"};
// const c={key:"c"};

// a[b]=123;
// a[c]=456;
// console.log(a[b]);

const btn_clicker=_=>{
    console.log("button clicked");
}

const img_clicker=_=>{
    console.log("image is clicked");

}

const inp_change=_=>{
    console.log("input change");
}

const real_timechanger=_=>{
    console.log("real time chnager")
}

const btn=document.querySelector("button[style='background-color: red']")
btn.addEventListener("click",real_timechanger);