<template>
    <div>
        <li class="list-group-item message-list-item" :class="className"><slot></slot></li>
        <small class="badge badge-pill float-right" :class="className"> {{user}} </small>
    </div>
</template>

<script>
    export default {

        props: [
            'color',
            'user'
        ],

        computed:{
            className() {
                return 'list-group-item-' + this.color
            }
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
