<template>
    <table class="w-full text-left bg-white shadow">
		<thead class="bg-white shadow">
			<tr>
				<th class="text-center w-10"><input type="checkbox"></th>
				<th>Order</th>
				<th class="text-center w-10"><i class="lar la-eye"></i></th>
				<th>Date</th>
				<th>Status</th>
				<th>Ship to</th>
				<th>Total</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="text-center"><input type="checkbox"></td>
				<td><a href="#">Order Title</a></td>
				<td class="text-center"><button type="button"><i class="lar la-eye"></i></button></td>
				<td>01-01-2021</td>
				<td>Pending</td>
				<td><a href="#">153, Bagbari Uttarpara, Gabtoli, Mipur Dhaka - 1216</a><span class="block">via Free shipping</span></td>
				<td>$500</td>
				<td class="text-center"><button type="button"><i class="las la-ellipsis-h"></i></button></td>
			</tr>
		</tbody>
	</table>
</template>

<script>
    export default {
        
    }
</script>