## [2.0.1](https://github.com/ideal-postcodes/core-browser-bundled/compare/2.0.0...2.0.1) (2021-07-21)


### Bug Fixes

* **deps-dev:** bump @ideal-postcodes/core-browser from 2.0.0 to 2.0.1 ([#491](https://github.com/ideal-postcodes/core-browser-bundled/issues/491)) ([ba96258](https://github.com/ideal-postcodes/core-browser-bundled/commit/ba96258a2b391595afa1a9db3d08b48cdf13b143))

# [2.0.0](https://github.com/ideal-postcodes/core-browser-bundled/compare/1.5.0...2.0.0) (2021-06-10)


### Features

* **V2 Update:** Core Browser V2 ([184ce11](https://github.com/ideal-postcodes/core-browser-bundled/commit/184ce11295dafb9b6c6fac5dfaa99cf9e527fef0))


### Performance Improvements

* **Size:** Track bundle size ([15f6eba](https://github.com/ideal-postcodes/core-browser-bundled/commit/15f6ebabf44a7b13fca5573990eac521c93a027a))


### BREAKING CHANGES

* **V2 Update:** - Package now exports a `defaults` object
- Client.defaults has been removed
- All client config is now stored in `client.config`
- All resources have been removed from the client. Instead retrieve
these from the library and inject the client. E.g.
`client.postcodes.retrieve` becomes `postcodes.retrieve(client, ...)`
- Helper methods (like lookupPostcode, ping) have been removed from the client.
Instead retrieve these from teh library and inject the client. E.g.
`client.lookupPostcode` becomes `lookupPostcode(client, ...)`

# [1.5.0](https://github.com/ideal-postcodes/core-browser-bundled/compare/1.4.2...1.5.0) (2021-01-04)


### Bug Fixes

* **Babel:** Upgrade + fix ([bb592b8](https://github.com/ideal-postcodes/core-browser-bundled/commit/bb592b8fa5c50373b944a8ed68cbbfe1c2a391ce))


### Features

* **ESM:** Reduce bundle size using ESM builds ([0375b12](https://github.com/ideal-postcodes/core-browser-bundled/commit/0375b12012082abf708d939c40426d8eafdabf9b))

## [1.4.2](https://github.com/ideal-postcodes/core-browser-bundled/compare/1.4.1...1.4.2) (2020-08-07)


### Bug Fixes

* **UMD:** Extend global IdealPostcodes namespace ([ed484ee](https://github.com/ideal-postcodes/core-browser-bundled/commit/ed484eea1ceab5995cd329b6f87fb8ede87875fc))

## [1.4.1](https://github.com/ideal-postcodes/core-browser-bundled/compare/1.4.0...1.4.1) (2020-04-01)


### Bug Fixes

* **Fetch:** Add fetch with plugin-inject ([fbd6788](https://github.com/ideal-postcodes/core-browser-bundled/commit/fbd67882140d28d99632e3136c0d6df7ab81992f))

# [1.4.0](https://github.com/ideal-postcodes/core-browser-bundled/compare/1.3.0...1.4.0) (2020-02-22)


### Features

* **Fetch:** Inject fetch into UMD builds ([3982fa7](https://github.com/ideal-postcodes/core-browser-bundled/commit/3982fa721169198c02a86bd881eab81c936f2b61))
* **Minification:** Swtich to terser for all bundles ([49b5250](https://github.com/ideal-postcodes/core-browser-bundled/commit/49b52506c71f68bff102dc08c12d4516373a1e23))

# [1.3.0](https://github.com/ideal-postcodes/core-browser-bundled/compare/1.2.0...1.3.0) (2020-02-07)


### Features

* **core-browser:** Upgrade to 1.2.0 ([dd8b9eb](https://github.com/ideal-postcodes/core-browser-bundled/commit/dd8b9eb9af1f0028bb5c2956e1805299d606130e))

# [1.2.0](https://github.com/ideal-postcodes/core-browser-bundled/compare/1.1.0...1.2.0) (2019-12-06)


### Features

* **Core-Browser:** Updates core-browser to 1.1.0 ([66347c2](https://github.com/ideal-postcodes/core-browser-bundled/commit/66347c28365497fdb10f4dd0ed2509651b1cdcfd))

# [1.1.0](https://github.com/ideal-postcodes/core-browser-bundled/compare/1.0.2...1.1.0) (2019-10-29)


### Features

* **ESM:** No transpile ESM bundle ([3b75f5c](https://github.com/ideal-postcodes/core-browser-bundled/commit/3b75f5c395da3d947a68f35b52325c36febc117a))

## [1.0.2](https://github.com/ideal-postcodes/core-browser-bundled/compare/1.0.1...1.0.2) (2019-10-28)


### Bug Fixes

* **Example:** Fix example ([ded52d4](https://github.com/ideal-postcodes/core-browser-bundled/commit/ded52d425eef38488333055b1112dceaf6511e70))

## [1.0.1](https://github.com/ideal-postcodes/core-browser-bundled/compare/1.0.0...1.0.1) (2019-10-22)


### Bug Fixes

* **ESM:** Minify esm bundle ([83e7d45](https://github.com/ideal-postcodes/core-browser-bundled/commit/83e7d452abe4b8d37f024904fa89234e3aad0323))

# 1.0.0 (2019-10-22)


### Features

* **Core-Browser:** 1.0.2 core-browser release ([e2e61f3](https://github.com/ideal-postcodes/core-browser-bundled/commit/e2e61f393867b3853eb2e8d1ae256c0891f82fbb))
