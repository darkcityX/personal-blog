/*
 * 公共函数库
*/
function Util() {
    /**
     * 统一封装判断客户端为移动端还是PC端
     */  
    this.os = function(){
        var ua = navigator.userAgent;
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.text(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
        return {
            isTablet : isTablet,
            isPhone  : isPhone,
            isAndroid: isAndroid,
            isPc     : isPc
        };
    }


    /**
     * 统一封装的ajax发送方法
     * @param url 请求的URL
     * @param data 请求参数
     * @param callback 请成功后的回调方法
     */
    function sendAjax(url , data , callback){
        $.ajax({
            type : "post",
            url  : url,
            data: data,
            dataType: "json",
            success: function(result){
                if( result.state === "ok" ){
                    callback(result.info);
                }else{
                    // 统一实现错误提示
                }
            },
            error: function(){
                console.log("发送请求出错");
            }
        });
    }

    /**
     * 请求首页展示数据
     * 目前为模拟数据
     * @param callback 请求成功后的回调方法
     */
    this.indexPageInfo = function(callback){
        console.log("调用index接口");
        // 调用测试数据
        callback( TESTDATA.indexPageData().info );
    }

    /**
     * 请求原创展示数据
     * 目前为模拟数据
     * @param callback 请求成功后的回调方法
     */
    this.originalPageInfo = function(callback){
        console.log("调用原创分享接口");
        // 调用测试数据
        callback( TESTDATA.originalPageData().info );
    }
    
    /**
     * 请求转载存稿数据
     * 目前为模拟数据
     * @param callback 请求成功后的回调方法
     */
    this.reprintPageInfo = function(callback){
        console.log("调用转载存稿接口");
        // 调用测试数据
        callback( TESTDATA.reprintPageData().info );
    }
}

var UTIL = new Util();