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
    define(['ApiClient', 'model/Ptsv2paymentsDeviceInformationRawData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsDeviceInformationRawData'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsDeviceInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsDeviceInformationRawData);
  }
}(this, function(ApiClient, Ptsv2paymentsDeviceInformationRawData) {
  'use strict';




  /**
   * The Ptsv2paymentsDeviceInformation model module.
   * @module model/Ptsv2paymentsDeviceInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsDeviceInformation</code>.
   * @alias module:model/Ptsv2paymentsDeviceInformation
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>Ptsv2paymentsDeviceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsDeviceInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsDeviceInformation} The populated <code>Ptsv2paymentsDeviceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('hostName')) {
        obj['hostName'] = ApiClient.convertToType(data['hostName'], 'String');
      }
      if (data.hasOwnProperty('ipAddress')) {
        obj['ipAddress'] = ApiClient.convertToType(data['ipAddress'], 'String');
      }
      if (data.hasOwnProperty('userAgent')) {
        obj['userAgent'] = ApiClient.convertToType(data['userAgent'], 'String');
      }
      if (data.hasOwnProperty('fingerprintSessionId')) {
        obj['fingerprintSessionId'] = ApiClient.convertToType(data['fingerprintSessionId'], 'String');
      }
      if (data.hasOwnProperty('useRawFingerprintSessionId')) {
        obj['useRawFingerprintSessionId'] = ApiClient.convertToType(data['useRawFingerprintSessionId'], 'Boolean');
      }
      if (data.hasOwnProperty('rawData')) {
        obj['rawData'] = ApiClient.convertToType(data['rawData'], [Ptsv2paymentsDeviceInformationRawData]);
      }
      if (data.hasOwnProperty('httpAcceptBrowserValue')) {
        obj['httpAcceptBrowserValue'] = ApiClient.convertToType(data['httpAcceptBrowserValue'], 'String');
      }
      if (data.hasOwnProperty('httpAcceptContent')) {
        obj['httpAcceptContent'] = ApiClient.convertToType(data['httpAcceptContent'], 'String');
      }
      if (data.hasOwnProperty('httpBrowserEmail')) {
        obj['httpBrowserEmail'] = ApiClient.convertToType(data['httpBrowserEmail'], 'String');
      }
      if (data.hasOwnProperty('httpBrowserLanguage')) {
        obj['httpBrowserLanguage'] = ApiClient.convertToType(data['httpBrowserLanguage'], 'String');
      }
      if (data.hasOwnProperty('httpBrowserJavaEnabled')) {
        obj['httpBrowserJavaEnabled'] = ApiClient.convertToType(data['httpBrowserJavaEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('httpBrowserJavaScriptEnabled')) {
        obj['httpBrowserJavaScriptEnabled'] = ApiClient.convertToType(data['httpBrowserJavaScriptEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('httpBrowserColorDepth')) {
        obj['httpBrowserColorDepth'] = ApiClient.convertToType(data['httpBrowserColorDepth'], 'String');
      }
      if (data.hasOwnProperty('httpBrowserScreenHeight')) {
        obj['httpBrowserScreenHeight'] = ApiClient.convertToType(data['httpBrowserScreenHeight'], 'String');
      }
      if (data.hasOwnProperty('httpBrowserScreenWidth')) {
        obj['httpBrowserScreenWidth'] = ApiClient.convertToType(data['httpBrowserScreenWidth'], 'String');
      }
      if (data.hasOwnProperty('httpBrowserTimeDifference')) {
        obj['httpBrowserTimeDifference'] = ApiClient.convertToType(data['httpBrowserTimeDifference'], 'String');
      }
      if (data.hasOwnProperty('userAgentBrowserValue')) {
        obj['userAgentBrowserValue'] = ApiClient.convertToType(data['userAgentBrowserValue'], 'String');
      }
    }
    return obj;
  }

  /**
   * DNS resolved hostname from `ipAddress`.
   * @member {String} hostName
   */
  exports.prototype['hostName'] = undefined;
  /**
   * IP address of the customer.  #### Used by **Authorization, Capture, and Credit** Optional field. 
   * @member {String} ipAddress
   */
  exports.prototype['ipAddress'] = undefined;
  /**
   * Customer’s browser as identified from the HTTP header data. For example, `Mozilla` is the value that identifies the Netscape browser. 
   * @member {String} userAgent
   */
  exports.prototype['userAgent'] = undefined;
  /**
   * Field that contains the session ID that you send to Decision Manager to obtain the device fingerprint information. The string can contain uppercase and lowercase letters, digits, hyphen (-), and underscore (_). However, do not use the same uppercase and lowercase letters to indicate different session IDs.  The session ID must be unique for each merchant ID. You can use any string that you are already generating, such as an order number or web session ID.  The session ID must be unique for each page load, regardless of an individual’s web session ID. If a user navigates to a profiled page and is assigned a web session, navigates away from the profiled page, then navigates back to the profiled page, the generated session ID should be different and unique. You may use a web session ID, but it is preferable to use an application GUID (Globally Unique Identifier). This measure ensures that a unique ID is generated every time the page is loaded, even if it is the same user reloading the page. 
   * @member {String} fingerprintSessionId
   */
  exports.prototype['fingerprintSessionId'] = undefined;
  /**
   * Boolean that indicates whether request contains the device fingerprint information. Values: - `true`: Use raw fingerprintSessionId when looking up device details. - `false` (default): Use merchant id + fingerprintSessionId as the session id for Device detail collection. 
   * @member {Boolean} useRawFingerprintSessionId
   */
  exports.prototype['useRawFingerprintSessionId'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsDeviceInformationRawData>} rawData
   */
  exports.prototype['rawData'] = undefined;
  /**
   * Value of the Accept header sent by the customer’s web browser. **Note** If the customer’s browser provides a value, you must include it in your request. 
   * @member {String} httpAcceptBrowserValue
   */
  exports.prototype['httpAcceptBrowserValue'] = undefined;
  /**
   * The exact content of the HTTP accept header. 
   * @member {String} httpAcceptContent
   */
  exports.prototype['httpAcceptContent'] = undefined;
  /**
   * Email address set in the customer’s browser, which may differ from customer email. 
   * @member {String} httpBrowserEmail
   */
  exports.prototype['httpBrowserEmail'] = undefined;
  /**
   * Value represents the browser language as defined in IETF BCP47. Example:en-US, refer  https://en.wikipedia.org/wiki/IETF_language_tag for more details. 
   * @member {String} httpBrowserLanguage
   */
  exports.prototype['httpBrowserLanguage'] = undefined;
  /**
   * A Boolean value that represents the ability of the cardholder browser to execute Java. Value is returned from the navigator.javaEnabled property. Possible Values:True/False 
   * @member {Boolean} httpBrowserJavaEnabled
   */
  exports.prototype['httpBrowserJavaEnabled'] = undefined;
  /**
   * A Boolean value that represents the ability of the cardholder browser to execute JavaScript. Possible Values:True/False. **Note**: Merchants should be able to know the values from fingerprint details of cardholder's browser. 
   * @member {Boolean} httpBrowserJavaScriptEnabled
   */
  exports.prototype['httpBrowserJavaScriptEnabled'] = undefined;
  /**
   * Value represents the bit depth of the color palette for displaying images, in bits per pixel. Example : 24, refer https://en.wikipedia.org/wiki/Color_depth for more details 
   * @member {String} httpBrowserColorDepth
   */
  exports.prototype['httpBrowserColorDepth'] = undefined;
  /**
   * Total height of the Cardholder's scree in pixels, example: 864. 
   * @member {String} httpBrowserScreenHeight
   */
  exports.prototype['httpBrowserScreenHeight'] = undefined;
  /**
   * Total width of the cardholder's screen in pixels. Example: 1536. 
   * @member {String} httpBrowserScreenWidth
   */
  exports.prototype['httpBrowserScreenWidth'] = undefined;
  /**
   * Time difference between UTC time and the cardholder browser local time, in minutes, Example:300 
   * @member {String} httpBrowserTimeDifference
   */
  exports.prototype['httpBrowserTimeDifference'] = undefined;
  /**
   * Value of the User-Agent header sent by the customer’s web browser. Note If the customer’s browser provides a value, you must include it in your request. 
   * @member {String} userAgentBrowserValue
   */
  exports.prototype['userAgentBrowserValue'] = undefined;



  return exports;
}));


