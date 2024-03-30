const buton = document.querySelector(".buton");
document.getElementById("buton").addEventListener("click",toplama);
function toplama () {
    const b = document.createElement("a")
    b.className = "btn btn-primary";
    b.id = "emre";
    b.href = "raftongame2.blogspot.com.tr";
    b.innerHTML = "Seks";
    buton.appendChild(b);
}