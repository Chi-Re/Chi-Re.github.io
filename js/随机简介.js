// var a = new Date();
// var rand1 = a.getSeconds();
// console.log(rand1/10);
// if (rand1 > 13){
//     rand1 = parseInt(rand1%10)
// } else {
//     rand1 = parseInt(rand1/10 - 47)
// }
// console.log(rand1);
rand1 = randomNum(0,12)
quotes = new Array				//创建消息数组
quotes[0] = 'java很强,很难<br>学会他,证明自己!'
quotes[1] = '事无大小,必有所成'
quotes[2] = '全能战士!'
quotes[3] = 'oh no!'
quotes[4] = '你知道吗,其实这是随机的简介'
quotes[5] = '思考?思考,思考!'
quotes[6] = '不要温和地走进那个良夜,怒斥吧，怒斥光明的消逝'
quotes[7] = '编程对我的学分没有帮助!'
quotes[8] = '你都没有创建类,哪来的对象?'
quotes[9] = '▼上传失败▼'
quotes[10] = 'python是很好的脚本语言'
quotes[11] = 'alpha!'
quotes[12] = '来猜猜,随机简介是:真还是伪随机?'
var quote = quotes[rand1]	//由随机数选择一句话
document.getElementById('bi').innerHTML=quote;

//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 