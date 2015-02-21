// app/components/zz-alert.js

import Ember from 'ember';

// A smart alert with styling and icon for Ember.js
//
// @module components
// @class  zz-alert
//

export default Ember.Component.extend( {

  // Dependencies
  //

  // Attributes
  //

  // Array of class names for the alert's div
  //
  // @property {Ember.Array} classNames
  //
  classNames: ['alert', 'zz-alert'],

  // Array of class name bindings for the alert's div
  //
  // @property {Ember.Array} classNameBindings
  //
  classNameBindings: ['themeClassName', 'dismissable:alert-dismissable'],


  // The ARIA role attribute for the alert's div
  //
  // @property {Ember.String} ariaRole
  // @default  "alert"
  //
  ariaRole: 'alert',

  // -------------------------------------------------------------------------
  // Actions

  // Actions for the alert component
  //
  // @property {Ember.Object} actions
  //
  actions: {


    // Trigger a bound "dismiss" action when the alert is dismissed
    //
    // @function actions.dismiss
    // @returns  {void}
    //
    dismiss: function() {
      this.sendAction( 'dismiss' );
    }
  },

  // Events

  // Properties


  // Whether to make the alert dismissable or not
  //
  // @property {boolean} dismissable
  // @default  false
  //
  dismissable: false,


  // The Bootstrap "theme" style to apply to the alert
  //
  // @property {Ember.String} theme
  // @default  "info"
  //
  theme: 'info',

  // Observers

  // Methods

  // The label of the alert
  //
  // @function labelContent
  // @observes label
  // @public
  //
  labelContent: (function() {
    return this.get('label');
  }).property('label'),

  // The generated Bootstrap "theme" style class for the alert
  //
  // @function themeClassName
  // @observes theme
  // @returns  {Ember.String}  Defaults to "alert-info"
  //
  themeClassName: function() {
    return 'alert-' + this.get( 'theme' );
  }.property( 'theme' )

});
