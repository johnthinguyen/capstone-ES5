document.getElementById('btnSubmit').onclick = function () {
    var login = new DangNhap();
    login.email = document.querySelector('#email').value;
    login.phone = document.querySelector('#phone').value;
    login.password = document.querySelector('#password').value;
    login.name = document.querySelector('#name').value;
    login.gender = document.querySelector('#gender').checked;

    console.log(login)
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        ResponseType: 'JSON',
        data: login,
    })
    promise.then(function (res) {
        console.log(res.data);
        alert(res.data.message);
        // renderTableAccount(login)
    })
    promise.catch(function (err) {
        console.log(err.response?.data);
        alert(err.response?.data.message)
    })


}
// function renderTableAccount(arrTK) {
//     var contentTable = ``;
//     contentTable += `
//         <tr>
//         <td>${arrTK.name}</td>
//         <td>${arrTK.phone}</td>
//         <td>${arrTK.gender}</td>
//         </tr>
//         `
//     document.querySelector('#add').innerHTML = contentTable;
// }
