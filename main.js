var app = new Vue ({
    el:'#app',
    data : {
        message: 'Hello Vue.js!',
        list: [
            'a',
            'b',
            'c'
        ],
    },
    methods:{
        handleClick : function(e){
            alert(e.target);
        }
    }
})