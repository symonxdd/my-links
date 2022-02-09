<template>
	<div class="user">
		<h2>🚀 Vue is life, Vue is love</h2>
		<Presets
			v-if="settings && settings.presets"
			v-bind:presets="settings.presets"
		></Presets>
		<Links
			v-if="settings && settings.links"
			v-bind:links="settings.links"
		></Links>
	</div>
</template>

<script>
import Presets from "./Presets.vue";
import Links from "./Links.vue";

export default {
	components: {
		Presets,
		Links,
	},
	data() {
		return {
			settings: null,
			test: "",
		};
	},
	mounted() {
		chrome.runtime.sendMessage(
			{ action: "FetchUserSettings" },
			(response) => {
				this.settings = response.items;
				console.log(response);
			}
		);
	},
};
</script>

<style>
button.link:hover,
button.preset:hover {
	background-color: #3a3a3a;
	cursor: pointer;
}

button.preset,
button.link {
	overflow: hidden;
	text-overflow: ellipsis;
	width: 127px;
	margin: 5px;
	border-radius: 3px;
	background-color: #202020;
	font-size: 1.3em;
	font-family: "Montserrat", sans-serif;
	color: #c4c4c4;
	border: none;
	padding: 12px 0;
	transition: background-color 0.3s ease-in-out;
}

h3 {
	text-align: center;
	margin: 10px 0 25px;
	border-radius: 8px;
	background-color: #3d384e;
	padding: 10px 0;
}

h3:not(:first-child) {
	margin-top: 25px;
}
</style>