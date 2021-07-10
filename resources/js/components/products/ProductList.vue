<template>
	<preloader v-if="loading"/>
	<table class="w-full text-left">
		<thead class="text-xs uppercase">
			<tr>
				<th class="text-center w-10"><input type="checkbox" class="border-gray-300 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"></th>
				<th class="text-center w-10"><i class="lar la-image"></i></th>
				<th>Name</th>
				<th>SKU</th>
				<th>Stock</th>
				<th>Price</th>
				<th>Categories</th>
				<th class="text-center w-10"><i class="lar la-star"></i></th>
				<th class="w-28">Published</th>
			</tr>
		</thead>
		<tbody class="text-sm">
			<tr>
				<td class="text-center"><input type="checkbox" class="border-gray-300 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"></td>
				<td class="text-center"><a href="#"><img src="http://placehold.it/30x30" alt=""></a></td>
				<td>
					<a href="#" class="font-bold text-indigo-600">Product Title</a>
					<div>
						<a href="#">View</a> | <a href="#">Edit</a> | <a href="#">Delete</a>
					</div>
				</td>
				<td>123</td>
				<td class="text-green-500 font-bold">In Stock</td>
				<td>$500</td>
				<td><a href="#" class="text-indigo-600">men</a></td>
				<td class="text-center"><button type="button"><i class="lar la-star"></i></button></td>
				<td>01/01/2021</td>
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