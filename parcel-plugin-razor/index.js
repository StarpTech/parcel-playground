const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');

class RazorAsset extends HTMLAsset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'cshtml';
    this.isAstDirty = false;
  }
}

module.exports = RazorAsset;