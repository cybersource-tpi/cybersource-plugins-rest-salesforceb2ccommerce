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
    define(['ApiClient', 'model/FlexV1TokensPost200Response', 'model/InlineResponseDefault', 'model/TokenizeRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FlexV1TokensPost200Response'), require('../model/InlineResponseDefault'), require('../model/TokenizeRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TokenizationApi = factory(root.CyberSource.ApiClient, root.CyberSource.FlexV1TokensPost200Response, root.CyberSource.InlineResponseDefault, root.CyberSource.TokenizeRequest);
  }
}(this, function(ApiClient, FlexV1TokensPost200Response, InlineResponseDefault, TokenizeRequest) {
  'use strict';

  /**
   * Tokenization service.
   * @module api/TokenizationApi
   * @version 0.0.1
   */

  /**
   * Constructs a new TokenizationApi. 
   * @alias module:api/TokenizationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the tokenize operation.
     * @callback module:api/TokenizationApi~tokenizeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FlexV1TokensPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Tokenize Card
     * Returns a token representing the supplied card details. The token replaces card data and can be used as the Subscription ID in the CyberSource Simple Order API or SCMP API. This is an unauthenticated call that you should initiate from your customer’s device or browser.
     * @param {module:model/TokenizeRequest} tokenizeRequest 
     * @param {module:api/TokenizationApi~tokenizeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FlexV1TokensPost200Response}
     */
    this.tokenize = function(tokenizeRequest, callback) {
      var postBody = tokenizeRequest;

      // verify the required parameter 'tokenizeRequest' is set
      if (tokenizeRequest === undefined || tokenizeRequest === null) {
        throw new Error("Missing the required parameter 'tokenizeRequest' when calling tokenize");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = FlexV1TokensPost200Response;

      return this.apiClient.callApi(
        '/flex/v1/tokens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
