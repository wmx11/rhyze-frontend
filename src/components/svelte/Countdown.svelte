<script>
  import { onMount } from 'svelte';

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let hasStarted = false;

  const targetTime = new Date(Date.UTC(2023, 7, 10, 19, 0, 0, 0));

  const checkTime = () => {
    const currentTime = new Date();
    const remainingTime = targetTime - currentTime;

    if (remainingTime <= 0) {
      hasStarted = true;
      return;
    }

    days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    setTimeout(checkTime, 1000);
  };

  $: getFormattedTimeLeftString = () => {
    const padNumber = (number) => (number < 10 ? `0${number}` : number);
    return `${padNumber(days)}:${padNumber(hours)}:${padNumber(
      minutes
    )}:${padNumber(seconds)}`;
  };

  onMount(() => {
    checkTime();
  });
</script>

<span class="p-4 bg-primary text-secondary font-black text-5xl md:text-7xl rounded-[23px]"
  >{#if hasStarted}
    Let's Rhyze!
  {:else}
    {getFormattedTimeLeftString()}
  {/if}
</span>
