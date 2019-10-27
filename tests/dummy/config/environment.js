'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'dummy',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    blog: {
      title: 'Post Graduation',
      description: 'Tout sur la Post Graduation en Algérie',
      coverImage: '/images/blog-cover.jpg',
      facebook: "postgraduationalgerie",
      twitter: "GraduationPost",

      navigation: [{
        label: 'Home',
        route: 'index'
      },{
        label: 'Annonce',
        link: '/tag/annonce'
      },{
        label: 'Manifestations',
        link: '/tag/manifestations'
      },{
        label: 'Bourse',
        link: '/tag/bourse'
      },{
        label: 'News',
        link: '/tag/news'
      },{
        label: 'Prix',
        link: '/tag/prix'
      },{
        label: 'Divers',
        link: '/tag/divers'
      },{
        label: 'À propos',
        route: 'page',
        id: 'about'
      }
    ]
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.googleAnalytics = {
    webPropertyId: 'UA-139856550-1'
    };
  }

  return ENV;
};
