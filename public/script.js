const inputEl = document.getElementById("url-field")
const shortUrlEl = document.getElementById("short-url")
const buttonEl = document.getElementById("generate-btn")
const clearEl = document.getElementById("clear-btn")
const copyBtnEl = document.getElementById("copy-btn")

async function fetchUrl() {
    const url = inputEl.value

    const res = await fetch("/", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url }),
    })
    
    const data = await res.json() 
    shortUrlEl.value = window.location.href + data.shortUrl
}


buttonEl.addEventListener("click", async () => {
    if (!inputEl.checkValidity()) {
        return inputEl.reportValidity()
    }
     
    buttonEl.disabled = true    
    await fetchUrl()
    buttonEl.disabled = false
})


inputEl.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
        if (inputEl.checkValidity()) {
            await fetchUrl()
        } else {
            inputEl.reportValidity()
        }
    }
})


clearEl.addEventListener("click", () => {
    inputEl.value = ""
})


copyBtnEl.addEventListener("click", (event) => {
    event.preventDefault()
 
    shortUrlEl.select();
    shortUrlEl.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(shortUrlEl.value);
})
