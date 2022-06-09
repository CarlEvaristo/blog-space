let postsArray = []
const titleInput = document.getElementById("title")
const bodyInput = document.getElementById("body")
const form = document.getElementById("inputForm")

function renderPosts() {
    let html = ""
    for (let post of postsArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html
}


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5) 
        renderPosts()
    })


document.querySelector(".fa-solid").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("display-none")
})
document.getElementById("menu").addEventListener("click", (event) => {
    if (event.target.id === "menu") {
        document.getElementById("menu").classList.toggle("display-none")
    }
    
})

form.addEventListener("submit", event => {
    event.preventDefault()
    let formData = new FormData(event.target)
    let formObj = {
        title: formData.get("title"),
        body: formData.get("body")
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(formObj),
        headers: {"Content-Type": "application/json"}
    })
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
            // titleInput.value = ""
            // bodyInput.value = ""
            form.reset()
        })
})




