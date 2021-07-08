const https = require('https');
let url = "https://rafaelsilva.net/rss.xml";

async function get_page(url) {
    return new Promise((resolve) => {
        https.get(url, res => {
            let body = "";
            res.on('data', data => { body += data }) 
            res.on('end', () => {
               resolve(body);
            });
        });
    });
}


exports.handler = async (event) => {
    const result = await get_page(url);
    
    const response = {
        statusCode: 200,
        body: result,
        headers: {
            'Content-Type': 'application/xml',
        }
    };
    return response;
};
