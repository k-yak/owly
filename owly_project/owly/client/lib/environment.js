//configuration of any client side packages
Meteor.clientConfig = {
	text_language: "fr",
    localSound: false
}

Meteor.utils = { 
	capitaliseFirst : function(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}
}