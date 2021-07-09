<template>
	<table class="w-full text-left bg-white shadow">
		<thead class="bg-white shadow">
			<tr>
				<th class="text-center w-10"><input type="checkbox"></th>
				<th class="text-center w-10"><i class="lar la-image"></i></th>
				<th>Name</th>
				<th>SKU</th>
				<th>Stock</th>
				<th>Price</th>
				<th>Categories</th>
				<th>Tags</th>
				<th class="text-center w-10"><i class="lar la-star"></i></th>
				<th>Published</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="text-center"><input type="checkbox"></td>
				<td class="text-center"><a href="#"><img src="http://placehold.it/30x30" alt=""></a></td>
				<td><a href="#">Product Title</a></td>
				<td>123</td>
				<td class="text-green-500">In Stock</td>
				<td>$500</td>
				<td><a href="#">men</a></td>
				<td><a href="#">tag1</a></td>
				<td class="text-center"><button type="button"><i class="lar la-star"></i></button></td>
				<td>01/01/2021</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
 
};
</script>