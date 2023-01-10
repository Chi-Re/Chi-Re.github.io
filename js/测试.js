document.getElementById("btn").onclick = function() {
    let name

    console.log(document.getElementById("名字").value)
    console.log(document.getElementById("作者").value)

    if (document.getElementById("名字").value == "") {
        name = "null";
        console.log(name)
    } else {
        name = document.getElementById("名字").value;
    }
    
    if (document.getElementById("作者").value == "") {
        author = "Node";
    } else {
        author = document.getElementById("作者").value;
    }

    if (document.getElementById("模组版本").value == "") {
        version = 114514;
    } else {
        version = document.getElementById("模组版本").value;
    }

    if (document.getElementById("游戏版本").value == "") {
        minGameVersion = 136;
    } else {
        minGameVersion = document.getElementById("游戏版本").value;
    }

    mod = '{\n' +
     '"name": "' + name +
      '", \n"displayName":"' + name +
      '", \n"author":"' + author +
      '", \n"version":' + version +
      ', \n"description":"' + document.getElementById("简介").value +
      '", \n"minGameVersion":' + minGameVersion +
       '\n}';
    ExportTxt("mod", mod)
}


function ExportTxt(name, data) {
    console.log(name)
    const urlObject = window.URL || window.webkitURL || window;
    const export_blob = new Blob([data]);

    const save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name + ".json";

    const ev = document.createEvent("MouseEvents");
    ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    save_link.dispatchEvent(ev);
}


