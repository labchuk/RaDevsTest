
<script>
    import "./styles/styles.scss"
    import Store from './store'
    import { goto } from '$app/navigation';

    let isNextBtn = false
    let user = {
        carBrand: '',
        zipCode: '',
        firstName: '',
        lastName: '',
        carModel: '',
        firstRegistration: ''
    }
    let errors = []

    const formDefaultEventHandler = event => {
        event.preventDefault()
    }

    const changePageHandler = () => {
        isNextBtn = !isNextBtn
    }

    const validation = () => {
        const trueZipCodes = ["65000", "66000", "67000", "68000"]
        const trueCarsBrand = ["audi", "bmw", "nissan"]

        if (!trueCarsBrand.includes(user.carBrand.toLowerCase().trim())){
            return ['Field card brand is not valid']
        }
        else if (!trueZipCodes.includes(user.zipCode.toLowerCase().trim())){
            return ['Field zip code is not valid']
        }
        else {
            return []
        }
    }
    const nextStep = ()=> {
        errors = [...validation()]
        if (!errors.length) changePageHandler()
    }

    const submitHandler = () => {
        Store.update(users=>{
            return [...users, user]
        })
        goto(`/results/resultv${(Math.random() <= 0.5)?1:2}`)
    }

</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>



<form action="" on:submit={formDefaultEventHandler} id="signupForm">
    <h1 class="title">Sign Up</h1>
    <fieldset class:fieldsetActive = {!isNextBtn}>
        <input class="field" type="text" placeholder="Card Brand" bind:value={user.carBrand}>
        <input class="field" type="text" placeholder="Zip Code" bind:value={user.zipCode}>
        <button class="btn nextBtn" on:click={nextStep} type="button">Next</button>
    </fieldset>
    <fieldset class:fieldsetActive = {isNextBtn}>
        <input class="field" type="text" placeholder="First Name" bind:value={user.firstName}>
        <input class="field" type="text" placeholder="Last Name" bind:value={user.lastName}>
        <input class="field" type="text" placeholder="Car Model" bind:value={user.carModel}>
        <input class="field" type="text" placeholder="First Registration" bind:value={user.firstRegistration}>
        <button  class="btn PrevBtn" on:click={changePageHandler}>Prev</button>
        <button class="btn submitBtn" type="button" on:click={submitHandler}>Submit</button>
    </fieldset>
</form>


<div class="alert error" class:active = {errors.length > 0}>
    <p>{errors[0]}</p>
    <button on:click={()=>errors=[]}>X</button>
</div>