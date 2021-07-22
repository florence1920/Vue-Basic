var app = new Vue ({
    el:'#app',
    data : {
        message: 'Hello Vue.js!',
        list: [
            'a',
            'b',
            'c'
        ],
        formMessage : '초기 메시지',
        show : false,
        count : 0
    },
    methods:{
        handleClick : function(e){
            alert(e.target);
        },
        increment : function(){
            this.count++;
            console.log(this);
        }
    }
})