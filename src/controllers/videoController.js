export const trending = (req, res) => {
  return res.send("home page videos");
};

export const see = (req, res) => {
  console.log(`watch video #${req.params.id}`);
  return res.send("watch video");
};

export const edit = (req, res) => {
  return res.send("edit video");
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
