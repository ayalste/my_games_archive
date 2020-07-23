const formBox = document.getElementById('form-box');
const btnBox = document.querySelectorAll('.btns')[0];
const subTitle = document.querySelectorAll('h2')[0];
const btnNewUser = document.getElementById('btn-2');
const btnReturnUser = document.getElementById('btn-1');
const btnGuestUser = document.getElementById('btn-3');



btnNewUser.addEventListener('click', function () {
    userForm('יצירת משתמש חדש', 'יצירת משתמש', 'new-user');

    document.getElementById('new-user').addEventListener('click', function(){
        let user = document.getElementsByClassName('input-user')[0].value;
        let pass = document.getElementsByClassName('input-pass')[0].value;
        createUser(pass, user);
    });
});

btnReturnUser.addEventListener('click', function () {
    userForm('כניסת משתמש', 'כניסה', 'return-user');

    document.getElementById('return-user').addEventListener('click', function(){
        let user = document.getElementsByClassName('input-user')[0].value;
        let pass = document.getElementsByClassName('input-pass')[0].value;
        returnUser(pass, user);
    });
});

btnGuestUser.addEventListener('click', function () {
    localStorage.setItem('user-now', 'guest');
    window.location = "main.html";
});



function userForm(title, btn, id) {
    subTitle.style.display = 'none';
    btnBox.style.display = 'none';
    let userTemplate = `
        <section class="user-form">
            <h2 class="title-color">${title}</h2>
            <div><input class="input-user" type="text" placeholder="הזן שם משתמש"></div>
            <div><input class="input-pass" type="number" placeholder="הזן סיסמה, מספרים בלבד"></div>
            <div class="new-btn" id=${id}>${btn}</div>
            <div class="user-msg"></div>
        </section>
    `;
    formBox.innerHTML = userTemplate;

} 

let usersArr;
if (localStorage.getItem('game-users') != null) {
    usersArr = JSON.parse(localStorage.getItem('game-users'));
} else {
    usersArr = [];
}

function createUser(x, y) {
    let userMsg = '';
    let userClass = 'error';
    let pass = String(x);

    if (pass.length < 6) {
        userMsg = "מספר הספרות אינו תואם לנדרש אנה נסה שוב";
    } else {
        for (let i = 0; i < usersArr.length; i++) {
            if (x == usersArr[i][0]) {
                userMsg = "שם המשתמש או הסיסמה כבר קיימים אנה נסה שוב";
                let msgHtml = `<span class="${userClass}">${userMsg}</span>`;
                document.querySelectorAll('.user-msg')[0].innerHTML = msgHtml;
                return;
            }
            if (y == usersArr[i][1]) {
                userMsg = "שם המשתמש או הסיסמה כבר קיימים אנה נסה שוב";
                let msgHtml = `<span class="${userClass}">${userMsg}</span>`;
                document.querySelectorAll('.user-msg')[0].innerHTML = msgHtml;
                return;
            }
        }

    
        usersArr.push([x, y,{1: 0,2: 0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:29,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0}]);
        localStorage.setItem("game-users", JSON.stringify(usersArr));
        userMsg = 'המשתמש נוסף בהצלחה!!!';
        userClass = 'success';
        localStorage.setItem('user-now', y);
        setTimeout(() => {
            window.location = "main.html";
        }, 2000);
  
    }

    let msgHtml = `<span class="${userClass}">${userMsg}</span>`;
    document.querySelectorAll('.user-msg')[0].innerHTML = msgHtml;
}

function returnUser(x,y){
 let pass = x
 let user = y
 for(let i in usersArr){
    if(usersArr[i][0] == pass){
        if(usersArr[i][1] == user){
            localStorage.setItem('user-now', y);
            window.location = "main.html";
        }
    }
 }
 // localStorage.setItem('user-now', y);
 // window.location = "main.html";
}