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
    define(['ApiClient', 'model/Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory', 'model/Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory'), require('./Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsRiskInformationBuyerHistory = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory, root.CyberSource.Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount);
  }
}(this, function(ApiClient, Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory, Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount) {
  'use strict';




  /**
   * The Ptsv2paymentsRiskInformationBuyerHistory model module.
   * @module model/Ptsv2paymentsRiskInformationBuyerHistory
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsRiskInformationBuyerHistory</code>.
   * @alias module:model/Ptsv2paymentsRiskInformationBuyerHistory
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Ptsv2paymentsRiskInformationBuyerHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsRiskInformationBuyerHistory} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsRiskInformationBuyerHistory} The populated <code>Ptsv2paymentsRiskInformationBuyerHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customerAccount')) {
        obj['customerAccount'] = Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount.constructFromObject(data['customerAccount']);
      }
      if (data.hasOwnProperty('accountHistory')) {
        obj['accountHistory'] = Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory.constructFromObject(data['accountHistory']);
      }
      if (data.hasOwnProperty('accountPurchases')) {
        obj['accountPurchases'] = ApiClient.convertToType(data['accountPurchases'], 'Number');
      }
      if (data.hasOwnProperty('addCardAttempts')) {
        obj['addCardAttempts'] = ApiClient.convertToType(data['addCardAttempts'], 'Number');
      }
      if (data.hasOwnProperty('priorSuspiciousActivity')) {
        obj['priorSuspiciousActivity'] = ApiClient.convertToType(data['priorSuspiciousActivity'], 'Boolean');
      }
      if (data.hasOwnProperty('paymentAccountHistory')) {
        obj['paymentAccountHistory'] = ApiClient.convertToType(data['paymentAccountHistory'], 'String');
      }
      if (data.hasOwnProperty('paymentAccountDate')) {
        obj['paymentAccountDate'] = ApiClient.convertToType(data['paymentAccountDate'], 'Number');
      }
      if (data.hasOwnProperty('transactionCountDay')) {
        obj['transactionCountDay'] = ApiClient.convertToType(data['transactionCountDay'], 'Number');
      }
      if (data.hasOwnProperty('transactionCountYear')) {
        obj['transactionCountYear'] = ApiClient.convertToType(data['transactionCountYear'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount} customerAccount
   */
  exports.prototype['customerAccount'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory} accountHistory
   */
  exports.prototype['accountHistory'] = undefined;
  /**
   * Number of purchases with this cardholder account during the previous six months. Recommended for Discover ProtectBuy. 
   * @member {Number} accountPurchases
   */
  exports.prototype['accountPurchases'] = undefined;
  /**
   * Number of add card attempts in the last 24 hours. Recommended for Discover ProtectBuy. 
   * @member {Number} addCardAttempts
   */
  exports.prototype['addCardAttempts'] = undefined;
  /**
   * Indicates whether the merchant experienced suspicious activity (including previous fraud) on the account. Recommended for Discover ProtectBuy. 
   * @member {Boolean} priorSuspiciousActivity
   */
  exports.prototype['priorSuspiciousActivity'] = undefined;
  /**
   * This only applies for NEW_ACCOUNT and EXISTING_ACCOUNT in creationHistory. Possible values are: - PAYMENT_ACCOUNT_EXISTS - PAYMENT_ACCOUNT_ADDED_NOW 
   * @member {String} paymentAccountHistory
   */
  exports.prototype['paymentAccountHistory'] = undefined;
  /**
   * Date applicable only for PAYMENT_ACCOUNT_EXISTS in paymentAccountHistory 
   * @member {Number} paymentAccountDate
   */
  exports.prototype['paymentAccountDate'] = undefined;
  /**
   * Number of transaction (successful or abandoned) for this cardholder account within the last 24 hours. Recommended for Discover ProtectBuy. 
   * @member {Number} transactionCountDay
   */
  exports.prototype['transactionCountDay'] = undefined;
  /**
   * Number of transaction (successful or abandoned) for this cardholder account within the last year. Recommended for Discover ProtectBuy. 
   * @member {Number} transactionCountYear
   */
  exports.prototype['transactionCountYear'] = undefined;



  return exports;
}));


