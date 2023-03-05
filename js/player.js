/*与音乐播放相关的函数*/
var songs;//音乐路径
var btn;//播放暂停按钮

//---------------------------------------------
//首页
//---------------------------------------------
var songs0=[
    "../song/dancin.mp3",
    "../song/darkForest.mp3",
    "../song/nightVoyager.mp3"
];
//---------------------------------------------
//歌单1 英文
//---------------------------------------------
var songs1=[
    "../../song/bootyMusic.mp3",
    "../../song/dancin.mp3",
    "../../song/holdingHands.mp3",
    "../../song/runaway.mp3",
    "../../song/jerkItOut.mp3"
];
//---------------------------------------------
//歌单2 三体
//---------------------------------------------
var songs2=[
    "../../song/nightVoyager.mp3",
    "../../song/darkForest.mp3",
    "../../song/hanYeFangZhou.mp3",
    "../../song/snow.mp3"
];
//---------------------------------------------
//歌单3 邪典
//---------------------------------------------
var songs3=[
    "../../song/beCool.mp3",
    "../../song/misirlou.mp3",
    "../../song/whereIsMyMind.mp3",
    "../../song/believe.mp3"
];
//---------------------------------------------
//歌单4 GME
//---------------------------------------------
var songs4=[
    "../../song/towardNorth.mp3",
    "../../song/lightYearsAway.mp3"
];
//---------------------------------------------
//排行榜1 热歌榜
//---------------------------------------------
var songs5=[
    "../song/runaway.mp3",
    "../song/nightVoyager.mp3",
    "../song/towardNorth.mp3",
    "../song/jerkItOut.mp3",
    "../song/snow.mp3",
    "../song/bootyMusic.mp3",
    "../song/dancin.mp3",
    "../song/holdingHands.mp3",
    "../song/hanYeFangZhou.mp3",
    "../song/darkForest.mp3"
];
//---------------------------------------------
//排行榜2 英文榜
//---------------------------------------------
var songs6=[
    "../song/bootyMusic.mp3",
    "../song/dancin.mp3",
    "../song/holdingHands.mp3",
    "../song/runaway.mp3",
    "../song/jerkItOut.mp3",
    "../song/beCool.mp3",
    "../song/misirlou.mp3",
    "../song/whereIsMyMind.mp3",
    "../song/believe.mp3"
];
//---------------------------------------------
//排行榜3 中文榜
//---------------------------------------------
var songs7=[
    "../song/nightVoyager.mp3",
    "../song/darkForest.mp3",
    "../song/hanYeFangZhou.mp3",
    "../song/snow.mp3",
    "../song/towardNorth.mp3",
    "../song/lightYearsAway.mp3"
];
//---------------------------------------------
var currentSong=0;/*当前播放歌曲序号 自动播放第一首*/
var isPlay=1;/*表示是否在播放*/
var player;


/*播放器初始化*/
function initPlayer(id) {
    btn=document.getElementsByTagName('button');/*获取播放暂停按钮*/

    /*选择播放队列*/
    if(id==0)
        songs=songs0;
    else if(id==1)
        songs=songs1;
    else if(id==2)
        songs=songs2;
    else if(id==3)
        songs=songs3;
    else if(id==4)
        songs=songs4;
    else if(id==5)
        songs=songs5;
    else if(id==6)
        songs=songs6;
    else if(id==7)
        songs=songs7;

    /*若初始化时已有播放器,切换源(主要是排行榜中出现该情况,不切换的话该位置将播放上一个表单的歌曲)*/
    if(player!=null){
        player.pause();
        player.src=songs[currentSong];
    }

    /*获取播放器audio*/
    player = document.getElementById("audio");
    /*设置自动播放下一首*/
    player.addEventListener('ended',next,false);
    /*添加播放、暂停事件*/
    player.addEventListener('play',waitPause,false);
    player.addEventListener('pause',waitPlay,false);
}

/*播放时,修改按键为暂停样式*/
function waitPause() {
    isPlay=1;
    btn[currentSong].setAttribute("class","pause");/*将按钮改为暂停样式*/
}

/*暂停时,修改按键为播放样式*/
function waitPlay() {
    isPlay=0;
    btn[currentSong].setAttribute("class","play");/*将按钮改为播放样式*/
}

/*播放函数 number为歌曲序号*/
function play(number) {
    if(number>songs.length-1){
        alert("由于空间限制,未收录该歌曲");
    }
    else{
        /*选择为同一首歌*/
        if(currentSong==number){
            /*正在播放*/
            if(isPlay==1){
                player.pause();/*暂停当前歌曲*/
            }
            /*暂停状态*/
            else{
                player.play();/*播放当前歌曲*/
            }
        }
        /*选择为不同的歌*/
        else{
            /*将之前的歌暂停*/
            waitPlay();
            currentSong=number;//更改当前播放序号
            player.src=songs[number];//更改播放源文件
            player.play();//播放
        }
    }
}

/*切换下一首*/
function next() {
    play((currentSong+1)%songs.length);
}