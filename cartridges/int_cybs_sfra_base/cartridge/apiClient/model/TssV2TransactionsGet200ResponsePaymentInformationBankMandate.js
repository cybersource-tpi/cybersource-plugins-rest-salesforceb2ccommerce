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
    root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankMandate = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponsePaymentInformationBankMandate model module.
   * @module model/TssV2TransactionsGet200ResponsePaymentInformationBankMandate
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponsePaymentInformationBankMandate</code>.
   * @alias module:model/TssV2TransactionsGet200ResponsePaymentInformationBankMandate
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponsePaymentInformationBankMandate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponsePaymentInformationBankMandate} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponsePaymentInformationBankMandate} The populated <code>TssV2TransactionsGet200ResponsePaymentInformationBankMandate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('referenceNumber')) {
        obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], 'String');
      }
      if (data.hasOwnProperty('recurringType')) {
        obj['recurringType'] = ApiClient.convertToType(data['recurringType'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique value generated by CyberSource that identifies the transaction. Use this value to identify transactions in the Collections Report, which provides settlement information.  For details, see the `direct_debit_reconciliation_reference_number` reply field description in [Ingenico ePayments Developer Guide For Direct Debits.](https://apps.cybersource.com/library/documentation/dev_guides/Ingenico_ePayments_Dev/html/) 
   * @member {String} referenceNumber
   */
  exports.prototype['referenceNumber'] = undefined;
  /**
   * Whether the direct debit is the first or last direct debit associated with the mandate, or one in between. Required only for the United Kingdom. Possible values: - `001`: First direct debit associated with this mandate. Use this value if a one-time direct debit). - `002`: Subsequent direct debits associated with this mandate. - `003`: Last direct debit associated with this mandate.  For details, see the `direct_debit_recurring_type` request field description in [Ingenico ePayments Developer Guide For Direct Debits.](https://apps.cybersource.com/library/documentation/dev_guides/Ingenico_ePayments_Dev/html/) 
   * @member {String} recurringType
   */
  exports.prototype['recurringType'] = undefined;
  /**
   * The mandate ID. Required only for the United Kingdom.  For details, see the `mandate_id` request field description in [Ingenico ePayments Developer Guide For Direct Debits.](https://apps.cybersource.com/library/documentation/dev_guides/Ingenico_ePayments_Dev/html/) 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


