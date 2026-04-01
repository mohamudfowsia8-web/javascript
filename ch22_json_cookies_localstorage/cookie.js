cookieStore.forEach(cookie=>{
    const [key, value] = cookie.split("=");
    if (key === "username"){
        username = value;

    }
});

if (username){
    document.getElementById("output").textContent = "Hello, " + username;
} else {
    document.getElementById("output").textContent = "No cookie found.";

}

function deletecookie(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.getAnimations("output").textContent = "";

}
