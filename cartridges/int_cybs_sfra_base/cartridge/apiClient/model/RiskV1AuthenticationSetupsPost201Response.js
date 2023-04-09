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
    define(['ApiClient', 'model/PtsV2IncrementalAuthorizationPatch201ResponseLinks', 'model/RiskV1AuthenticationSetupsPost201ResponseConsumerAuthenticationInformation', 'model/RiskV1AuthenticationSetupsPost201ResponseErrorInformation', 'model/RiskV1DecisionsPost201ResponseClientReferenceInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2IncrementalAuthorizationPatch201ResponseLinks'), require('./RiskV1AuthenticationSetupsPost201ResponseConsumerAuthenticationInformation'), require('./RiskV1AuthenticationSetupsPost201ResponseErrorInformation'), require('./RiskV1DecisionsPost201ResponseClientReferenceInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.RiskV1AuthenticationSetupsPost201Response = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponseLinks, root.CyberSource.RiskV1AuthenticationSetupsPost201ResponseConsumerAuthenticationInformation, root.CyberSource.RiskV1AuthenticationSetupsPost201ResponseErrorInformation, root.CyberSource.RiskV1DecisionsPost201ResponseClientReferenceInformation);
  }
}(this, function(ApiClient, PtsV2IncrementalAuthorizationPatch201ResponseLinks, RiskV1AuthenticationSetupsPost201ResponseConsumerAuthenticationInformation, RiskV1AuthenticationSetupsPost201ResponseErrorInformation, RiskV1DecisionsPost201ResponseClientReferenceInformation) {
  'use strict';




  /**
   * The RiskV1AuthenticationSetupsPost201Response model module.
   * @module model/RiskV1AuthenticationSetupsPost201Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RiskV1AuthenticationSetupsPost201Response</code>.
   * @alias module:model/RiskV1AuthenticationSetupsPost201Response
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>RiskV1AuthenticationSetupsPost201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskV1AuthenticationSetupsPost201Response} obj Optional instance to populate.
   * @return {module:model/RiskV1AuthenticationSetupsPost201Response} The populated <code>RiskV1AuthenticationSetupsPost201Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = PtsV2IncrementalAuthorizationPatch201ResponseLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('consumerAuthenticationInformation')) {
        obj['consumerAuthenticationInformation'] = RiskV1AuthenticationSetupsPost201ResponseConsumerAuthenticationInformation.constructFromObject(data['consumerAuthenticationInformation']);
      }
      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = RiskV1DecisionsPost201ResponseClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('errorInformation')) {
        obj['errorInformation'] = RiskV1AuthenticationSetupsPost201ResponseErrorInformation.constructFromObject(data['errorInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2IncrementalAuthorizationPatch201ResponseLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * An unique identification number to identify the submitted request. It is also appended to the endpoint of the resource.  On incremental authorizations, this value with be the same as the identification number returned in the original authorization response.  #### PIN debit Returned for all PIN debit services. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by authorization service.  #### PIN debit Time when the PIN debit credit, PIN debit purchase or PIN debit reversal was requested.  Returned by PIN debit credit, PIN debit purchase or PIN debit reversal. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * The status for payerAuthentication 201 setup calls. Possible value is: - COMPLETED - FAILED 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/RiskV1AuthenticationSetupsPost201ResponseConsumerAuthenticationInformation} consumerAuthenticationInformation
   */
  exports.prototype['consumerAuthenticationInformation'] = undefined;
  /**
   * @member {module:model/RiskV1DecisionsPost201ResponseClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/RiskV1AuthenticationSetupsPost201ResponseErrorInformation} errorInformation
   */
  exports.prototype['errorInformation'] = undefined;



  return exports;
}));


