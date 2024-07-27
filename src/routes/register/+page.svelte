<script lang="ts">
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<!-- <div
    class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
    <form method="POST" action="?/create">
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="name"
                >
                    Full Name
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="email"
                >
                    Email
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="text"
                    placeholder="Enter email"
                    name="email"
                />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="password"
                >
                    Password
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="password"
                    type="text"
                    placeholder="Enter password"
                    name="password"
                />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="paymail"
                >
                    Paymail ID
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="paymail"
                    type="text"
                    placeholder="Enter your Paymail id"
                    name="paymail"
                />
            </div>
            <button
                type="submit"
                class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded"
            >
                Register
            </button>
        </div>
    </form>
    {#if form?.success}
        <p class="pt-2">User Registered!</p>
    {/if}
</div> -->



<!-- /////////////// -->

<div class="container mx-auto mt-10 max-w-md">
    <h1 class="text-3xl font-bold mb-6 text-center">Create an Account</h1>
    
    <form method="POST" action="?/create" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Full Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
            type="text"
            placeholder="Enter your full name"
            name="name"
          
          required
        >
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          name="email"
          placeholder="Email"
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
        type="text"
        placeholder="****************"
            name="password"
      
          required
        >
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="paymail">
          Paymail ID
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="paymail"
                    type="text"
                    placeholder="Enter your Paymail id"
                    name="paymail"
 
          required
        >
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/Login">
          Already have an account?
        </a>
      </div>
    </form>
    {#if form?.success}
        <p class="pt-2">User Registered!</p>
    {/if}
  </div>
