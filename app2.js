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
  const filePath = request.url.substr(1); // получаем путь после слеша 
  if (request.url == "/")
    fs.readFile("index.html", function (error, data) { response.end(data); });
  else
    fs.readFile(filePath, function (error, data) {
      if (error) {
        response.statusCode = 404;
        response.end("Resourse not found!");
      }
      else {
        response.end(data);
      }
      // if (request.url = "/")
      //   fs.readFile("index.html", function (error, data) { response.end(data); });
    });
  console.log(`${gettime()}: Запрошенный адрес: ${request.url}`);
}).listen(3000, function () {
  console.log("Server started at 3000");
})