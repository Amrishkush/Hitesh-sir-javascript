const body =  document.body;
const colorDivs = body.querySelector('section').querySelectorAll('.color-picker');


colorDivs.forEach((color)=>{
    // console.log(color)
    color.addEventListener("click", (e)=>{
        // console.log(e.target.id)  //always see in console its interesting to what we get in event like target and then id etc
        let colorId = e.target.id;
        if (colorId === "blue"){
            body.style.backgroundColor="blue";
        } else if (colorId === "yellow"){
            body.style.backgroundColor="yellow";
        } else if (colorId === "whitesmoke"){
            body.style.backgroundColor="whitesmoke";
        } else if (colorId === "skyblue"){
            body.style.backgroundColor="skyblue";
        }
    })
}
)
// console.log(colorDivs)