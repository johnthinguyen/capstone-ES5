function getDataProduct() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseType: 'JSON',
    });
    promise.then(function (res) {
        console.log('ket qua', res.data.content);
        renderData(res.data.content);
    });
    promise.catch(function (err) {
        console.log(err)
    });

}
function renderData(arrShoes) {
    var contentHTML = ``;
    for (var index = 0; index < arrShoes.length; index++) {
        var shoes = arrShoes[index];
        contentHTML += `
        <div class="col-4 mt-5">
        <div class="card" style="width: 18rem;">
          <img src="${shoes.image}" class="card-img-top p-3" alt="...">
          <div class="card-body">
            <h5 class="card-title">${shoes.name.length > 20 ? shoes.name.substr(0, 15) + '...' : shoes.name}</h5>
            <p>${shoes.description.length > 60 ? shoes.description.substr(0, 50) + '...' : shoes.description}</p>
          </div>
          <div class="card-footer d-flex">
            <a href="./detail.html?maSP=${shoes.id}" style=" text-decoration: none; color:black" class="btn2" >Buy now </a>
            <button class="btn3">${shoes.price} USD</button>
          </div>
        </div>
      </div>

        `
    }
    document.getElementById('showProduct').innerHTML = contentHTML;
}
getDataProduct();
