const article = require(`../Models/article`);

exports.listAllArticles = (req, res) => {
    article.find( {}, (err, article) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(article);
    });
};

exports.createNewArticle = (req, res) => {
    const newArticle = new article(req.body);
    newArticle.save((err, article) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(article);
    });
};

exports.readArticle = (req, res) => {
    article.findById(req.params.articleid, (err, article) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(article);
    });
};

exports.updateArticle = (req, res) => {
    article.findOneAndUpdate(
        { _id: req.params.articleid },
        req.body,
        { new: true },
        (err, article) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(article);
        }
    );
};

exports.deleteArticle = (req, res) => {
    article.remove({ _id: req.params.articleid }, (err, article) => {
        if (err) {
            res.status(404).send(err);
        }
        res.status(200).json({ message: `Article succesfully deleted`});
    });
};