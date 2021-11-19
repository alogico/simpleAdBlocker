
 let blocked_domains =[
    "*://*.doubleclick.net/*",
    "*://*.googlesusercontent.com/*",
    "*://*.repstatic.it/cless/common/promo_editoriali/repubblica/*",
    "*://*.neodatagroup.com/*",
    "*://*.repstatic.it/paywall/*",
    "*://*.googlesyndication.com/*",
    "*://*.taboola.com/*",
    "*://.asadcdn.com/*"
    
 ];



//var enabled = true;

chrome.webRequest.onBeforeRequest.addListener(
    function(details){return{cancel:true}},
    { urls: blocked_domains
        /*[
            "*://*.doubleclick.net/*",
            "*://*.googlesusercontent.com/*",
            "*://*.repstatic.it/cless/common/promo_editoriali/repubblica/*",
            "*://*.neodatagroup.com/*",
            "*://*.repstatic.it/paywall/*",
            "*://*.googlesyndication.com/*",
            "*://*.taboola.com/*",
            "*://.asadcdn.com/*",
            
        ]*/
    },
    ["blocking"]
);