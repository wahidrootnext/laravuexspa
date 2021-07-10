<template>
    <div class="flex w-screen h-screen text-gray-700">
		<sidebar/>
		<div class="flex flex-col flex-grow">
			<navbar/>
			<div class="flex-grow p-6 overflow-auto bg-indigo-50">
				<div class="grid grid-cols-3 gap-6">
					<div class="col-span-3 p-4 bg-white shadow relative">
						<router-view/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Navbar from '../components/Navbar.vue';
	import Sidebar from '../components/Sidebar.vue';
    export default {
        components: {
			Navbar,
			Sidebar
		}
    }
</script>