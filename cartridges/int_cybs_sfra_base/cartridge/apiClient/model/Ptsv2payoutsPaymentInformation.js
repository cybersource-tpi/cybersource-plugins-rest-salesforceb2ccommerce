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
    define(['ApiClient', 'model/Ptsv2paymentsPaymentInformationCustomer', 'model/Ptsv2payoutsPaymentInformationCard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsPaymentInformationCustomer'), require('./Ptsv2payoutsPaymentInformationCard'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2payoutsPaymentInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsPaymentInformationCustomer, root.CyberSource.Ptsv2payoutsPaymentInformationCard);
  }
}(this, function(ApiClient, Ptsv2paymentsPaymentInformationCustomer, Ptsv2payoutsPaymentInformationCard) {
  'use strict';




  /**
   * The Ptsv2payoutsPaymentInformation model module.
   * @module model/Ptsv2payoutsPaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2payoutsPaymentInformation</code>.
   * @alias module:model/Ptsv2payoutsPaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Ptsv2payoutsPaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2payoutsPaymentInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2payoutsPaymentInformation} The populated <code>Ptsv2payoutsPaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('card')) {
        obj['card'] = Ptsv2payoutsPaymentInformationCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('customer')) {
        obj['customer'] = Ptsv2paymentsPaymentInformationCustomer.constructFromObject(data['customer']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2payoutsPaymentInformationCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationCustomer} customer
   */
  exports.prototype['customer'] = undefined;



  return exports;
}));


