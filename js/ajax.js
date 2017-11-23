var pageIndex = 3
var len = 6
$('.content').on('mouseenter', 'a', function(){
  $(this).addClass('active')
  $(this).parent().siblings().find('a').removeClass('active')
})

$('.content').on('mouseleave', 'a', function(){
  $(this).removeClass('active')
})


$('.loadMore').on('click', function(){
  ajax('/loadMore', {idx: pageIndex, len: len})
})


function ajax(url, query){
  $.ajax({
    url: url,
    method: 'GET',
    data: query
  }).done(function(res){
    res = JSON.parse(res)
    console.log(res.status)
    if(res.status === 0){
      pageIndex += len
      addContent(res.data)
    }else{
      alert('error')
    }
  }).fail()
}



function addContent(res){
  var html =''
  $.each(res, function(){
    html += '<li><a href="#">' + this + '</a></li>'
  })
  $(".content").append(html)
}