const nav = document.getElementById("nav")
const openn = document.getElementById("openn")
const button = document.getElementById("openn")
const title = document.getElementById("title")
const closee = document.getElementById("closee")

openn.onclick=()=>{

if (nav.style.opacity==0)
{
  nav.style.opacity="1";
    nav.style.width="100vw"
    nav.style.display="block"
    title.style.display="block";
    document.body.style.overflow = "hidden";
    document.getElementById("one").style.display="block"
}
}

closee.onclick=()=>{
    nav.style.opacity="0"
    nav.style.width="0px";
    title.style.display = "none"
    document.body.style.overflow="visible"
    document.getElementById("one").style.display="none"
}