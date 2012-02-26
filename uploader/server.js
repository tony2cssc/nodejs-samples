var http = require("http");
var url = require("url");

function start(router, handle) {
    http.createServer(
        function (request, response) {
            var pathname = url.parse(request.url).pathname;
            console.log("Request for " + pathname + " received.");

            router(handle, pathname);

            response.writeHead(200, {"Content-Type":"text/plain"});
            response.write("Hello World");
            response.end();
        }
    ).listen(8888);
    console.log("Server has started.");
}

exports.start = start;