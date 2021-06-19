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
	  		      <img :src="this.$route.params.item.avatar_url" alt="Placeholder image">
	  		    </figure>
	  		  </div>
	  		  <div class="card-content">
	  		    <div class="media">
	  		      <!-- <div class="media-left">
	  		        <figure class="image is-48x48">
	  		          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
	  		        </figure>
	  		      </div> -->
	  		      <div class="media-content">
	  		        <p class="title is-2">@{{ this.$route.params.item.name }}</p>
	  		      </div>
	  		    </div>

	  		    <div class="content">
	  		    	<div class="columns">
	  		    		<div class="column">
	  		    			<a :href="'https://gitlab.com/users/' + this.$route.params.item.username" target="_blank" class="button is-link">Ver Perfil</a>
	  		    		</div>
	  		    		<div class="column">
	  		    			<a :href="'https://gitlab.com/users/' + this.$route.params.item.username + '/projects'" target="_blank" class="button is-link">Ver Repos</a>
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

			}
		},

		props: ['id'],

		methods: {
			back() {
				window.history.back();
			}
		}
	};
</script>