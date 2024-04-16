import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ConfigurationParameters } from '../configuration';
import { BaseAPI } from '../base';
import { InlineResponse200 } from '../models';
/**
 * UploadBOIRXMLApi - factory interface
 * @export
 */
export declare const UploadBOIRXMLApiFactory: (configuration?: ConfigurationParameters, basePath?: string, axios?: AxiosInstance) => {
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/upload/BOIR/{processId}/{xmlFileName}</td>           <td>Upload and submit the BOIR XML</td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>           <td/>       </tr>       <tr>           <td>xmlFileName</td>           <td>XML file name</td>           <td>             File name for the XML file must end in .xml and must be URI encoded.              <br/><br/>             Filename limitations: Letters, numbers, _ ! @ # $ % ( ) = + [ ] { } | ; ~ -           </td>       </tr>       <tr>           <td  rowspan=\"2\" >               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>Content-Type</td>           <td>application/xml</td>           <td/>       </tr>       <tr>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>XML file binary data</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for successful upload:                <dl>                 <dt>{ processId: &ltprocessId&gt, status: \"submission_initiated\" }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table>
     * @param {string} processId processId from /processId
     * @param {string} xmlFileName XML file name  &lt;br/&gt; File name for the XML file must end in .xml and must be URI encoded.  &lt;br/&gt; Filename limitations\\: Letters, numbers, \\_ ! @ # $ % ( ) &#x3D; + [ ] { } | ; ~ -
     * @param {Object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upload(processId: string, xmlFileName: string, body?: Object, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>>;
};
/**
 * UploadBOIRXMLApi - object-oriented interface
 * @export
 * @class UploadBOIRXMLApi
 * @extends {BaseAPI}
 */
export declare class UploadBOIRXMLApi extends BaseAPI {
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">   <colgroup>     <col span=\"1\" width=\"7%\"  />     <col span=\"1\" width=\"7%\" />     <col span=\"1\" width=\"43%\" />     <col span=\"1\" width=\"43%\" />   </colgroup>   <tbody>       <tr>           <td />           <td />           <td />           <td><strong>Comments</strong></td>       </tr>       <tr>           <td><strong>Endpoint</strong></td>           <td>GET</td>           <td>/upload/BOIR/{processId}/{xmlFileName}</td>           <td>Upload and submit the BOIR XML</td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Path Parameters</strong></td>           <td>processId</td>           <td>processId from /processId</td>           <td/>           <td/>       </tr>       <tr>           <td>xmlFileName</td>           <td>XML file name</td>           <td>             File name for the XML file must end in .xml and must be URI encoded.              <br/><br/>             Filename limitations: Letters, numbers, _ ! @ # $ % ( ) = + [ ] { } | ; ~ -           </td>       </tr>       <tr>           <td  rowspan=\"2\" >               <strong>Request Headers</strong> <strong></strong>               <strong></strong>           </td>           <td>Content-Type</td>           <td>application/xml</td>           <td/>       </tr>       <tr>           <td>               Authorization           </td>           <td>\"Bearer &lt;access_token&gt;\"</p></td>           <td></td>       </tr>       <tr>           <td><strong>Request Body</strong></td>           <td></td>           <td>XML file binary data</td>           <td></td>       </tr>       <tr>           <td rowspan=\"2\"><strong>Response</strong></td>           <td>Content-Type</td>           <td>application/json</td>           <td></td>       </tr>       <tr>           <td>Body</td>           <td>             <div>               JSON payload for successful upload:                <dl>                 <dt>{ processId: &ltprocessId&gt, status: \"submission_initiated\" }</dt>               </dl>             </div>           </td>           <td></td>       </tr>   </tbody> </table>
     * @param {string} processId processId from /processId
     * @param {string} xmlFileName XML file name  &lt;br/&gt; File name for the XML file must end in .xml and must be URI encoded.  &lt;br/&gt; Filename limitations\\: Letters, numbers, \\_ ! @ # $ % ( ) &#x3D; + [ ] { } | ; ~ -
     * @param {Object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadBOIRXMLApi
     */
    upload(processId: string, xmlFileName: string, body?: Object, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>>;
}
