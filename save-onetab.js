// Save
let save = (url_value)=>{
    (async(url_value)=>{
        await Mt.W(url_value);
        await Mt.H();
    }
    )(url_value)
};

save("https://github.com/markdoc/markdoc | markdoc/markdoc: A powerful, flexible, Markdown-based authoring framework.\nhttps://buddy.works/ | Buddy: The DevOps Automation Platform\nhttps://baidu.com | 百度\n");

// Clear
function confirm() { return true; } // 覆盖 confirm 方法，一直返回确认
document.querySelectorAll('.clickable.deleteAllButton').forEach(function(ele, index, list){ele.click();});
