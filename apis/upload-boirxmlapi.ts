import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ConfigurationParameters } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse200 } from '../models';
import { InlineResponse400 } from '../models';
/**
 * UploadBOIRXMLApi - axios parameter creator
 * @export
 */
const UploadBOIRXMLApiAxiosParamCreator = function (configuration?: ConfigurationParameters) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/upload/BOIR/{processId}/{xmlFileName}</td>           <td>Upload and submit the BOIR XML</td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>           <td/>       </tr>       <tr>           <td>xmlFileName</td>           <td>XML file name</td>           <td>             File name for the XML file must end in .xml and must be URI encoded.              <br/><br/>             Filename limitations: Letters, numbers, _ ! @ # $ % ( ) = + [ ] { } | ; ~ -           </td>       </tr>       <tr>           <td  rowspan=\"2\" >               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>Content-Type</td>           <td>application/xml</td>           <td/>       </tr>       <tr>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>XML file binary data</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for successful upload:                <dl>                 <dt>{ processId: &ltprocessId&gt, status: \"submission_initiated\" }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table> 
         * @param {string} processId processId from /processId
         * @param {string} xmlFileName XML file name  &lt;br/&gt; File name for the XML file must end in .xml and must be URI encoded.  &lt;br/&gt; Filename limitations\\: Letters, numbers, \\_ ! @ # $ % ( ) &#x3D; + [ ] { } | ; ~ -  
         * @param {Object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        upload: async (processId: string, xmlFileName: string, body?: Object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'processId' is not null or undefined
            if (processId === null || processId === undefined) {
                throw new RequiredError('processId','Required parameter processId was null or undefined when calling upload.');
            }
            // verify required parameter 'xmlFileName' is not null or undefined
            if (xmlFileName === null || xmlFileName === undefined) {
                throw new RequiredError('xmlFileName','Required parameter xmlFileName was null or undefined when calling upload.');
            }
            const localVarPath = `/upload/BOIR/{processId}/{xmlFileName}`
                .replace(`{${"processId"}}`, encodeURIComponent(String(processId)))
                .replace(`{${"xmlFileName"}}`, encodeURIComponent(String(xmlFileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken =  configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/octet-stream';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UploadBOIRXMLApi - functional programming interface
 * @export
 */
const UploadBOIRXMLApiFp = function(configuration?: ConfigurationParameters) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/upload/BOIR/{processId}/{xmlFileName}</td>           <td>Upload and submit the BOIR XML</td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>           <td/>       </tr>       <tr>           <td>xmlFileName</td>           <td>XML file name</td>           <td>             File name for the XML file must end in .xml and must be URI encoded.              <br/><br/>             Filename limitations: Letters, numbers, _ ! @ # $ % ( ) = + [ ] { } | ; ~ -           </td>       </tr>       <tr>           <td  rowspan=\"2\" >               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>Content-Type</td>           <td>application/xml</td>           <td/>       </tr>       <tr>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>XML file binary data</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for successful upload:                <dl>                 <dt>{ processId: &ltprocessId&gt, status: \"submission_initiated\" }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table> 
         * @param {string} processId processId from /processId
         * @param {string} xmlFileName XML file name  &lt;br/&gt; File name for the XML file must end in .xml and must be URI encoded.  &lt;br/&gt; Filename limitations\\: Letters, numbers, \\_ ! @ # $ % ( ) &#x3D; + [ ] { } | ; ~ -  
         * @param {Object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async upload(processId: string, xmlFileName: string, body?: Object, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200>>> {
            const localVarAxiosArgs = await UploadBOIRXMLApiAxiosParamCreator(configuration).upload(processId, xmlFileName, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UploadBOIRXMLApi - factory interface
 * @export
 */
export const UploadBOIRXMLApiFactory = function (configuration?: ConfigurationParameters, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/upload/BOIR/{processId}/{xmlFileName}</td>           <td>Upload and submit the BOIR XML</td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>           <td/>       </tr>       <tr>           <td>xmlFileName</td>           <td>XML file name</td>           <td>             File name for the XML file must end in .xml and must be URI encoded.              <br/><br/>             Filename limitations: Letters, numbers, _ ! @ # $ % ( ) = + [ ] { } | ; ~ -           </td>       </tr>       <tr>           <td  rowspan=\"2\" >               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>Content-Type</td>           <td>application/xml</td>           <td/>       </tr>       <tr>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>XML file binary data</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for successful upload:                <dl>                 <dt>{ processId: &ltprocessId&gt, status: \"submission_initiated\" }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table> 
         * @param {string} processId processId from /processId
         * @param {string} xmlFileName XML file name  &lt;br/&gt; File name for the XML file must end in .xml and must be URI encoded.  &lt;br/&gt; Filename limitations\\: Letters, numbers, \\_ ! @ # $ % ( ) &#x3D; + [ ] { } | ; ~ -  
         * @param {Object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async upload(processId: string, xmlFileName: string, body?: Object, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>> {
            return UploadBOIRXMLApiFp(configuration).upload(processId, xmlFileName, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UploadBOIRXMLApi - object-oriented interface
 * @export
 * @class UploadBOIRXMLApi
 * @extends {BaseAPI}
 */
export class UploadBOIRXMLApi extends BaseAPI {
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/upload/BOIR/{processId}/{xmlFileName}</td>           <td>Upload and submit the BOIR XML</td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>           <td/>       </tr>       <tr>           <td>xmlFileName</td>           <td>XML file name</td>           <td>             File name for the XML file must end in .xml and must be URI encoded.              <br/><br/>             Filename limitations: Letters, numbers, _ ! @ # $ % ( ) = + [ ] { } | ; ~ -           </td>       </tr>       <tr>           <td  rowspan=\"2\" >               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>Content-Type</td>           <td>application/xml</td>           <td/>       </tr>       <tr>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>XML file binary data</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for successful upload:                <dl>                 <dt>{ processId: &ltprocessId&gt, status: \"submission_initiated\" }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table> 
     * @param {string} processId processId from /processId
     * @param {string} xmlFileName XML file name  &lt;br/&gt; File name for the XML file must end in .xml and must be URI encoded.  &lt;br/&gt; Filename limitations\\: Letters, numbers, \\_ ! @ # $ % ( ) &#x3D; + [ ] { } | ; ~ -  
     * @param {Object} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadBOIRXMLApi
     */
    public async upload(processId: string, xmlFileName: string, body?: Object, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200>> {
        return UploadBOIRXMLApiFp(this.configuration).upload(processId, xmlFileName, body, options).then((request) => request(this.axios, this.basePath));
    }
}
