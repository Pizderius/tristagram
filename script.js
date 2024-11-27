function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function appendPost() {
    document.getElementById("timeline").innerHTML +=
        `
        <div class="post-container container py-2">
            <div class="w-100 bg-white border shadow-sm rounded p-3">
                <div class="fw-bolder d-flex align-items-center">
                    <div class="me-1">
                        <img class="btn border btn-light shadow-sm me-2 p-1 rounded-circle shadow-sm" style="width: 40px; height: 40px;" src="tristan.jpg">
                    </div>
                    <div>
                        Tristan
                    </div>
                    <div class="flex-fill">
                    </div>
                    <button class="btn btn-sm border rounded-pill shadow-sm btn-light">
                        ☰
                    </button>
                </div>
                <img class="rounded shadow w-100 my-3" src="tristan.jpg">
                <div class="fw-bolder d-flex align-items-center">
                    <button class="btn btn-sm border rounded-pill shadow-sm btn-light me-2">
                        ❤️ ${getRandomInt(1000)}
                    </button>
                    <button class="btn btn-sm border rounded-pill shadow-sm btn-light me-2">
                        💬 ${getRandomInt(1000)}
                    </button>
                    <button class="btn btn-sm border rounded-pill shadow-sm btn-light">
                        ✉️ ${getRandomInt(1000)}
                    </button>
                    <div class="flex-fill">
                    </div>
                    <button class="btn btn-sm border rounded-pill shadow-sm btn-light">
                        💾
                    </button>
                </div>
            </div>
        </div>
    `;
}

function appendPosts() {
    for(let i = 0; i < 10; i++) appendPost();
}

window.onscroll = function(ev) {
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 2000) {
        appendPosts();
    }
};

appendPosts();