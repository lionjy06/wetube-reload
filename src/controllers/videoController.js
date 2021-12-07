export const trending = (req, res) => {
  const videos = [
    {
      title: "#1",
      rating: 5,
      comment: 2,
      createdAt: "2mins ago",
      views: 59,
      id: 1,
    },
    {
      title: "#2",
      rating: 5,
      comment: 2,
      createdAt: "2mins ago",
      views: 59,
      id: 1,
    },
    {
      title: "#3",
      rating: 5,
      comment: 2,
      createdAt: "2mins ago",
      views: 59,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
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
