<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  // @ts-ignore
  import NeucronSDK from "neucron-sdk";

  let email = '';
  let password = '';
  let errorMessage = '';
  /**
   * @type {null}
   */
  let walletBalance = null;

  onMount(() => {

    // checking already looged in 
    
    const token = localStorage.getItem('authToken');
    if (token) {
      goto('/dashboard');
    }
  });

  async function handleLogin() {
    errorMessage = '';
    if (!email || !password) {
      errorMessage = 'All fields reqiurde .';
      return;
    }

    try {
      const neucron = new NeucronSDK();
      const authModule = neucron.authentication;
      const walletModule = neucron.wallet;

      const loginResponse = await authModule.login({ email, password });
      
      if (loginResponse.success) {
        localStorage.setItem('authToken', loginResponse.token); 
        
        const DefaultWalletBalance = await walletModule.getWalletBalance({});
        walletBalance = DefaultWalletBalance.data.balance.summary;

        goto('/dashboard');
      } else {
        errorMessage = 'Invalid email or password.';
      }
    } catch (error) {
      console.error('Login error:', error);
      errorMessage = 'An error occurred. Please try again.';
    }
  }
</script>

<svelte:head>
  <title>Login - Insurance Claims Platform</title>
</svelte:head>

<div class="container mx-auto mt-10 max-w-md">
  <h1 class="text-3xl font-bold mb-6 text-center">Login</h1>
    
  <form on:submit|preventDefault={handleLogin} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Email"
        bind:value={email}
        required
      >
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="******************"
        bind:value={password}
        required
      >
    </div>
    {#if errorMessage}
      <p class="text-red-500 text-xs italic mb-4">{errorMessage}</p>
    {/if}
    {#if walletBalance !== null}
      <p class="text-green-500 text-sm mb-4">Wallet Balance: {walletBalance}</p>
    {/if}
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Sign In
      </button>
      <a
        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        href="/register"
      >
        Create an account
      </a>
    </div>
  </form>
</div>