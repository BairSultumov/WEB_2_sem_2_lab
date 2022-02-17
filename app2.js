const http = require("http");
const fs = require("fs");


let gettime = function(){
  let now=new Date();
  let month=now.getMonth();
  let day = now.getDay();
  let hour=now.getHours();
  let minute=now.getMinutes();
  let seconds=now.getSeconds()
  return `${hour}:${minute}':${seconds}"`
}

http.createServer(function (request, response) {
  if (request.url === "/index" || request.url === "/") { // маршрут 1 
    fs.readFile("index.html", "utf8", function (error, data) {
      let message = "Изучаем Node.js";
      let header = "Главная страница";
      let connect1 = "Контент"
      let connect2 = "О нас"
      data = data.replace("{header}", header).replace("{message}", message)
      .replace("{connect1}", connect1).replace("{connect2}", connect2);
      response.end(data);
    })
  }

  else if (request.url === "/content") { // маршрут 2 
    fs.readFile("content.html", "utf8", function (error, data) {
      let message = "Изучение Node.js идет полным ходом";
      let header = "Контент страница";
      let connect1 = "Главная страница"
      let connect2 = "О нас"
      data = data.replace("{header}", header).replace("{message}", message)
      .replace("{connect1}", connect1).replace("{connect2}", connect2);

      response.end(data);
    })
  }

  else if (request.url === "/info") { // маршрут 3 
    fs.readFile("info.html", "utf8", function (error, data) {
      let message = "Изучение Node.js продолжается";
      let header = "Инофрмационная страница";
      let connect1 = "Главная страница"
      let connect2 = "Content"
      data = data.replace("{header}", header).replace("{message}", message)
      .replace("{connect1}", connect1).replace("{connect2}", connect2);

      response.end(data);
    })
  }

  else {
    response.writeHead(404,{'Content-type':'text/html; charset=utf-8'})
    response.end("<h2>Not found</h2>"); // маршрут не обнаружен 
  }

  console.log(`${gettime()}: Запрошенный адрес: ${request.url}`);

}).listen(3000);