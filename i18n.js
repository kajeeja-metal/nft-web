module.exports = {
    locales: ['th','en'],
    defaultLocale: 'en',
    localeDetection: false,
    loadLocaleFrom: (lang, ns) => import(`./locales/${lang}/${ns}.json`).then((m) => m.default),
    pages: {
      '*': ['global'],
    },
    loader: false
  }