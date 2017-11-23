var http = require('http')
var url = require('url')
var path = require('path')
var fs = require('fs')


http.createServer(function(req,res){
	var pathObj = url.parse(req.url, true)
	switch (pathObj.pathname){
    	case '/loadMore':
    		var content =[]
      		var idx = pathObj.query.idx
      		var len = pathObj.query.len
      		for (var i=0; i<len; i++){
      			content.push('内容' + (parseInt(idx) + i))
      		}

      		res.end(JSON.stringify({
      			status: 0,
      			data: content
      		}))
      		break

    	default:
    	
      		fs.readFile(path.join(__dirname, pathObj.pathname), function(err, data){
       	 		if(err){
          			res.statusCode = 404
          			res.end('Not found')
       		 	}else{
         			 res.end(data)
        		}

      		})
  }
}).listen(9000)
	