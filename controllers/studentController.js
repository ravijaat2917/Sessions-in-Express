class studentController {
  static get_session_info = (req, res) => {
    console.log(req.session);
    // console.log(req.session.name);
    console.log("Session ID : " + req.session.id);
    // console.log(req.session.cookie);
    // console.log(req.session.cookie.maxAge);
    // console.log(req.session.cookie.originalMaxAge);
    // console.log(req.sessionID);
    res.send("Session Info...");
  };

  static delete_session = (req, res) => {
    req.session.destroy(function (err) {
      res.redirect(utils.url_for("/"));
    });
  };

  static regnerate_session = (req, res) => {
    req.session.regenerate(()=>{
        console.log(`Session regenerated... New Session ID ${req.session.id}`);
    });
    res.send(`Session Regenerated...`);
  };

  static session_example = (req, res) => {
    if (req.session.count) {
      req.session.count++;
    } else {
      req.session.count = 1;
    }
    res.send(`Count : ${req.session.count}`);
  };
}

export default studentController;
