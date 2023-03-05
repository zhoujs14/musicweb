/*这里是海报切换相关的函数*/

var p = 0;/*图片下标指示*/
var p1 = '../img/p1.jpg';
var p2 = '../img/p2.jpg';
var p3 = '../img/p3.jpg';
var p4 = '../img/p4.jpg';
var pArray = new Array();
pArray[0] = p1;
pArray[1] = p2;
pArray[2] = p3;
pArray[3] = p4;

/*切换下一张图片*/
function nextPoster() {
    p = (p + 1) % pArray.length;
    document.getElementById("postImg").setAttribute("src", pArray[p]);
}

/*切换上一张图片*/
function lastPoster() {
    p = (p + pArray.length - 1) % pArray.length;
    document.getElementById("postImg").setAttribute("src", pArray[p]);
}

/*定时切换海报*/
function autoChangePoster() {
    setInterval(nextPoster,4000);
}