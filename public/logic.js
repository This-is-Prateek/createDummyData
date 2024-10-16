document.getElementById("button").addEventListener("click", async () => {
    let a = await fetch("/data");
    let r = await a.json()
    console.log(JSON.stringify(r));
})