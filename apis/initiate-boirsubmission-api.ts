import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ConfigurationParameters } from '../configuration';
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ProcessId } from '../models';
/**
 * InitiateBOIRSubmissionApi - axios parameter creator
 * @export
 */
const InitiateBOIRSubmissionApiAxiosParamCreator = function (configuration?: ConfigurationParameters) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/processId</td>           <td>Retrieves a processId</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td><strong>Request Headers</strong></td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for a succesful request:                <dl>                 <dt>{ processId: &ltprocessId&gt; }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table> 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processId: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/processId`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

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

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InitiateBOIRSubmissionApi - functional programming interface
 * @export
 */
const InitiateBOIRSubmissionApiFp = function(configuration?: ConfigurationParameters) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/processId</td>           <td>Retrieves a processId</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td><strong>Request Headers</strong></td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for a succesful request:                <dl>                 <dt>{ processId: &ltprocessId&gt; }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table> 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async processId(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProcessId>>> {
            const localVarAxiosArgs = await InitiateBOIRSubmissionApiAxiosParamCreator(configuration).processId(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * InitiateBOIRSubmissionApi - factory interface
 * @export
 */
export const InitiateBOIRSubmissionApiFactory = function (configuration?: ConfigurationParameters, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/processId</td>           <td>Retrieves a processId</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td><strong>Request Headers</strong></td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for a succesful request:                <dl>                 <dt>{ processId: &ltprocessId&gt; }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table> 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async processId(options?: AxiosRequestConfig): Promise<AxiosResponse<ProcessId>> {
            return InitiateBOIRSubmissionApiFp(configuration).processId(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * InitiateBOIRSubmissionApi - object-oriented interface
 * @export
 * @class InitiateBOIRSubmissionApi
 * @extends {BaseAPI}
 */
export class InitiateBOIRSubmissionApi extends BaseAPI {
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/processId</td>           <td>Retrieves a processId</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td><strong>Request Headers</strong></td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for a succesful request:                <dl>                 <dt>{ processId: &ltprocessId&gt; }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table> 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InitiateBOIRSubmissionApi
     */
    public async processId(options?: AxiosRequestConfig) : Promise<AxiosResponse<ProcessId>> {
        return InitiateBOIRSubmissionApiFp(this.configuration).processId(options).then((request) => request(this.axios, this.basePath));
    }
}
