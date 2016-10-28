/**
 * Created by Brandon on 10/27/2016.
 */
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Profiles, ProfilesSchema } from '../../api/profiles/profiles.js';

/* eslint-disable object-shorthand, no-unused-vars */

const displaySuccessMessage = 'displaySuccessMessage';
const displayErrorMessages = 'displayErrorMessages';

Template.Profile_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Profiles');
});
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displaySuccessMessage, false);
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ProfilesSchema.namedContext('Profile_Page');
});


Template.Profile_Page.helpers({
  profileField(fieldName) {
    const profile = Profiles.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return profile && profile[fieldName];
  },

  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  },
});

// Template.Edit_Student_Data_Page.onRendered(function enableSemantic() {
//   const template = this;
//   template.subscribe('StudentData', () => {
//     // Use this template.subscribe callback to guarantee that the following code executes after subscriptions OK.
//     Tracker.afterFlush(() => {
//     // Use Tracker.afterFlush to guarantee that the DOM is re-rendered before calling JQuery.
//     template.$('select.ui.dropdown').dropdown();
//   template.$('.ui.selection.dropdown').dropdown();
//   template.$('select.dropdown').dropdown();
//   template.$('.ui.checkbox').checkbox();
//   template.$('.ui.radio.checkbox').checkbox();
// });
// });
// });

Template.Profile_Page.events({
  'submit .profile-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const name = event.target.name.value;
    // Get bio (text area).
    const email = event.target.email.value;

    const bio = event.target.bio.value;



    const updatedProfile = { name, email, bio };

    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    ProfilesSchema.clean(updatedProfile);
    // Determine validity.
    instance.context.validate(updatedProfile);

    if (instance.context.isValid()) {
     Profiles.update(FlowRouter.getParam('_id'), { $set: updatedProfile });

      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Profile_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});

