# Highlight Context values in Coveo Visit Browser

## Tampermonkey Script

Coveo Admin Browser provides a feature known as Visit Browser.  
See this link for Coveo documentation further describing Visit Browser features: https://docs.coveo.com/en/1964/analyze-usage-data/review-user-visits-with-the-visit-browser

Coveo Visit Browser allows you to inspect details of recorded end-user events, such as Queries and Clicks.

Those events often have numerous additional standard and custom attributes / dimensions available.

This Tampermonkey script provides a simple method to highlight (in color) certain values (such as custom context dimensions) displayed in Visit Browser events.

![Visit Browser with Highlights](https://drive.google.com/uc?id=1IMy30bPZre8pDkGfAccs_6FIlVLByocL&export=download)

The script can easily be customized for your Coveo org.
See the commented code inside of the Script that describes suggested changes to two constants, **MYORG** and **CONTEXTLABELS**.

### TO USE THIS SCRIPT.

1. Install Tampermonkey
2. Open Tampermonkey in your Browser
3. Choose "Utilities" tab.
4. Paste the following URL into "Import from URL" and choose "Install".
    ! [https://raw.githubusercontent.com/bradphi/tampermonkey/main/Highlight%20Context%20values%20in%20Visit%20Browser%20-%20Barca.js?token=GHSAT0AAAAAACD7M7TLUNU4XATYXN2WCOPEZEQ6P6A](https://raw.githubusercontent.com/bradphi/tampermonkey/main/Highlight%20Context%20values%20in%20Visit%20Browser%20-%20Barca.js?token=GHSAT0AAAAAACD7M7TLUNU4XATYXN2WCOPEZEQ6P6A) 
5. Optionally modify the 2 constant values.
6. Test on your Coveo Admin Browser's Visit Browser.

```JavaScript
// ************************************************** //
// ** EASILY CUSTOMIZABLE FOR YOUR ORGS            ** //
// ** SIMPLY CHANGE TWO VALUES AS DESCRIBED BELOW. ** //
// ************************************************** //
//
// ******************************************** //
// ** For your Coveo org, ADD ORG NAME below ** //
// ******************************************** //
const MYORG = "barcagroupproductionkwvdy6lp";
// *************************************************************************** //
// ** For your Coveo org, ADD comma separated DIMENSION values to contextLabels below ** //
// ** For example in a Workplace scenario, if you have two custom Dimensions showing...
// ** as Context in your Visit Browser, you would populate:
// ** const CONTEXTLABELS = ["Employee Department", "Tenure With Company"];
// ** NOTE: You can add other standard Visit Browser labels such as "Number of Results" if desired.
// *************************************************************************** //
const CONTEXTLABELS = ["Interests", "Products Owned"];
...
```
