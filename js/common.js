function loadNav() {
    var nav=document.getElementsByTagName("nav")[0];
    nav.innerHTML="        <ul>\n" +
        "            <li><a href=\"index.html\">首页</a></li>\n" +
        "            <li><a href=\"songList.html\">全部歌单</a></li>\n" +
        "            <li><a href=\"rank.html\">排行榜</a></li>\n" +
        "            <li style=\"float: right\"><a href=\"login.html\">登录</a></li>\n" +
        "        </ul>";
}

function loadNav2() {
    var nav=document.getElementsByTagName("nav")[0];
    nav.innerHTML="        <ul>\n" +
        "            <li><a href=\"../index.html\">首页</a></li>\n" +
        "            <li><a href=\"../songList.html\">全部歌单</a></li>\n" +
        "            <li><a href=\"../rank.html\">排行榜</a></li>\n" +
        "            <li style=\"float: right\"><a href=\"../login.html\">登录</a></li>\n" +
        "        </ul>";
}