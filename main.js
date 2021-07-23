var app = new Vue ({
    el:'#app',
    data : {
        message: 'Hello Vue.js!',
        name:'키메라',
        list: [
            { id:1, name: '슬라임', hp: 100},
            { id:2, name: '고블린', hp: 200},
            { id:3, name: '드래곤', hp: 300},
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
        },
        doAdd: function(){
            let max = this.list.reduce(function(a,b){
                return a > b.id ? a : b.id
            },0)
            this.list.push({
                id:max+1,
                name: this.name,
                hp:500
            })
        },
        doDelete: function(index){
            this.list.splice(index, 1)
        }
    }
})