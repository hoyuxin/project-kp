const context = (require as any).context('./', false, /\.ts$/);
const modules: any = {};
context.keys().filter((item: string) => item !== './index.ts').map(
  (path: string) => {
    const Model: any = context(path).default;
    modules[path.substring(2, path.length - 3)] = Model;
  });

export default { ...modules };
