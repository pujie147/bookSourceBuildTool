console.log('这是content script!');

document.addEventListener('DOMContentLoaded', function()
{
    var temp = document.createElement('iframe');
    temp.setAttribute('id', 'yueDuOption');
    temp.setAttribute('scrolling', 'no');
    temp.setAttribute('frameborder', 0);
    temp.src = chrome.runtime.getURL("option/option.html")

    temp.onload = function()
    {
        console.log("iframe onload success!!")
        chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
            console.log(response);
        });
    };
    document.body.appendChild(temp);
})

window.addEventListener('message', function (event, a, b) {
    var responseData = event.data;
    if (!event.data) {
        return;
    }
    // 来自插件内嵌网站的消息
    if (responseData.from === 'extension-iframe') {
        // ① 判断是否自己插件的iframe
        var iframes = document.getElementsByClassName('extension-iframe');
        var extensionIframe = null;
        var correctSource = false;
        for (var i = 0; i < iframes.length; i++) {
            if (iframes[i].contentWindow && (event.source === iframes[i].contentWindow)) {
                correctSource = true;
                extensionIframe = iframes[i];
                break;
            }
        }
        if (!correctSource) {
            return;
        }
        // ② 加载表格、提交信息等请求操作
        // 该数组为iframe传来各个操作的名称，对应发来的消息的type属性
        var operators = ['loadTable', 'submit', 'getNonMarkedCount', 'getUrl'];
        // 如果跟操作匹配上了，就转发给background
        if (operators.indexOf(responseData.type) !== -1) {
            chrome.runtime.sendMessage({
                type: responseData.type,
                data: responseData.data
            },function (response) {
                // 返回请求后的数据给iframe网站
                extensionIframe.contentWindow.postMessage({
                    from: 'extension-content-script',
                    type:  responseData.type,
                    response: response
                }, '*');
            });
        }
    }
}, false);

