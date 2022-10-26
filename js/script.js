"use strict";
// console.log(Vue);

const { createApp } = Vue;

const myApp = createApp({
    data() {
        return {
            message: 'Hello World !',
            myImage : './img/Logo.png',
            myClass : 'green',
            count: 0
        }
    },
        methods: {
            changeColor(){
                this.myClass = 'blue display-6';
            },
            colorFirst(){
                this.myClass = 'green';
            }
        }
});
myApp.mount('#myApp');