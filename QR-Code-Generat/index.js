let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")

console.log("outside",qrText);


function generateQR(){
    // console.log(qrText);
    
    if(qrText.value.trim().length > 0){
        qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`

        imgBox.classList.add("show-img");
    
    }else{
        qrText.classList.add("error")
        setTimeout(()=>{
            qrText.classList.remove("error")
        },1000)
    }
   
}


document.getElementById("genQR").addEventListener("click",function(){
    generateQR()
})