async function likeCode(){
    return new Promise((like)=>{
        like("Post liked successfully");
    })
}

async function commentCode(){
    return new Promise((commentPosted,commentDeleted)=>{
        commentPosted("Comment posted successfully");
    })
}

async function createPost(){
    var post = new Promise((cpost)=>{
        cpost("Post created successfully");
    })
    var [post,comment,like] = await Promise.all([post,commentCode(),likeCode()])
    console.log(post);
    console.log(comment);
    console.log(like);
}
createPost()