
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

        chat: {
        	messages: [],
            color: [],
            user: [],
            time: []
        },

        typing: '',
    },

    watch: {
        message() {
            Echo.private('chat')
            .whisper('typing', {
                name: this.message
            });
        }
    },

    methods: {
    	sendMessgae() {
    		if (this.message.length && this.message != '') {
                // Ajax Request
                axios.post('send', {
                    message: this.message
                })
                .then(response => {
                  // JSON responses are automatically parsed.
                    this.chat.messages.push(this.message);
                    this.chat.user.push('you');
                    this.chat.color.push('success');
                    this.chat.time.push(this.getTime());
                    this.message = '';
                })
                .catch(e => {
                  this.errors.push(e)
                })
    		}
    	},

        getTime(){
            let time = new Date();
            return time.getHours()+ ":" + time.getMinutes();
        }
    },

    mounted() {
        Echo.private('chat')
        .listen('ChatEvent', (e) => {
            this.chat.messages.push(e.message);
            this.chat.user.push(e.user);
            this.chat.color.push('warning');
            this.chat.time.push(this.getTime());
        })
        .listenForWhisper('typing', (e) => {
            console.log(e.name);
            if (e.name != '') {
                this.typing = 'typing...';
            }else {
                this.typing = '';
            }
        });
    }
});
