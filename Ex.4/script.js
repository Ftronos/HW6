$(function () {
    $(".item").draggable({revert: 'valid'});
    var $basket = document.getElementById('basket');

    $(".basket-area").droppable({
        activeClass: 'drop',
        drop: function (event, ui) {
            var product = ui.draggable[0].dataset;
            var item = document.createElement('div');
            item.classList.add('product');

            item.innerHTML = '<span>'+product.name+'</span><span>'+product.price+' руб.</span>';

            $basket.appendChild(item);
        }
    });
});