<template>
    <el-row type="flex" justify="center">
        <el-col  :span="6" >
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img :src=user_information.avatar_url class="image">
                <div style="padding: 14px;">
                    <h3 v-if="user_information.name">
                        Nombre: {{user_information.name}}
                    </h3>
                    <h3 v-if="user_information.login">
                        Usuario: {{user_information.login}}
                        </h3>
                    <h3 v-if="user_information.bio">
                        Biografia:{{user_information.bio}}
                    </h3>
                </div>
            </el-card>
         
        </el-col>
        <el-col :offset="6"  :span="6">
            <h1>Followers</h1>
               <el-progress type="dashboard" :percentage="user_information.followers"></el-progress>
        </el-col>
    </el-row>
</template>

<script>
import axios from 'axios';

export default {
    data:()=>({
        user_information:[]
    }),

    computed:{
        api() {
            return this.$route.params.api;
        },
        user_data(){
            return this.$route.params.row;
        },
        login(){
            return this.$route.params.row.login
        }
    },

    async mounted(){
        let base = null;
        let username = null;
        let config = null;

        if(this.api === 'gitlab'){
            base = process.env.VUE_APP_GITLAB_BASE_URL;
            username = `${this.user_data.id}`;
            config = {
                headers: {
                'Authorization': `Bearer ${process.env.VUE_APP_GITLAB_TOKEN}`
                }
            }
        }
		else{
            base = process.env.VUE_APP_GITHUB_BASE_URL;
            username = `${this.login}`;	
            console.log(this.login)
        }

        try {
            const {data} = await axios.get(`${base}/users/${username}`, config)
            
            
            this.user_information = data;

        } catch (error) {
            console.log(error)
        }

    }
}
</script>

<style scoped>
 .image {
    width: 100%;
    display: block;
  }
</style>