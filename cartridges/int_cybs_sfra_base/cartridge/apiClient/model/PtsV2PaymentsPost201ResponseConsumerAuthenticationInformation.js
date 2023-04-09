/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation model module.
   * @module model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
   * @class
   */
  var exports = function() {
    var _this = this;










































  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation} The populated <code>PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessToken')) {
        obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
      }
      if (data.hasOwnProperty('acsRenderingType')) {
        obj['acsRenderingType'] = ApiClient.convertToType(data['acsRenderingType'], 'String');
      }
      if (data.hasOwnProperty('acsTransactionId')) {
        obj['acsTransactionId'] = ApiClient.convertToType(data['acsTransactionId'], 'String');
      }
      if (data.hasOwnProperty('acsUrl')) {
        obj['acsUrl'] = ApiClient.convertToType(data['acsUrl'], 'String');
      }
      if (data.hasOwnProperty('authenticationPath')) {
        obj['authenticationPath'] = ApiClient.convertToType(data['authenticationPath'], 'String');
      }
      if (data.hasOwnProperty('authorizationPayload')) {
        obj['authorizationPayload'] = ApiClient.convertToType(data['authorizationPayload'], 'String');
      }
      if (data.hasOwnProperty('authenticationTransactionId')) {
        obj['authenticationTransactionId'] = ApiClient.convertToType(data['authenticationTransactionId'], 'String');
      }
      if (data.hasOwnProperty('cardholderMessage')) {
        obj['cardholderMessage'] = ApiClient.convertToType(data['cardholderMessage'], 'String');
      }
      if (data.hasOwnProperty('cavv')) {
        obj['cavv'] = ApiClient.convertToType(data['cavv'], 'String');
      }
      if (data.hasOwnProperty('cavvAlgorithm')) {
        obj['cavvAlgorithm'] = ApiClient.convertToType(data['cavvAlgorithm'], 'String');
      }
      if (data.hasOwnProperty('challengeCancelCode')) {
        obj['challengeCancelCode'] = ApiClient.convertToType(data['challengeCancelCode'], 'String');
      }
      if (data.hasOwnProperty('challengeRequired')) {
        obj['challengeRequired'] = ApiClient.convertToType(data['challengeRequired'], 'String');
      }
      if (data.hasOwnProperty('decoupledAuthenticationIndicator')) {
        obj['decoupledAuthenticationIndicator'] = ApiClient.convertToType(data['decoupledAuthenticationIndicator'], 'String');
      }
      if (data.hasOwnProperty('directoryServerErrorCode')) {
        obj['directoryServerErrorCode'] = ApiClient.convertToType(data['directoryServerErrorCode'], 'String');
      }
      if (data.hasOwnProperty('directoryServerErrorDescription')) {
        obj['directoryServerErrorDescription'] = ApiClient.convertToType(data['directoryServerErrorDescription'], 'String');
      }
      if (data.hasOwnProperty('ecommerceIndicator')) {
        obj['ecommerceIndicator'] = ApiClient.convertToType(data['ecommerceIndicator'], 'String');
      }
      if (data.hasOwnProperty('eci')) {
        obj['eci'] = ApiClient.convertToType(data['eci'], 'String');
      }
      if (data.hasOwnProperty('eciRaw')) {
        obj['eciRaw'] = ApiClient.convertToType(data['eciRaw'], 'String');
      }
      if (data.hasOwnProperty('effectiveAuthenticationType')) {
        obj['effectiveAuthenticationType'] = ApiClient.convertToType(data['effectiveAuthenticationType'], 'String');
      }
      if (data.hasOwnProperty('ivr')) {
        obj['ivr'] = PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr.constructFromObject(data['ivr']);
      }
      if (data.hasOwnProperty('networkScore')) {
        obj['networkScore'] = ApiClient.convertToType(data['networkScore'], 'String');
      }
      if (data.hasOwnProperty('pareq')) {
        obj['pareq'] = ApiClient.convertToType(data['pareq'], 'String');
      }
      if (data.hasOwnProperty('paresStatus')) {
        obj['paresStatus'] = ApiClient.convertToType(data['paresStatus'], 'String');
      }
      if (data.hasOwnProperty('proofXml')) {
        obj['proofXml'] = ApiClient.convertToType(data['proofXml'], 'String');
      }
      if (data.hasOwnProperty('proxyPan')) {
        obj['proxyPan'] = ApiClient.convertToType(data['proxyPan'], 'String');
      }
      if (data.hasOwnProperty('sdkTransactionId')) {
        obj['sdkTransactionId'] = ApiClient.convertToType(data['sdkTransactionId'], 'String');
      }
      if (data.hasOwnProperty('signedParesStatusReason')) {
        obj['signedParesStatusReason'] = ApiClient.convertToType(data['signedParesStatusReason'], 'String');
      }
      if (data.hasOwnProperty('specificationVersion')) {
        obj['specificationVersion'] = ApiClient.convertToType(data['specificationVersion'], 'String');
      }
      if (data.hasOwnProperty('stepUpUrl')) {
        obj['stepUpUrl'] = ApiClient.convertToType(data['stepUpUrl'], 'String');
      }
      if (data.hasOwnProperty('threeDSServerTransactionId')) {
        obj['threeDSServerTransactionId'] = ApiClient.convertToType(data['threeDSServerTransactionId'], 'String');
      }
      if (data.hasOwnProperty('ucafAuthenticationData')) {
        obj['ucafAuthenticationData'] = ApiClient.convertToType(data['ucafAuthenticationData'], 'String');
      }
      if (data.hasOwnProperty('ucafCollectionIndicator')) {
        obj['ucafCollectionIndicator'] = ApiClient.convertToType(data['ucafCollectionIndicator'], 'String');
      }
      if (data.hasOwnProperty('veresEnrolled')) {
        obj['veresEnrolled'] = ApiClient.convertToType(data['veresEnrolled'], 'String');
      }
      if (data.hasOwnProperty('whiteListStatusSource')) {
        obj['whiteListStatusSource'] = ApiClient.convertToType(data['whiteListStatusSource'], 'String');
      }
      if (data.hasOwnProperty('xid')) {
        obj['xid'] = ApiClient.convertToType(data['xid'], 'String');
      }
      if (data.hasOwnProperty('directoryServerTransactionId')) {
        obj['directoryServerTransactionId'] = ApiClient.convertToType(data['directoryServerTransactionId'], 'String');
      }
      if (data.hasOwnProperty('authenticationResult')) {
        obj['authenticationResult'] = ApiClient.convertToType(data['authenticationResult'], 'String');
      }
      if (data.hasOwnProperty('authenticationStatusMsg')) {
        obj['authenticationStatusMsg'] = ApiClient.convertToType(data['authenticationStatusMsg'], 'String');
      }
      if (data.hasOwnProperty('indicator')) {
        obj['indicator'] = ApiClient.convertToType(data['indicator'], 'String');
      }
      if (data.hasOwnProperty('interactionCounter')) {
        obj['interactionCounter'] = ApiClient.convertToType(data['interactionCounter'], 'String');
      }
      if (data.hasOwnProperty('whiteListStatus')) {
        obj['whiteListStatus'] = ApiClient.convertToType(data['whiteListStatus'], 'String');
      }
    }
    return obj;
  }

  /**
   * JSON Web Token (JWT) used to authenticate the consumer with the authentication provider, such as, CardinalCommerce or Rupay. Note - Max Length of this field is 2048 characters. 
   * @member {String} accessToken
   */
  exports.prototype['accessToken'] = undefined;
  /**
   * Identifies the UI Type the ACS will use to complete the challenge. **NOTE**: Only available for App transactions using the Cardinal Mobile SDK. 
   * @member {String} acsRenderingType
   */
  exports.prototype['acsRenderingType'] = undefined;
  /**
   * Unique transaction identifier assigned by the ACS to identify a single transaction. 
   * @member {String} acsTransactionId
   */
  exports.prototype['acsTransactionId'] = undefined;
  /**
   * URL for the card-issuing bank’s authentication form that you receive when the card is enrolled. The value can be very large. 
   * @member {String} acsUrl
   */
  exports.prototype['acsUrl'] = undefined;
  /**
   * Indicates what displays to the customer during the authentication process. This field can contain one of these values: - `ADS`: (Card not enrolled) customer prompted to activate the card during the checkout process. - `ATTEMPTS`: (Attempts processing) Processing briefly displays before the checkout process is completed. - `ENROLLED`: (Card enrolled) the card issuer’s authentication window displays. - `UNKNOWN`: Card enrollment status cannot be determined. - `NOREDIRECT`: (Card not enrolled, authentication unavailable, or error occurred) nothing displays to the customer.  The following values can be returned if you are using rules-based payer authentication. - `RIBA`: The card-issuing bank supports risk-based authentication, but whether the cardholder is likely to be challenged cannot be determined. - `RIBA_PASS`: The card-issuing bank supports risk-based authentication and it is likely that the cardholder will not be challenged to provide credentials, also known as _silent authentication_.  For details about possible values, see `pa_enroll_authentication_path` field description and \"Rules-Based Payer Authentication\" in [CyberSource Payer Authentication Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Payer_Authentication_SCMP_API/html/) 
   * @member {String} authenticationPath
   */
  exports.prototype['authenticationPath'] = undefined;
  /**
   * The Base64 encoded JSON Payload of CB specific Authorization Values returned in the challenge Flow 
   * @member {String} authorizationPayload
   */
  exports.prototype['authorizationPayload'] = undefined;
  /**
   * Payer authentication transaction identifier passed to link the check enrollment and validate authentication messages. 
   * @member {String} authenticationTransactionId
   */
  exports.prototype['authenticationTransactionId'] = undefined;
  /**
   * Text provided by the ACS/Issuer to Cardholder during a Frictionless or Decoupled transaction.The Issuer can provide information to Cardholder. For example, “Additional authentication is needed for this transaction, please contact (Issuer Name) at xxx-xxx-xxxx.”. The Issuing Bank can optionally support this value. 
   * @member {String} cardholderMessage
   */
  exports.prototype['cardholderMessage'] = undefined;
  /**
   * Unique identifier generated by the card-issuing bank for Visa, American Express, JCB, Diners Club, and Discover transactions after the customer is authenticated. The value is in base64. When you request the card authorization service, CyberSource automatically converts the value, not the field name, to the format required by your payment processor. 
   * @member {String} cavv
   */
  exports.prototype['cavv'] = undefined;
  /**
   * Field that is returned only when the CAVV is generated, which occurs when paresStatus contains the values Y (successful authentication) or A (attempted authentication). If you use the ATOS processor, send the value of this field in the `cavv_algorithm` request field of the authorization service. This field contains one of these values: - `2`: Visa, American Express, JCB, Diners Club, and Discover - `3`: Mastercard 
   * @member {String} cavvAlgorithm
   */
  exports.prototype['cavvAlgorithm'] = undefined;
  /**
   * An indicator as to why the transaction was canceled. Possible Values:  - `01`: Cardholder selected Cancel. - `02`: Reserved for future EMVCo use (values invalid until defined by EMVCo). - `03`: Transaction Timed Out—Decoupled Authentication - `04`: Transaction timed out at ACS—other timeouts - `05`: Transaction Timed out at ACS - First CReq not received by ACS - `06`: Transaction Error - `07`: Unknown - `08`: Transaction Timed Out at SDK 
   * @member {String} challengeCancelCode
   */
  exports.prototype['challengeCancelCode'] = undefined;
  /**
   * Indicates whether a challenge is required in order to complete authentication. **Note** Regional mandates might determine that a challenge is required.  Possible values: - `Y`: Challenge required - `N`: Challenge not required **Note**  Used by the Hybrid integration. 
   * @member {String} challengeRequired
   */
  exports.prototype['challengeRequired'] = undefined;
  /**
   * Indicates whether the 3DS Requestor requests the ACS to utilize Decoupled Authentication and agrees to utilize Decoupled Authentication if the ACS confirms its use.  Possible Values:  Y - Decoupled Authentication is supported and preferred if challenge is necessary  N - Do not use Decoupled Authentication  **Default Value**: N 
   * @member {String} decoupledAuthenticationIndicator
   */
  exports.prototype['decoupledAuthenticationIndicator'] = undefined;
  /**
   * The directory server error code indicating a problem with this transaction. Note - Max Length of this field is typically 3 characters. 
   * @member {String} directoryServerErrorCode
   */
  exports.prototype['directoryServerErrorCode'] = undefined;
  /**
   * Directory server text and additional detail about the error for this transaction. 
   * @member {String} directoryServerErrorDescription
   */
  exports.prototype['directoryServerErrorDescription'] = undefined;
  /**
   * Commerce indicator for cards not enrolled. This field contains one of these values: - `internet`: Card not enrolled, or card type not supported by payer authentication. No liability shift. - `js_attempted`: Card not enrolled, but attempt to authenticate is recorded. Liability shift. - `js_failure`: J/Secure directory service is not available. No liability shift. - `spa`: Mastercard card not enrolled in the SecureCode program. No liability shift. - `vbv_attempted`: Card not enrolled, but attempt to authenticate is recorded. Liability shift. - `vbv_failure`: For payment processor Barclays, Streamline, AIBMS, or FDC Germany, you receive this result if Visa’s directory service is not available. No liability shift. 
   * @member {String} ecommerceIndicator
   */
  exports.prototype['ecommerceIndicator'] = undefined;
  /**
   * Note This field applies only to non-U.S-issued cards.  For enroll, Numeric electronic commerce indicator (ECI) returned only for Visa, American Express, JCB, Diners Club, and Discover transactions when the card is not enrolled. For more information, see \"Interpreting the Reply,\" page 22.  If you are not using the CyberSource payment services, you must send this value to your payment processor in the subsequent request for card authorization. This field contains one of these values: - `06`: The card can be enrolled. Liability shift. - `07`: The card cannot be enrolled. No liability shift.  For validate, Numeric electronic commerce indicator (ECI) returned only for Visa, American Express, JCB, Diners Club, and Discover transactions. The field is absent when authentication fails. You must send this value to your payment processor in the subsequent request for card authorization. This field contains one of these values: - `05`: Successful authentication - `06`: Authentication attempted - `07`: Failed authentication (No response from the merchant because of a problem.) 
   * @member {String} eci
   */
  exports.prototype['eci'] = undefined;
  /**
   * ECI value that can be returned for Visa, Mastercard, American Express, JCB, Diners Club, and Discover. The field is absent when authentication fails. If your payment processor is Streamline, you must pass the value of this field instead of the value of `eci` or `ucafCollectionIndicator`.  This field can contain one of these values: - `01`: Authentication attempted (Mastercard) - `02`: Successful authentication (Mastercard) - `05`: Successful authentication (Visa, American Express, JCB, Diners Club, and Discover) - `06`: Authentication attempted (Visa, American Express, JCB, Diners Club, and Discover) 
   * @member {String} eciRaw
   */
  exports.prototype['eciRaw'] = undefined;
  /**
   * This field describes the type of 3DS transaction flow that took place.  It can be one of three possible flows; CH - Challenge FR - Frictionless FD - Frictionless with delegation, (challenge not generated by the issuer but by the scheme on behalf of the issuer). 
   * @member {String} effectiveAuthenticationType
   */
  exports.prototype['effectiveAuthenticationType'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr} ivr
   */
  exports.prototype['ivr'] = undefined;
  /**
   * The global score calculated by the CB scoring platform and returned to merchants. 
   * @member {String} networkScore
   */
  exports.prototype['networkScore'] = undefined;
  /**
   * Payer authentication request (PAReq) message that you need to forward to the ACS. The value can be very large. The value is in base64. 
   * @member {String} pareq
   */
  exports.prototype['pareq'] = undefined;
  /**
   * Raw result of the authentication check. If you are configured for Asia, Middle East, and Africa Gateway Processing, you need to send the value of this field in your authorization request. This field can contain one of these values: - `A`: Proof of authentication attempt was generated. - `N`: Customer failed or canceled authentication. Transaction denied. - `U`: Authentication not completed regardless of the reason. - `Y`: Customer was successfully authenticated. 
   * @member {String} paresStatus
   */
  exports.prototype['paresStatus'] = undefined;
  /**
   * Date and time of the enrollment check combined with the VEReq and VERes elements. If you ever need to show proof of enrollment checking, you may need to parse the string for the information required by the payment card company. The value can be very large. For details about possible values, see the `pa_enroll_proofxml` field description in [CyberSource Payer Authentication Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Payer_Authentication_SCMP_API/html/) - For cards issued in the U.S. or Canada, Visa may require this data for specific merchant category codes. - For cards not issued in the U.S. or Canada, your bank may require this data as proof of enrollment checking for any payer authentication transaction that you re-present because of a chargeback. 
   * @member {String} proofXml
   */
  exports.prototype['proofXml'] = undefined;
  /**
   * Encrypted version of the card number used in the payer authentication request message. 
   * @member {String} proxyPan
   */
  exports.prototype['proxyPan'] = undefined;
  /**
   * SDK unique transaction identifier that is generated on each new transaction. 
   * @member {String} sdkTransactionId
   */
  exports.prototype['sdkTransactionId'] = undefined;
  /**
   * Provides additional information as to why the PAResStatus has a specific value. 
   * @member {String} signedParesStatusReason
   */
  exports.prototype['signedParesStatusReason'] = undefined;
  /**
   * This field contains the 3D Secure version that was used to process the transaction. For example, 1.0.2 or 2.0.0. 
   * @member {String} specificationVersion
   */
  exports.prototype['specificationVersion'] = undefined;
  /**
   * The fully qualified URL that the merchant uses to post a form to the cardholder in order to complete the Consumer Authentication transaction for the Cardinal Cruise API integration. 
   * @member {String} stepUpUrl
   */
  exports.prototype['stepUpUrl'] = undefined;
  /**
   * Unique transaction identifier assigned by the 3DS Server to identify a single transaction. 
   * @member {String} threeDSServerTransactionId
   */
  exports.prototype['threeDSServerTransactionId'] = undefined;
  /**
   * AAV is a unique identifier generated by the card-issuing bank for Mastercard Identity Check transactions after the customer is authenticated. The value is in base64. Include the data in the card authorization request. 
   * @member {String} ucafAuthenticationData
   */
  exports.prototype['ucafAuthenticationData'] = undefined;
  /**
   * For enroll, Returned only for Mastercard transactions. Indicates that authentication is not required because the customer is not enrolled. Add the value of this field to the authorization field ucaf_collection_indicator. This field can contain these values: 0, 1.  For validate, Numeric electronic commerce indicator (ECI) returned only for Mastercard Identity Check transactions. The field is absent when authentication fails. You must send this value to your payment processor in the request for card authorization. This field contain one of these values: - `0`: Authentication data not collected, and customer authentication was not completed. - `1`: Authentication data not collected because customer authentication was not completed. - `2`: Authentication data collected because customer completed authentication. 
   * @member {String} ucafCollectionIndicator
   */
  exports.prototype['ucafCollectionIndicator'] = undefined;
  /**
   * Result of the enrollment check. This field can contain one of these values: - `Y`: Card enrolled or can be enrolled; you must authenticate. Liability shift. - `N`: Card not enrolled; proceed with authorization. Liability shift. - `U`: Unable to authenticate regardless of the reason. No liability shift.  **Note** This field only applies to the Asia, Middle East, and Africa Gateway. If you are configured for this processor, you must send the value of this field in your authorization request.  The following value can be returned if you are using rules-based Payer Authentication: - `B`: Indicates that authentication was bypassed.  For details, see `pa_enroll_veres_enrolled` field description in [CyberSource Payer Authentication Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Payer_Authentication_SCMP_API/html/) 
   * @member {String} veresEnrolled
   */
  exports.prototype['veresEnrolled'] = undefined;
  /**
   * This data element will be populated by the system setting Whitelist Status. Possible Values: 01 - 3DS/ Server/ 02 – DS/03 - ACS 
   * @member {String} whiteListStatusSource
   */
  exports.prototype['whiteListStatusSource'] = undefined;
  /**
   * Transaction identifier generated by CyberSource for successful enrollment or validation checks. Use this value, which is in base64, to match an outgoing PAReq with an incoming PARes. CyberSource forwards the XID with the card authorization service to these payment processors in these cases: - Barclays - Streamline (when the **ecommerceIndicator**`=spa`) 
   * @member {String} xid
   */
  exports.prototype['xid'] = undefined;
  /**
   * The Directory Server Transaction ID is generated by the Mastercard Directory Server during the authentication transaction and passed back to the merchant with the authentication results. For Cybersource Through Visanet Gateway: The value for this field corresponds to the following data in the TC 33 capture file3: Record: CP01 TCR7, Position: 114-149, Field: MC AVV Verification—Directory Server Transaction ID 
   * @member {String} directoryServerTransactionId
   */
  exports.prototype['directoryServerTransactionId'] = undefined;
  /**
   * Raw authentication data that comes from the cardissuing bank. Primary authentication field that indicates if authentication was successful and if liability shift occurred. You should examine first the result of this field. This field contains one of these values: - `-1`: Invalid PARes. - `0`: Successful validation. - `1`: Cardholder is not participating, but the attempt to authenticate was recorded. - `6`: Issuer unable to perform authentication. - `9`: Cardholder did not complete authentication. 
   * @member {String} authenticationResult
   */
  exports.prototype['authenticationResult'] = undefined;
  /**
   * Message that explains the authenticationResult reply field. 
   * @member {String} authenticationStatusMsg
   */
  exports.prototype['authenticationStatusMsg'] = undefined;
  /**
   * Indicator used to differentiate Internet transactions from other types. The authentication failed if this field is not returned. For Visa, if your payment processor is Streamline, Barclays, AIBMS, or FDC Germany, you receive the value vbv_failure instead of internet when eci is 07. The value of this field is passed automatically to the authorization service if you request the services together. This field contains one of these values: - `aesk`: American Express SafeKey authentication verified successfully. - `aesk_attempted`: Card not enrolled in American Express SafeKey, but the attempt to authenticate was recorded. - `dipb`: Discover ProtectBuy authentication verified successfully. - `dipb_attempted`: Card not enrolled in Discover ProtectBuy, but the attempt to authenticate was recorded. - `internet`: Authentication was not verified successfully. - `js`: J/Secure authentication verified successfully. - `js_attempted`: Card not enrolled in J/Secure, but the attempt to authenticate was recorded. - `moto`: Mail or telephone order. - `pb_attempted`: Card not enrolled in Diners Club ProtectBuy, but the attempt to authenticate was recorded. - `recurring`: Recurring transaction. - `spa`: Mastercard Identity Check authentication verified successfully. - `spa_failure`: Mastercard Identity Check failed authentication. - `vbv`: Visa Secure authentication verified successfully. - `vbv_attempted`: Card not enrolled in Visa Secure, but the attempt to authenticate was recorded. - `vbv_failure`: Visa Secure authentication unavailable. 
   * @member {String} indicator
   */
  exports.prototype['indicator'] = undefined;
  /**
   * Indicates the number of authentication cycles attempted by the cardholder and is tracked by the Issuing Banks ACS.Example: if customer gets the challenge window and enter in their one time password and hit submit then that interaction counter should just be 1. When customer gets the challenge window and the bank asks if they want to have the one time password  sent to their phone or their email and they have to choose before going to the next screen to enter in their one time password then this interaction count would be 2. One for the selection of how they want the one time password delivered and another with them actually entering in the one time password and hitting the submit button. 
   * @member {String} interactionCounter
   */
  exports.prototype['interactionCounter'] = undefined;
  /**
   * Enables the communication of trusted beneficiary/whitelist status between the ACS, the DS and the 3DS Requestor.  Possible Values:  Y - 3DS Requestor is whitelisted by cardholder  N - 3DS Requestor is not whitelisted by cardholder 
   * @member {String} whiteListStatus
   */
  exports.prototype['whiteListStatus'] = undefined;



  return exports;
}));


