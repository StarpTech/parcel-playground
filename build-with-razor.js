const Bundler = require('parcel-bundler');

let bundler = new Bundler('index.cshtml');
bundler.addAssetType('.cshtml', require.resolve('./parcel-plugin-razor'));
bundler.bundle();