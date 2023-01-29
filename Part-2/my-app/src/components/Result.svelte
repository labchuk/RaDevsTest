<script>
    import Store from '../routes/store'
    import {get} from 'svelte/store'
    import {onMount} from 'svelte';
    import ResultV1 from './ResultV1.svelte';
    import ResultV2 from './ResultV2.svelte';
    export let v = 1;

    let users = get(Store);
    let loading = true;

    onMount(()=>{
        setTimeout(()=>{
            loading = false
        }, 6000)
    })
</script>



{#if loading}
    <div class="container">
        <div class="progressBar">
            <div class="line">Loading...</div>
        </div>
    </div>
{:else}
    {#each users as  user}
        {#if v == 1}
            <ResultV1 user={user}/>
        {:else}
            <ResultV2 user={user}/>
        {/if}
    {/each}
{/if}