const text = document.getElementById('qi');
var txt = ['null']
if (document.getElementById("qi").className == '1') {
    txt = ["github网页开源地址","bilibili主页","mindustry游戏官网"]; 
}
var index=0;
var xiaBiao= 0;
var huan = true;
setInterval(function(){
    if(huan){             
        text.innerHTML = txt[xiaBiao].slice(0,++index);
    }
    else{
        text.innerHTML = txt[xiaBiao].slice(0,index--);
    }
    
    if(index==txt[xiaBiao].length+3)
    {
        huan = false;
    }
    else if(index<0)
    {   
        index = 0;
        huan = true;
        xiaBiao++;
        if(xiaBiao>=txt.length)
        {   
            xiaBiao=0; 
        }
    }

},150)