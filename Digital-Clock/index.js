let timer = document.getElementById("clock")



    setInterval(()=>{

        let currentTime = new Date();

        let hour =  (currentTime.getHours()<10?"0":"") + currentTime.getHours();
        let minutes = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
        let sec = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
        console.log(hour);
        
        timer.innerText =`${hour} : ${minutes}: ${sec}`

    },1000)



