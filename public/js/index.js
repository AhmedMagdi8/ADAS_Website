const socket = io('http://127.0.0.1:3000');

socket.on("update", (data) => {
    // console.log(data);
    document.getElementById("speed").innerHTML = data.speed;
    document.getElementById("status").innerHTML = data.status;
    document.getElementById("errorCode").innerHTML = data.errorCode;
});

document.getElementById("track").addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior : "smooth"
    });
})
