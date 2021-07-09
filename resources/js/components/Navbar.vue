<template>
	<nav class="bg-white shadow-sm">
		<div class="container-fluid flex items-center">
			<a href="#" class="inline-block text-xl font-bold w-48 p-3">SPA</a>
			<div class="flex-1 flex items-center pr-3">
				<button type="button" class="p-3 text-xl"><i class="las la-bars"></i></button>
				<div class="relative">
					<button type="button" class="p-3 text-xl"><i class="lar la-bell"></i></button>
				</div>
				<div class="ml-auto relative">
					<button type="button" class="p-3 flex items-center gap-3">
						Hello! Wahid <img class="h-7 w-7 rounded-full" src="https://i.pravatar.cc/150?img=4" alt="">
					</button>
					<div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
						<a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
						<a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
						<a href="/logout" @click.prevent="handleLogout" class="block px-4 py-2 text-sm text-gray-700">Log out</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		methods: {
			handleLogout() {
				this.$store.dispatch("auth/logout").then(response => {
					if(response.data === 1) {
						this.$router.push({ name: 'login' });
					}
				});
			}
		}
	}
</script>