$('.content').on('mouseenter', 'a', function(){
  $(this).addClass('active')
  $(this).parent().siblings().find('a').removeClass('active')
})

$('.content').on('mouseleave', 'a', function(){
  $(this).removeClass('active')
})





function ajax(url, query){
  $.ajax({
    url: url,
    method: 'GET',
    data: query
  }).done(addContent(res)).fail()
}



function addContent(res){
  var html =''
  $.each(res, function(){
    html += '<li><a href="#">' + res.data + '</a></li>'
  })
}