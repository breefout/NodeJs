const rp = require("request-promise");

rp("https://reddit.com/r/popular.json")
    .then(res => JSON.parse(res))
    .then(data => {
        let articleArr = [];
        data.data.children.forEach(article => {
            let object = {
                title: article.data.title,
                url: article.data.url,
                auhtor: article.dtata.author
            }
            articleArr.push(obj);
        });
        fs.writeFile("./popular-article.json",JSON.stringify(articleArr), (err) => {
            if(err) throw err;
        })
    })
    .catch(err => console.log(err));