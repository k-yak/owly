var _deps_lang = new Deps.Dependency;
var _deps_conf = new Deps.Dependency;


Template.speechBox.events({
  "keypress .speech-box": function (event, template) {
    if(event.which == 13) {
        event.preventDefault();

        //your message will be send
        if(confirm(Meteor.i18n[Meteor.clientConfig.text_language].confirm_send)) {
            //client one
            if(Meteor.clientConfig.localSound){
                Meteor.owly.speech(template.firstNode.getElementsByTagName('textarea')[0].value);
            }
            //server one
            Meteor.call('speech', template.firstNode.getElementsByTagName('textarea')[0].value);
            template.firstNode.getElementsByTagName('textarea')[0].value = '';
        }
    }
  }
});

Template.indexPage.helpers({
    homeTitle: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].home.toUpperCase()
    },
    createYoursTitle: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].createYours.toUpperCase()
    },
    sourcesTitle: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].sources.toUpperCase()
    },
    contactTitle: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].contact.toUpperCase()
    },
    slogan: function(){
        _deps_lang.depend();
        Meteor.utils.capitaliseFirst(Meteor.i18n[Meteor.clientConfig.text_language].slogan)
    },
});

Template.speechBox.helpers({
    infoMessage: Meteor.utils.capitaliseFirst(Meteor.i18n[Meteor.clientConfig.text_language].infoMessage)
}); 

Template.footer.helpers({
    githubFork: function(){
        _deps_lang.depend();
        return Meteor.utils.capitaliseFirst(Meteor.i18n[Meteor.clientConfig.text_language].githubFork);
    },
    owlyProject: function(){
        _deps_lang.depend();
        return Meteor.utils.capitaliseFirst(Meteor.i18n[Meteor.clientConfig.text_language].owlyProject)
    },
    sourceCode: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].sourceCode
    },
    createdBy: function(){
        _deps_lang.depend();
        return Meteor.utils.capitaliseFirst(Meteor.i18n[Meteor.clientConfig.text_language].createdBy)
    },
    author: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].author
    },
    news: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].news.toUpperCase()
    },
    todo: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].todo.toUpperCase()
    },
    about: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].about.toUpperCase()
    },
    why: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].why.toUpperCase()
    },
    lastNews: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].newsList
    },
    lastTodos: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].todoList
    },
    aboutText: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].aboutText
    },
    whyText: function(){
        _deps_lang.depend();
        return Meteor.i18n[Meteor.clientConfig.text_language].whyText
    },
});

Template.headerIconBar.events({
    "click .french": function (event, template) {
        Meteor.clientConfig.text_language = "fr";
        Meteor.generalConfig.audio_language = "fr-fr";
        _deps_lang.changed();
    },
    "click .english": function (event, template) {
        Meteor.clientConfig.text_language = "en";
        Meteor.generalConfig.audio_language = "en-us";
        _deps_lang.changed();
    },
    "click .local-sound": function (event, template) {
        Meteor.clientConfig.localSound = (Meteor.clientConfig.localSound)? false: true;
        _deps_conf.changed();
    }
});

Template.headerIconBar.helpers({
    isFrench: function(){
        _deps_lang.depend();
        return (Meteor.clientConfig.text_language == 'fr');  
    },
    isEnglish: function(){
        _deps_lang.depend();
        return (Meteor.clientConfig.text_language == 'en');  
    },
    localSoundEnable: function(){
        _deps_conf.depend();
        return Meteor.clientConfig.localSound;  
    }
});