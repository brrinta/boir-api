import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ConfigurationParameters } from '../configuration';
import { BaseAPI } from '../base';
import { ProcessId } from '../models';
/**
 * InitiateBOIRSubmissionApi - factory interface
 * @export
 */
export declare const InitiateBOIRSubmissionApiFactory: (configuration?: ConfigurationParameters, basePath?: string, axios?: AxiosInstance) => {
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/processId</td>           <td>Retrieves a processId</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td><strong>Request Headers</strong></td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for a succesful request:                <dl>                 <dt>{ processId: &ltprocessId&gt; }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table>
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    processId(options?: AxiosRequestConfig): Promise<AxiosResponse<ProcessId>>;
};
/**
 * InitiateBOIRSubmissionApi - object-oriented interface
 * @export
 * @class InitiateBOIRSubmissionApi
 * @extends {BaseAPI}
 */
export declare class InitiateBOIRSubmissionApi extends BaseAPI {
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/processId</td>           <td>Retrieves a processId</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td><strong>Request Headers</strong></td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for a succesful request:                <dl>                 <dt>{ processId: &ltprocessId&gt; }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table>
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InitiateBOIRSubmissionApi
     */
    processId(options?: AxiosRequestConfig): Promise<AxiosResponse<ProcessId>>;
}
