function INDEX(info){
    var self = this;


    self.init = init;

    // 获取导航栏
    var navBars = $("#nav .container .navContainer li");

    // 获取内容区域主体
    var mainBody = $("#main .container");

    



    /*-------------- 页面行为 -------------------*/ 
    function initEvent() {

        // 引用公共函数苦衷的判断客户端访问机的函数
        if( UTIL.os().isPc ){
            console.log("========= 进入PC机 =============");
            // 导航栏单击事件
            navBars.on("click",function(){
                console.log( $(this) );
                
                if( $(this).attr("data-type") === "index" ){// 点击首页
                    console.log("进入首页");  
                    
                    // 2、发送相关接口的ajax
                    UTIL.indexPageInfo(function(info){
                        if( info != "null" ){
                            // 1、清空原显示区域DOM
                            mainBody.empty(); 
                            // 2、重组DOM
                            var cards = "";
                            $(info).each(function(i){
                                cards += `
                                    <div class='card'>
                                        <a href="${this.href}">
                                            <p class='pageTitle'>${this.title}</p>
                                            <p class='pageAbout'>
                                                <span class='pageAnthor'>${this.author}</span>
                                                <span class='pageIsOriginal'>${CONST.isOriginal[this.isOriginal]}</span>
                                                <span class='pageTime'>${this.time}</span>
                                            </p>
                                            <p class='pageInfo'>
                                                ${this.abbreviation}
                                            </p>
                                        </a>
                                    </div>`;
                            });

                            // 3、将构建的DOM加载进入到显示区域
                            mainBody.append(cards); 

                        }else{
                            alert("请求出错，请稍后再试！")
                        }
                    });


                }else if( $(this).attr("data-type") === "original" ){// 原创分享
                    console.log("进入原创分享页面");

                    // 2、发送相关接口的ajax
                    UTIL.originalPageInfo(function(info){
                        if( info != "null" ){
                            // 1、清空原显示区域DOM
                            mainBody.empty(); 

                            // 2、重组DOM
                            var cards = "";
                            $(info).each(function(i){
                                cards += `
                                    <div class='card'>
                                        <a href="${this.href}">
                                            <p class='pageTitle'>${this.title}</p>
                                            <p class='pageAbout'>
                                                <span class='pageAnthor'>${this.author}</span>
                                                <span class='pageIsOriginal'>${CONST.isOriginal[this.isOriginal]}</span>
                                                <span class='pageTime'>${this.time}</span>
                                            </p>
                                            <p class='pageInfo'>
                                                ${this.abbreviation}
                                            </p>
                                        </a>
                                    </div>`;
                            });

                            // 3、将构建的DOM加载进入到显示区域
                            mainBody.append(cards);     
                        }else{
                            alert("请求出错，请稍后再试！")
                        }
                    });

                }else if( $(this).attr("data-type") === "reprint" ){// 转载留稿
                    console.log("进入转载留稿页面");
                    UTIL.reprintPageInfo(function(info){
                        if( info != "null" ){
                            // 1、清空原显示区域DOM
                            mainBody.empty(); 

                            // 2、重组DOM
                            var cards = "";
                            $(info).each(function(i){
                                console.log(info);
                                cards += `
                                    <div class='card'>
                                        <a href="${this.href}">
                                            <p class='pageTitle'>${this.title}</p>
                                            <p class='pageAbout'>
                                                <span class='pageIsOriginal'>${CONST.isOriginal[this.isOriginal]}</span>
                                                <span class='pageTime'>${this.time}</span>
                                            </p>
                                            <p class='pageHref'>
                                                地址链接：${this.href}
                                            </p>
                                        </a>
                                    </div>`;
                            });
                            console.log( cards  );
                            // 3、将构建的DOM加载进入到显示区域
                            mainBody.append(cards); 

                        }else{
                            alert("请求出错，请稍后再试！")   
                        }
                    });


                }else if( $(this).attr("data-type") === "comment" ){// 评论留言
                    console.log("进入评论留言页面");

                }
            });

        }else{
            console.log("========= 进入移动机 ===========");
        }


    }

    /*-------------- 加载页面结构 -------------------*/ 
    function initDom() {
        //  1、构建DOM
        var cards = "";
        $(info).each(function(i){
            cards += `
                <div class='card'>
                    <a href="${this.href}">
                        <p class='pageTitle'>${this.title}</p>
                        <p class='pageAbout'>
                            <span class='pageAnthor'>${this.author}</span>
                            <span class='pageIsOriginal'>${CONST.isOriginal[this.isOriginal]}</span>
                            <span class='pageTime'>${this.time}</span>
                        </p>
                        <p class='pageInfo'>
                            ${this.abbreviation}
                        </p>
                    </a>
                </div>`;
        });
        // 2、清空原显示区域DOM
        mainBody.empty();

        // 3、将构建的DOM加载进入到显示区域
        mainBody.append(cards);

    }

    /*-------------- 设置函数执行顺序 --------------------*/
    function init() {
        initDom();
        initEvent();
    }
}

$(function () {
    UTIL.indexPageInfo(function(info){
        new INDEX(info).init();
    });
});
