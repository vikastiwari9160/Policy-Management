


  <script>
    import { goto } from '$app/navigation';
    // @ts-ignore
    import NeucronSDK from "neucron-sdk";
  
    let email = '';
    let password = '';
    let confirmPassword = '';
    let errorMessage = '';
    let walletId = '';
  
    async function handleRegister() {
      errorMessage = '';
      if (!email || !password || !confirmPassword) {
        errorMessage = 'Please fill in all fields.';
        return;
      }
  
      if (password !== confirmPassword) {
        errorMessage = 'Passwords do not match.';
        return;
      }
  
      try {
        const neucron = new NeucronSDK();
        const authModule = neucron.authentication;
        const walletModule = neucron.wallet;

    
        const signUpResponse = await authModule.signUp({ email, password });

        if (signUpResponse.success) {
        
          const walletCreation = await walletModule.createWallet({ walletName: `${email}'s Wallet` });
          walletId = walletCreation.walletID;

         
          const loginResponse = await authModule.login({ email, password });

          if (loginResponse.success) {
            localStorage.setItem('authToken', loginResponse.token); // Assuming the response includes a token
            localStorage.setItem('walletId', walletId);
            goto('/dashboard');
          } else {
            errorMessage = 'Registration successful, but login failed. Please try logging in manually.';
          }
        } else {
          errorMessage = signUpResponse.message || 'Registration failed. Please try again.';
        }
      } catch (error) {
        console.error('Registration error:', error);
        errorMessage = 'An error occurred. Please try again.';
      }
    }
  </script>
  
  <svelte:head>
    <title>Register - Insurance Claims Platform</title>
  </svelte:head>
  
  <div class="container mx-auto mt-10 max-w-md">
    <h1 class="text-3xl font-bold mb-6 text-center">Create an Account</h1>
    
    <form on:submit|preventDefault={handleRegister} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
      <div class="mb-4">
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
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">
          Confirm Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="confirm-password"
          type="password"
          placeholder="******************"
          bind:value={confirmPassword}
          required
        >
      </div>
      {#if errorMessage}
        <p class="text-red-500 text-xs italic mb-4">{errorMessage}</p>
      {/if}
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="/login"
        >
          Already have an account?
        </a>
      </div>
    </form>
  </div>