import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('404', { path: '*path' }); // 404 Not Found
});

EmberRouter.reopen({
    notifyGoogleAnalytics: function() {
        if (typeof ga != 'function') { return; }
        return ga('send', 'pageview', {
          'page': this.get('url'),
          'title': this.get('url')
        });
    }.on('didTransition')
});

export default Router;
