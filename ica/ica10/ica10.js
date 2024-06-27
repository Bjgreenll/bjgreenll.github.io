function windowLoaded(){
    document.getElementById("button-1").addEventListener('click',button1clicked);
    document.getElementById("button-2").addEventListener('click',button2clicked);

    
}
function button1clicked(){
    document.getElementById("background").classList.toggle("clicked");
}
function button2clicked(){
    document.getElementById("button-2").classList.toggle("clicked2");
}
window.onload = windowLoaded;