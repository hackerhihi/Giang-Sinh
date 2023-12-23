for (var i = 0; i < 50; i++) {
    var snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDelay = Math.random() * 10 + "s";
    document.body.appendChild(snowflake);
}