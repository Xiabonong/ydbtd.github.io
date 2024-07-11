const sidebarContent = `
<!-- UI界面 -->
    <nav class="shell close"> <!-- 侧边栏 -->
        <header>
            <div class="image-text">
                <span class="image">
                    <a href="index.html">
                        <img src="image/logo.png" alt="2048">
                    </a>
                </span>
                <div class="image logo-text">
                    <span class="text name">2048</span>
                    <span class=" text teamname">---有点不太队---</span>
                </div>
            </div>
            <i class="iconfont icon-ArrowRight toggle"></i>
        </header>
        <div class="menu-bar">
            <div class="menu">
                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="#" id="introduction" class="shellBtn">
                            <i class="iconfont icon-TargetArrow icon"></i>
                            <span class="text nac-text">玩法介绍</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" id="difficulty" class="shellBtn">
                            <i class="iconfont icon-ClassSquare icon"></i>
                            <span class="text nac-text">难度设置</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" id="volume" class="shellBtn">
                            <i class="iconfont icon-Bell icon"></i>
                            <span class="text nac-text">音量控制</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" id="skin" class="shellBtn">
                            <i class="iconfont icon-SettingSemicircle icon"></i>
                            <span class="text nac-text">主题切换</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" id="modeChoice" class="shellBtn">
                            <i class="iconfont icon-ClickHand icon"></i>
                            <span class="text nac-text">模式选择</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" id="advice" class="shellBtn">
                            <i class="iconfont icon-NotebookPencil icon"></i>
                            <span class="text nac-text">意见建议</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" id="productionTeam" class="shellBtn">
                            <i class="iconfont icon-UserMore icon"></i>
                            <span class="text nac-text">制作团队</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#"  id="achievement" class="shellBtn">
                            <i class="iconfont icon-Star icon"></i>
                            <span class="text nac-text">成就</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="bottom-content">
                <li class="mode">
                    <div class="sun-moon">
                        <i class="iconfont icon-View icon sun"></i>
                        <i class="iconfont icon-Hide icon moon"></i>
                    </div>
                    <span class="mode-text text">夜间模式</span>
                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
            </div>
        </div>
    </nav>

    <!-- 玩法介绍弹出层 -->
    <div id="Pop-introduction" class="popup-introduction">
        <button id="closeBtnIntroduction" class="closePopup">
            <i class="iconfont icon-Close icon"></i>
        </button>
    </div>

    <!-- 难度设置弹出层 -->
    <div id="Pop-difficulty" class="popup-difficulty">
        
    </div>

    <!-- 音量控制弹出层 -->
    <div id="Pop-volume" class="popup-volume">
        
    </div>
    
    <!-- 主题切换弹出层 -->
    <div id="Pop-skin" class="popup-skin">
        
    </div>

    <!-- 模式选择弹出层 -->
    <div id="Pop-modeChoice" class="popup-modeChoice">
        
    </div>

    <!-- 意见建议弹出层 -->
    <div id="Pop-advice" class="popup-advice">
        <i class="iconfont icon-NotebookPencil icon" id="iconAdvice"></i>
        <span id="textAdvice">Contact us</span>
        <span id="textAdviceMain">有什么意见和想法就告诉我们吧……</span>
        <textarea id="contactUs" placeholder="请在这里输入："></textarea>
        <button id="submitBtn" class="submitBtn">提交</button>
        <button id="closeBtnAdvice" class="closePopup">
            <i class="iconfont icon-Close icon"></i>
        </button>
    </div>
    <!-- 意见建议反馈弹出层 -->
    <div id="Pop-feedback" class="popup-feedback">
        <span id="feedbackText">收到你的消息啦！o(*≧▽≦)ツ <br>
                                感谢反馈！
        </span>
        <button id="closeBtnFeedback" class="closePopup">
            <i class="iconfont icon-Close icon"></i>
        </button>
    </div>

    <!-- 制作团队弹出层 -->
    <div id="Pop-productionTeam" class="popup-productionTeam">
        <i class="iconfont icon-UserMore icon" id="iconProductionTeam"></i>
        <span id="textProductionTeam">制作团队</span>
        <div class="LYQ">
            <img src="image/member/LYQ.jpg" alt="Long">
            <strong>龍毅翹</strong>
            <p>2307010131</p>
        </div>
        <div class="XBN">
            <img src="image/member/XBN.jpg" alt="Xia">
            <strong>夏伯农</strong>
            <p>2307010420</p>
        </div>
        <div class="LZH">
            <img src="image/member/LZH.jpg" alt="Liu">
            <strong>刘子菡</strong>
            <p>2307010113</p>
        </div>
        <div class="WX">
            <img src="image/member/WX.jpg" alt="Wang">
            <strong>王檄</strong>
            <p>2307010215</p>
        </div>
        <div class="NX">
            <img src="image/member/NX.jpg" alt="Niu">
            <strong>牛翔</strong>
            <p>2307010310</p>
        </div>
        <button id="closeBtnProductionTeam" class="closePopup">
            <i class="iconfont icon-Close icon"></i>
        </button>
    </div>

    <!-- 成就弹出层 -->
    <div id="Pop-achievement" class="popup-achievement">
        <i class="iconfont icon-Star icon" id="iconAchievement"></i>
        <span id="textAchievement">成就</span>
        <button id="closeBtnAchievement" class="closePopup">
            <i class="iconfont icon-Close icon"></i>
        </button>
    </div>

    <!-- 分数板 -->
    <div class="scores-container">
        <div class="score-container">
            <span id="score" class="scores">0</span>
        </div>
        <div class="best-container">
            <span id="best" class="scores">0</span>
        </div>
    </div>

    <!-- 开始游戏按钮 -->
    <button id="startGameButton">开始游戏</button>

    <!-- 排行榜 -->
    <a id="rankingListBtn" class="rankingListBtn">
        <i class="iconfont icon-BarChart icon" id="rankingIcon"></i>
        <span id="rankingListName">排行榜</span>
    </a>
    <div id="Ranking-Btn" class="rankingList-container"></div>

    <!-- 游戏结束弹出层     -->
    <div id="gameOverBoard" class="gameOverBoard">
        <span id="loseText">输赢什么的无所谓！<br>
                            再开一局吧！<br>
                            o(*≧▽≦)ツ┏━┓
        <span id="loseTextTip">点击任意位置继续……</span>
    </div>

    <!-- 游戏胜利弹出层     -->
    <div id="gameWinBoard" class="gameWinBoard">
        <span id="winText">恭喜你！你赢了！<br> 
                           继续玩或者重开，任君选择吧~ <br> 
                           (￣▽￣)ノ</span>
        <span id="winTextTip">点击任意位置继续……</span>
    </div>
    <!-- 背景 -->
    <div class="container">
        <div class="bubbles">
            <span style="--i:11;"></span>
            <span style="--i:14;"></span>
            <span style="--i:24;"></span>
            <span style="--i:10;"></span>
            <span style="--i:14;"></span>
            <span style="--i:23;"></span>
            <span style="--i:18;"></span>
            <span style="--i:16;"></span>
            <span style="--i:19;"></span>
            <span style="--i:20;"></span>
            <span style="--i:22;"></span>
            <span style="--i:25;"></span>
            <span style="--i:18;"></span>
            <span style="--i:21;"></span>
            <span style="--i:15;"></span>
            <span style="--i:13;"></span>
            <span style="--i:26;"></span>
            <span style="--i:17;"></span>
            <span style="--i:13;"></span>
            <span style="--i:28;"></span>
            <span style="--i:11;"></span>
            <span style="--i:12;"></span>
            <span style="--i:24;"></span>
            <span style="--i:10;"></span>
            <span style="--i:14;"></span>
            <span style="--i:23;"></span>
            <span style="--i:18;"></span>
            <span style="--i:16;"></span>
            <span style="--i:19;"></span>
            <span style="--i:20;"></span>
            <span style="--i:22;"></span>
            <span style="--i:25;"></span>
            <span style="--i:18;"></span>
            <span style="--i:21;"></span>
            <span style="--i:15;"></span>
            <span style="--i:13;"></span>
            <span style="--i:26;"></span>
            <span style="--i:17;"></span>
            <span style="--i:13;"></span>
            <span style="--i:30;"></span>
            <span style="--i:14;"></span>
            <span style="--i:23;"></span>
            <span style="--i:18;"></span>
            <span style="--i:16;"></span>
        </div>
    </div>
`;

