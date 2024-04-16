import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ConfigurationParameters } from '../configuration';
import { BaseAPI } from '../base';
import { InlineResponse2001 } from '../models';
/**
 * TrackSubmissionStatusApi - factory interface
 * @export
 */
export declare const TrackSubmissionStatusApiFactory: (configuration?: ConfigurationParameters, basePath?: string, axios?: AxiosInstance) => {
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/submissionStatus/{processId}</td>           <td>Check the status of a submitted BOIR</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>       </tr>       <tr>           <td>               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body           </td>           <td>JSON payload - submission status </td>           <td>             <div>               Status values:               <ul>                 <li>submission_initiated</li>                 <li>submission_processing</li>                 <li>submission_validation_passed</li>                 <li>submission_validation_failed</li>                 <li>submission_accepted</li>                 <li>submission_rejected</li>                 <li>submission_failed</li>               </ul>             </div>           </td>       </tr>   </tbody> </table>
     * @param {string} processId processId from /processId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submissionStatus(processId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2001>>;
};
/**
 * TrackSubmissionStatusApi - object-oriented interface
 * @export
 * @class TrackSubmissionStatusApi
 * @extends {BaseAPI}
 */
export declare class TrackSubmissionStatusApi extends BaseAPI {
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/submissionStatus/{processId}</td>           <td>Check the status of a submitted BOIR</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>       </tr>       <tr>           <td>               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body           </td>           <td>JSON payload - submission status </td>           <td>             <div>               Status values:               <ul>                 <li>submission_initiated</li>                 <li>submission_processing</li>                 <li>submission_validation_passed</li>                 <li>submission_validation_failed</li>                 <li>submission_accepted</li>                 <li>submission_rejected</li>                 <li>submission_failed</li>               </ul>             </div>           </td>       </tr>   </tbody> </table>
     * @param {string} processId processId from /processId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrackSubmissionStatusApi
     */
    submissionStatus(processId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2001>>;
}
