import * as  user from "./models/user";
import Vue from "vue/dist/vue.esm"


new Vue({
    el: "#demo",
    data() {
        return {
            appName: '测试Demo',
            superFamily : new user.SuperFamily()
        }
    },
    mounted() {
        this.superFamily.AddFamily(new user.Family(1, '第No.101家', new user.Location(12, 14)))
        console.log(this.superFamily)
    },
    methods: {
        add: function () {
            this.superFamily.AddFamily(new user.Family(1, '第No.101家', new user.Location(12, 14)))
        },
        remove:function(){

        }
    }
})