// 初始化UI
document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML += sidebarContent;
    initUI();
    waterMark();
    closePopup();
    buttonEffect();
    showRanking();
});


function initUI() {
    // 切换body元素的dark类
    const body = document.querySelector('body'),
        shell = body.querySelector('nav'),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text"),
        toggle = body.querySelector('.toggle');
        shellBtns = body.querySelectorAll('.shellBtn');

    // 切换侧边栏
    toggle.addEventListener("click", () => {
        shell.classList.toggle("close");
        document.getElementById('Pop-introduction').classList.remove('active');
        document.getElementById('Pop-difficulty').classList.remove('active');
        document.getElementById('Pop-volume').classList.remove('active');
        document.getElementById('Pop-skin').classList.remove('active');
        document.getElementById('Pop-modeChoice').classList.remove('active');
        document.getElementById('Pop-advice').classList.remove('active');
        document.getElementById('Pop-productionTeam').classList.remove('active');
        document.getElementById('Pop-achievement').classList.remove('active');
    });
    shellBtns.forEach(shellBtn => {  
        shellBtn.addEventListener("click", () => {  
            if (shell.classList.contains('close')) {  
                shell.classList.remove('close');  
            }  
        }); 
    });

    // 切换模式
    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) modeText.innerText = "白日模式";
        else modeText.innerText = "夜间模式";
    });
}

