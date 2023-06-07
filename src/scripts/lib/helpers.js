export const registerControllers = async (stimulus) => {
  const importMap = await import.meta.glob("../controllers/*.js");

  for (let key in importMap) {
    const controllerName = key
      .split("../controllers/")[1]
      .split("-controller.js")[0];
    const { default: controllerModule } = await importMap[key]();
    stimulus.register(controllerName, controllerModule);
  }
};
