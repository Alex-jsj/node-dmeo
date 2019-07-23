const serverHandle = (req, res) => {
  // 设置返回格式
  res.setHeader("Content-type", "application/json");

  // 404
  res.writeHead(404, { "Content-type": "text/plain" });
  res.write("404 Not Found!");
  res.end();
};

module.exports = serverHandle;
