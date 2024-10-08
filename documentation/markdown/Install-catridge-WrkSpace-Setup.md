
## <ins>Install the Cartridge and Setup Workspace

### Step 1: Install the Cartridge ###
Cybersource's REST Cartridge for Salesforce B2C Commerce can be downloaded from the Salesforce
AppExchange [link](https://www.salesforce.com/products/commerce-cloud/partner-marketplace/partners/cybersource/)

### Step 2: Setup workspace
1. Create a folder “Cybersource” in your workspace and place the cartridge (int_cybs_sfra and int_cybs_sfra_base) downloaded from Marketplace. 
2. If project setup is different, you will need to open the file ‘/package.json’ and modify the paths.base value to point to your ‘app_storefront_base’ cartridge.  This path is used by the JS and SCSS build scripts.  
3. If using VSCode install the extension Prophet Debugger [link](https://marketplace.visualstudio.com/items?itemName=SqrTT.prophet) or any other SFCC extension and include below in dw.json (). 

``` JSON
{
    "hostname": "your-sandbox-hostname.demandware.net",
    "username": "yourlogin",
    "password": "yourpwd",
    "version": "version_to_upload_to",
    "cartridge": [
        "int_cybs_sfra",
        "int_cybs_sfra_base",
        "app_storefront_base",
        "modules"
    ]
}
```
**NOTE**: If you are using different IDE, refer respective developer guide to setup the workspace. 

### Step 3: Build and Upload the code
Prerequisite: install node under "Cybersource" folder.

#### Install sgmf-scripts and copy-webpack-plugin
Install sgmf-scripts with following command 

    npm install sgmf-scripts && npm install copy-webpack-plugin

#### Compile the Code
Compile JS and SCSS with following command

    npm run compile:js && npm run compile:scss

#### Upload the code
Upload the code to Salesforce Commerce Cloud instance

    npm run uploadCartridge



<div style="text-align: right;font-size: 20px" ><a href="Configure-cartridge.md">Next Step: Configure the Cartridge</a></div> 



---


