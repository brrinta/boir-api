"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveTheBOIRTranscriptApi = exports.RetrieveTheBOIRTranscriptApiFactory = void 0;
var axios_1 = require("axios");
var base_1 = require("../base");
/**
 * RetrieveTheBOIRTranscriptApi - axios parameter creator
 * @export
 */
var RetrieveTheBOIRTranscriptApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/transcript/{processId}</td>           <td>Retrieve the transcript (and status) of a submitted BOIR</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>       </tr>       <tr>           <td>               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body           </td>           <td>               <p>                   submission status: { status: &lt;status&gt; }               <p>                   OR               </p>               <p>                   submission status + PDF file binary: <br/>                   { status: &lt;status&gt;, pdfBinary: &lt;PDF binary&gt; }           </td>           <td>           </td>       </tr>   </tbody> </table>
         * @param {string} processId processId from /processId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        transcript: function (processId, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, accessToken, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    // verify required parameter 'processId' is not null or undefined
                    if (processId === null || processId === undefined) {
                        throw new base_1.RequiredError('processId', 'Required parameter processId was null or undefined when calling transcript.');
                    }
                    localVarPath = "/transcript/{processId}"
                        .replace("{" + "processId" + "}", encodeURIComponent(String(processId)));
                    localVarUrlObj = new URL(localVarPath, 'https://example.com');
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    // authentication TokenAuth required
                    // http bearer authentication required
                    if (configuration && configuration.accessToken) {
                        accessToken = configuration.accessToken;
                        localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
                    }
                    query = new URLSearchParams(localVarUrlObj.search);
                    for (key in localVarQueryParameter) {
                        query.set(key, localVarQueryParameter[key]);
                    }
                    for (key in options.params) {
                        query.set(key, options.params[key]);
                    }
                    localVarUrlObj.search = (new URLSearchParams(query)).toString();
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    return [2 /*return*/, {
                            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
    };
};
/**
 * RetrieveTheBOIRTranscriptApi - functional programming interface
 * @export
 */
var RetrieveTheBOIRTranscriptApiFp = function (configuration) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/transcript/{processId}</td>           <td>Retrieve the transcript (and status) of a submitted BOIR</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>       </tr>       <tr>           <td>               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body           </td>           <td>               <p>                   submission status: { status: &lt;status&gt; }               <p>                   OR               </p>               <p>                   submission status + PDF file binary: <br/>                   { status: &lt;status&gt;, pdfBinary: &lt;PDF binary&gt; }           </td>           <td>           </td>       </tr>   </tbody> </table>
         * @param {string} processId processId from /processId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        transcript: function (processId, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, RetrieveTheBOIRTranscriptApiAxiosParamCreator(configuration).transcript(processId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
    };
};
/**
 * RetrieveTheBOIRTranscriptApi - factory interface
 * @export
 */
exports.RetrieveTheBOIRTranscriptApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/transcript/{processId}</td>           <td>Retrieve the transcript (and status) of a submitted BOIR</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>       </tr>       <tr>           <td>               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body           </td>           <td>               <p>                   submission status: { status: &lt;status&gt; }               <p>                   OR               </p>               <p>                   submission status + PDF file binary: <br/>                   { status: &lt;status&gt;, pdfBinary: &lt;PDF binary&gt; }           </td>           <td>           </td>       </tr>   </tbody> </table>
         * @param {string} processId processId from /processId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        transcript: function (processId, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, RetrieveTheBOIRTranscriptApiFp(configuration).transcript(processId, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
    };
};
/**
 * RetrieveTheBOIRTranscriptApi - object-oriented interface
 * @export
 * @class RetrieveTheBOIRTranscriptApi
 * @extends {BaseAPI}
 */
var RetrieveTheBOIRTranscriptApi = /** @class */ (function (_super) {
    __extends(RetrieveTheBOIRTranscriptApi, _super);
    function RetrieveTheBOIRTranscriptApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/transcript/{processId}</td>           <td>Retrieve the transcript (and status) of a submitted BOIR</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>       </tr>       <tr>           <td>               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body           </td>           <td>               <p>                   submission status: { status: &lt;status&gt; }               <p>                   OR               </p>               <p>                   submission status + PDF file binary: <br/>                   { status: &lt;status&gt;, pdfBinary: &lt;PDF binary&gt; }           </td>           <td>           </td>       </tr>   </tbody> </table>
     * @param {string} processId processId from /processId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RetrieveTheBOIRTranscriptApi
     */
    RetrieveTheBOIRTranscriptApi.prototype.transcript = function (processId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, RetrieveTheBOIRTranscriptApiFp(this.configuration).transcript(processId, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    return RetrieveTheBOIRTranscriptApi;
}(base_1.BaseAPI));
exports.RetrieveTheBOIRTranscriptApi = RetrieveTheBOIRTranscriptApi;
