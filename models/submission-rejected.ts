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

import { SubmissionrejectedErrors } from './submissionrejected-errors';
 /**
 * 
 *
 * @export
 * @interface SubmissionRejected
 */
export interface SubmissionRejected {

    /**
     * @type {string}
     * @memberof SubmissionRejected
     * @example BOIR230928X6515f3081
     */
    processId?: string;

    /**
     * @type {string}
     * @memberof SubmissionRejected
     * @example submission_accepted
     */
    submissionStatus?: string;

    /**
     * @type {string}
     * @memberof SubmissionRejected
     * @example 50000000003688
     */
    BOIRID?: string;

    /**
     * @type {string}
     * @memberof SubmissionRejected
     * @example 200000000843
     */
    fincenID?: string;

    /**
     * @type {Array<SubmissionrejectedErrors>}
     * @memberof SubmissionRejected
     */
    errors?: Array<SubmissionrejectedErrors>;

    /**
     * @type {string}
     * @memberof SubmissionRejected
     * @example 2023-09-28T22:12:48Z
     */
    initiatedTimestamp?: string;

    /**
     * @type {string}
     * @memberof SubmissionRejected
     * @example Test
     */
    firstName?: string;

    /**
     * @type {string}
     * @memberof SubmissionRejected
     * @example Tester
     */
    lastName?: string;

    /**
     * @type {string}
     * @memberof SubmissionRejected
     * @example test@test.net
     */
    email?: string;
}
