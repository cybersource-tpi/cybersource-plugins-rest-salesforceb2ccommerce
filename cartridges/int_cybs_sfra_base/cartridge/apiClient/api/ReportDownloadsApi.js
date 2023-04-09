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
    define(['ApiClient', 'model/Reportingv3ReportDownloadsGet400Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Reportingv3ReportDownloadsGet400Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportDownloadsApi = factory(root.CyberSource.ApiClient, root.CyberSource.Reportingv3ReportDownloadsGet400Response);
  }
}(this, function(ApiClient, Reportingv3ReportDownloadsGet400Response) {
  'use strict';

  /**
   * ReportDownloads service.
   * @module api/ReportDownloadsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new ReportDownloadsApi. 
   * @alias module:api/ReportDownloadsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the downloadReport operation.
     * @callback module:api/ReportDownloadsApi~downloadReportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a Report
     * Download a report using the unique report name and date. 
     * @param {Date} reportDate Valid date on which to download the report in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**  yyyy-mm-dd For reports that span multiple days, this value would be the end date of the report in the time zone of the report subscription. Example 1: If your report start date is 2020-03-06 and the end date is 2020-03-09, the reportDate passed in the query is 2020-03-09. Example 2: If your report runs from midnight to midnight on 2020-03-09, the reportDate passed in the query is 2020-03-10 
     * @param {String} reportName Name of the report to download
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Cybersource Organization Id
     * @param {module:api/ReportDownloadsApi~downloadReportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.downloadReport = function(reportDate, reportName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'reportDate' is set
      if (reportDate === undefined || reportDate === null) {
        throw new Error("Missing the required parameter 'reportDate' when calling downloadReport");
      }

      // verify the required parameter 'reportName' is set
      if (reportName === undefined || reportName === null) {
        throw new Error("Missing the required parameter 'reportName' when calling downloadReport");
      }


      var pathParams = {
      };
      var queryParams = {
        'organizationId': opts['organizationId'],
        'reportDate': reportDate,
        'reportName': reportName
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/xml', 'text/csv'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reporting/v3/report-downloads', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
