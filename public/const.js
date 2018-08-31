/*
 * 公共js数据处理函数库
*/
function Const() {
    // eg:
    this.ticketName = {
        "成人票": "碑林博物馆全价门票"
    };

    // 原创，转载数据处理
    this.isOriginal = {
        "0" : "转载",
        "1" : "原创",
        "转载" : "0",
        "原创" : "1"
    }
};

var CONST = new Const();