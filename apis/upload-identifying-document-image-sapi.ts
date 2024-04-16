import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ConfigurationParameters } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Attachments } from '../models';
import { AttachmentsError } from '../models';
/**
 * UploadIdentifyingDocumentImageSApi - axios parameter creator
 * @export
 */
const UploadIdentifyingDocumentImageSApiAxiosParamCreator = function (configuration?: ConfigurationParameters) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">    <colgroup>      <col span=\"1\" width=\"7%\"  />      <col span=\"1\" width=\"7%\" />      <col span=\"1\" width=\"43%\" />      <col span=\"1\" width=\"43%\" />    </colgroup>    <tbody>        <tr>            <td />            <td />            <td />            <td><strong>Comments</strong></td>        </tr>        <tr>            <td><strong>Endpoint</strong></td>            <td>POST</td>            <td>/attachments/{processId}/{fileName}</td>            <td>              Upload a single image file                <br/><br/>                <strong>Note</strong>: uploading another image file with same fileName will replace the previous one            </td>        </tr>        <tr>            <td rowspan=\"2\"><strong>Path Parameters</strong></td>            <td>processId</td>            <td>processId from /processId</td>            <td></td>        </tr>        <tr>            <td>fileName</td>            <td>Image filename, with extension (must match a value recorded for the OriginalAttachmentFileName element in the BOIR XML)</dt></dl></td>            <td>              File name for the image must end in .jpg, .jpeg, .png, or .pdf and must be URI encoded.               <br/><br/>              Filename limitations: Letters, numbers, _ ! @ # $ % ( ) = + [ ] { } | ; ~ -            </td>        </tr>        <tr>            <td  rowspan=\"2\" >                <strong>Request Headers</strong> <strong></strong>                <strong></strong>            </td>            <td>Content-Type</td>            <td>application/binary</td>            <td/>        </tr>        <tr>            <td>                Authorization            </td>            <td>\"Bearer &lt;access_token&gt;\"</p></td>            <td></td>        </tr>        <tr>            <td><strong>Request Body</strong></td>            <td></td>            <td>Image file's binary data</td>            <td>Image file should be no greater than 4MB in file size</td>        </tr>        <tr>            <td rowspan=\"2\"><strong>Response</strong></td>            <td>Content-Type</td>            <td>application/json</td>            <td></td>        </tr>        <tr>            <td>Body</td>            <td>              <div>                JSON payload:                 <dl>                  <dt>{ status: &ltupload_status&gt, message: &ltAdditional details&gt }</dt>                </dl>              </div>            </td>            <td>              Upload status values:              <ul>                <li>upload_succcess</li>                <li>upload_failed</li>              </ul>            </td>        </tr>    </tbody>  </table> 
         * @param {string} processId processId from /processId
         * @param {string} fileName Image filename, with extension (must match a value recorded for the OriginalAttachmentFileName element in the BOIR XML)  &lt;br/&gt; File name for the image must end in .jpg, .jpeg, .png, or .pdf and must be URI encoded.  &lt;br/&gt; Filename limitations\\: Letters, numbers, \\_ ! @ # $ % ( ) &#x3D; + [ ] { } | ; ~ -  
         * @param {Object} [body] Image file&#x27;s binary data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        attachments: async (processId: string, fileName: string, body?: Object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'processId' is not null or undefined
            if (processId === null || processId === undefined) {
                throw new RequiredError('processId','Required parameter processId was null or undefined when calling attachments.');
            }
            // verify required parameter 'fileName' is not null or undefined
            if (fileName === null || fileName === undefined) {
                throw new RequiredError('fileName','Required parameter fileName was null or undefined when calling attachments.');
            }
            const localVarPath = `/attachments/{processId}/{fileName}`
                .replace(`{${"processId"}}`, encodeURIComponent(String(processId)))
                .replace(`{${"fileName"}}`, encodeURIComponent(String(fileName)));
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
 * UploadIdentifyingDocumentImageSApi - functional programming interface
 * @export
 */
 const UploadIdentifyingDocumentImageSApiFp = function(configuration?: ConfigurationParameters) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">    <colgroup>      <col span=\"1\" width=\"7%\"  />      <col span=\"1\" width=\"7%\" />      <col span=\"1\" width=\"43%\" />      <col span=\"1\" width=\"43%\" />    </colgroup>    <tbody>        <tr>            <td />            <td />            <td />            <td><strong>Comments</strong></td>        </tr>        <tr>            <td><strong>Endpoint</strong></td>            <td>POST</td>            <td>/attachments/{processId}/{fileName}</td>            <td>              Upload a single image file                <br/><br/>                <strong>Note</strong>: uploading another image file with same fileName will replace the previous one            </td>        </tr>        <tr>            <td rowspan=\"2\"><strong>Path Parameters</strong></td>            <td>processId</td>            <td>processId from /processId</td>            <td></td>        </tr>        <tr>            <td>fileName</td>            <td>Image filename, with extension (must match a value recorded for the OriginalAttachmentFileName element in the BOIR XML)</dt></dl></td>            <td>              File name for the image must end in .jpg, .jpeg, .png, or .pdf and must be URI encoded.               <br/><br/>              Filename limitations: Letters, numbers, _ ! @ # $ % ( ) = + [ ] { } | ; ~ -            </td>        </tr>        <tr>            <td  rowspan=\"2\" >                <strong>Request Headers</strong> <strong></strong>                <strong></strong>            </td>            <td>Content-Type</td>            <td>application/binary</td>            <td/>        </tr>        <tr>            <td>                Authorization            </td>            <td>\"Bearer &lt;access_token&gt;\"</p></td>            <td></td>        </tr>        <tr>            <td><strong>Request Body</strong></td>            <td></td>            <td>Image file's binary data</td>            <td>Image file should be no greater than 4MB in file size</td>        </tr>        <tr>            <td rowspan=\"2\"><strong>Response</strong></td>            <td>Content-Type</td>            <td>application/json</td>            <td></td>        </tr>        <tr>            <td>Body</td>            <td>              <div>                JSON payload:                 <dl>                  <dt>{ status: &ltupload_status&gt, message: &ltAdditional details&gt }</dt>                </dl>              </div>            </td>            <td>              Upload status values:              <ul>                <li>upload_succcess</li>                <li>upload_failed</li>              </ul>            </td>        </tr>    </tbody>  </table> 
         * @param {string} processId processId from /processId
         * @param {string} fileName Image filename, with extension (must match a value recorded for the OriginalAttachmentFileName element in the BOIR XML)  &lt;br/&gt; File name for the image must end in .jpg, .jpeg, .png, or .pdf and must be URI encoded.  &lt;br/&gt; Filename limitations\\: Letters, numbers, \\_ ! @ # $ % ( ) &#x3D; + [ ] { } | ; ~ -  
         * @param {Object} [body] Image file&#x27;s binary data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async attachments(processId: string, fileName: string, body?: Object, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Attachments>>> {
            const localVarAxiosArgs = await UploadIdentifyingDocumentImageSApiAxiosParamCreator(configuration).attachments(processId, fileName, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UploadIdentifyingDocumentImageSApi - factory interface
 * @export
 */
export const UploadIdentifyingDocumentImageSApiFactory = function (configuration?: ConfigurationParameters, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">    <colgroup>      <col span=\"1\" width=\"7%\"  />      <col span=\"1\" width=\"7%\" />      <col span=\"1\" width=\"43%\" />      <col span=\"1\" width=\"43%\" />    </colgroup>    <tbody>        <tr>            <td />            <td />            <td />            <td><strong>Comments</strong></td>        </tr>        <tr>            <td><strong>Endpoint</strong></td>            <td>POST</td>            <td>/attachments/{processId}/{fileName}</td>            <td>              Upload a single image file                <br/><br/>                <strong>Note</strong>: uploading another image file with same fileName will replace the previous one            </td>        </tr>        <tr>            <td rowspan=\"2\"><strong>Path Parameters</strong></td>            <td>processId</td>            <td>processId from /processId</td>            <td></td>        </tr>        <tr>            <td>fileName</td>            <td>Image filename, with extension (must match a value recorded for the OriginalAttachmentFileName element in the BOIR XML)</dt></dl></td>            <td>              File name for the image must end in .jpg, .jpeg, .png, or .pdf and must be URI encoded.               <br/><br/>              Filename limitations: Letters, numbers, _ ! @ # $ % ( ) = + [ ] { } | ; ~ -            </td>        </tr>        <tr>            <td  rowspan=\"2\" >                <strong>Request Headers</strong> <strong></strong>                <strong></strong>            </td>            <td>Content-Type</td>            <td>application/binary</td>            <td/>        </tr>        <tr>            <td>                Authorization            </td>            <td>\"Bearer &lt;access_token&gt;\"</p></td>            <td></td>        </tr>        <tr>            <td><strong>Request Body</strong></td>            <td></td>            <td>Image file's binary data</td>            <td>Image file should be no greater than 4MB in file size</td>        </tr>        <tr>            <td rowspan=\"2\"><strong>Response</strong></td>            <td>Content-Type</td>            <td>application/json</td>            <td></td>        </tr>        <tr>            <td>Body</td>            <td>              <div>                JSON payload:                 <dl>                  <dt>{ status: &ltupload_status&gt, message: &ltAdditional details&gt }</dt>                </dl>              </div>            </td>            <td>              Upload status values:              <ul>                <li>upload_succcess</li>                <li>upload_failed</li>              </ul>            </td>        </tr>    </tbody>  </table> 
         * @param {string} processId processId from /processId
         * @param {string} fileName Image filename, with extension (must match a value recorded for the OriginalAttachmentFileName element in the BOIR XML)  &lt;br/&gt; File name for the image must end in .jpg, .jpeg, .png, or .pdf and must be URI encoded.  &lt;br/&gt; Filename limitations\\: Letters, numbers, \\_ ! @ # $ % ( ) &#x3D; + [ ] { } | ; ~ -  
         * @param {Object} [body] Image file&#x27;s binary data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async attachments(processId: string, fileName: string, body?: Object, options?: AxiosRequestConfig): Promise<AxiosResponse<Attachments>> {
            return UploadIdentifyingDocumentImageSApiFp(configuration).attachments(processId, fileName, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UploadIdentifyingDocumentImageSApi - object-oriented interface
 * @export
 * @class UploadIdentifyingDocumentImageSApi
 * @extends {BaseAPI}
 */
export class UploadIdentifyingDocumentImageSApi extends BaseAPI {
    /**
     * <table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" width=\"100%\">    <colgroup>      <col span=\"1\" width=\"7%\"  />      <col span=\"1\" width=\"7%\" />      <col span=\"1\" width=\"43%\" />      <col span=\"1\" width=\"43%\" />    </colgroup>    <tbody>        <tr>            <td />            <td />            <td />            <td><strong>Comments</strong></td>        </tr>        <tr>            <td><strong>Endpoint</strong></td>            <td>POST</td>            <td>/attachments/{processId}/{fileName}</td>            <td>              Upload a single image file                <br/><br/>                <strong>Note</strong>: uploading another image file with same fileName will replace the previous one            </td>        </tr>        <tr>            <td rowspan=\"2\"><strong>Path Parameters</strong></td>            <td>processId</td>            <td>processId from /processId</td>            <td></td>        </tr>        <tr>            <td>fileName</td>            <td>Image filename, with extension (must match a value recorded for the OriginalAttachmentFileName element in the BOIR XML)</dt></dl></td>            <td>              File name for the image must end in .jpg, .jpeg, .png, or .pdf and must be URI encoded.               <br/><br/>              Filename limitations: Letters, numbers, _ ! @ # $ % ( ) = + [ ] { } | ; ~ -            </td>        </tr>        <tr>            <td  rowspan=\"2\" >                <strong>Request Headers</strong> <strong></strong>                <strong></strong>            </td>            <td>Content-Type</td>            <td>application/binary</td>            <td/>        </tr>        <tr>            <td>                Authorization            </td>            <td>\"Bearer &lt;access_token&gt;\"</p></td>            <td></td>        </tr>        <tr>            <td><strong>Request Body</strong></td>            <td></td>            <td>Image file's binary data</td>            <td>Image file should be no greater than 4MB in file size</td>        </tr>        <tr>            <td rowspan=\"2\"><strong>Response</strong></td>            <td>Content-Type</td>            <td>application/json</td>            <td></td>        </tr>        <tr>            <td>Body</td>            <td>              <div>                JSON payload:                 <dl>                  <dt>{ status: &ltupload_status&gt, message: &ltAdditional details&gt }</dt>                </dl>              </div>            </td>            <td>              Upload status values:              <ul>                <li>upload_succcess</li>                <li>upload_failed</li>              </ul>            </td>        </tr>    </tbody>  </table> 
     * @param {string} processId processId from /processId
     * @param {string} fileName Image filename, with extension (must match a value recorded for the OriginalAttachmentFileName element in the BOIR XML)  &lt;br/&gt; File name for the image must end in .jpg, .jpeg, .png, or .pdf and must be URI encoded.  &lt;br/&gt; Filename limitations\\: Letters, numbers, \\_ ! @ # $ % ( ) &#x3D; + [ ] { } | ; ~ -  
     * @param {Object} [body] Image file&#x27;s binary data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadIdentifyingDocumentImageSApi
     */
    public async attachments(processId: string, fileName: string, body?: Object, options?: AxiosRequestConfig) : Promise<AxiosResponse<Attachments>> {
        return UploadIdentifyingDocumentImageSApiFp(this.configuration).attachments(processId, fileName, body, options).then((request) => request(this.axios, this.basePath));
    }
}
