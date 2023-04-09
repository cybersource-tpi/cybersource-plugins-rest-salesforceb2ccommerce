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
    define(['ApiClient', 'model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode', 'model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode'), require('./RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation = factory(root.CyberSource.ApiClient, root.CyberSource.RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode, root.CyberSource.RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress);
  }
}(this, function(ApiClient, RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode, RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress) {
  'use strict';




  /**
   * The RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation model module.
   * @module model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation</code>.
   * @alias module:model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation} obj Optional instance to populate.
   * @return {module:model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation} The populated <code>RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addressType')) {
        obj['addressType'] = ApiClient.convertToType(data['addressType'], 'String');
      }
      if (data.hasOwnProperty('barCode')) {
        obj['barCode'] = RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode.constructFromObject(data['barCode']);
      }
      if (data.hasOwnProperty('applicableRegion')) {
        obj['applicableRegion'] = ApiClient.convertToType(data['applicableRegion'], 'String');
      }
      if (data.hasOwnProperty('errorCode')) {
        obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
      }
      if (data.hasOwnProperty('statusCode')) {
        obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'String');
      }
      if (data.hasOwnProperty('careOf')) {
        obj['careOf'] = ApiClient.convertToType(data['careOf'], 'String');
      }
      if (data.hasOwnProperty('matchScore')) {
        obj['matchScore'] = ApiClient.convertToType(data['matchScore'], 'Number');
      }
      if (data.hasOwnProperty('standardAddress')) {
        obj['standardAddress'] = RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress.constructFromObject(data['standardAddress']);
      }
    }
    return obj;
  }

  /**
   * Contains the record type of the postal code with which the address was matched.  #### U.S. Addresses Depending on the quantity and quality of the address information provided, this field contains one or two characters:  - One character: sufficient correct information was provided to result in accurate matching. - Two characters: standardization would provide a better address if more or better input address information were available. The second character is D (default).  Blank fields are unassigned. When an address cannot be standardized, how the input data was parsed determines the address type. In this case, standardization may indicate a street, rural route, highway contract, general delivery, or PO box. For possible values, see the description for the `dav_address_type` reply field in [CyberSource Verification Services Using the SCMP API](https://apps.cybersource.com/library/documentation/dev_guides/Verification_Svcs_SCMP_API/html/)  #### All Other Countries This field contains one of the following values: - P: Post. - S: Street. - x: Unknown. 
   * @member {String} addressType
   */
  exports.prototype['addressType'] = undefined;
  /**
   * @member {module:model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode} barCode
   */
  exports.prototype['barCode'] = undefined;
  /**
   * Value can be - Canada - US - International The values of errorCode and statusCode mean different things depending on the applicable region. Refer to the guide for more info. 
   * @member {String} applicableRegion
   */
  exports.prototype['applicableRegion'] = undefined;
  /**
   * Four-character error code returned for Canadian, US and international addresses. For possible values, see Verification Services guide. The meaning of the errorCode depends on value of applicableRegion. 
   * @member {String} errorCode
   */
  exports.prototype['errorCode'] = undefined;
  /**
   * Four-to-ten character status code returned for Canadian, US and international addresses. For possible values, see Verification Services guide. The meaning of the errorCode depends on value of applicableRegion. 
   * @member {String} statusCode
   */
  exports.prototype['statusCode'] = undefined;
  /**
   * Care of data dropped from the standard address.
   * @member {String} careOf
   */
  exports.prototype['careOf'] = undefined;
  /**
   * Indicates the probable correctness of the address match. Returned for U.S. and Canadian addresses. Returns a value from 0-9, where 0 is most likely to be correct and 9 is least likely to be correct, or -1 if there is no address match. 
   * @member {Number} matchScore
   */
  exports.prototype['matchScore'] = undefined;
  /**
   * @member {module:model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress} standardAddress
   */
  exports.prototype['standardAddress'] = undefined;



  return exports;
}));


