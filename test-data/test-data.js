/*
  * 数据模拟文件
  * 通过this打点访问
*/
function TestData() {
    // eg:
    this.data = function () {
        var result = {
            state: "ok",
            message: "",
            info: {
                name: "张三",
                phone: "13830376566",
                uuid: "001"
            }
        };
        return result;
    }

    // 首页数据模拟
    this.indexPageData = function () {
        var result = {
            state: "ok",
            message: "请求成功！",
            info: [
                {
                    pid : 001,
                    title: "xxxxxxxxxxxxxxxxx",
                    author: "xiangzi",
                    isOriginal: 0, /* 0 转载  1 原创 */
                    time: "2018-8-28",
                    abbreviation: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                    href: "#"
                },
                {
                    pid : 002,
                    title: "xxxxxxxxxxxxxxxxx",
                    author: "wanger",
                    isOriginal: 1, /* 0 转载  1 原创 */
                    time: "2018-8-28",
                    abbreviation: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                    href: "#"
                },
                {
                    pid : 003,
                    title: "xxxxxxxxxxxxxxxxx",
                    author: "三单",
                    isOriginal: 0, /* 0 转载  1 原创 */
                    time: "2018-8-28",
                    abbreviation: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                    href: "#"
                },
                {
                    pid : 004,
                    title: "xxxxxxxxxxxxxxxxx",
                    author: "哈哈",
                    isOriginal: 1, /* 0 转载  1 原创 */
                    time: "2018-8-28",
                    abbreviation: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                    href: "#"
                }
            ]
        }
        return result;
    };

    // 原创分享页面数据模拟
    this.originalPageData = function () {
        var result = {
            state: "ok",
            message: "请求成功！",
            info: [
                {
                    oid : 001,
                    title: "xxxxxxxxxxxxxxxxx",
                    author: "xiangzi",
                    isOriginal: 1, /* 0 转载  1 原创 */
                    time: "2018-8-28",
                    abbreviation: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                    href: "#"
                },
                {
                    oid : 002,
                    title: "xxxxxxxxxxxxxxxxx",
                    author: "wanger",
                    isOriginal: 1, /* 0 转载  1 原创 */
                    time: "2018-8-28",
                    abbreviation: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                    href: "#"
                },
                {
                    oid : 003,
                    title: "xxxxxxxxxxxxxxxxx",
                    author: "三单",
                    isOriginal: 1, /* 0 转载  1 原创 */
                    time: "2018-8-28",
                    abbreviation: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                    href: "#"
                },
                {
                    oid : 004,
                    title: "xxxxxxxxxxxxxxxxx",
                    author: "哈哈",
                    isOriginal: 1, /* 0 转载  1 原创 */
                    time: "2018-8-28",
                    abbreviation: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                    href: "#"
                }
            ]
        }   
        return result; 
    }

    // 转载留稿页面数据模拟
    this.reprintPageData = function () {
        var result = {
            state: "ok",
            message: "请求成功",
            info: [
                {
                    rid: "001",
                    title: "xxxxxxxxxxxxxxxx",
                    time: "2018-8-29",
                    isOriginal: 0,
                    href: "#"
                },
                {
                    rid: "002",
                    title: "xxxxxxxxxxxxxxxx",
                    time: "2018-8-29",
                    isOriginal: 0,
                    href: "#"
                },
                {
                    rid: "003",
                    title: "xxxxxxxxxxxxxxxx",
                    time: "2018-8-29",
                    isOriginal: 0,
                    href: "#"
                },
                {
                    rid: "004",
                    title: "xxxxxxxxxxxxxxxx",
                    time: "2018-8-29",
                    isOriginal: 0,
                    href: "#"
                },
            ]
        }
        return result;
    }

};
var TESTDATA = new TestData();