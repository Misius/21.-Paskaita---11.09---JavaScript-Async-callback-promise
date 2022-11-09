const posts = [
    { title: 'Post One', body: 'This is post One body' },
    { title: 'Post Two', body: 'This is post Two body' },
  ];


//   nusitaikyti
const postsLiEl = document.getElementById('posts');

// gauti postus ir imituojam kad trunka 2 sek juos gauti

function getPosts() {
    setTimeout(() => {
        // sugeneruoti ir patalpinti post masyvo elementus
        posts.forEach((pObj) => {
            const liEl = document.createElement('li');
            liEl.textContent = `${pObj.title} - ${pObj.body}`;
            postsLiEl.append(liEl);
        });
    }, 2000 );
}
// getPosts();



// create post funkcija kuri ideda nauja posta i post masyva

function createPost(newPostObj,cb) {
    setTimeout(() => {
        posts.push(newPostObj);
        cb();
    }, 2000);
    
}

createPost({title: 'Post three', body: 'This is post three body'}, getPosts);




// 1. iskviesti getpost tik kai sukurem posto su createPost su pavdinimu




// 2. iskviesti getpost tik kai sukurem posto su createPost su callback fn