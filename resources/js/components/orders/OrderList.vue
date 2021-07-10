<template>
	<preloader v-if="loading"/>
	<table class="w-full text-left">
		<thead class="text-xs uppercase">
			<tr>
				<th class="text-center w-10"><input type="checkbox" class="border-gray-300 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"></th>
				<th>Order</th>
				<th class="text-center w-10"><i class="lar la-eye"></i></th>
				<th>Date</th>
				<th>Status</th>
				<th>Ship to</th>
				<th>Total</th>
				<th class="text-center">Action</th>
			</tr>
		</thead>
		<tbody class="text-sm">
			<tr>
				<td class="text-center"><input type="checkbox" class="border-gray-300 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"></td>
				<td><a href="#" class="text-indigo-600 font-bold">Order Title</a></td>
				<td class="text-center"><button type="button"><i class="lar la-eye"></i></button></td>
				<td>01-01-2021</td>
				<td><span class="bg-yellow-100 px-2 py-1 rounded">Pending</span></td>
				<td>
					<a href="#" class="text-indigo-600 font-bold">153, Bagbari Uttarpara, Gabtoli, Mipur Dhaka - 1216</a>
					<span class="block text-gray-400 italic">via Free shipping</span>
				</td>
				<td>$500</td>
				<td class="text-center">
					<div class="relative dropdown">
						<button type="button"><i class="las la-ellipsis-h"></i></button>
						<div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
							<div class="absolute right-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
								<a href="#" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100">Awating shipment</a>
								<a href="#" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100">Mark as complete</a>
								<a href="#" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100">Cancel order</a>
							</div>
						</div>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
    import Preloader from '../Preloader.vue';
	export default {
		data() {
			return {
				loading: false
			}
		},
		components: {
			Preloader
		}
	}
</script>