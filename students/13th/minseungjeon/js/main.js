const dat = document.querySelector('#dat');
const btn = document.querySelector('#btn');

//댓글 입력

function addComment() {
    const ul = document.querySelector('.div-p ul');
    const li = document.createElement('li');
    li.style.listStyle = 'none';

    ul.appendChild(li);
    const comment = dat.value;
    li.innerHTML = `jeon.92 ${comment}`;
    dat.value = null;

    //댓글 좋아요
    const b = document.createElement('button');
    b.className = "likeButton"
    b.innerHTML = '좋아요';
    li.appendChild(b);


    b.addEventListener('click', lComment);


    function lComment() {
        if (b.classList.contains('like')) {
            b.style.backgroundColor = '#EFEFEF';
            b.classList.remove('like')
        } else {
            b.style.backgroundColor = '#f45516';
            b.classList.add('like')
        }

    }

    //댓글 삭제

    const b2 = document.createElement('button');
    b2.innerHTML = '삭제';
    b2.className = 'delete';
    li.appendChild(b2);

    b2.addEventListener('click', cDelete);

    function cDelete() {
        li.remove();
    }
}

dat.addEventListener('keyup', enter_addComment);

function enter_addComment(e) {
    if (e.keyCode === 13 && dat.value.length > 0) {
        addComment()
    }
}

function click_addComment() {
    if (dat.value.length > 0) {
        addComment()
    }
}

btn.addEventListener('click', click_addComment);


//좋아요 하트 색깔

const isLiked = document.querySelector('#isLiked');

isLiked.addEventListener('click', change);
isLiked.classList.add('red');

function change() {
    //classlist add
    if (isLiked.classList.contains('red')) {
        isLiked.src = 'data:image/png;base64,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'
        isLiked.classList.remove('red');
    } else {
        isLiked.src = 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
        isLiked.classList.add('red');
    }


}


//Mission 7 | 아이디 검색 기능
const idArr = ['wecode', 'wecode_전민승', 'wecode_고양이', 'apple', 'taxi'];
const search = document.querySelector('.search');
const ul = document.querySelector('.search-container ul');

search.addEventListener('keyup', searchingId);

function searchingId(){
    ul.innerHTML = '';
    const filter = idArr.filter(x => x.indexOf(search.value) !== -1);

    // search.value.length === 0 ? ul.style.display = 'none' : ul.style.display = 'block';

    if(search.value.length === 0){
        ul.style.display = 'none'
    }else{
        ul.style.display = 'block';
    }
    
    for(let i in filter){
        const li = document.createElement('li');
        li.innerHTML = `<img src='https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814082_960_720.png' alt=''/> ${filter[i]}`;
        ul.appendChild(li);
    }
    

}




//Mission 8 | nav 프로필 사진 클릭 시 메뉴 박스 생성

const profileClick = document.querySelector('.nav-right img:nth-child(5)');
const menuBox = document.querySelector('.menu-box');

profileClick.addEventListener('click', b);


function b() {
    menuBox.style.display = 'block';
    if (menuBox.classList.contains('show')) {
        menuBox.style.display = 'none';
        menuBox.classList.remove('show');
    } else {
        menuBox.style.display = 'block';
        menuBox.classList.add('show');
    }

    
}
