<script>
    export let user;
</script>

<ul class="list">
    <li>
        <p>First name: <b>{user.firstName}</b></p>
    </li>
    <li>
        <p>Last name:  <b>{user.lastName}</b></p>
    </li>
    <li>
        <p>Car brand <b>{user.carBrand}</b></p>
    </li>
    <li>
        <p>Car model: <b>{user.carModel}</b></p>
    </li>
    <li>
        <p>Zip code: <b>{user.zipCode}</b></p>
    </li>
    <li>
        <p>First Registration: <b>{user.firstRegistration}</b></p>
    </li>
</ul>