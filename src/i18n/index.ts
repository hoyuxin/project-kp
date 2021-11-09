const context = (require as any).context('./', true, /\.ts$/);
const modules: any = {};
context.keys().filter((item: string) => /\w\/index\.ts$/.test(item)).map(
  (path: string) => {
    const Model: any = context(path).default;
    modules[path.substring(2, path.length - 9)] = Model;
  });

export default { ...modules };
