import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ConfigurationParameters } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse2001 } from '../models';
import { InlineResponse400 } from '../models';
/**
 * TrackSubmissionStatusApi - axios parameter creator
 * @export
 */
const TrackSubmissionStatusApiAxiosParamCreator = function (configuration?: ConfigurationParameters) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/submissionStatus/{processId}</td>           <td>Check the status of a submitted BOIR</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>       </tr>       <tr>           <td>               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body           </td>           <td>JSON payload - submission status </td>           <td>             <div>               Status values:               <ul>                 <li>submission_initiated</li>                 <li>submission_processing</li>                 <li>submission_validation_passed</li>                 <li>submission_validation_failed</li>                 <li>submission_accepted</li>                 <li>submission_rejected</li>                 <li>submission_failed</li>               </ul>             </div>           </td>       </tr>   </tbody> </table> 
         * @param {string} processId processId from /processId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submissionStatus: async (processId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'processId' is not null or undefined
            if (processId === null || processId === undefined) {
                throw new RequiredError('processId','Required parameter processId was null or undefined when calling submissionStatus.');
            }
            const localVarPath = `/submissionStatus/{processId}`
                .replace(`{${"processId"}}`, encodeURIComponent(String(processId)));
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
                const accessToken =  configuration.accessToken;
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
 * TrackSubmissionStatusApi - functional programming interface
 * @export
 */
const TrackSubmissionStatusApiFp = function(configuration?: ConfigurationParameters) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/submissionStatus/{processId}</td>           <td>Check the status of a submitted BOIR</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>       </tr>       <tr>           <td>               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body           </td>           <td>JSON payload - submission status </td>           <td>             <div>               Status values:               <ul>                 <li>submission_initiated</li>                 <li>submission_processing</li>                 <li>submission_validation_passed</li>                 <li>submission_validation_failed</li>                 <li>submission_accepted</li>                 <li>submission_rejected</li>                 <li>submission_failed</li>               </ul>             </div>           </td>       </tr>   </tbody> </table> 
         * @param {string} processId processId from /processId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submissionStatus(processId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2001>>> {
            const localVarAxiosArgs = await TrackSubmissionStatusApiAxiosParamCreator(configuration).submissionStatus(processId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TrackSubmissionStatusApi - factory interface
 * @export
 */
export const TrackSubmissionStatusApiFactory = function (configuration?: ConfigurationParameters, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/submissionStatus/{processId}</td>           <td>Check the status of a submitted BOIR</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>       </tr>       <tr>           <td>               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body           </td>           <td>JSON payload - submission status </td>           <td>             <div>               Status values:               <ul>                 <li>submission_initiated</li>                 <li>submission_processing</li>                 <li>submission_validation_passed</li>                 <li>submission_validation_failed</li>                 <li>submission_accepted</li>                 <li>submission_rejected</li>                 <li>submission_failed</li>               </ul>             </div>           </td>       </tr>   </tbody> </table> 
         * @param {string} processId processId from /processId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submissionStatus(processId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2001>> {
            return TrackSubmissionStatusApiFp(configuration).submissionStatus(processId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TrackSubmissionStatusApi - object-oriented interface
 * @export
 * @class TrackSubmissionStatusApi
 * @extends {BaseAPI}
 */
export class TrackSubmissionStatusApi extends BaseAPI {
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/submissionStatus/{processId}</td>           <td>Check the status of a submitted BOIR</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>       </tr>       <tr>           <td>               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body           </td>           <td>JSON payload - submission status </td>           <td>             <div>               Status values:               <ul>                 <li>submission_initiated</li>                 <li>submission_processing</li>                 <li>submission_validation_passed</li>                 <li>submission_validation_failed</li>                 <li>submission_accepted</li>                 <li>submission_rejected</li>                 <li>submission_failed</li>               </ul>             </div>           </td>       </tr>   </tbody> </table> 
     * @param {string} processId processId from /processId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrackSubmissionStatusApi
     */
    public async submissionStatus(processId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2001>> {
        return TrackSubmissionStatusApiFp(this.configuration).submissionStatus(processId, options).then((request) => request(this.axios, this.basePath));
    }
}
