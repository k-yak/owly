Meteor.methods({
	speech : function(text){
		var url = Meteor.generalConfig.audio_url + 
					Meteor.generalConfig.audio_lang_param + Meteor.generalConfig.audio_language +
					Meteor.generalConfig.audio_text_param + text +
					Meteor.generalConfig.audio_base_params;

		var audio = new Audio();
		audio.src = url;
		audio.play();
	}
})