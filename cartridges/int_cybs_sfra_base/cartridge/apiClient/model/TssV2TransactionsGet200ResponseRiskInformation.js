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
    define(['ApiClient', 'model/TssV2TransactionsGet200ResponseRiskInformationProfile', 'model/TssV2TransactionsGet200ResponseRiskInformationRules', 'model/TssV2TransactionsGet200ResponseRiskInformationScore'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TssV2TransactionsGet200ResponseRiskInformationProfile'), require('./TssV2TransactionsGet200ResponseRiskInformationRules'), require('./TssV2TransactionsGet200ResponseRiskInformationScore'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponseRiskInformation = factory(root.CyberSource.ApiClient, root.CyberSource.TssV2TransactionsGet200ResponseRiskInformationProfile, root.CyberSource.TssV2TransactionsGet200ResponseRiskInformationRules, root.CyberSource.TssV2TransactionsGet200ResponseRiskInformationScore);
  }
}(this, function(ApiClient, TssV2TransactionsGet200ResponseRiskInformationProfile, TssV2TransactionsGet200ResponseRiskInformationRules, TssV2TransactionsGet200ResponseRiskInformationScore) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseRiskInformation model module.
   * @module model/TssV2TransactionsGet200ResponseRiskInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseRiskInformation</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseRiskInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseRiskInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseRiskInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseRiskInformation} The populated <code>TssV2TransactionsGet200ResponseRiskInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('profile')) {
        obj['profile'] = TssV2TransactionsGet200ResponseRiskInformationProfile.constructFromObject(data['profile']);
      }
      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [TssV2TransactionsGet200ResponseRiskInformationRules]);
      }
      if (data.hasOwnProperty('passiveProfile')) {
        obj['passiveProfile'] = TssV2TransactionsGet200ResponseRiskInformationProfile.constructFromObject(data['passiveProfile']);
      }
      if (data.hasOwnProperty('passiveRules')) {
        obj['passiveRules'] = ApiClient.convertToType(data['passiveRules'], [TssV2TransactionsGet200ResponseRiskInformationRules]);
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = TssV2TransactionsGet200ResponseRiskInformationScore.constructFromObject(data['score']);
      }
      if (data.hasOwnProperty('localTime')) {
        obj['localTime'] = ApiClient.convertToType(data['localTime'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TssV2TransactionsGet200ResponseRiskInformationProfile} profile
   */
  exports.prototype['profile'] = undefined;
  /**
   * @member {Array.<module:model/TssV2TransactionsGet200ResponseRiskInformationRules>} rules
   */
  exports.prototype['rules'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseRiskInformationProfile} passiveProfile
   */
  exports.prototype['passiveProfile'] = undefined;
  /**
   * @member {Array.<module:model/TssV2TransactionsGet200ResponseRiskInformationRules>} passiveRules
   */
  exports.prototype['passiveRules'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseRiskInformationScore} score
   */
  exports.prototype['score'] = undefined;
  /**
   * Time that the transaction was submitted in local time.
   * @member {String} localTime
   */
  exports.prototype['localTime'] = undefined;



  return exports;
}));


