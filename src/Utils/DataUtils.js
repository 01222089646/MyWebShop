
let $ = require("jquery");
const STORE_ID = 7;

let obj = {
    uploadFile() {
        const data = new FormData();
        let files = $("#uploadFile")[0].files;
        data.append('uploadFile', files[0]);
        //data.append('filename', this.fileName.value);
        return $.when(
        $.ajax({
            url:"http://gunivn.com/guni/index.php/api/upload",
            data: data,
            type:"post",
            contentType:false,
            processData:false,
            cache:false,
            dataType:"json"
          })
        );
    },
    getItem(api, id) {
        let _url = "http://gunivn.com/guni/index.php"+api + "?id="+id+"&store_id=" + STORE_ID;
        return $.when(
            $.ajax({
                method: "GET",
                url: _url,
                dataType: 'json'
            })
        );
    },
    getList(api, filter) {
        let _url = "http://gunivn.com/guni/index.php"+api + "?store_id=" + STORE_ID;
        if(filter) {
            _url += ("&"+ $.param(filter));
        }
        return $.when(
            $.ajax({
                method: "GET",
                url: _url,
                dataType: 'json'
            })
        );
    },
    create(api, dataSave) {
        return $.when(
            $.ajax({
                method: "POST",
                url: "http://127.0.0.1:8000"+api + "?store_id=" + STORE_ID,
                dataType: 'json',
                data: {data: dataSave}
            })
        );
    },
    remove(api, id) {
        return $.when(
            $.ajax({
                method: "POST",
                url: "http://gunivn.com/guni/index.php" + api,
                dataType: 'json',
                data: JSON.stringify({id: id, store_id: STORE_ID})
            })
        );
    },
    save(api, dataSave) {
        dataSave['store_id'] = STORE_ID
        return $.when(
            $.ajax({
                method: "POST",
                url: "http://gunivn.com/guni/index.php" + api,
                dataType: 'json',
                data: JSON.stringify({data: dataSave})
            })
        );
    },
    getUserList() {
        return [
            {
                email: "tranngochieu1003@gmail.com",
                firstname: "Hiếu",
                lastname: "Trần",
                password: "abc"
            },
            {
                email: "tranngochieu1004@gmail.com",
                firstname: "Hiếu",
                lastname: "Trần",
                password: "abcd",
                
            },
            {
                email: "tranngochieu1005@gmail.com",
                firstname: "Hiếu",
                lastname: "Trần",
                password: "abcde"
            },
            {
                email: "tranngochieu1006@gmail.com",
                firstname: "Hiếu",
                lastname: "Trần",
                password: "abcef"
            },
            {
                email: "etc@gmail.com",
                firstname: "Example",
                lastname: "",
                password: "abc"
            }
        ];
    },

    checkUser(username, password) {
        let userList = this.getUserList();
        let userInfo = null;
        for(let index in userList) {
            if(userList[index].email == username && userList[index].password == password) {
                userInfo = {
                    email: userList[index].email,
                    name: (userList[index].firstname + " " + userList[index].lastname)
                };
                break; 
            }
        }

        return userInfo;
    },
    getUserInfo() {
        let userInfo = window.localStorage.getItem("session");
        if(userInfo != null) {
            userInfo = JSON.parse(userInfo);
        }

        return userInfo;
    
    },
    getProductList(type) {
        let data =  [
            {
                id: 1,
                name: " Trái Táo",
                img: "images/products/tao 1.jpg",
                price: 100000,
                
                
                catalogid: 1,
                
            },
            {
                id: 2,
                name: "Trái Thơm",
                img: "images/products/thom 1.jpg",
                price: 100000,
               
               
                catalogid: 2,
                
            },
            {
                id: 3,
                name: "Trái Xoài",
                img: "images/products/xoai-1g.jpg",
                price: 100000,
               
               
               
                catalogid: 3,
                
            },
            {
                id: 4,
                name: "Trái Cóc",
                img: "images/products/coc 1.jpg",
               
                price: 100000,
                catalogid: 4,
               
            },
            {
                id: 5,
                name: "Trái Ổi",
                img: "images/products/oi 1.jpg",
                price: 100000,
               
                catalogid: 5,
               
            },
            {
                id: 6,
                name: "Trái Mít ",
                img: "images/products/mit 1.jpg",
                price: 100000,
               
                catalogid: 6,
               
            }
        ];

        if(type) {
            let tmp = [];
            for(let index in data) {
                if(data[index].catalogid == type) {
                    tmp.push(data[index]);
                } 
            }
            data = tmp;
        }

        return data;
    },
    getProduct(id) {
        let productList = this.getProductList();
        let product = null;
        for(let i in productList) {
            if(productList[i].id == id) {
                product = productList[i];
                break;
            }
        }
        return product;
    }
};

module.exports = obj;