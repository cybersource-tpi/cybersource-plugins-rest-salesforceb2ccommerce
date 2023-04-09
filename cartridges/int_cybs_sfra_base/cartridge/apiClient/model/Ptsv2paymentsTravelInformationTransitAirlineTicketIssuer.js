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
    root.CyberSource.Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer model module.
   * @module model/Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer</code>.
   * @alias module:model/Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer} The populated <code>Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * IATA2 airline code. Format: English characters only. Required for Mastercard; optional for all other card types. 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Name of the ticket issuer. If you do not include this field, CyberSource uses the value for your merchant name that is in the CyberSource merchant configuration database. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Address of the company issuing the ticket. 
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * City in which the transaction occurred. If the name of the city exceeds 18 characters, use meaningful abbreviations. Format: English characters only. Optional request field. 
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * State in which transaction occured. 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Zip code of the city in which transaction occured. 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * Country in which transaction occured. 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


