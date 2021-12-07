export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const see = (req, res) => {
  console.log(`watch video #${req.params.id}`);
  return res.render("watch", { pageTitle: "Watch" });
};

export const edit = (req, res) => {
  return res.render("edit", { pageTitle: "Edit" });
};

export const search = (req, res) => {
  return res.send("search");
};

export const deleteVideo = (req, res) => {
  return res.send("delete videos");
};

export const upload = (req, res) => {
  return res.send("upload");
};
