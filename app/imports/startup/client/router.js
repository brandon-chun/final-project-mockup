import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/about', {
  name: 'About_Us',
  action() {
    BlazeLayout.render('App_Body', { main: 'About_Us' });
  },
});

FlowRouter.route('/profile', {
  name: 'Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile_Page' });
  },
});

FlowRouter.route('/events', {
  name: 'Events_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Events_Page' });
  },
});

FlowRouter.route('/buy', {
  name: 'Buy_Tickets_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Buy_Tickets_Page' });
  },
});

FlowRouter.route('/sell', {
  name: 'Sell_Tickets_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Sell_Tikets_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
