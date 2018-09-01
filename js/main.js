 window.onload = function () {
     new Vue({
         el:"#myBox",
         data:{
             myData:[],
             userName:"",
             userAge:"",
             tindex:-100
         },
         methods:{
             add:function () {
                 this.myData.push({
                     name:this.userName,
                     age:this.userAge
                 });
                 this.userName = "";
                 this.userAge = "";
             },
             resetInfo:function(){
                 this.userName = "";
                 this.userAge = "";
             },
             deleteInfo:function (num) {
                 this.myData.splice(num,1);
             },
             deleteAll:function () {
                 this.myData="";
             }
         }
     })
 }

