<template>
    <div class="Login">
        <div class="login-panel">
            <div class="form-group">
                <label>username</label>
                <input type="text" class="form-control"  placeholder="username" v-model="username">
            </div>
            <div class="form-group">
                <label>password</label>
                <input type="password" class="form-control"  placeholder="Password" v-model="password">
            </div>
            <button  class="btn btn-info" @click="login()">提交</button>
        </div>     
    </div>
</template>

<script>
export default {
    data(){
        return{
                username: '',
                password: '',
                redirect: undefined 
        }
    },
    watch: {
        $route: {
        handler: function(route) {
            this.redirect = route.query && route.query.redirect
        },
        immediate: true
        }
    },
    methods:{      
        login(){
            // const params = {
            //     username: this.username,
            //     password: this.password
            // }
            const params='username=admin&password=admin';
            this.$store.dispatch('login',params).then(res=>{
                console.log(res);
                this.$router.push({ path: this.redirect || '/' })
  
            })
            .catch(err=>{
                console.log(err);
               // console.log(err)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.Login{
    width: 100vw;
    height: 100vh;
    background: url('back.jpg') no-repeat center;
    background-size: 100% 100%;
    position: relative; 
    .login-panel{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 400px;
        height: 400px;
        .title{
            text-align: center;
            font-weight: bold;
            font-size: 24px;
        }
        .form-group{
            margin: 25px 0;
        }
        .dengLu{
            margin-left: 158px;
        }
    }
}
</style>
