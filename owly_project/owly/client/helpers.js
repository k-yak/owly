Template.speechBox.events({
  "keypress .speech-box": function (event, template) {
    if(event.which == 13) {
        event.stopPropagation();

        //your message will be send
        if(confirm(Meteor.i18n[Meteor.clientConfig.text_language].confirm_send)) {
            Meteor.owly.speech(template.firstNode.getElementsByTagName('textarea')[0].value);
            template.firstNode.getElementsByTagName('textarea')[0].value = '';
        }
    }
  }
});

Template.indexPage.helpers({
    homeTitle: Meteor.i18n[Meteor.clientConfig.text_language].home.toUpperCase(),
    createYoursTitle: Meteor.i18n[Meteor.clientConfig.text_language].createYours.toUpperCase(),
    sourcesTitle: Meteor.i18n[Meteor.clientConfig.text_language].sources.toUpperCase(),
    contactTitle: Meteor.i18n[Meteor.clientConfig.text_language].contact.toUpperCase(),
    slogan: Meteor.utils.capitaliseFirst(Meteor.i18n[Meteor.clientConfig.text_language].slogan),
});

Template.speechBox.helpers({
    infoMessage: Meteor.utils.capitaliseFirst(Meteor.i18n[Meteor.clientConfig.text_language].infoMessage)
}); 

Template.footer.helpers({
    githubFork: Meteor.utils.capitaliseFirst(Meteor.i18n[Meteor.clientConfig.text_language].githubFork),
    owlyProject: Meteor.utils.capitaliseFirst(Meteor.i18n[Meteor.clientConfig.text_language].owlyProject),
    sourceCode: Meteor.i18n[Meteor.clientConfig.text_language].sourceCode,
    createdBy: Meteor.utils.capitaliseFirst(Meteor.i18n[Meteor.clientConfig.text_language].createdBy),
    author: Meteor.i18n[Meteor.clientConfig.text_language].author,
    news: Meteor.i18n[Meteor.clientConfig.text_language].news.toUpperCase(),
    todo: Meteor.i18n[Meteor.clientConfig.text_language].todo.toUpperCase(),
    about: Meteor.i18n[Meteor.clientConfig.text_language].about.toUpperCase(),
    why: Meteor.i18n[Meteor.clientConfig.text_language].why.toUpperCase(),
    lastNews: Meteor.i18n[Meteor.clientConfig.text_language].newsList,
    lastTodos: Meteor.i18n[Meteor.clientConfig.text_language].todoList,
    aboutText: Meteor.i18n[Meteor.clientConfig.text_language].aboutText,
    whyText: Meteor.i18n[Meteor.clientConfig.text_language].whyText,
}); 