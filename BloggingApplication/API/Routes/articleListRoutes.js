
module.exports = function(app) {

const articleList = require(`../Controllers/articleListController`);
app
    .route(`/articles`)
    .get(articleList.listAllArticles)
    .post(articleList.createNewArticle);

app
    .route(`articles/:articleid`)
    .get(articleList.readArticle)
    .put(articleList.updateArticle)
    .delete(articleList.deleteArticle);

}



