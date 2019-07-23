const handleUserRouter = (req, res) => {
  const method = req.method;
  //获取path
  const url = req.url;
  const path = url.split("?")[0];
  // 登录
  if (method === "POST" && path === "/api/blog/login") {
    return {
      msg: "登录"
    };
  }
};

module.exports = handleUserRouter;
