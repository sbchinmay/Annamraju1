const btn=document.querySelector("#submit");
const fname=document.querySelector("#fname");
const lname=document.querySelector("#lname");
const addr=document.querySelector("#addr");
const pin=document.querySelector("#pin");
const mystate=document.querySelector("#state");
const mycountry=document.querySelector("#country");

const tfname=document.querySelector(".firstName");
const tlname=document.querySelector(".lastName");
const taddress=document.querySelector(".address");
const tpin=document.querySelector(".pincode");
const tstate=document.querySelector(".state");
const tcountry=document.querySelector(".country");
const tlanguage=document.querySelector(".language");
const tgender=document.querySelector(".gender");



btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const firstName=fname.value;
    tfname.innerHTML=firstName;
    
    const lastName=lname.value;
    tlname.innerHTML=lastName;

    const address=addr.value;
    taddress.innerHTML=address;

    const pincode=pin.value;
    tpin.innerHTML=pincode;

    const state=mystate.value;
    tstate.innerHTML=state;

    const country=mycountry.value;
    tcountry.innerHTML=country;

    if(male.value=="Male"){
        tgender.innerHTML="Male";
    }else{
        tgender.innerHTML="Female";
    }

    if(hindi.value=="on" && english.value=="on" && odia.value=="on"){
        tcountry.innerHTML="Hindi,English & Odia";
    }else if(english.value=="English"){
        tcountry.innerHTML="English";
    }else{
        tcountry.innerHTML="Odia";
    }
})