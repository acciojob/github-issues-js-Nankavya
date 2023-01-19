const ul=document.getElementById('list')
const spannum=document.getElementById("span-id")
const nextbtn=document.getElementById('load_next')
const previous=document.getElementById('load_prev')


function DisplayIssue(data)
{
    while(ul.firstChild)
    {
        ul.removeChild(ul.firstChild)
    }
    data.forEach((item) => {
        const li_element=document.createElement('li')
       li_element.textContent=item.title
        ul.appendChild(li_element)
    });
}
let pageNo=1;

function Nextpage()
{
    pageNo=pageNo+1;
fetchIssue()
}

function previouspage()
{
    if(pageNo <= 0)
    return
    else
    pageNo=pageNo-1;
    fetchIssue()
}

const  fetchIssue= async ()=>{
    
    spannum.textContent=pageNo
const url=`https://api.github.com/repositories/1296269/issues?page=${pageNo}&per_page=5`;
const fetchdata=await fetch(url);
const res=await fetchdata.json();
console.log(res)
DisplayIssue(res)
}
previous.addEventListener('click',previouspage)
nextbtn.addEventListener('click',Nextpage)
window.addEventListener("DOMContentLoaded",fetchIssue())//your code here
