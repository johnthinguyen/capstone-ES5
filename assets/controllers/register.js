document.getElementById('btnSubmit').onclick = function () {

    function reGister() {
        var promise = axios({
            URL: 'https://shop.cyberlearn.vn/api/Users/signup',
            Method: 'POST',
            ResponseType: 'JSON',
            Data: {
                "email": 'string',
                "password": "string",
                "name": "string",
                "gender": 'true',
                "phone": "string"
            }
        });
        promise.then(function (res) {
            console.log(res.content.data)
        })
    
    
    }
}