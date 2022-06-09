fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 9)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })


document.querySelector(".fa-solid").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("display-none")
})
document.getElementById("menu").addEventListener("click", (event) => {
    if (event.target.id === "menu") {
        document.getElementById("menu").classList.toggle("display-none")
    }
    
})

document.getElementById("inputForm").addEventListener("submit", event => {
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
            document.getElementById("blog-list").innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
                ${document.getElementById("blog-list").innerHTML}
                `
        })
})




