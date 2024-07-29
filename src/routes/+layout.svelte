<script>
    import Navbar from "$lib/Navbar.svelte";
    import LoginNavbar from "$lib/Login_Navbar.svelte";
    import { islogedin } from "../store/loginStore";
    import "../app.css";
</script>

{#if $islogedin}
    <LoginNavbar />
{:else if !$islogedin}
    <Navbar />
{/if}
<slot />
