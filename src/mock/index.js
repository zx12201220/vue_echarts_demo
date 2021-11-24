import Mock from "mockjs";

//設置模擬返還時間
Mock.setup({
  timeout: "200-600",
});

Mock.mock("/charts/data", "get", () => {
  return [150, 230, 224, 218, 135, 800, 260];
});

Mock.mock(/\/account.*/, "get", () => {
  return {
    info: "登入成功",
  };
});
