
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/danny/go/src/github.com/nydan/Nydan.github.io/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/danny/go/src/github.com/nydan/Nydan.github.io/src/pages/index.js"))
}

