<script lang="ts">
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  let greeting = ""

  if (currentHour < 12) {
    greeting = "Buenos días"
  } else if (currentHour < 18) {
    greeting = "Good morning"
  } else {
    greeting = "Good evening"
  }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>