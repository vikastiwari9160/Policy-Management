<script>
    export let data;
    export let form;
</script>

<div
    class="mt-10 pt-10 w-full max-w-5xl p-5 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
    <form method="POST" action="?/update">
        <div
            class="flex -mx-5 mb-2;"
            style="display: flex; flex-direction:column"
        >
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label for="username">Username:</label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    id="name"
                    name="name"
                    value={data.user?.name}
                />
            </div>

            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label for="password">Password:</label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="password"
                    id="password"
                    name="password"
                    value={data.user?.password}
                />
            </div>

            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label for="paymail">Paymail id:</label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    id="paymail"
                    name="paymail"
                    value={data.user?.paymail}
                />
            </div>

            <button
                class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-10 rounded"
                style="padding: 10px;"
                type="submit">update</button
            >
        </div>
        {#if form?.success}
            <p class="pt-2">Your data has been updated!</p>
        {/if}
        {#if form?.error}
            <p class="pt-2">${form?.msg}</p>
        {/if}
    </form>
</div>
