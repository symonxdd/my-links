<template>
	<div class="home">
		<template v-if="$store.state.isPasswordSet">
			<template v-if="$store.state.isUserLoggedIn">
				<User></User>
			</template>
			<template v-else>
				<LoginForm></LoginForm>
			</template>
		</template>
		<template v-else>
			<User></User>
		</template>

		<!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

		<!-- Spaghetti: https://odan.github.io/2021/01/07/webpack-bootstrap-icons.html#introduction -->
		<!-- <i class="bi bi-gear" id="settings"></i> -->
		<!-- <button id="settings" v-on:click="settingsOnClick">🍑</button> -->
	</div>
</template>

<script>
import User from "@/components/User.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
	name: "Home",
	components: {
		User,
		LoginForm,
	},
	methods: {
		settingsOnClick() {
			this.$router.push("/settings");
			console.log(this.$router);
		},
	},
};
</script>

<style>
/* .popup-content {
	overflow-y: auto;
} */

/* #settings {
	position: absolute;
	background-color: transparent;
	border: none;
	top: 10px;
	right: 10px;
	font-size: 1.4rem;
	color: #9e9e9e;
	transform: scale(1.3);
	transition: all 0.3s ease-in-out;
} */

/* #settings:hover {
	transform: scale(1.5);
	color: #dadada;
	cursor: pointer;
} */

/* #settings:active {
	transform: scale(1.4);
} */
</style>
