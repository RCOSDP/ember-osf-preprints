import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL,
});

Router.map(function() {
    this.route('submit');
    this.route('discover');
    this.route('content', { path: '/:preprint_id' });
    this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;
