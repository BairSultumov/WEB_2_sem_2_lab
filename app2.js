const http = require("http");
const fs = require("fs");


let gettime = function () {
  let now = new Date();
  let month = now.getMonth();
  let day = now.getDay();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let seconds = now.getSeconds()
  return `${hour}:${minute}:${seconds}`
}

http.createServer(function (request, response) {
  
  if (request.url === "/index" || request.url === "/") { // маршрут 1 
    fs.readFile("index.html", "utf8", function (error, data) {
      if(error){        
        response.statusCode = 404; 
        response.end("Resourse not found!"); 
    }    
    else{ 
        response.end(data); 
    }
    })
  }

  else if (request.url === "/content") { // маршрут 2 
    fs.readFile("content.html", "utf8", function (error, data) {
      if(error){        
        response.statusCode = 404; 
        response.end("Resourse not found!"); 
    }    
    else{ 
        response.end(data); 
    }
    })
  }

  else if (request.url === "/info") { // маршрут 3 
    fs.readFile("info.html", "utf8", function (error, data) {
      if(error){        
        response.statusCode = 404; 
        response.end("Resourse not found!"); 
    }    
    else{ 
        response.end(data); 
    }
    })
  }

  else {
    response.writeHead(404, { 'Content-type': 'text/html; charset=utf-8' })
    response.end("<h2>Not found</h2>"); // маршрут не обнаружен 
  }

  console.log(`${gettime()}: Запрошенный адрес: ${request.url}`);

}).listen(3000);