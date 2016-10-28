import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Profiles = new Mongo.Collection('Profiles');

/**
 * Create the schema for Stuff
 */
export const ProfilesSchema = new SimpleSchema({
  name: {
    label: 'name',
    type: String,
    optional: false,
    max: 2000,
  },

  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 200,
  },

  bio: {
    label: 'bio',
    type: String,
    optional: true,
    defaultValue: '',
    max: 500,
  },
});

Profiles.attachSchema(ProfilesSchema);
