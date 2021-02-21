
function on(req, res, next) {

    console.log("++++ api ++++ {get} /service/settings called");
    var renderData = {noncevalue: global.__nonce__};

    // render & return to client
    res.render('./service/settings', renderData, function(err, html) {
        if(err) {
            console.log(err);
            res.status(err.status).end();
        }else {
            res.set('Content-Type', 'text/html');
            res.send(html);
        }
    });
}

module.exports.on= on;