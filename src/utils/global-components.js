export function initGlobalComponents(app) {
  const modules = import.meta.glob("@/components/**/*.vue");
  Object.entries(modules).forEach(async ([path, module]) => {
    const name = path.slice(path.lastIndexOf("/") + 1, path.length - 4);
    console.log(name, module, "测试");
    const result = await module();
    console.log(result, "测试");
    app.component(name, result.default);
  });
}
