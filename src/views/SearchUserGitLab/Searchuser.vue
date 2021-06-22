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
	  		        <p class="title is-2">@{{ name }}</p>
	  		      </div>
	  		    </div>

	  		    <div class="content">
	  		    	<div class="columns">
	  		    		<div class="column">
	  		    			<a :href="'https://gitlab.com/users/' + username" target="_blank" class="button is-link">Ver Perfil</a>
	  		    		</div>
	  		    		<div class="column">
	  		    			<a :href="'https://gitlab.com/users/' + username + '/projects'" target="_blank" class="button is-link">Ver Repos</a>
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
		data() {
			return {
				avatar_url: this.$route.params.item.avatar_url,
				username: this.$route.params.item.username,
				name: this.$route.params.item.name
			}
		},

		methods: {
			back() {
				window.history.back();
			}
		}
	};
</script>