// ==UserScript==
// @name         Highlight Context values in Visit Browser - Barca
// @namespace    http://tampermonkey.net/
// @version      0.2
// @downloadURL  https://drive.google.com/uc?export=download&id=1I7dbV0lDn69UkskWLcIh18xNWQ6QexOn
// @updateURL    https://drive.google.com/uc?export=download&id=1I7dbV0lDn69UkskWLcIh18xNWQ6QexOn
// @description  Provide Visual highlight for demos of Visit Browser so custom dimensions are clearly displayed.
// @author       Brad Phillips
// @match        https://platform.cloud.coveo.com/admin*
// @icon         https://avatars.githubusercontent.com/u/8632328?s=200&v=4
// @grant        GM_addStyle
// ==/UserScript==
//

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
// **   For example in a Workplace scenario, if you have two custom Dimensions showing...
// **      as Context in your Visit Browser, you would populate:
// **   const CONTEXTLABELS = ["Employee Department", "Tenure With Company"];
// **      NOTE: You can add other standard Visit Browser labels such as "Number of Results" if desired.
// *************************************************************************** //
const CONTEXTLABELS = ["Interests", "Products Owned"];
//
let style = "";
//
//
// ** For each value in CONTEXTLABELS, this function creates appropriate style ** //
function createCSS(value) {
    style += `div.box:has(> div[data-dimension="${value}"]) > div `;
    style += `{color: blue;} `;
}
//
// MutationObserver code is to handle URL updating during login, since the Org name does not immediately appear in URL.
const observer = new MutationObserver(function (mutations) {
    debugger;
    // By the time that a Mutation is noticed, we should have the full URL.
    /*
    for(let mutation of mutations) {
        console.log("mutation.type = " + mutation.type);
        // examine new nodes
        for(let node of mutation.addedNodes) {
            // Many additional node attributes are available if desired.  May be used to watch for specific HTML tags.
            console.log("node = " + node);
            console.log("proto = " + Object.getPrototypeOf(node));
        }
    }
    */
    console.log("location.hash = " + location.hash);
    if (location.hash.length > 0) {
        console.log(`URL changed to ${location.href}`);
        console.log("We have Org name in hash by now");
        observer.disconnect(); // Mutation observer was only needed until we received the Org name part of URL hash.

        // ********************************************************************************************************************************************************* //
        // ** Since Coveo Admin is an SPA, the normal TamperMonkey behavior is that this script will only run on the first opened Admin Browser page...           ** //
        // **   We could try to detect changes in hash pattern, but we don't need to since it doesn't hurt to have this small bit of...                           ** //
        // **   injected style active on any / all Content Browser features (i.e., it is specific enough CSS so won't affect anything other than Visit Browser).  ** //
        // ********************************************************************************************************************************************************* //
        var visitBrowserURLHostPattern = `.*#\/${MYORG}.*`;
        var re = new RegExp(visitBrowserURLHostPattern, "g");
        let desiredURL = re.test(location.hash);
        if (desiredURL) {
            // We are on our Org's Admin Browser, so can proceed with inserting Style.
            CONTEXTLABELS.forEach(createCSS);
            GM_addStyle(style);
        }
    }
});
const config = { subtree: true, childList: true };
console.log(
    `When we first load this TM script the URL is (currently) ${location.href}`
);
observer.observe(document, config); // start the mutation observer. When it notices a mutation in the dom, we should have our full URL.
