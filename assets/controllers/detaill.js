function getApiDetails() {

    var urlParam = new URLSearchParams(window.location.search);
    var maSP = urlParam.get('maSP');
    var promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${maSP}`,
        method: 'GET',
        ResponseType: 'JSON',

    })
    promise.then(function (result) {

        var shoesDetail = result.data.content;
        console.log(shoesDetail);
        //giay

        document.getElementById('ten-giay').innerHTML = shoesDetail.name;
        document.getElementById('hinh-anh').src = shoesDetail.image;
        document.getElementById('hinh-anh').style.height = '240px'
        document.getElementById('mo-ta').innerHTML = shoesDetail.description;
        document.getElementById('price').innerHTML = shoesDetail.price + '$';
        renderSize(shoesDetail.size);

    });
    promise.catch(function (err) {
        console.log(err);
    })

}
function renderSize(arrSize) {
    var contentHTML = ``;
    for (var index = 0; index < arrSize.length; index++) {

        contentHTML += `
                     <button class="btn4">${arrSize[index]}</button>
        `;
    }
    document.getElementById('size').innerHTML = contentHTML;

}
getApiDetails()