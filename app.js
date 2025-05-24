const url="https://icanhazdadjoke.com/";

let p=document.querySelector(".joke");
let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
btn1.addEventListener("click",async ()=>
{
    let joke=await getJokes();
    p.innerText=joke;
})

async function getJokes(){
    try{
    const config = {headers:{Accept:"application/json"}};
    let res=await axios.get(url,config);
    return (res.data.joke);
    }
    catch(err){
        return (err);
    }
}