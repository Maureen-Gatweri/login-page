var cookieDuration=365,cookieName="complianceCookie",cookieValue="accepted";$(function(){getCookie(window.cookieName)!=window.cookieValue&&($(".js-c-cookie-message__button--accept").on("click",function(){setCookie(window.cookieName,window.cookieValue,window.cookieDuration),$(".js-c-cookie-message").slideUp(700,"easeInOutExpo",function(){location.reload()})}),$(".js-c-cookie-message__close").on("click",function(){setCookie(window.cookieName,"denied",window.cookieDuration),$(".js-c-cookie-message").slideUp(700,"easeInOutExpo",function(){location.reload()})}))});