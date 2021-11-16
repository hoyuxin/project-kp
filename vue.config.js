module.exports = {
  outputDir: 'public',
  publicPath: process.env.NODE_ENV === 'production' ? '/project-kp/' : '/',
  pluginOptions: {
    i18n: {
      locale: 'zh-tw',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true,
    },
  },
};
