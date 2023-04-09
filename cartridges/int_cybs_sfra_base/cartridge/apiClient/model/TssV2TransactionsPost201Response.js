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
    define(['ApiClient', 'model/PtsV2IncrementalAuthorizationPatch201ResponseLinks', 'model/TssV2TransactionsPost201ResponseEmbedded'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2IncrementalAuthorizationPatch201ResponseLinks'), require('./TssV2TransactionsPost201ResponseEmbedded'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsPost201Response = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponseLinks, root.CyberSource.TssV2TransactionsPost201ResponseEmbedded);
  }
}(this, function(ApiClient, PtsV2IncrementalAuthorizationPatch201ResponseLinks, TssV2TransactionsPost201ResponseEmbedded) {
  'use strict';




  /**
   * The TssV2TransactionsPost201Response model module.
   * @module model/TssV2TransactionsPost201Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsPost201Response</code>.
   * @alias module:model/TssV2TransactionsPost201Response
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>TssV2TransactionsPost201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsPost201Response} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsPost201Response} The populated <code>TssV2TransactionsPost201Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('searchId')) {
        obj['searchId'] = ApiClient.convertToType(data['searchId'], 'String');
      }
      if (data.hasOwnProperty('save')) {
        obj['save'] = ApiClient.convertToType(data['save'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('totalCount')) {
        obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('_embedded')) {
        obj['_embedded'] = TssV2TransactionsPost201ResponseEmbedded.constructFromObject(data['_embedded']);
      }
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = PtsV2IncrementalAuthorizationPatch201ResponseLinks.constructFromObject(data['_links']);
      }
    }
    return obj;
  }

  /**
   * An unique identification number assigned by CyberSource to identify each Search request.
   * @member {String} searchId
   */
  exports.prototype['searchId'] = undefined;
  /**
   * Indicates whether or not you want to save this search request for future use. The options are:  * `true` * `false` (default value)  If set to `true`, this field returns `searchID` in the response. You can use this value to retrieve the details of the saved search. 
   * @member {Boolean} save
   */
  exports.prototype['save'] = undefined;
  /**
   * Name of this search. When `save` is set to `true`, this search is saved with this name. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Merchant’s time zone in ISO standard, using the TZ database format. For example: `America/Chicago` 
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * String that contains the filters and variables for which you want to search. For information about supported field-filters and operators, see the [Query Filters]( https://developer.cybersource.com/api/developer-guides/dita-txn-search-details-rest-api-dev-guide-102718/txn_search_api/creating_txn_search_request.html) section of the Transaction Search Developer Guide. 
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * Controls the starting point within the collection of results, which defaults to 0. The first item in the collection is retrieved by setting a zero offset.  For example, if you have a collection of 15 items to be retrieved from a resource and you specify limit=5, you can retrieve the entire set of results in 3 successive requests by varying the offset value like this:  `offset=0` `offset=5` `offset=10`  **Note:** If an offset larger than the number of results is provided, this will result in no embedded object being returned. 
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * Controls the maximum number of items that may be returned for a single request. The default is 20, the maximum is 2000. 
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * A comma separated list of the following form:  `submitTimeUtc:desc` 
   * @member {String} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * Results for this page, this could be below the limit.
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * Total number of results.
   * @member {Number} totalCount
   */
  exports.prototype['totalCount'] = undefined;
  /**
   * The status of the submitted transaction.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by authorization service.  #### PIN debit Time when the PIN debit credit, PIN debit purchase or PIN debit reversal was requested.  Returned by PIN debit credit, PIN debit purchase or PIN debit reversal. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbedded} _embedded
   */
  exports.prototype['_embedded'] = undefined;
  /**
   * @member {module:model/PtsV2IncrementalAuthorizationPatch201ResponseLinks} _links
   */
  exports.prototype['_links'] = undefined;



  return exports;
}));


