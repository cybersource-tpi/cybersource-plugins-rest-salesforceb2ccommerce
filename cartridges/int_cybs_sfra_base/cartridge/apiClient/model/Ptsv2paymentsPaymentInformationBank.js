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
    define(['ApiClient', 'model/Ptsv2paymentsPaymentInformationBankAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsPaymentInformationBankAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsPaymentInformationBank = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsPaymentInformationBankAccount);
  }
}(this, function(ApiClient, Ptsv2paymentsPaymentInformationBankAccount) {
  'use strict';




  /**
   * The Ptsv2paymentsPaymentInformationBank model module.
   * @module model/Ptsv2paymentsPaymentInformationBank
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsPaymentInformationBank</code>.
   * @alias module:model/Ptsv2paymentsPaymentInformationBank
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Ptsv2paymentsPaymentInformationBank</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsPaymentInformationBank} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsPaymentInformationBank} The populated <code>Ptsv2paymentsPaymentInformationBank</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account')) {
        obj['account'] = Ptsv2paymentsPaymentInformationBankAccount.constructFromObject(data['account']);
      }
      if (data.hasOwnProperty('routingNumber')) {
        obj['routingNumber'] = ApiClient.convertToType(data['routingNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationBankAccount} account
   */
  exports.prototype['account'] = undefined;
  /**
   * Bank routing number. This is also called the _transit number_.  For details, see `ecp_rdfi` request field description in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/) 
   * @member {String} routingNumber
   */
  exports.prototype['routingNumber'] = undefined;



  return exports;
}));


