export const importPageModules = () => {
  const pageModules = Object.values(
    import.meta.glob("./schemas/modules/*.js", { eager: true })
  ).map((m) => m.default);

  return pageModules;
};

export const getPageModuleNamesAsTypes = () => {
  const regex = /\/module([A-Z][a-z]+)+(?=\.js$)/; // regex matches and gets the moduleCameCaase part of a file
  const pageModuleTypes = Object.keys(
    import.meta.glob("./schemas/modules/*.js", { eager: true })
  )
    .map((path) => path.match(regex)[0].replace(/^.*[\\\/]/, ""))
    .map((type) => ({ type }));

  return pageModuleTypes;
};
