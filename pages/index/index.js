//index.js
//获取应用实例

/* jshint undef: false, unused: false */
var app = getApp();

(function() {
    'use strict';

    var answers = ['有风险，但也有机会', '找个牛逼的人给你点意见', '算了吧',
        '请教你妈妈', '当然咯', '谁说得准呢，先观望着', '千万别傻', '保持你的好奇心，去挖掘真相',
        '把心揣怀里', '答案在镜子里', 'NO', '这事儿不靠谱', '天上要掉馅饼了', '有好运', '要有耐心',
        '你需要知道真相', '还有另一种情况', '观望', '别让它影响到你', 'YES', '信任', '列个清单',
        '时机不对', '照你想做的那样去做', '量力而行', '但行好事，莫问前程', '抛弃首选方案', '走容易走的路',
        '最佳方案不一定可行', 'NO ZUO NO DIE', '试试卖萌', '借助他人的经验', '再多考虑', '注意细节',
        '说出来吧', '不要犹豫', '机会稍纵即逝', '制订一个新计划', 'GO', '谁都不能保证',
        '情况很快会发生变化', '不要陷得太深', '转移你的注意力', '至关重要', '告诉自己什么是最重要的',
        '为什么不？', '别傻等了', '不要忘记', 'WHY NOT', '去解决', '寻找更多的选择',
        '上帝为你关一扇门，\n必定会再为你开一扇窗', '随波逐流未必是好事', '问天问大地，不如问问自己',
        '你就是答案', '去争取机会', '改变不了世界，改变自己', '主动一点，人生会大不相同', '学会妥协',
        '掌握更多信息', '相信你最初的想法', '勿忘初心，方得始终', '扫清障碍', '把重心放在工作/学习上',
        '培养一项新的爱好', '对他人慷慨', '不妨赌一把', '去做其他的事情', '观察形势', '休息，休息一会儿',
        '这是你最后的机会', '再考虑一下', '并不明智', '等待更好的', '很快能解决', '重要', '是的',
        '采取行动', '去做', '不要过火', '事情开始变得有趣了', '保存你的实力', '这是一定的',
        '不确定因素有点多', '结果不错', '你可能不得不放弃其他东西', '不要忧虑', '不需要', '去倾诉',
        '告诉别人这对你意味着什么', '无论你做何种选择，结果都是对的', '保持头脑清醒', '制定计划', '很麻烦',
        '克服困难', '实际一点', '你需要一点帮助', '协作', '寻找更多的选择', '负责', '阻止',
        '你必须现在就行动', '遵守规则', '坚持', '你不会失望的', '需要花点时间', '不要迫于压力而改变初衷',
        '显而易见', '不要忽略身边的人', '抗拒', '不值得斗争', '玩得开心就好', '毋庸置疑', '你也许会失望',
        '去改变', '一个强有力的承诺将会\n换回更好的结果', '也许有更好的解决方案', '不要害怕',
        '想法太多，选择太少', '是的', '一笑而过', '取决于你的选择', '随他去', '你需要考虑其他方面',
        '一年后就不那么重要了', '醒醒吧，别做梦了', '意义非凡', '默数10秒再问我', '去行动',
        '发挥你的想象力', '对的', '为了确保最好的决定，\n保持冷静', '等待', '你必须弥补这个缺点',
        '你会后悔的', '毫无疑问', '当然', '现在比以往任何时候都要好', '相信你的直觉', '这是一个机会',
        '去问你爸爸', '从来没有', '寻找一个指路人', '去尝试', '没有', '错的', '能做就别瞎BB', '荒谬',
        '不赌', '不值得冒险', '不妥协', '关注你的家庭生活', '肯定', '不可预测', '绝对不', '我确定',
        '尽早完成', '令人期待的事情马上要发生', '你需要适应', '表示怀疑', '它会带来好运', '要有耐心',
        '看看会发生什么', '记录下来', '不宜在这个时候', '决定了就去做', '别要求太多', '放弃第一个方案',
        'HOLD不住', '谨慎小心', '注意细节', '注意身后', '不要犹豫', '继续前进', '情况很快会发生改变',
        '不要被情绪左右', '转移注意力', '着眼未来', '问自己什么是最重要的', '不要等了', '保持乐观',
        '没有更好的选择', '列出原因', '抓住机会', '改变自己', '你需要主动', '妥协', '有比这更重要的东西',
        '你需要掌握更多的信息', '删除记忆', '专注于你的工作', '做能让你快乐的那个决定', '你需要考虑其他方面',
        '你会后悔的', '毫无疑问', '当然', '相信自己的直觉', '这是一个机会', '形式不明', '先让自己休息',
        '重新考虑', '不明智', '抓住机会', '等待机会', '不要做得太过分', '保持现状', '不要忧虑',
        '有意料之外的事会发生，\n不妨等待', '你会失望的', '花更多的时间来决定', '你开心就好'
    ];

    var parser = new DOMParser();
    var formBoard = parser.getElementById('form-container');
    var resultBoard = parser.getElementById('result-container');
    var input = parser.getElementById('question-input');
    var askButton = parser.getElementById('ask-button');
    var continueButton = parser.getElementById('continue-button');
    var questionText = parser.getElementById('question-text');
    var answerText = parser.getElementById('answer-text');

    var question = '';

    input.placeholder = '在这里输入您的困惑';
    input.onfocus = function() {
        this.placeholder = '';
    };
    input.onblur = function() {
        setTimeout(function() {
            input.placeholder = '在这里输入您的困惑';
        }, 900);
    };

    resultBoard.style.opacity = 0;
    resultBoard.disabled = true;

    askButton.onclick = function() {
        question = input.value;

        if (question.length === 0) {
            formBoard.style.opacity = 0.2;
            setTimeout(function() {
                formBoard.style.opacity = 1;
            }, 800);
            return;
        }

        formBoard.disabled = 'true';
        formBoard.style.opacity = 0;

        setTimeout(function() {
            input.value = '';
            questionText.innerText = question;
            var index = Math.floor(Math.random() * answers.length);
            answerText.innerText = answers[index];
            resultBoard.style.opacity = 1;
            resultBoard.disabled = 'false';
            resultBoard.style.zIndex = 10;
        }, 800);
    };

    continueButton.onclick = function() {
        resultBoard.disabled = 'true';
        resultBoard.style.opacity = 0;
        setTimeout(function() {
            formBoard.style.opacity = 1;
            formBoard.disabled = 'false';
            resultBoard.style.zIndex = -10;
        }, 800);
    };
})();
