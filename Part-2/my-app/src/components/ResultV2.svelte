<script>
    export let user;
</script>

<ul class="list">
    <li>
        <p>Full name: <b>{user.firstName} {user.lastName}</b></p>
    </li>
    <li>
        <p>Car:  <b>{user.carBrand} {user.carModel}</b></p>
    </li>
    <li>
        <p>Zip Code: <b>{user.zipCode}</b></p>
    </li>
    <li>
        <p>First Registration: <b>{user.firstRegistration}</b></p>
    </li>
</ul>
