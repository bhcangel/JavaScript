//쿠키 확인 함수
function getCookie(name){
    var cookies = document.cookie.split("; ");
    
    for(var i in cookies) {
        if(cookies[i].search(name) != -1){
            return true;
        }
    }
}


//쿠키 생성함수() 매개변수를 받아서 해당이름으로 1일간 유지되는 쿠키를 생성
function createCookie(input) {
    var date = new Date();
    date.setDate(date.getDate() + 1);
    var cookie = "";
    cookie += input+"="+"1;";
    cookie +="expires=" + date.toUTCString();
    document.cookie = cookie;
    console.log("document.cookie : " + document.cookie);
}