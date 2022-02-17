const http = require("http");
const fs = require("fs");

function readFile() {
    let file = fs.readFile("data.txt", "utf-8", function (err, data) { })
    return file;
}

http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/home" || request.url === "/") { // маршрут 1 
        response.end("<h2>Home</h2>");
    }
    else if (request.url == "/data") { // маршрут 2 
        const filePath = "data.txt"; // получаем путь после слеша 

        fs.readFile(filePath, function (error, data) {
            if (error) {
                response.statusCode = 404;
                response.end("Resourse not found!");
            }
            else {
                response.end(data);
            }
        });
    }
    else if (request.url == "/contact") { // маршрут 3 
        response.end("<h2>Contacts</h2>");
    }

    else {
        response.end("<h2>Not found</h2>"); // маршрут не обнаружен 
    }

    console.log(`Запрошенный адрес: ${request.url}`);
    
}).listen(3000, function () {
    console.log("Server started at 3000");
}); 