
document.getElementById("inputForm").addEventListener("submit", event => {
    event.preventDefault()
    let formData = new FormData(event.target)
    let formObj = {
        title: formData.get("title"),
        body: formData.get("body")
    }
    console.log(formObj)
})


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
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