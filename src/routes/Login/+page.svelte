<script lang="ts">
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<div
    class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
    <div class="parent">
        <form method="POST" action="?/Login">
            <div
                class="flex -mx-5 mb-2;"
                style="display: flex; flex-direction:column"
            >
                <div class="w-full px-3 mb-6 md:mb-0">
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
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2"
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
                <button
                    type="submit"
                    class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-10 rounded"
                    style="padding: 10px;"
                >
                    Login In
                </button>
            </div>
        </form>
        {#if form?.error}
            <p class="pt-2">${form?.msg}</p>
        {/if}
    </div>
</div>
