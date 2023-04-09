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
    define(['ApiClient', 'model/Reportingv3ReportDownloadsGet400ResponseDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Reportingv3ReportDownloadsGet400ResponseDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Reportingv3ReportDownloadsGet400Response = factory(root.CyberSource.ApiClient, root.CyberSource.Reportingv3ReportDownloadsGet400ResponseDetails);
  }
}(this, function(ApiClient, Reportingv3ReportDownloadsGet400ResponseDetails) {
  'use strict';




  /**
   * The Reportingv3ReportDownloadsGet400Response model module.
   * @module model/Reportingv3ReportDownloadsGet400Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Reportingv3ReportDownloadsGet400Response</code>.
   * HTTP status code for client application
   * @alias module:model/Reportingv3ReportDownloadsGet400Response
   * @class
   * @param submitTimeUtc {Date} Time of request in UTC.  
   * @param reason {String} Documented reason code 
   * @param message {String} Short descriptive message to the user. 
   * @param details {Array.<module:model/Reportingv3ReportDownloadsGet400ResponseDetails>} Error field list 
   */
  var exports = function(submitTimeUtc, reason, message, details) {
    var _this = this;

    _this['submitTimeUtc'] = submitTimeUtc;
    _this['reason'] = reason;
    _this['message'] = message;
    _this['details'] = details;
  };

  /**
   * Constructs a <code>Reportingv3ReportDownloadsGet400Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Reportingv3ReportDownloadsGet400Response} obj Optional instance to populate.
   * @return {module:model/Reportingv3ReportDownloadsGet400Response} The populated <code>Reportingv3ReportDownloadsGet400Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'Date');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [Reportingv3ReportDownloadsGet400ResponseDetails]);
      }
    }
    return obj;
  }

  /**
   * Time of request in UTC.  
   * @member {Date} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * Documented reason code 
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Short descriptive message to the user. 
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Error field list 
   * @member {Array.<module:model/Reportingv3ReportDownloadsGet400ResponseDetails>} details
   */
  exports.prototype['details'] = undefined;



  return exports;
}));


