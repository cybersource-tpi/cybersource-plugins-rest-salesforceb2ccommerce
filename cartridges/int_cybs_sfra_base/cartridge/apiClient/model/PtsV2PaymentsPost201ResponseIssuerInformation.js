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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponseIssuerInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseIssuerInformation model module.
   * @module model/PtsV2PaymentsPost201ResponseIssuerInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseIssuerInformation</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseIssuerInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseIssuerInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseIssuerInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseIssuerInformation} The populated <code>PtsV2PaymentsPost201ResponseIssuerInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('discretionaryData')) {
        obj['discretionaryData'] = ApiClient.convertToType(data['discretionaryData'], 'String');
      }
      if (data.hasOwnProperty('countrySpecificDiscretionaryData')) {
        obj['countrySpecificDiscretionaryData'] = ApiClient.convertToType(data['countrySpecificDiscretionaryData'], 'String');
      }
      if (data.hasOwnProperty('responseCode')) {
        obj['responseCode'] = ApiClient.convertToType(data['responseCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Country in which the card was issued. This information enables you to determine whether the card was issued domestically or internationally. Use the two-character [ISO Standard Country Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf).  This field is supported for Visa, Mastercard, Discover, Diners Club, JCB, and Maestro (International) on Chase Paymentech Solutions.  For details, see `auth_card_issuer_country` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Data defined by the issuer.  The value for this reply field will probably be the same as the value that you submitted in the authorization request, but it is possible for the processor, issuer, or acquirer to modify the value.  This field is supported only for Visa transactions on **CyberSource through VisaNet**.  For details, see `issuer_additional_data` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} discretionaryData
   */
  exports.prototype['discretionaryData'] = undefined;
  /**
   * Data defined by the issuer.  This national use field contains two subfields for information unique to the processing of Visa transactions by members in Japan. This subfield contains the Katakana text to be printed on the receipt. For details, see `jpo_issuer_message` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} countrySpecificDiscretionaryData
   */
  exports.prototype['countrySpecificDiscretionaryData'] = undefined;
  /**
   * Additional authorization code that must be printed on the receipt when returned by the processor.  This value is generated by the processor and is returned only for a successful transaction.  This reply field is supported only for these processors: - FDC Nashville Global - SIX 
   * @member {String} responseCode
   */
  exports.prototype['responseCode'] = undefined;



  return exports;
}));


