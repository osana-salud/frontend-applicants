<template>
	<div class="container">
		
		<el-row type="flex" justify="center">
			<el-col :span="6">
			<el-select class="total-width" v-model="api" placeholder="Seleccione una API">
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			</el-col>
		</el-row>

		<el-row type="flex" justify="center">
			<el-col :span="6">
					<el-input class="total-width" placeholder="Escriba un usuario" v-model="search_info">
			</el-input>
			</el-col>
		

		</el-row>

		<el-row type="flex" justify="center">
			<el-col :span="6">
			<el-button class="total-width" @click="searchUsers">
				Buscar Usuarios
			</el-button>
			</el-col>
		</el-row>

		<el-row type="flex" justify="center">
			<el-col :span="6">
				<el-table
					:loading="loading"
					fit
					border
					:data="users"
					@row-click="goToUserProfile">
					<el-table-column
						label="Nombre"
						>
							<template slot-scope="scope">
								{{ scope.row.login }}
								{{scope.row.name}}
							</template>
					</el-table-column>
				</el-table>
			</el-col>
		</el-row>
	</div>

</template>

<script>
import axios from 'axios';

export default {
	data: ()=>({
		loading: false,
		options: [
			{value: 'gitlab',
			label: 'Gitlab'},
			{value: 'github',
			label: 'Github'}
		],
		api: null,
		search_info: '',
		users: [],
	}),
	mounted(){
		console.log(process.env.VUE_APP_GITLAB_BASE_URL)
	},
	methods: {
		async searchUsers(){
			if(this.api === null || this.search_info === ''){
					this.$message({
						showClose: true,
						message: 'Todos los campos son requeridos',
						type: 'warning'
					});
			}else if(this.search_info.length < 4){
					this.$message({
						showClose: true,
						message: 'Se requieren 4 caracteres o más para realizar la busqueda',
						type: 'warning'
					});
			}else if(this.search_info === 'osana-salud'){
					this.$message({
						showClose: true,
						message: 'El usuario OSANA-SALUD no está permitido',
						type: 'warning'
					});
			}else{
				let url = '';
				let base = '';
				let config = null;

				if(this.api === 'gitlab'){
					base = process.env.VUE_APP_GITLAB_BASE_URL;
					url = `?scope=users&search=${this.search_info}`;
					config = {
						headers: {
						'Authorization': `Bearer ${process.env.VUE_APP_GITLAB_TOKEN}`
						}
					}
				}else{
					base = process.env.VUE_APP_GITHUB_BASE_URL;
					url = `/users?q=${this.search_info}`;
					
				}

				try {
					this.loading = true;

					const res = await axios.get(`${base}/search${url}&per_page=5`, config)

					let data = null;

					if(res.data.items){
						data = res.data.items;
					}else{
						data = res.data
					}

					this.users = data
				} catch (error) {
					console.log(error)
				}finally{
					this.loading = false;
				}
			}
		

		},

		goToUserProfile(row){
			this.$router.push({ name: 'user-api-id', params: { api:this.api, row: row, id: row.id}})
		}
	}
}
</script>

<style>
body{
	font-family: 'Libre Baskerville';
}
.total-width{
	width: 100%;
	margin-bottom: 30px
}

.container{
	margin-top: 100px
}
</style>

