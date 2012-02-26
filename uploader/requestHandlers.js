/**
 * User: JIGU
 * Date: 2/26/12
 * Time: 11:18 PM
 * This module, requestHanlers, is used to handle all the requsts passed by router object.
 */

function start() {
    console.log("Request handler 'start' was called.");
}

function upload() {
    console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;
