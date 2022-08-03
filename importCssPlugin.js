const { extname } = require("path");

module.exports = () => {
  return {
    visitor: {
      ImportDeclaration(path) {
        const { specifiers, source } = path.node;
        const { value } = source;
        const CSS_FILE_EXTENSIONS = [".css", ".less"];
        if (
          specifiers.length > 0 &&
          CSS_FILE_EXTENSIONS.includes(extname(value))
        ) {
          source.value = `${value}?css_modules`;
        }
      },
    },
  }
}
