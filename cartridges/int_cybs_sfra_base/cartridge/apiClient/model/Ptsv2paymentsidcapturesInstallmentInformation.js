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
    root.CyberSource.Ptsv2paymentsidcapturesInstallmentInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsidcapturesInstallmentInformation model module.
   * @module model/Ptsv2paymentsidcapturesInstallmentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidcapturesInstallmentInformation</code>.
   * @alias module:model/Ptsv2paymentsidcapturesInstallmentInformation
   * @class
   */
  var exports = function() {
    var _this = this;


























  };

  /**
   * Constructs a <code>Ptsv2paymentsidcapturesInstallmentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidcapturesInstallmentInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidcapturesInstallmentInformation} The populated <code>Ptsv2paymentsidcapturesInstallmentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('frequency')) {
        obj['frequency'] = ApiClient.convertToType(data['frequency'], 'String');
      }
      if (data.hasOwnProperty('planType')) {
        obj['planType'] = ApiClient.convertToType(data['planType'], 'String');
      }
      if (data.hasOwnProperty('sequence')) {
        obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
      }
      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('totalCount')) {
        obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
      }
      if (data.hasOwnProperty('firstInstallmentDate')) {
        obj['firstInstallmentDate'] = ApiClient.convertToType(data['firstInstallmentDate'], 'String');
      }
      if (data.hasOwnProperty('firstInstallmentAmount')) {
        obj['firstInstallmentAmount'] = ApiClient.convertToType(data['firstInstallmentAmount'], 'String');
      }
      if (data.hasOwnProperty('invoiceData')) {
        obj['invoiceData'] = ApiClient.convertToType(data['invoiceData'], 'String');
      }
      if (data.hasOwnProperty('paymentType')) {
        obj['paymentType'] = ApiClient.convertToType(data['paymentType'], 'String');
      }
      if (data.hasOwnProperty('additionalCosts')) {
        obj['additionalCosts'] = ApiClient.convertToType(data['additionalCosts'], 'String');
      }
      if (data.hasOwnProperty('additionalCostsPercentage')) {
        obj['additionalCostsPercentage'] = ApiClient.convertToType(data['additionalCostsPercentage'], 'String');
      }
      if (data.hasOwnProperty('amountFunded')) {
        obj['amountFunded'] = ApiClient.convertToType(data['amountFunded'], 'String');
      }
      if (data.hasOwnProperty('amountRequestedPercentage')) {
        obj['amountRequestedPercentage'] = ApiClient.convertToType(data['amountRequestedPercentage'], 'String');
      }
      if (data.hasOwnProperty('annualFinancingCost')) {
        obj['annualFinancingCost'] = ApiClient.convertToType(data['annualFinancingCost'], 'String');
      }
      if (data.hasOwnProperty('annualInterestRate')) {
        obj['annualInterestRate'] = ApiClient.convertToType(data['annualInterestRate'], 'String');
      }
      if (data.hasOwnProperty('expenses')) {
        obj['expenses'] = ApiClient.convertToType(data['expenses'], 'String');
      }
      if (data.hasOwnProperty('expensesPercentage')) {
        obj['expensesPercentage'] = ApiClient.convertToType(data['expensesPercentage'], 'String');
      }
      if (data.hasOwnProperty('fees')) {
        obj['fees'] = ApiClient.convertToType(data['fees'], 'String');
      }
      if (data.hasOwnProperty('feesPercentage')) {
        obj['feesPercentage'] = ApiClient.convertToType(data['feesPercentage'], 'String');
      }
      if (data.hasOwnProperty('insurance')) {
        obj['insurance'] = ApiClient.convertToType(data['insurance'], 'String');
      }
      if (data.hasOwnProperty('insurancePercentage')) {
        obj['insurancePercentage'] = ApiClient.convertToType(data['insurancePercentage'], 'String');
      }
      if (data.hasOwnProperty('monthlyInterestRate')) {
        obj['monthlyInterestRate'] = ApiClient.convertToType(data['monthlyInterestRate'], 'String');
      }
      if (data.hasOwnProperty('taxes')) {
        obj['taxes'] = ApiClient.convertToType(data['taxes'], 'String');
      }
      if (data.hasOwnProperty('taxesPercentage')) {
        obj['taxesPercentage'] = ApiClient.convertToType(data['taxesPercentage'], 'String');
      }
    }
    return obj;
  }

  /**
   * Amount for the current installment payment.  This field is supported only for CyberSource through VisaNet.  For details, see `installment_amount` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Frequency of the installment payments. When you do not include this field in a request for a Crediario installment payment, CyberSource sends a space character to the processor.  For details, see `installment_frequency` field description in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for CyberSource through VisaNet. Possible values: - `B`: Biweekly - `M`: Monthly - `W`: Weekly  For Crediario installment payments, the value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR9 - Position: 41 - Field: Installment Frequency  For details, see \"Installment Payments\" in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} frequency
   */
  exports.prototype['frequency'] = undefined;
  /**
   * #### American Express Direct, Cielo, and CyberSource Latin American Processing Flag that indicates the type of funding for the installment plan associated with the payment.  Possible values: - `1`: Merchant-funded installment plan - `2`: Issuer-funded installment plan If you do not include this field in the request, CyberSource uses the value in your CyberSource account.  To change the value in your CyberSource account, contact CyberSource Customer Service. For details, see `installment_plan_type` field description in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### CyberSource through VisaNet and American Express Defined code that indicates the type of installment plan for this transaction.  Contact American Express for: - Information about the kinds of installment plans that American Express provides - Values for this field  For installment payments with American Express in Brazil, the value for this field corresponds to the following data in the TC 33 capture file*: - Record: CP07 TCR3 - Position: 5-6 - Field: Plan Type  * The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant’s acquirer, who uses this information to facilitate end-of-day clearing processing with payment card companies.  #### CyberSource through VisaNet with Visa or Mastercard Flag indicating the type of funding for the installment plan associated with the payment. Possible values: - 1 or 01: Merchant-funded installment plan - 2 or 02: Issuer-funded installment plan - 43: Crediario installment plan—only with Visa in Brazil For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  For installment payments with Visa in Brazil, the value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP07 TCR1 - Position: 5-6 - Field: Installment Type  For all other kinds of installment payments, the value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR5 - Position: 39-40 - Field: Installment Plan Type (Issuer or Merchant) 
   * @member {String} planType
   */
  exports.prototype['planType'] = undefined;
  /**
   * Installment number when making payments in installments. Used along with `totalCount` to track which payment is being processed.  For example, the second of 5 payments would be passed to CyberSource as `sequence` = 2 and `totalCount` = 5.  For details, see \"Installment Payments\" in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### Chase Paymentech Solutions and FDC Compass This field is optional because this value is required in the merchant descriptors. For details, see \"Chase Paymentech Solutions Merchant Descriptors\" and \"FDC Compass Merchant Descriptors\" in the [Merchant Descriptors Using the SCMP API] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/)  #### CyberSource through VisaNet When you do not include this field in a request for a Crediario installment payment, CyberSource sends a value of 0 to the processor.  For Crediario installment payments, the value for this field corresponds to the following data in the TC 33 capture file*: - Record: CP01 TCR9 - Position: 38-40 - Field: Installment Payment Number  * The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant’s acquirer, who uses this information to facilitate end-of-day clearing processing with payment card companies. 
   * @member {Number} sequence
   */
  exports.prototype['sequence'] = undefined;
  /**
   * Total amount of the loan that is being paid in installments. This field is supported only for CyberSource through VisaNet.  For details, see \"Installment Payments\" in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Total number of installments when making payments in installments.  For details, see \"Installment Payments\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### Chase Paymentech Solutions and FDC Compass This field is optional because this value is required in the merchant descriptors.  For details, see \"Chase Paymentech Solutions Merchant Descriptors\" and \"FDC Compass Merchant Descriptors\" in the [Merchant Descriptors Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/)  #### American Express Direct, Cielo, and Comercio Latino This value is the total number of installments you approved.  #### CyberSource Latin American Processing in Brazil This value is the total number of installments that you approved. The default is 1.  #### All Other Processors This value is used along with _sequence_ to track which payment is being processed.  For example, the second of 5 payments would be passed to CyberSource as _sequence_ = 2 and _totalCount_ = 5.  #### CyberSource through VisaNet For Crediario installment payments, the value for this field corresponds to the following data in the TC 33 capture file*: - Record: CP01 TCR9 - Position: 23-25 - Field: Number of Installments  For installment payments with American Express in Brazil, the value for this field corresponds to the following data in the TC 33 capture file*: - Record: CP07 TCR3 - Position: 7-8 - Field: Number of Installments  For installment payments with Visa in Brazil, the value for this field corresponds to the following data in the TC 33 capture file*: - Record: CP07 TCR1 - Position: 7-8 - Field: Number of Installments  For all other kinds of installment payments, the value for this field corresponds to the following data in the TC 33 capture file*: - Record: CP01 TCR5 - Position: 20-22 - Field: Installment Total Count  **Note** The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant’s acquirer, who uses this information to facilitate end-of-day clearing processing with payment card companies. 
   * @member {Number} totalCount
   */
  exports.prototype['totalCount'] = undefined;
  /**
   * Date of the first installment payment. Format: YYMMDD. When you do not include this field, CyberSource sends a string of six zeros (000000) to the processor. For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on CyberSource through VisaNet.  The value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR9 - Position: 42-47 - Field: Date of First Installment 
   * @member {String} firstInstallmentDate
   */
  exports.prototype['firstInstallmentDate'] = undefined;
  /**
   * Amount of the first installment payment. The issuer provides this value when the first installment payment is successful. This field is supported for Mastercard installment payments on CyberSource through VisaNet in all countries except Brazil,Croatia, Georgia, and Greece. The value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR5 - Position: 23-34 - Field: Amount of Each Installment 
   * @member {String} firstInstallmentAmount
   */
  exports.prototype['firstInstallmentAmount'] = undefined;
  /**
   * Invoice information that you want to provide to the issuer. This value is similar to a tracking number and is the same for all installment payments for one purchase.  This field is supported only for installment payments with Mastercard on CyberSource through VisaNet in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP07 TCR4 - Position: 51-70 - Field: Purchase Identification 
   * @member {String} invoiceData
   */
  exports.prototype['invoiceData'] = undefined;
  /**
   * Payment plan for the installments.  Possible values: - 0 (default): Regular installment. This value is not allowed for airline transactions. - 1: Installment payment with down payment. - 2: Installment payment without down payment. This value is supported only for airline transactions. - 3: Installment payment; down payment and boarding fee will follow. This value is supported only for airline transactions. - 4: Down payment only; regular installment payment will follow. - 5: Boarding fee only. This value is supported only for airline transactions.  This field is supported only for installment payments with Visa on CyberSource through VisaNet in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP07 TCR1 - Position: 9 - Field: Merchant Installment Supporting Information 
   * @member {String} paymentType
   */
  exports.prototype['paymentType'] = undefined;
  /**
   * Additional costs charged by the issuer to fund the installment payments.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 128-139 - Field: Total Other Costs 
   * @member {String} additionalCosts
   */
  exports.prototype['additionalCosts'] = undefined;
  /**
   * Additional costs divided by the amount funded.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 140-143 - Field: Percent of Total Other Costs 
   * @member {String} additionalCostsPercentage
   */
  exports.prototype['additionalCostsPercentage'] = undefined;
  /**
   * Amount funded.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 48-59 - Field: Total Amount Funded 
   * @member {String} amountFunded
   */
  exports.prototype['amountFunded'] = undefined;
  /**
   * Amount requested divided by the amount funded.  For example: - A value of 90.0 specifies 90%. - A value of 93.7 specifies 93.7%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 60-63 - Field: Percent of Amount Requested 
   * @member {String} amountRequestedPercentage
   */
  exports.prototype['amountRequestedPercentage'] = undefined;
  /**
   * Annual cost of financing the installment payments.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 158-164 - Field: Annual Total Cost of Financing 
   * @member {String} annualFinancingCost
   */
  exports.prototype['annualFinancingCost'] = undefined;
  /**
   * Annual interest rate.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 151-157 - Field: Annual Interest Rate 
   * @member {String} annualInterestRate
   */
  exports.prototype['annualInterestRate'] = undefined;
  /**
   * Expenses charged by the issuer to fund the installment payments.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 64-75 - Field: Total Expenses 
   * @member {String} expenses
   */
  exports.prototype['expenses'] = undefined;
  /**
   * Expenses divided by the amount funded.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 76-79 - Field: Percent of Total Expenses 
   * @member {String} expensesPercentage
   */
  exports.prototype['expensesPercentage'] = undefined;
  /**
   * Fees charged by the issuer to fund the installment payments.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 80-91 - Field: Total Fees 
   * @member {String} fees
   */
  exports.prototype['fees'] = undefined;
  /**
   * Fees divided by the amount funded.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on CyberSource through VisaNet.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 92-95 - Field: Percent of Total Fees 
   * @member {String} feesPercentage
   */
  exports.prototype['feesPercentage'] = undefined;
  /**
   * Insurance charged by the issuer to fund the installment payments.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 112-123 - Field: Total Insurance 
   * @member {String} insurance
   */
  exports.prototype['insurance'] = undefined;
  /**
   * Insurance costs divided by the amount funded.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 124-127 - Field: Percent Of Total Insurance 
   * @member {String} insurancePercentage
   */
  exports.prototype['insurancePercentage'] = undefined;
  /**
   * Monthly interest rate.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 144-150 - Field: Monthly Interest Rate 
   * @member {String} monthlyInterestRate
   */
  exports.prototype['monthlyInterestRate'] = undefined;
  /**
   * Taxes collected by the issuer to fund the installment payments.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 96-107 - Field: Total Taxes 
   * @member {String} taxes
   */
  exports.prototype['taxes'] = undefined;
  /**
   * Taxes divided by the amount funded.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 108-111 - Field: Percent of Total Taxes 
   * @member {String} taxesPercentage
   */
  exports.prototype['taxesPercentage'] = undefined;



  return exports;
}));


