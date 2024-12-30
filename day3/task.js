async function likeCode() {
    return new Promise((resolve, reject) => {
        const success = true; 
        success ? resolve("Post liked successfully") : reject("Failed to like the post");
    });
}

async function unlikeCode() {
    return new Promise((resolve, reject) => {
        const success = false; 
        success ? resolve("Post unliked successfully") : reject("Failed to unlike the post");
    });
}

async function commentCode() {
    return new Promise((resolve, reject) => {
        const success = true; 
        success ? resolve("Comment posted successfully") : reject("Failed to post the comment");
    });
}

async function uncommitCode() {
    return new Promise((resolve, reject) => {
        const success = true; 
        success ? resolve("Comment unposted successfully") : reject("Failed to unpost the comment");
    });
}

async function createPost() {
    return new Promise((resolve, reject) => {
        const success = true; 
        success ? resolve("Post created successfully") : reject("Failed to create the post");
    });
}


async function unpostCode() {
    return new Promise((resolve, reject) => {
        const success = true; 
        success ? resolve("Post deleted successfully") : reject("Failed to delete the post");
    });
}

async function shareCode() {
    return new Promise((resolve, reject) => {
        const success = true; 
        success ? resolve("Post shared successfully") : reject("Failed to share the post");
    });
}

async function unshareCode() {
    return new Promise((resolve, reject) => {
        const success = true; 
        success ? resolve("Post unshared successfully") : reject("Failed to unshare the post");
    });
}

async function executePostActions() {
    try {
        
        const postMessage = await createPost();
        console.log(postMessage);

        const [likeMessage, commentMessage] = await Promise.all([
            likeCode(),
            commentCode(),
        ]);
        console.log(likeMessage);
        console.log(commentMessage);

        const shareMessage = await shareCode();
        console.log(shareMessage);

        const [unlikeMessage, uncommitMessage, unpostMessage] = await Promise.all([
            unlikeCode(),
            uncommitCode(),
            unpostCode(),
        ]);
        console.log(unlikeMessage);
        console.log(uncommitMessage);
        console.log(unpostMessage);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

executePostActions();
