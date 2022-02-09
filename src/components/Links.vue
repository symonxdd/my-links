<template>
	<div class="links">
		<h3 v-if="links.length > 0">Links: {{ links.length }}</h3>
		<h3 v-else>Links: (none)</h3>

		<template v-for="(link, index) in links">
			<button
				:value="link.url"
				class="link"
				v-bind:key="index + '-link'"
				@click="buttonClicked($event)"
			>
				{{ link.url }}
			</button>
		</template>
	</div>
</template>

<script>
import * as utils from "../js/utils";

export default {
	name: "Links",
	props: ["links"],
	methods: {
		buttonClicked(element) {
			const elementValue = element.currentTarget.value;
			const linksArray = elementValue.split(",");
			utils.openLinks(linksArray);
		},
	},
};
</script>

<style>
</style>