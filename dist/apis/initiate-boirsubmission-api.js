"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Beneficial Ownership Information Report (BOIR) System-to-System API User Guide
 * # **1.  BOIR System-to-System Filing Introduction** The Beneficial Ownership Information Report (BOIR) collects information about the beneficial owner(s) and company applicant(s) associated with a reporting company. FinCEN supports two primary methods of filing when it comes to the BOIR: (1) “Form” based data collection via PDF BOIR or Online BOIR (which require very minimal setup to use), and (2) “System-to-System” based data collection via a REST API. This guide focuses on the System-to-System API filing method, specifically how to access the BOI E-Filing API and submit your BOIR information to FinCEN, interpret the submission response JSON, and understand what data validations and potential system processing errors may occur during the filing process.   # **2. BOIR BOIR API Access** To obtain access to the BOI E-Filing API, contact FinCEN via the following contact us form to request access: https://www.fincen.gov/contact. Please be sure to include the following in your inquiry:    1. Select the topic associated with the Beneficial Ownership (BO) / Corporate Transparency Act (CTA)   2. Select the subject associated with API requests.    3. Indicate in the message body that you are requesting API access credentials to connect to the BOI E-Filing API.   This will prompt FinCEN to reach out to you directly to coordinate the creation of your access credentials (i.e., clientId and secret) to use with the BOI E-Filing API. FinCEN also provides access credentials to use with its BOI E-Filing *SANDBOX* API, which allows you to test the submission process before submitting live data in production. Credentials will be provided if access is approved by FinCEN. Note the following hostnames associated with the BOI E-Filing *Sandbox*t and *Production* APIs:   <table border=\"2\" width=\"100%\">   <caption>Table 1 - BOI E-Filing API URLs: Sanbox & Production</caption>    <colgroup>     <col span=\"1\" width=\"30%\" />     <col span=\"1\" width=\"45%\" />   </colgroup>   <thead>     <tr>       <th class=\"tg-0lax\">Environment</th>       <th class=\"tg-0lax\">URL to use in API request</th>     </tr>   </thead>   <tbody>     <tr>       <td class=\"tg-0lax\">BOI E-Filing *Sandbox* API</td>       <td class=\"tg-0lax\">https://boiefiling-api.user-test.fincen.gov/preprod</td>     </tr>     <tr>       <td class=\"tg-0lax\">BOI E-Filing API: Production</td>       <td class=\"tg-0lax\">https://boiefiling-api.fincen.gov/prod</td>     </tr>   </tbody> </table>    After access credentials are obtained and you are ready to submit a BOIR, the user’s system will need to retrieve an access token to access the API. The token will be valid for one hour after retrieval and can be used for multiple API requests across multiple different submissions. The HTTP request to obtain the token is as such:   <table border=\"2\" width=\"100%\">   <caption>Table 2 - HTTP request to obtain access token </caption>    <colgroup>     <col span=\"1\" width=\"10%\" />     <col span=\"1\" width=\"15%\" />     <col span=\"1\" width=\"30%\" />     <col span=\"1\" width=\"45%\" />   </colgroup>   <thead>     <tr>       <th class=\"tg-0lax\"></th>       <th class=\"tg-0lax\"></th>       <th class=\"tg-0lax\"></th>       <th class=\"tg-0lax\">Comments</th>     </tr>   </thead>   <tbody>     <tr>       <td class=\"tg-0lax\"><strong>Endpoint</strong></td>       <td class=\"tg-0lax\">POST</td>       <td class=\"tg-0lax\">https://iam.fincen.gov/am/oauth2/realms/root/realms/Finance/access_token</td>       <td class=\"tg-0lax\"></td>     </tr>     <tr>       <td class=\"tg-0lax\"><strong>Request Headers</strong></td>       <td class=\"tg-0lax\">Authorization</td>       <td class=\"tg-0lax\">\"Basic &lt;credentials&gt;\"</td>       <td class=\"tg-0lax\">&lt;credentials&gt; is the base64-encoded value of “clientId:secret” (without the quotes)</td>     </tr>     <tr>       <td class=\"tg-0lax\" rowspan=\"2\"><strong>Request Body</strong></td>       <td class=\"tg-0lax\"></td>       <td class=\"tg-0lax\">grant_type: client_credentials<br/>scope: &lt;scope&gt;</td>       <td class=\"tg-0lax\">&lt;scope&gt; is “BOSS-EFILE-SANDBOX” for User Test or “BOSS-EFILE” for Production (without the quotes)</td>     </tr>     <tr>       <td class=\"tg-0lax\">Content-Type</td>       <td class=\"tg-0lax\">application/x-www-form-urlencoded</td>       <td class=\"tg-0lax\"></td>     </tr>     <tr>       <td class=\"tg-0lax\"><strong>Response</strong></td>       <td class=\"tg-0lax\"></td>       <td class=\"tg-0lax\">       { <br/>           &emsp;\"access_token\": \"<access_token>\", <br/>           &emsp;\"scope\": \"BOSS-EFILE\", <br/>           &emsp;\"token_type\": \"Bearer\", <br/>           &emsp;\"expires_in\": 3599 <br/>       }       </td>       <td class=\"tg-0lax\">&lt;access_token&gt; will be used in the Authorization header for all BOI E-Filing API requests</td>     </tr>   </tbody> </table>    # **3.  BOIR Submission & Tracking Process** As noted above, before you can begin the filing process, you must obtain an access token from FinCEN’s system by presenting your valid clientId and secret (see above section “BOIR API Access” for details) via a REST API call. Once the access token is retrieved, it must be included in the request header throughout the BOIR filing process which can be used for multiple BOIR filings as long as it is no later than one hour after retrieval.    The following is an overview of the BOIR filing processing via API:   1. **Initiate BOIR Submission via /processId:** To initiate the BOIR filing process, the user’s system sends a GET request to the /processId resource, resulting in a process ID returned (e.g., “BOIR230921650c447660”).   2. **Upload Identifying Document Image(s) via /attachments:** User’s system uploads the identifying document image for each Company Applicant and Beneficial Owner reported in the BOIR via the /attachments resource, resulting in an upload status returned (e.g., “upload_success”). If no Company Applicant and/or Beneficial Owner are being reported in the BOIR, then skip this step.    <br/> <br />    **NOTE:** The filenames for each image attachment in the BOIR must be unique and referenced in the associated BOIR XML under the element “OriginalAttachmentFileName” for each Company Applicant and Beneficial Owner being reported.   3. **Upload BOIR XML via /upload:** User’s system uploads a single BOIR as an XML file binary via the /upload resource, returning a submission status for the process ID (e.g., “submission_initiated”)   4. **Track Submission Status via /submissionStatus:** User’s system begins querying the status of the submission via the /submissionStatus resource (e.g., “submission_accepted”).    5. **Retrieve the BOIR Transcript via /transcript:** If a status of “submission_accepted” or “submission_rejected” is returned, filer’s system retrieves the transcript PDF of the BOIR as binary data via the /transcript resource. The /transcript resource also produces the status of the submission.    <br/> <br />    **NOTE:** The binary data for the transcript is base64-encoded. As an example, in JavaScript, to create the PDF file, the binary data will need to be decoded from base64 and then downloaded as a blob with the mime-type “application/pdf”.   The final status of your BOIR filing is either “submission_accepted”, “submission_rejected”, or “submission_failed”. If you receive a status with “failed” or “rejected” in the value, this means that FinCEN could NOT process your BOIR submission and you should take steps to resolve the reason for the failure/rejection (refer to the list of common response codes and errors later in this guide for additional information).   # 3.  Error Codes List The following list of errors will result in a final status of submission_rejected. This means that your BOIR submission could not be assigned a BOIR ID by FinCEN and you must take action to fix the error and resubmit. As stated in the Error Descriptions below, if the problem (error) persists, please contact FinCEN’s support desk for further assistance:  <table border=\"2\" width=\"100%\" cellspacing=\"20\" padding=\"20px\" cellPadding=\"20\">      <caption>Error Codes</caption>       <colgroup>     <col span=\"1\" width=\"5%\"  />     <col span=\"1\" width=\"30%\" />     <col span=\"1\" width=\"15%\" />     <col span=\"1\" width=\"15%\" />     <col span=\"1\" width=\"35%\" />   </colgroup>   <tbody>     <tr>       <td><strong>Error Code</strong></td>       <td><strong>Error description</strong></td>       <td><strong>Type of filing</strong></td>       <td><strong>Asscoiated party</strong></td>       <td><strong>How you should respond...</strong></td>     </tr>     <tr>       <td></strong>SBE01</strong></td>       <td>BOIR could not be processed by FinCEN at this time. Please try again. If this problem persists, please contact the FinCEN Contact Center for assistance.</td>       <td>N/A</td>       <td>N/A</td>       <td>Resubmit the BOIR as-is.</td>     </tr>     <tr>       <td></strong>SBE02</strong></td>       <td>Initial BOIR already has been filed for the reporting company recorded in the initial BOIR filing. Please try again. If this problem persists, please contact the FinCEN Contact Center for assistance.</td>       <td>Initial report</td>       <td>Reporting Company</td>       <td>         Resubmit the BOIR after the following:          <div>           <ul>             <li>If you are attempting to file an initial report, ensure the name and TIN for the Reporting Company (Part I) is correct.</li>             <li>If you are not attempting to file an initial report, ensure the correct filing type is indicated.</li>           </ul>         </div>       </td>     </tr>     <tr>       <td></strong>SBE03</strong></td>       <td>FinCEN ID entered for a Company Applicant or Beneficial Owner cannot be matched to an existing FinCEN ID. Please try again. If this problem persists, please contact the FinCEN Contact Center for assistance. </td>       <td>Initial report</td>       <td>         <div>           <dl>             <dt>Company Applicant</dt>             <dt>Beneficial Owner</dt>           </dl>         </div>       </td>       <td>         Resubmit the BOIR after the following:          <div>           <ul>             <li>Ensure that the FinCEN ID(s) recorded in the BOIR are correct.</li>           </ul>         </div>       </td>     </tr>     <tr>       <td>         </strong>SBE04</strong>       </td>       <td>Reporting Company information entered in Type of filing Items 1(e)-(h) cannot be matched to an existing Reporting Company. Please try again. If this problem persists, please contact the FinCEN Contact Center for assistance. </td>       <td>         <div>           <dl>             <dt>Update prior report</dt>             <dt>Correct prior report</dt>             <dt>Newly exempt entity</dt>           </dl>         </div>       </td>       <td>         <div>           <dl>             <dt>Reporting Company</dt>           </dl>         </div>       </td>       <td>         Resubmit the BOIR after the following:          <div>           <ul>             <li>               Ensure the name and TIN recorded for Item 1 (Type of filing) for the Reporting Company matches the Reporting Company name and TIN for the most recent BOIR filing.              </li>           </ul>         </div>       </td>     </tr>     <tr>       <td></strong>SBE05</strong></td>       <td>Reporting Company information recorded in Type of filing Items 1(e)-(h) cannot be matched to a prior BOIR filing. Please try again. If this problem persists, please contact the FinCEN Contact Center for assistance. <td>         <div>           <dl>             <dt>Update prior report</dt>             <dt>Correct prior report</dt>             <dt>Newly exempt entity</dt>           </dl>         </div>       </td>       <td>         <div>           <dl>             <dt>Reporting Company</dt>           </dl>         </div>       </td>       <td>         Resubmit the BOIR after the following:          <div>           <ul>             <li>Ensure the name and TIN recorded for Item 1 (Type of filing) for the Reporting Company matches the Reporting Company name and TIN for the most recent BOIR filing.</li>           </ul>         </div>       </td>     </tr>     <tr>       <td></strong>SBE06</strong></td>       <td>FinCEN ID entered for a Company Applicant or Beneficial Owner cannot be matched to an existing FinCEN ID. Please try again. If this problem persists, please contact the FinCEN Contact Center for assistance. <td>         <div>           <dl>             <dt>Update prior report</dt>             <dt>Correct prior report</dt>             <dt>Newly exempt entity</dt>           </dl>         </div>       </td>       <td>         <div>           <dl>             <dt>Complany Applicant</dt>             <dt>Beneficial Owner</dt>           </dl>         </div>       </td>       <td>         Resubmit the BOIR after the following:          <div>           <ul>             <li>Ensure that the FinCEN ID(s) recorded in the BOIR are correct.</li>           </ul>         </div>       </td>     </tr>   </tbody> </table>  <table border=\"2\" width=\"100%\">      <caption>Error Codes</caption>       <colgroup>     <col span=\"1\" width=\"10%\"  />     <col span=\"1\" width=\"45%\" />     <col span=\"1\" width=\"45%\" />   </colgroup>   <thead>     <tr>       <th class=\"tg-0lax\">Response Code</th>       <th class=\"tg-0lax\">Description</th>       <th class=\"tg-0lax\">Comments</th>     </tr>   </thead>   <tbody>     <tr>       <td class=\"tg-0lax\">200</td>       <td class=\"tg-0lax\">Successful API call</td>       <td class=\"tg-0lax\">(none)</td>     </tr>     <tr>       <td class=\"tg-0lax\">400</td>       <td class=\"tg-0lax\">Validation Failure</td>       <td class=\"tg-0lax\">Initial validation failed</td>     </tr>     <tr>       <td class=\"tg-0lax\">401</td>       <td class=\"tg-0lax\">Authentication</td>       <td class=\"tg-0lax\">Unauthorized</td>     </tr>     <tr>       <td class=\"tg-0lax\">403</td>       <td class=\"tg-0lax\">Authorization</td>       <td class=\"tg-0lax\">Forbidden</td>     </tr>     <tr>       <td class=\"tg-0lax\">404</td>       <td class=\"tg-0lax\">Not Found</td>       <td class=\"tg-0lax\">Unable to retrieve status/transcript</td>     </tr>     <tr>       <td class=\"tg-0lax\">413</td>       <td class=\"tg-0lax\">Payload Too Large</td>       <td class=\"tg-0lax\">Image attachment file exceeds 4MB</td>     </tr>     <tr>       <td class=\"tg-0lax\">415</td>       <td class=\"tg-0lax\">Unsupported Media Type</td>       <td class=\"tg-0lax\">Image attachment file type is not supported</td>     </tr>     <tr>       <td class=\"tg-0lax\">429</td>       <td class=\"tg-0lax\">Throttling</td>       <td class=\"tg-0lax\">Too many requests</td>     </tr>     <tr>       <td class=\"tg-0lax\">502/504</td>       <td class=\"tg-0lax\">Dependency Issues</td>       <td class=\"tg-0lax\">Bad Gateway/Gateway Timeout</td>     </tr>     <tr>       <td class=\"tg-0lax\">500/503</td>       <td class=\"tg-0lax\">Unhandled Errors</td>       <td class=\"tg-0lax\">Internal Server Error, Service unavailable</td>     </tr>   </tbody>   </table>
 *
 * OpenAPI spec version: 1.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
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
exports.InitiateBOIRSubmissionApi = exports.InitiateBOIRSubmissionApiFactory = exports.InitiateBOIRSubmissionApiFp = exports.InitiateBOIRSubmissionApiAxiosParamCreator = void 0;
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var base_1 = require("../base");
/**
 * InitiateBOIRSubmissionApi - axios parameter creator
 * @export
 */
exports.InitiateBOIRSubmissionApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/processId</td>           <td>Retrieves a processId</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td><strong>Request Headers</strong></td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for a succesful request:                <dl>                 <dt>{ processId: &ltprocessId&gt; }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table>
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processId: function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, accessToken, _a, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            localVarPath = "/processId";
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.accessToken)) return [3 /*break*/, 5];
                            if (!(typeof configuration.accessToken === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.accessToken()];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.accessToken];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            accessToken = _a;
                            localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
                            _b.label = 5;
                        case 5:
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
                    }
                });
            });
        },
    };
};
/**
 * InitiateBOIRSubmissionApi - functional programming interface
 * @export
 */
exports.InitiateBOIRSubmissionApiFp = function (configuration) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/processId</td>           <td>Retrieves a processId</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td><strong>Request Headers</strong></td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for a succesful request:                <dl>                 <dt>{ processId: &ltprocessId&gt; }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table>
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processId: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.InitiateBOIRSubmissionApiAxiosParamCreator(configuration).processId(options)];
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
 * InitiateBOIRSubmissionApi - factory interface
 * @export
 */
exports.InitiateBOIRSubmissionApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/processId</td>           <td>Retrieves a processId</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td><strong>Request Headers</strong></td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for a succesful request:                <dl>                 <dt>{ processId: &ltprocessId&gt; }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table>
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processId: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, exports.InitiateBOIRSubmissionApiFp(configuration).processId(options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
    };
};
/**
 * InitiateBOIRSubmissionApi - object-oriented interface
 * @export
 * @class InitiateBOIRSubmissionApi
 * @extends {BaseAPI}
 */
var InitiateBOIRSubmissionApi = /** @class */ (function (_super) {
    __extends(InitiateBOIRSubmissionApi, _super);
    function InitiateBOIRSubmissionApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/processId</td>           <td>Retrieves a processId</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td><strong>Request Headers</strong></td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for a succesful request:                <dl>                 <dt>{ processId: &ltprocessId&gt; }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table>
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InitiateBOIRSubmissionApi
     */
    InitiateBOIRSubmissionApi.prototype.processId = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, exports.InitiateBOIRSubmissionApiFp(this.configuration).processId(options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    return InitiateBOIRSubmissionApi;
}(base_1.BaseAPI));
exports.InitiateBOIRSubmissionApi = InitiateBOIRSubmissionApi;
