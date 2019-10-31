import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

/* global window */
Ember.Router.reopen({
	notifyGoogleAnalytics: Ember.on('didTransition', function() {
		if (!ga) { return; }
		return ga('send', 'pageview', {
			'page': this.get('url'),
			'title': this.get('url')
		});
	})
});

loadInitializers(App, config.modulePrefix);

export default App;
