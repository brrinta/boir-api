import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ConfigurationParameters } from '../configuration';
import { BaseAPI } from '../base';
import { InlineResponse2002 } from '../models';
/**
 * RetrieveTheBOIRTranscriptApi - factory interface
 * @export
 */
export declare const RetrieveTheBOIRTranscriptApiFactory: (configuration?: ConfigurationParameters, basePath?: string, axios?: AxiosInstance) => {
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/transcript/{processId}</td>           <td>Retrieve the transcript (and status) of a submitted BOIR</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>       </tr>       <tr>           <td>               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body           </td>           <td>               <p>                   submission status: { status: &lt;status&gt; }               <p>                   OR               </p>               <p>                   submission status + PDF file binary: <br/>                   { status: &lt;status&gt;, pdfBinary: &lt;PDF binary&gt; }           </td>           <td>           </td>       </tr>   </tbody> </table>
     * @param {string} processId processId from /processId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    transcript(processId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2002>>;
};
/**
 * RetrieveTheBOIRTranscriptApi - object-oriented interface
 * @export
 * @class RetrieveTheBOIRTranscriptApi
 * @extends {BaseAPI}
 */
export declare class RetrieveTheBOIRTranscriptApi extends BaseAPI {
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/transcript/{processId}</td>           <td>Retrieve the transcript (and status) of a submitted BOIR</td>       </tr>       <tr>           <td><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>       </tr>       <tr>           <td>               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>N/A</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body           </td>           <td>               <p>                   submission status: { status: &lt;status&gt; }               <p>                   OR               </p>               <p>                   submission status + PDF file binary: <br/>                   { status: &lt;status&gt;, pdfBinary: &lt;PDF binary&gt; }           </td>           <td>           </td>       </tr>   </tbody> </table>
     * @param {string} processId processId from /processId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RetrieveTheBOIRTranscriptApi
     */
    transcript(processId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2002>>;
}
