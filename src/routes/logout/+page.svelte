<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    // @ts-ignore
    import NeucronSDK from "neucron-sdk";
  
    let logoutError = '';
  
    async function handleLogout() {
      try {
        const neucron = new NeucronSDK();
        const authModule = neucron.authentication;

        const logoutResponse = await authModule.logout();
  
        if (logoutResponse.success) {
      
          localStorage.removeItem('authToken');
          localStorage.removeItem('walletId');
  
   
          goto('/login');
        } else {
          logoutError = 'Logout failed. Please try again.';
        }
      } catch (error) {
        console.error('Logout error:', error);
        logoutError = 'An error occurred during logout. Please try again.';
      }
    }
  </script>
  
  <button
    on:click={handleLogout}
    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Logout
  </button>
  
  {#if logoutError}
    <p class="text-red-500 text-xs italic mt-2">{logoutError}</p>
  {/if}