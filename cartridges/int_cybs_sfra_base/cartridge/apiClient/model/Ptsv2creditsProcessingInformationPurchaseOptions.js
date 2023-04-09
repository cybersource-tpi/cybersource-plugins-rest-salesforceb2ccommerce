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
    root.CyberSource.Ptsv2creditsProcessingInformationPurchaseOptions = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2creditsProcessingInformationPurchaseOptions model module.
   * @module model/Ptsv2creditsProcessingInformationPurchaseOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2creditsProcessingInformationPurchaseOptions</code>.
   * @alias module:model/Ptsv2creditsProcessingInformationPurchaseOptions
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv2creditsProcessingInformationPurchaseOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2creditsProcessingInformationPurchaseOptions} obj Optional instance to populate.
   * @return {module:model/Ptsv2creditsProcessingInformationPurchaseOptions} The populated <code>Ptsv2creditsProcessingInformationPurchaseOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('isElectronicBenefitsTransfer')) {
        obj['isElectronicBenefitsTransfer'] = ApiClient.convertToType(data['isElectronicBenefitsTransfer'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Flag that indicates whether this transaction is an EBT transaction. Possible values: - `true` - `false`  #### PIN debit Required field for EBT and EBT voucher transactions that use PIN debit credit or PIN debit purchase; otherwise, not used. 
   * @member {Boolean} isElectronicBenefitsTransfer
   */
  exports.prototype['isElectronicBenefitsTransfer'] = undefined;



  return exports;
}));


