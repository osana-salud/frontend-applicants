<template>
	<div>
		<br>
		<div class="columns">
			<div class="column is-one-fifth">
				<button class="button is-success is-outlined" @click="back">
					<div class="icon-text">
					  <span class="icon has-text-success">
					    <i class="fas fa-arrow-left"></i>
					  </span>
					  <span>Back</span>
					</div>
				</button>
			</div>
		</div>
		<div class="columns" style="padding: 1em;">
		  <div class="column"></div>
		  <div class="column is-two-fifths">
		  	<div class="card">
	  		  <div class="card-image">
	  		    <figure class="image is-2by2">
	  		      <img :src="avatar_url" alt="Placeholder image">
	  		    </figure>
	  		  </div>
	  		  <div class="card-content">
	  		    <div class="media">
	  		      <div class="media-content">
	  		        <p class="title is-2">@{{ login }}</p>
	  		      </div>
	  		    </div>

	  		    <div class="content">
	  		    	<div class="columns">
	  		    		<div class="column">
	  		    			<a :href="'https://github.com/' + username" target="_blank" class="button is-link">Ver Perfil</a>
	  		    		</div>
	  		    		<div class="column">
	  		    			<a :href="'https://github.com/' + username + '?tab=repositories'" target="_blank" class="button is-link">Ver Repos</a>
	  		    		</div>
	  		    	</div>
	  		    </div>
	  		  </div>
	  		</div>
		  </div>
		  <div class="column"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SearchuserGitHub',
		data() {
			return {
				avatar_url: this.$route.params.item.avatar_url,
				username: null,
				login: null
			}
		},

		created() {
			this.getDataUserName();
			this.getDataLogin();
		},

		methods: {
			back() {
				window.history.back();
			},
			getDataUserName() {
				this.username = this.$route.params.item.login;
			},
			getDataLogin() {
				this.login = this.$route.params.item.login;
			}
		}
	};
</script>