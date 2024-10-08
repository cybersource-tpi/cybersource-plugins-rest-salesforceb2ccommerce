## <ins>Configure the Cartridge

### **Prerequisite**
If you are new to Cybersource, and would like to start using Cybersource Cartridge quickly, begin by [signing up for a Sandbox Account](https://developer.cybersource.com/hello-world/sandbox.html).

You will also need to create an [API Key and API Shared Secret Key](https://developer.cybersource.com/api/developer-guides/dita-gettingstarted/authentication/createSharedKey.html) that you can use to authenticate requests to our sandbox server. Follow same steps to generate Production key and shared secret.

### Step 1: Setup Cartridge Path

To set up the cartridge path:
1. In the Business Manager, go to **Administration >  Sites >  Manage Sites > [yourSite] > Settings**

2. For the Cartridges, enter **int_cybs_sfra:int_cybs_sfra_base:app_storefront_base** and select **Apply**

### Step 2: Upload metadata
The Cybersource Cartridge contains metadata that needs to be imported. 
1. Go to **Cybersource/metadata/payments_metadata/sites/** folder.
2. Rename **yourSiteID** folder name with your site ID in Business Manager (this can be found by looking up **Administration->Sites->Manage Sites**)
3. Zip **payments_metadata** folder.
4. Go to **Administration->Site Development->Site Import & Export** and upload **payments_metadata.zip** file.
5. Import the uploaded zip file.

On successful import, it creates following metadata.

- Site Preferences (Cybersource_Core, Cybersource_ _DeliveryAddressVerification, Cybersource_DeviceFingerprint, Cybersource_FlexMicroform, Cybersource_PayerAuthentication, Cybersource_TaxConfiguration, Cybersource_Tokenization, Cybersource_DecisionManager)
- Service (PaymentHttpService)
- Payment Processor (Payments_Credit)
- Payment Method
- Job (Payment: Decision Manager Order Update)

#### Cybersource Core (Required)

Step 1: Upload Cybersource metadata in Business Manager. If not follow "Step 2: Upload metadata" or import **"metadata/payment_metadata/meta/Core.xml"** in Business Manager (**Administration > Site Development > Import & Export**)

Step 2: Go to **Merchant Tools > Site Preferences > Custom Preferences > Cybersource Core** and set values for the following parameters:

Field | Description
------------ | -------------
Enable Cybersource Cartridge | Enable or disable Cyberdource Cartridge. If disabled none of the Cybersource services are invoked
Cybersource MerchantID | Cybersource Merchant ID
Cybersource REST KeyId | Cybersource REST Key ID
Cybersource REST Secret Key | Cybersource REST Secret Key
Developer ID | Unique identifier generated by Cybersource for System Integrator
Credit/Debit Card Transaction Type | Select Sale/Auth Transaction Type
CommerceIndicator | Select MOTO/Internet

#### Services (Required)

Step 1: Upload Cybersource metadata in Business Manager. If not follow "Step 2: Upload metadata" or import **"metadata/payment_metadata/meta/Payment-Services.xml"** in Business Manager (**Administration >  Operations >  Import & Export**).

Step 2: Go to **Administration >  Operations >  Services** and click on the **Payment Credentials** of the service.

Setp 3: Make sure the URL are appropriate
Test URL **"https://apitest.cybersource.com"** 
PRODUCTION URL **"https://api.cybersource.com"**.

#### Payment Processor (Required)

Step 1: Upload Cybersource metadata in Business Manager. If not follow "Step 2: Upload metadata" or import **"metadata/payment_metadata/sites/yourSiteID/payment-processors.xml"** in Business Manager (**Merchant Tools >  Ordering >  Import & Export**).



<div style="text-align: right;font-size: 20px" ><a href="Configure-payment-method.md">Next Step: Configure the Payment method</a></div> 



---