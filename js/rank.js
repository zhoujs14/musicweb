/*排行榜控制函数*/

/*显示热歌榜*/
function showRank1() {
    /*设置标题*/
    var title=document.getElementById("rankTitle");
    title.innerHTML="热歌榜";

    /*设置歌曲列表*/
    var table=document.getElementById("rankTbody");
    table.innerHTML='<tr>\n' +
        '                    <td>1</td>\n' +
        '                    <td><button class="play" onclick="play(0)"></button></td>\n' +
        '                    <td>Runaway</td>\n' +
        '                    <td>03:38</td>\n' +
        '                    <td>Sasha Sloan</td>\n' +
        '                    <td>Runaway</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>2</td>\n' +
        '                    <td><button class="play" onclick="play(1)"></button></td>\n' +
        '                    <td>夜航星</td>\n' +
        '                    <td>05:03</td>\n' +
        '                    <td>不才、三体宇宙</td>\n' +
        '                    <td>我的三体之章北海传</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>3</td>\n' +
        '                    <td><button class="play" onclick="play(2)"></button></td>\n' +
        '                    <td>飘向北方</td>\n' +
        '                    <td>04:25</td>\n' +
        '                    <td>黄明志/邓紫棋</td>\n' +
        '                    <td>飘向北方</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>4</td>\n' +
        '                    <td><button class="play" onclick="play(3)"></button></td>\n' +
        '                    <td>Jerk It Out</td>\n' +
        '                    <td>03:17</td>\n' +
        '                    <td>Caesars</td>\n' +
        '                    <td>The Best of 2005</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>5</td>\n' +
        '                    <td><button class="play" onclick="play(4)"></button></td>\n' +
        '                    <td>冥王星的雪</td>\n' +
        '                    <td>05:47</td>\n' +
        '                    <td>祖娅纳西/沢纪</td>\n' +
        '                    <td>三体系列</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>6</td>\n' +
        '                    <td><button class="play" onclick="play(5)"></button></td>\n' +
        '                    <td>Booty Music</td>\n' +
        '                    <td>03:01</td>\n' +
        '                    <td>Deep Side</td>\n' +
        '                    <td>Git Fresh</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>7</td>\n' +
        '                    <td><button class="play" onclick="play(6)"></button></td>\n' +
        '                    <td>Dancin</td>\n' +
        '                    <td>03:18</td>\n' +
        '                    <td>Aaron Smith</td>\n' +
        '                    <td>Dancin</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>8</td>\n' +
        '                    <td><button class="play" onclick="play(7)"></button></td>\n' +
        '                    <td>Holding Hands</td>\n' +
        '                    <td>03:23</td>\n' +
        '                    <td>Melis</td>\n' +
        '                    <td>Paralles</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>9</td>\n' +
        '                    <td><button class="play" onclick="play(8)"></button></td>\n' +
        '                    <td>寒夜方舟</td>\n' +
        '                    <td>05:00</td>\n' +
        '                    <td>大若</td>\n' +
        '                    <td>三体系列</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>10</td>\n' +
        '                    <td><button class="play" onclick="play(9)"></button></td>\n' +
        '                    <td>黑暗森林</td>\n' +
        '                    <td>05:47</td>\n' +
        '                    <td>一清清清</td>\n' +
        '                    <td>黑暗森林</td>\n' +
        '                </tr>';
    initPlayer(5);
}
function showRank2() {
    /*设置标题*/
    var title=document.getElementById("rankTitle");
    title.innerHTML="英文榜";

    /*设置歌曲列表*/
    var table=document.getElementById("rankTbody");
    table.innerHTML='<tr>\n' +
        '<td>1</td>\n' +
        '<td><button class="play" onclick="play(0)"></button></td>\n' +
        '<td>Booty Music</td>\n' +
        '<td>03:01</td>\n' +
        '<td>Deep Side</td>\n' +
        '<td>Git Fresh</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td>2</td>\n' +
        '<td><button class="play" onclick="play(1)"></button></td>\n' +
        '<td>Dancin</td>\n' +
        '<td>03:18</td>\n' +
        '<td>Aaron Smith</td>\n' +
        '<td>Dancin</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td>3</td>\n' +
        '<td><button class="play" onclick="play(2)"></button></td>\n' +
        '<td>Holding Hands</td>\n' +
        '<td>03:23</td>\n' +
        '<td>Melis</td>\n' +
        '<td>Paralles</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td>4</td>\n' +
        '<td><button class="play" onclick="play(3)"></button></td>\n' +
        '<td>Runaway</td>\n' +
        '<td>03:38</td>\n' +
        '<td>Sasha Sloan</td>\n' +
        '<td>Runaway</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td>5</td>\n' +
        '<td><button class="play" onclick="play(4)"></button></td>\n' +
        '<td>Jerk It Out</td>\n' +
        '<td>03:17</td>\n' +
        '<td>Caesars</td>\n' +
        '<td>The Best of 2005</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td>6</td>\n' +
        '<td><button class="play" onclick="play(5)"></button></td>\n' +
        '<td>Everybody Be cool</td>\n' +
        '<td>00:04</td>\n' +
        '<td>George Clooney</td>\n' +
        '<td>From Dusk Till Dawn</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td>7</td>\n' +
        '<td><button class="play" onclick="play(6)"></button></td>\n' +
        '<td>Misirlou</td>\n' +
        '<td>02:14</td>\n' +
        '<td>Dick Dale</td>\n' +
        '<td>The Tarantino Connection</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td>8</td>\n' +
        '<td><button class="play" onclick="play(7)"></button></td>\n' +
        '<td>Where Is My Mind</td>\n' +
        '<td>03:52</td>\n' +
        '<td>Pixies</td>\n' +
        '<td>Essential Soundtracks</td>\n' +
        '</tr>\n' +
        '<tr>\n' +
        '<td>9</td>\n' +
        '<td><button class="play" onclick="play(8)"></button></td>\n' +
        '<td>Believe</td>\n' +
        '<td>04:35</td>\n' +
        '<td>Franka Potente</td>\n' +
        '<td>Run Lola Run</td>\n' +
        '</tr>'+
        '<tr>\n' +
        '<td>10</td>\n' +
        '<td><button class="play" onclick="play(8)"></button></td>\n' +
        '<td>Victory</td>\n' +
        '<td>03:02</td>\n' +
        '<td>邓紫棋</td>\n' +
        '<td>Victoria</td>\n' +
        '</tr>';
}
function showRank3() {
    /*设置标题*/
    var title=document.getElementById("rankTitle");
    title.innerHTML="中文榜";

    /*设置歌曲列表*/
    var table=document.getElementById("rankTbody");
    table.innerHTML=' <tr>\n' +
        '                    <td>1</td>\n' +
        '                    <td><button class="play" onclick="play(0)"></button></td>\n' +
        '                    <td>夜航星</td>\n' +
        '                    <td>05:03</td>\n' +
        '                    <td>不才、三体宇宙</td>\n' +
        '                    <td>我的三体之章北海传</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>2</td>\n' +
        '                    <td><button class="play" onclick="play(1)"></button></td>\n' +
        '                    <td>黑暗森林(《我的三体之罗辑传》片尾曲)</td>\n' +
        '                    <td>05:47</td>\n' +
        '                    <td>一清清清</td>\n' +
        '                    <td>黑暗森林</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>3</td>\n' +
        '                    <td><button class="play" onclick="play(2)"></button></td>\n' +
        '                    <td>寒夜方舟</td>\n' +
        '                    <td>05:00</td>\n' +
        '                    <td>大若</td>\n' +
        '                    <td>三体系列</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>4</td>\n' +
        '                    <td><button class="play" onclick="play(3)"></button></td>\n' +
        '                    <td>冥王星的雪</td>\n' +
        '                    <td>05:47</td>\n' +
        '                    <td>祖娅纳西/沢纪</td>\n' +
        '                    <td>三体系列</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>5</td>\n' +
        '                    <td><button class="play" onclick="play(4)"></button></td>\n' +
        '                    <td>飘向北方</td>\n' +
        '                    <td>04:25</td>\n' +
        '                    <td>黄明志/邓紫棋</td>\n' +
        '                    <td>飘向北方</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>6</td>\n' +
        '                    <td><button class="play" onclick="play(5)"></button></td>\n' +
        '                    <td>光年之外</td>\n' +
        '                    <td>03:02</td>\n' +
        '                    <td>邓紫棋</td>\n' +
        '                    <td>我想和你唱 第二季 第9期</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>7</td>\n' +
        '                    <td><button class="play" onclick="play(6)"></button></td>\n' +
        '                    <td>泡沫</td>\n' +
        '                    <td>03:59</td>\n' +
        '                    <td>邓紫棋</td>\n' +
        '                    <td>我想和你唱 第二季 第9期</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>8</td>\n' +
        '                    <td><button class="play" onclick="play(7)"></button></td>\n' +
        '                    <td>内圆外方</td>\n' +
        '                    <td>02:34</td>\n' +
        '                    <td>Bo Peep</td>\n' +
        '                    <td>内圆外方</td>\n' +
        '                </tr>\n'+
        '                <tr>\n' +
        '                    <td>9</td>\n' +
        '                    <td><button class="play" onclick="play(8)"></button></td>\n' +
        '                    <td>生而为人</td>\n' +
        '                    <td>02:28</td>\n' +
        '                    <td>CADY/超储</td>\n' +
        '                    <td>生而为人</td>\n' +
        '                </tr>\n'+
        '                <tr>\n' +
        '                    <td>10</td>\n' +
        '                    <td><button class="play" onclick="play(9)"></button></td>\n' +
        '                    <td>害怕孤独的动物</td>\n' +
        '                    <td>02:28</td>\n' +
        '                    <td>张叶蕾</td>\n' +
        '                    <td>害怕孤独的动物</td>\n' +
        '                </tr>\n';

}

