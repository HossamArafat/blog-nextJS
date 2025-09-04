export default async function getPost(id) {
    const fetchPost = await fetch("https://jsonplaceholder.typicode.com/users")
    const post = await fetchPost.json()
    if(!id) {
        return post
    } else {
        return post.filter((item)=> item.id == id)?.[0]
    }
}
