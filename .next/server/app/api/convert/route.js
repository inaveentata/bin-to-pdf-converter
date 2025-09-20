/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/convert/route";
exports.ids = ["app/api/convert/route"];
exports.modules = {

/***/ "jspdf":
/*!************************!*\
  !*** external "jspdf" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("jspdf");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fconvert%2Froute&page=%2Fapi%2Fconvert%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconvert%2Froute.ts&appDir=%2Fhome%2Fkofuku%2FPersonal%2Fbin-to-pdf-converter%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fkofuku%2FPersonal%2Fbin-to-pdf-converter&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fconvert%2Froute&page=%2Fapi%2Fconvert%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconvert%2Froute.ts&appDir=%2Fhome%2Fkofuku%2FPersonal%2Fbin-to-pdf-converter%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fkofuku%2FPersonal%2Fbin-to-pdf-converter&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_kofuku_Personal_bin_to_pdf_converter_src_app_api_convert_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/convert/route.ts */ \"(rsc)/./src/app/api/convert/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/convert/route\",\n        pathname: \"/api/convert\",\n        filename: \"route\",\n        bundlePath: \"app/api/convert/route\"\n    },\n    resolvedPagePath: \"/home/kofuku/Personal/bin-to-pdf-converter/src/app/api/convert/route.ts\",\n    nextConfigOutput,\n    userland: _home_kofuku_Personal_bin_to_pdf_converter_src_app_api_convert_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb252ZXJ0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb252ZXJ0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udmVydCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGa29mdWt1JTJGUGVyc29uYWwlMkZiaW4tdG8tcGRmLWNvbnZlcnRlciUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRmtvZnVrdSUyRlBlcnNvbmFsJTJGYmluLXRvLXBkZi1jb252ZXJ0ZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3VCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9rb2Z1a3UvUGVyc29uYWwvYmluLXRvLXBkZi1jb252ZXJ0ZXIvc3JjL2FwcC9hcGkvY29udmVydC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY29udmVydC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NvbnZlcnRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NvbnZlcnQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9rb2Z1a3UvUGVyc29uYWwvYmluLXRvLXBkZi1jb252ZXJ0ZXIvc3JjL2FwcC9hcGkvY29udmVydC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fconvert%2Froute&page=%2Fapi%2Fconvert%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconvert%2Froute.ts&appDir=%2Fhome%2Fkofuku%2FPersonal%2Fbin-to-pdf-converter%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fkofuku%2FPersonal%2Fbin-to-pdf-converter&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/convert/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/convert/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ \"jspdf\");\n/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Supported encodings (order matters, first successful one will be used)\nconst ENCODINGS = [\n    'utf-8',\n    'iso-8859-1',\n    'cp1252',\n    'ascii'\n];\nfunction readTextFile(buffer) {\n    for (const encoding of ENCODINGS){\n        try {\n            return buffer.toString(encoding);\n        } catch  {\n            continue;\n        }\n    }\n    // Fallback: replace undecodable bytes\n    return buffer.toString('utf8').replace(/\\uFFFD/g, '');\n}\nfunction cleanText(text) {\n    // Remove ANSI escape sequences\n    text = text.replace(/\\x1B[@-_][0-?]*[ -/]*[@-~]/g, '');\n    // Remove other non-printable chars (except \\n, \\t, \\r)\n    text = text.replace(/[^\\x20-\\x7E\\n\\t\\r]+/g, '');\n    return text.trim();\n}\nfunction convertToPdf(text) {\n    const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__.jsPDF();\n    pdf.setFont('courier');\n    pdf.setFontSize(8);\n    const lines = text.split('\\n');\n    let y = 20;\n    const pageHeight = 280;\n    const lineHeight = 5;\n    for (const line of lines){\n        if (y > pageHeight) {\n            pdf.addPage();\n            y = 20;\n        }\n        const processedLine = line.length > 80 ? line.substring(0, 77) + '...' : line;\n        pdf.text(processedLine, 10, y);\n        y += lineHeight;\n    }\n    return Buffer.from(pdf.output('arraybuffer'));\n}\nasync function POST(request) {\n    try {\n        const formData = await request.formData();\n        const file = formData.get('file');\n        if (!file) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'No file uploaded'\n            }, {\n                status: 400\n            });\n        }\n        const arrayBuffer = await file.arrayBuffer();\n        const buffer = Buffer.from(arrayBuffer);\n        const text = readTextFile(buffer);\n        const cleaned = cleanText(text);\n        const pdfBuffer = convertToPdf(cleaned);\n        const baseName = file.name.replace(/\\.[^.]+$/, '');\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(pdfBuffer, {\n            headers: {\n                'Content-Type': 'application/pdf',\n                'Content-Disposition': `attachment; filename=\"${baseName}.pdf\"`,\n                'Access-Control-Allow-Origin': '*'\n            }\n        });\n    } catch (error) {\n        console.error('Conversion error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Conversion failed'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb252ZXJ0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUQ7QUFDMUI7QUFFN0IseUVBQXlFO0FBQ3pFLE1BQU1FLFlBQVk7SUFBQztJQUFTO0lBQWM7SUFBVTtDQUFRO0FBRTVELFNBQVNDLGFBQWFDLE1BQWM7SUFDbEMsS0FBSyxNQUFNQyxZQUFZSCxVQUFXO1FBQ2hDLElBQUk7WUFDRixPQUFPRSxPQUFPRSxRQUFRLENBQUNEO1FBQ3pCLEVBQUUsT0FBTTtZQUNOO1FBQ0Y7SUFDRjtJQUNBLHNDQUFzQztJQUN0QyxPQUFPRCxPQUFPRSxRQUFRLENBQUMsUUFBUUMsT0FBTyxDQUFDLFdBQVc7QUFDcEQ7QUFFQSxTQUFTQyxVQUFVQyxJQUFZO0lBQzdCLCtCQUErQjtJQUMvQkEsT0FBT0EsS0FBS0YsT0FBTyxDQUFDLCtCQUErQjtJQUNuRCx1REFBdUQ7SUFDdkRFLE9BQU9BLEtBQUtGLE9BQU8sQ0FBQyx3QkFBd0I7SUFDNUMsT0FBT0UsS0FBS0MsSUFBSTtBQUNsQjtBQUVBLFNBQVNDLGFBQWFGLElBQVk7SUFDaEMsTUFBTUcsTUFBTSxJQUFJWCx3Q0FBS0E7SUFDckJXLElBQUlDLE9BQU8sQ0FBQztJQUNaRCxJQUFJRSxXQUFXLENBQUM7SUFFaEIsTUFBTUMsUUFBUU4sS0FBS08sS0FBSyxDQUFDO0lBQ3pCLElBQUlDLElBQUk7SUFDUixNQUFNQyxhQUFhO0lBQ25CLE1BQU1DLGFBQWE7SUFFbkIsS0FBSyxNQUFNQyxRQUFRTCxNQUFPO1FBQ3hCLElBQUlFLElBQUlDLFlBQVk7WUFDbEJOLElBQUlTLE9BQU87WUFDWEosSUFBSTtRQUNOO1FBRUEsTUFBTUssZ0JBQWdCRixLQUFLRyxNQUFNLEdBQUcsS0FBS0gsS0FBS0ksU0FBUyxDQUFDLEdBQUcsTUFBTSxRQUFRSjtRQUN6RVIsSUFBSUgsSUFBSSxDQUFDYSxlQUFlLElBQUlMO1FBQzVCQSxLQUFLRTtJQUNQO0lBRUEsT0FBT00sT0FBT0MsSUFBSSxDQUFDZCxJQUFJZSxNQUFNLENBQUM7QUFDaEM7QUFFTyxlQUFlQyxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNRCxRQUFRQyxRQUFRO1FBQ3ZDLE1BQU1DLE9BQU9ELFNBQVNFLEdBQUcsQ0FBQztRQUUxQixJQUFJLENBQUNELE1BQU07WUFDVCxPQUFPL0IscURBQVlBLENBQUNpQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBbUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3hFO1FBRUEsTUFBTUMsY0FBYyxNQUFNTCxLQUFLSyxXQUFXO1FBQzFDLE1BQU1oQyxTQUFTcUIsT0FBT0MsSUFBSSxDQUFDVTtRQUUzQixNQUFNM0IsT0FBT04sYUFBYUM7UUFDMUIsTUFBTWlDLFVBQVU3QixVQUFVQztRQUMxQixNQUFNNkIsWUFBWTNCLGFBQWEwQjtRQUUvQixNQUFNRSxXQUFXUixLQUFLUyxJQUFJLENBQUNqQyxPQUFPLENBQUMsWUFBWTtRQUUvQyxPQUFPLElBQUlQLHFEQUFZQSxDQUFDc0MsV0FBVztZQUNqQ0csU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCLHVCQUF1QixDQUFDLHNCQUFzQixFQUFFRixTQUFTLEtBQUssQ0FBQztnQkFDL0QsK0JBQStCO1lBQ2pDO1FBQ0Y7SUFDRixFQUFFLE9BQU9MLE9BQU87UUFDZFEsUUFBUVIsS0FBSyxDQUFDLHFCQUFxQkE7UUFDbkMsT0FBT2xDLHFEQUFZQSxDQUFDaUMsSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1FBQW9CLEdBQzdCO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvaG9tZS9rb2Z1a3UvUGVyc29uYWwvYmluLXRvLXBkZi1jb252ZXJ0ZXIvc3JjL2FwcC9hcGkvY29udmVydC9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgeyBqc1BERiB9IGZyb20gJ2pzcGRmJ1xuXG4vLyBTdXBwb3J0ZWQgZW5jb2RpbmdzIChvcmRlciBtYXR0ZXJzLCBmaXJzdCBzdWNjZXNzZnVsIG9uZSB3aWxsIGJlIHVzZWQpXG5jb25zdCBFTkNPRElOR1MgPSBbJ3V0Zi04JywgJ2lzby04ODU5LTEnLCAnY3AxMjUyJywgJ2FzY2lpJ11cblxuZnVuY3Rpb24gcmVhZFRleHRGaWxlKGJ1ZmZlcjogQnVmZmVyKTogc3RyaW5nIHtcbiAgZm9yIChjb25zdCBlbmNvZGluZyBvZiBFTkNPRElOR1MpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZyhlbmNvZGluZyBhcyBCdWZmZXJFbmNvZGluZylcbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICB9XG4gIC8vIEZhbGxiYWNrOiByZXBsYWNlIHVuZGVjb2RhYmxlIGJ5dGVzXG4gIHJldHVybiBidWZmZXIudG9TdHJpbmcoJ3V0ZjgnKS5yZXBsYWNlKC9cXHVGRkZEL2csICcnKVxufVxuXG5mdW5jdGlvbiBjbGVhblRleHQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gUmVtb3ZlIEFOU0kgZXNjYXBlIHNlcXVlbmNlc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHgxQltALV9dWzAtP10qWyAtL10qW0Atfl0vZywgJycpXG4gIC8vIFJlbW92ZSBvdGhlciBub24tcHJpbnRhYmxlIGNoYXJzIChleGNlcHQgXFxuLCBcXHQsIFxccilcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvW15cXHgyMC1cXHg3RVxcblxcdFxccl0rL2csICcnKVxuICByZXR1cm4gdGV4dC50cmltKClcbn1cblxuZnVuY3Rpb24gY29udmVydFRvUGRmKHRleHQ6IHN0cmluZyk6IEJ1ZmZlciB7XG4gIGNvbnN0IHBkZiA9IG5ldyBqc1BERigpXG4gIHBkZi5zZXRGb250KCdjb3VyaWVyJylcbiAgcGRmLnNldEZvbnRTaXplKDgpXG4gIFxuICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpXG4gIGxldCB5ID0gMjBcbiAgY29uc3QgcGFnZUhlaWdodCA9IDI4MFxuICBjb25zdCBsaW5lSGVpZ2h0ID0gNVxuICBcbiAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgaWYgKHkgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBwZGYuYWRkUGFnZSgpXG4gICAgICB5ID0gMjBcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcHJvY2Vzc2VkTGluZSA9IGxpbmUubGVuZ3RoID4gODAgPyBsaW5lLnN1YnN0cmluZygwLCA3NykgKyAnLi4uJyA6IGxpbmVcbiAgICBwZGYudGV4dChwcm9jZXNzZWRMaW5lLCAxMCwgeSlcbiAgICB5ICs9IGxpbmVIZWlnaHRcbiAgfVxuICBcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKHBkZi5vdXRwdXQoJ2FycmF5YnVmZmVyJykpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZVxuXG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ05vIGZpbGUgdXBsb2FkZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKVxuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyKVxuICAgIFxuICAgIGNvbnN0IHRleHQgPSByZWFkVGV4dEZpbGUoYnVmZmVyKVxuICAgIGNvbnN0IGNsZWFuZWQgPSBjbGVhblRleHQodGV4dClcbiAgICBjb25zdCBwZGZCdWZmZXIgPSBjb252ZXJ0VG9QZGYoY2xlYW5lZClcblxuICAgIGNvbnN0IGJhc2VOYW1lID0gZmlsZS5uYW1lLnJlcGxhY2UoL1xcLlteLl0rJC8sICcnKVxuICAgIFxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKHBkZkJ1ZmZlciwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3BkZicsXG4gICAgICAgICdDb250ZW50LURpc3Bvc2l0aW9uJzogYGF0dGFjaG1lbnQ7IGZpbGVuYW1lPVwiJHtiYXNlTmFtZX0ucGRmXCJgLFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgfSxcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NvbnZlcnNpb24gZXJyb3I6JywgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0NvbnZlcnNpb24gZmFpbGVkJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwianNQREYiLCJFTkNPRElOR1MiLCJyZWFkVGV4dEZpbGUiLCJidWZmZXIiLCJlbmNvZGluZyIsInRvU3RyaW5nIiwicmVwbGFjZSIsImNsZWFuVGV4dCIsInRleHQiLCJ0cmltIiwiY29udmVydFRvUGRmIiwicGRmIiwic2V0Rm9udCIsInNldEZvbnRTaXplIiwibGluZXMiLCJzcGxpdCIsInkiLCJwYWdlSGVpZ2h0IiwibGluZUhlaWdodCIsImxpbmUiLCJhZGRQYWdlIiwicHJvY2Vzc2VkTGluZSIsImxlbmd0aCIsInN1YnN0cmluZyIsIkJ1ZmZlciIsImZyb20iLCJvdXRwdXQiLCJQT1NUIiwicmVxdWVzdCIsImZvcm1EYXRhIiwiZmlsZSIsImdldCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImFycmF5QnVmZmVyIiwiY2xlYW5lZCIsInBkZkJ1ZmZlciIsImJhc2VOYW1lIiwibmFtZSIsImhlYWRlcnMiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/convert/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fconvert%2Froute&page=%2Fapi%2Fconvert%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconvert%2Froute.ts&appDir=%2Fhome%2Fkofuku%2FPersonal%2Fbin-to-pdf-converter%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fkofuku%2FPersonal%2Fbin-to-pdf-converter&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();