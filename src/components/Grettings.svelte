<script lang="ts">

	interface Grettings {
		morning: 'Good morning.'
		afternoon: 'Good afternoon.'
		evening: 'Good evening.'
	}	

	const grettingsOptions:Grettings =  {
		morning: 'Good morning.',
		afternoon: 'Good afternoon.',
		evening: 'Good evening.',
	}	

	const currentTime = new Date()
	const currentHour = currentTime.getHours()

	const {morning, afternoon, evening} = grettingsOptions

	let greet = ''

	if (currentHour > 5 && currentHour < 12) {
		greet = morning
	} else if (currentHour > 12 && currentHour < 18) {
		greet = afternoon
	} else if (currentHour > 18) {
		greet = evening
	}
</script>

<h1 class="text-3xl font-bold">{greet}</h1>

