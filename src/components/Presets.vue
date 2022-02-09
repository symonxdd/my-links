<template>
	<div class="presets">
		<h3 v-if="presets.length > 0">Presets: {{ presets.length }}</h3>
		<h3 v-else>Presets: (none)</h3>

		<template v-for="(preset, index) in presets">
			<button
				:value="preset.links"
				class="preset"
				v-bind:key="index + '-preset'"
				@click="buttonClicked($event)"
			>
				{{ preset.name }}
			</button>
		</template>
	</div>
</template>

<script>
import * as utils from "../js/utils";

export default {
	name: "Presets",
	props: ["presets"],
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