
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// Using Vue chat (Dependency) for auto scrolling up to messages.
import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('Message', require('./components/Message.vue'));

const app = new Vue({
    el: '#app',

    data: {
    	message: '',
    	messages: []
    },


    methods: {
    	sendMessgae() {
    		if (this.message.length && this.message != '') {
    			console.log(this.message);
    			this.messages.push(this.message);
    			this.message = '';
    		}
    	}
    },
});
