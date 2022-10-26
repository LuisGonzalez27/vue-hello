"use strict";


// console.log(Vue);

const { createApp } = Vue;

const myApp = createApp({
    data() {
        return {
            message: 'Hello World !',
            myImage : './img/Logo.png'
        }
    }
});
myApp.mount('#myApp');