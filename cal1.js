let inputdate = document.querySelector("#iptD");
let inputmonth = document.querySelector("#iptM");
let inputyear = document.querySelector("#iptY");
let validdate = document.querySelector("#validdate");
let validmonth = document.querySelector("#validMonth");
let validYear = document.querySelector("#validYear");
let btn = document.querySelector("#btn");
btn.addEventListener("click",function(){
    
    btn.textContent = "calculating";
    setTimeout(() =>{
        let dateRegex  = /^(0?[1-9]|[12][0-9]|3[01])$/;
        let monthRegex = /^(0?[1-9]|1[0-2])$/;
        let yearRegex  = /^(19|20)\d{2}$/; 
        let crtD = dateRegex.test(inputdate.value);
        let crtM = monthRegex.test(inputmonth.value);
        let crtY = yearRegex.test(inputyear.value);
        let isvalid = true;
        if(crtD){
            validdate.style.display = "none";
        }
        else{
            validdate.style.display = "block";
            isvalid = false;
        }
        if(crtM){
            validmonth.style.display = "none";
        }
        else{
            validmonth.style.display = "block";
            isvalid = false;
        }
        if(crtY){
            validdate.style.display = "none";
        }
        else{
            validdate.style.display = "block";
            isvalid = false;
        }
        if(isvalid){
            let datevalue = parseInt(inputdate.value);
            let monvalue = parseInt(inputmonth.value);
            let yearvalue =parseInt(inputyear.value);
            let validbirth = new Date(yearvalue,monvalue-1,datevalue);
            let getdate = parseInt(validbirth.getDate());
            let getmon = parseInt(validbirth.getMonth() + 1);
            let getyear = parseInt(validbirth.getFullYear());
            console.log(getdate);
            console.log(datevalue);

            console.log(getmon);
            console.log(getyear);

            if(datevalue !== getdate || monvalue !== getmon || yearvalue !== getyear){
                document.querySelector("h3").textContent = "This date doesn't exist!";
                document.querySelector("h3").style.display = "block";
                return;
                }
        let today = new Date();
        if(validbirth > today){
                document.querySelector("h3").textContent  = "Birth date can't be in the future!";
                document.querySelector("h3").textContent .style.display = "block";
                return;
        }
        let cntY = today.getFullYear() - getyear;
        let cntM = today.getMonth() + 1 - getmon;
        let cntD = today.getDate() - getdate;
        if(cntD < 0){
                cntM--;
                let tmpD = new Date(getyear,getmon - 1,0);
                cntD += tmpD.getDate();
        }
        if(cntM < 0){
                cntM+= 12;
                cntY--;
        }
            let h3 = document.querySelector("h3");
            btn.style.display = "none";
            if(cntD == 0 && cntM == 0 && cntY > 0){
                 h3.textContent = `🎉                git credential-manager delete https://github.comHappy BirthDay dear.congratulation your are now ${cntY} years old`
                h3.style.display = "block";
            }
            else{
                 h3.textContent = `congratulation your age is ${cntD} days ${cntM} month ${cntY} years`
                h3.style.display = "block";
            }
        }
    },1000)

})