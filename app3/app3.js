const http = require("http");
const fs = require("fs");


let gettime = function () {
  let now = new Date();
  let month = now.getMonth();
  let day = now.getDay();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let seconds = now.getSeconds()
  return `${hour}:${minute}':${seconds}"`
}

http.createServer(function (request, response) {

  let heder = fs.readFileSync("header.html", "utf8",)
  let menu = fs.readFileSync("menu.html", "utf8")
  let replace = newFunction()

  if (request.url === "/index" || request.url === "/") {
    replace("Изучаем Node.js", "Главная страница")
  }

  else if (request.url === "/content") {
    replace("Node.js", "Контент страница")
  }

  else if (request.url === "/info") {
    replace("Изучение Node.js продолжается", "Инофрмационная страница")
  }

  else {
    response.writeHead(404, { 'Content-type': 'text/html; charset=utf-8' })
    response.end("<h2>Not found</h2>");
  }

  console.log(`${gettime()}: Запрошенный адрес: ${request.url}`);

  function newFunction() {
    return function (message, header) {
      fs.readFile("shablon.html", "utf8", function (_error, data) {
        //response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
        data = data.replace("{header1}", header).replace("{message}", message).replace("{header}", heder).replace("{menu}", menu);
        console.log(heder)
        console.log(`----------------------\n${menu}`) 
        response.end(data);
      });
    };
  }

}).listen(3000);