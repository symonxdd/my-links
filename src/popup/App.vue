<template>
	<div class="popup">
		<Header></Header>
		<div class="error-message" v-if="$store.state.error">
			<div v-html="$store.state.error"></div>
		</div>
		<router-view />
	</div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
	name: "App",
	components: {
		Header,
	},
};
</script>

<style>
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

::-webkit-scrollbar {
	width: 4px !important; /* width of vertical scrollbar */
	height: 10px !important; /* height of horizontal scrollbar */
	border-radius: 5px;
}

::-webkit-scrollbar-track {
	background-color: transparent !important;
}

::-webkit-scrollbar-thumb {
	background-color: #494949 !important;
	border-radius: 7px !important;
}

::-webkit-scrollbar-thumb:hover {
	background-color: #5a5a5a !important;
}

a:link,
a:visited,
a:hover,
a:active {
	text-decoration: none;
}

.app {
	font-family: Montserrat, sans-serif;
	background-color: #161616;
	color: #c4c4c4;
	width: 600px;
	height: 450px;
	padding: 15px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.error-message {
	display: inline-block;
	position: relative;
	top: -45px;
	left: 140px;
	max-width: 555px;
	padding: 10px 25px;
	background-color: #702929;
	/* border: 1px solid #7e7e7e; */
	text-shadow: 0 2px 8px #252525;
	color: #cecece;
	font-weight: bold;
	border-radius: 5px;
	white-space: pre-line;
}

/* #41b883 */
/* #aa3077 */
</style>