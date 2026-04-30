function link(){
    if (document.getElementById("username").value.includes("http://") || document.getElementById("username").value.includes("https://")){
        document.querySelector("a").href = document.getElementById("username").value
    } else {
        alert("Incorrect username/password, please try again")
    }
}