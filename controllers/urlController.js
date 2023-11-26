exports.home = (req, res) => {
      res.render('index');
    }

exports.agregarUrl = (req, res) => {
      console.log(req.body.urloriginal);}