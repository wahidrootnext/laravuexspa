<template>
	<div class="flex items-center flex-shrink-0 h-14 px-6 shadow">
		<button type="button"><i class="las la-bars text-2xl"></i></button>
		<div class="flex ml-auto items-center gap-3">
			<button type="button"><i class="lar la-bell text-2xl"></i></button>
			<div class="relative flex items-center text-left dropdown">
				<button type="button">
					<img src="http://placehold.it/30x30" alt="{{ user?.name }}" class="rounded-full">
				</button>
				<div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
					<div class="absolute right-0 w-56 mt-7 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
						<div class="px-4 py-3">         
							<p class="text-sm leading-5">Logged in as</p>
							<p class="text-sm font-medium leading-5 text-gray-900 truncate">{{ user?.email }}</p>
						</div>
						<div class="py-1">
							<a href="#" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100">Account settings</a>
							<div class="py-1">
								<a href="/logout" @click.prevent="handleLogout" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100">Logout</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		computed: {
			...mapGetters("auth", {
				user: "getUser"
			})
		},
		methods: {
			handleLogout() {
				this.$store.dispatch("auth/logout").then(response => {
					if(response.data === 1) {
						this.$router.push({ name: 'login' });
						this.$notify({
							title: "Thank you",
                            text: "You have been logged out successfully.",
                            type: "success"
                        });
					}
				});
			}
		}
	}
</script>