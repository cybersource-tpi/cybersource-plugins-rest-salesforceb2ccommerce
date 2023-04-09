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
    define(['ApiClient', 'model/CapturePaymentRequest', 'model/PtsV2PaymentsCapturesPost201Response', 'model/PtsV2PaymentsCapturesPost400Response', 'model/PtsV2PaymentsPost502Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CapturePaymentRequest'), require('../model/PtsV2PaymentsCapturesPost201Response'), require('../model/PtsV2PaymentsCapturesPost400Response'), require('../model/PtsV2PaymentsPost502Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CaptureApi = factory(root.CyberSource.ApiClient, root.CyberSource.CapturePaymentRequest, root.CyberSource.PtsV2PaymentsCapturesPost201Response, root.CyberSource.PtsV2PaymentsCapturesPost400Response, root.CyberSource.PtsV2PaymentsPost502Response);
  }
}(this, function(ApiClient, CapturePaymentRequest, PtsV2PaymentsCapturesPost201Response, PtsV2PaymentsCapturesPost400Response, PtsV2PaymentsPost502Response) {
  'use strict';

  /**
   * Capture service.
   * @module api/CaptureApi
   * @version 0.0.1
   */

  /**
   * Constructs a new CaptureApi. 
   * @alias module:api/CaptureApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the capturePayment operation.
     * @callback module:api/CaptureApi~capturePaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2PaymentsCapturesPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Capture a Payment
     * Include the payment ID in the POST request to capture the payment amount.
     * @param {module:model/CapturePaymentRequest} capturePaymentRequest 
     * @param {String} id The payment ID returned from a previous payment request. This ID links the capture to the payment. 
     * @param {module:api/CaptureApi~capturePaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2PaymentsCapturesPost201Response}
     */
    this.capturePayment = function(capturePaymentRequest, id, callback) {
      var postBody = capturePaymentRequest;

      // verify the required parameter 'capturePaymentRequest' is set
      if (capturePaymentRequest === undefined || capturePaymentRequest === null) {
        throw new Error("Missing the required parameter 'capturePaymentRequest' when calling capturePayment");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling capturePayment");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = PtsV2PaymentsCapturesPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/payments/{id}/captures', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
