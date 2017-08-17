$(document).ready(function(){

  $('.search-form').on('submit', function(event){
    console.log('this is running')
    event.preventDefault();
      $.ajax({
        method: 'POST',
        url: '/',
        data: $(this).serialize()
      }).done(function(data){
        console.log(data)
        // renderList(data)

      });
  });
// <div class="card" style="width: 20rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-block">
//     <h4 class="card-title">Card title</h4>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

  function createItem(item) {
    // var $img = $("<img>", {class:"card-img-top", src:item.MediumImage[0].URL});
    // var $div = $("<div>", {class:"card", style:"width: 20rem"});
    // var $div2 = $("<div>", {class:"card-block"})
    // var $h4 = $("<h4>", {class:"card-title", text:item.ItemAttributes[0].Title});
    // var $p = $("<p>", {class:"card-text", text:item.ItemAttributes[0].ListPrice[0].FormattedPrice[0]})
    // var $a = $("<a>", {class:"btn btn-primary", src:item.ItemLinks[0].ItemLink[0].URL})
    // $div2.append($h4).append($p)
    $div.append($img).append($div2);
    return $div;
  }

  function renderList(listData) {
    $('.product-list').empty()
    var $list = $("<div>")
    listData.forEach(function(item){
      console.log(item.MediumImage[0].URL)
      var $product = createItem(item)
      $list.append($product)
    })
    $('.product-list').append($list)
  }



});