function waterMark() {
    // 水印
    const watermarkDiv = document.createElement('div');
    watermarkDiv.style.color = 'gray';
    watermarkDiv.style.position = 'fixed';
    watermarkDiv.style.bottom = '0';
    watermarkDiv.style.right = '0';
    watermarkDiv.style.margin = '10px';
    watermarkDiv.textContent = '创作by有点不太队';
    document.body.appendChild(watermarkDiv);
}

function closePopup() {
    // 弹出层（用于开启和关闭层）
    var popUp1 = document.getElementById('Pop-introduction');
    var popUp2 = document.getElementById('Pop-difficulty');
    var popUp3 = document.getElementById('Pop-volume');
    var popUp4 = document.getElementById('Pop-skin');
    var popUp5 = document.getElementById('Pop-modeChoice');
    var popUp6 = document.getElementById('Pop-advice');
    var popUp7 = document.getElementById('Pop-productionTeam');
    var popUp8 = document.getElementById('Pop-achievement');

    // 玩法介绍（popUp1）
    document.getElementById('introduction').addEventListener('click', function (event) {
        event.preventDefault();
        if (popUp1.classList.contains('active')) popUp1.classList.remove('active');
        else popUp1.classList.add('active');
        popUp2.classList.remove('active');
        popUp3.classList.remove('active');
        popUp4.classList.remove('active');
        popUp5.classList.remove('active');
        popUp6.classList.remove('active');
        popUp7.classList.remove('active');
        popUp8.classList.remove('active');
    });

    // 难度设置（popUp2）
    document.getElementById('difficulty').addEventListener('click', function (event) {
        event.preventDefault();
        if (popUp2.classList.contains('active')) popUp2.classList.remove('active');
        else popUp2.classList.add('active');
        popUp1.classList.remove('active');
        popUp3.classList.remove('active');
        popUp4.classList.remove('active');
        popUp5.classList.remove('active');
        popUp6.classList.remove('active');
        popUp7.classList.remove('active');
        popUp8.classList.remove('active');
    });

    // 音量控制（popUp3）
    document.getElementById('volume').addEventListener('click', function (event) {
        event.preventDefault();
        if (popUp3.classList.contains('active')) popUp3.classList.remove('active');
        else popUp3.classList.add('active');
        popUp1.classList.remove('active');
        popUp2.classList.remove('active'); 
        popUp4.classList.remove('active');
        popUp5.classList.remove('active');
        popUp6.classList.remove('active');
        popUp7.classList.remove('active');
        popUp8.classList.remove('active');
    });

    // 主题切换（popUp4）
    document.getElementById('skin').addEventListener('click', function (event) {
        event.preventDefault();
        if (popUp4.classList.contains('active')) popUp4.classList.remove('active');
        else popUp4.classList.add('active');
        popUp1.classList.remove('active');
        popUp2.classList.remove('active'); 
        popUp3.classList.remove('active');
        popUp5.classList.remove('active');
        popUp6.classList.remove('active');
        popUp7.classList.remove('active');
        popUp8.classList.remove('active');
    });

    // 模式选择（popUp5）
    document.getElementById('modeChoice').addEventListener('click', function (event) {
        event.preventDefault();
        if (popUp5.classList.contains('active')) popUp5.classList.remove('active');
        else popUp5.classList.add('active');
        popUp1.classList.remove('active');
        popUp2.classList.remove('active'); 
        popUp3.classList.remove('active');
        popUp4.classList.remove('active');
        popUp6.classList.remove('active');
        popUp7.classList.remove('active');
        popUp8.classList.remove('active');
    });

    // 意见建议（popUp6）
    document.getElementById('advice').addEventListener('click', function (event) {
        event.preventDefault();
        if (popUp6.classList.contains('active')) popUp6.classList.remove('active');
        else popUp6.classList.add('active');
        popUp1.classList.remove('active');
        popUp2.classList.remove('active'); 
        popUp3.classList.remove('active');
        popUp4.classList.remove('active');
        popUp5.classList.remove('active');
        popUp7.classList.remove('active');
        popUp8.classList.remove('active');
    });
    document.getElementById('submitBtn').addEventListener('click', function (event) {
        event.preventDefault();
        popUp6.classList.remove('active');
        document.getElementById('Pop-feedback').classList.add('active');
        document.getElementById("contactUs").value = "";
    });

    // 制作团队（popUp7）
    document.getElementById('productionTeam').addEventListener('click', function (event) {
        event.preventDefault();
        if (popUp7.classList.contains('active')) popUp7.classList.remove('active');
        else popUp7.classList.add('active');
        popUp1.classList.remove('active');
        popUp2.classList.remove('active'); 
        popUp3.classList.remove('active');
        popUp4.classList.remove('active');
        popUp5.classList.remove('active');
        popUp6.classList.remove('active');
        popUp8.classList.remove('active');
    });

    // 成就（popUp8）
    document.getElementById('achievement').addEventListener('click', function (event) {
        event.preventDefault();
        if (popUp8.classList.contains('active')) popUp8.classList.remove('active');
        else popUp8.classList.add('active');
        popUp1.classList.remove('active');
        popUp2.classList.remove('active'); 
        popUp3.classList.remove('active');
        popUp4.classList.remove('active');
        popUp5.classList.remove('active');
        popUp6.classList.remove('active');
        popUp7.classList.remove('active');
    });

    // 统一关闭弹出层
    var closeButton = document.getElementsByClassName('closePopup');
    for (var i = 0; i < closeButton.length; i++) {
        closeButton[i].addEventListener('click', function () {
            popUp1.classList.remove('active');
            popUp2.classList.remove('active'); 
            popUp3.classList.remove('active');
            popUp4.classList.remove('active');
            popUp5.classList.remove('active');
            popUp6.classList.remove('active');
            popUp7.classList.remove('active');
            popUp8.classList.remove('active');
            document.getElementById('Pop-feedback').classList.remove('active');
        });
    }
}

function buttonEffect() {
    var sGB = document.querySelector('#startGameButton');
    var isAnimating = false;

    sGB.addEventListener('click', function () {
        if (!isAnimating) { 
            isAnimating = true;
            sGB.classList.add('animate'); 

            setTimeout(() => { 
                sGB.classList.remove('animate'); 
                isAnimating = false; 
            }, 300); 
        }
    });
}

function showRanking() {
    document.getElementById('rankingListBtn').addEventListener('click', function (event) {
        var rankingBtn = document.getElementById('Ranking-Btn');
        event.preventDefault(); // 阻止链接的默认行为  
        if (rankingBtn.classList.contains('active')) rankingBtn.classList.remove('active');
            else rankingBtn.classList.add('active');
    });
}

//  禁用缩放
document.addEventListener('mousewheel', function(event) {  
    if (event.ctrlKey === true) {  
        event.preventDefault();  
    }  
}, { passive: false }); 