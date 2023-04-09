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
    define(['ApiClient', 'model/UmsV1UsersGet200ResponseUsers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UmsV1UsersGet200ResponseUsers'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.UmsV1UsersGet200Response = factory(root.CyberSource.ApiClient, root.CyberSource.UmsV1UsersGet200ResponseUsers);
  }
}(this, function(ApiClient, UmsV1UsersGet200ResponseUsers) {
  'use strict';




  /**
   * The UmsV1UsersGet200Response model module.
   * @module model/UmsV1UsersGet200Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>UmsV1UsersGet200Response</code>.
   * @alias module:model/UmsV1UsersGet200Response
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UmsV1UsersGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UmsV1UsersGet200Response} obj Optional instance to populate.
   * @return {module:model/UmsV1UsersGet200Response} The populated <code>UmsV1UsersGet200Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [UmsV1UsersGet200ResponseUsers]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/UmsV1UsersGet200ResponseUsers>} users
   */
  exports.prototype['users'] = undefined;



  return exports;
}));


