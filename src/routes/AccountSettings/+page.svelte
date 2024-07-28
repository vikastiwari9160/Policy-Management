<script>
    let username = "";
    let password = "";
    let errorMessage = "";

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === "" || password === "") {
            errorMessage = "Both fields are required";
            return;
        }

        // Here you can handle the form submission logic, like sending data to a server
        console.log("Username:", username);
        console.log("Password:", password);

        // Clear the form
        username = "";
        password = "";
        errorMessage = "";
    };
</script>

<div
    class="mt-10 pt-10 w-full max-w-5xl p-5 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
    <form on:submit={handleSubmit}>
        {#if errorMessage}
            <div class="error">{errorMessage}</div>
        {/if}
        <div
            class="flex -mx-5 mb-2;"
            style="display: flex; flex-direction:column"
        >
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label for="username">Username:</label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    id="username"
                    bind:value={username}
                />
            </div>

            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label for="password">Password:</label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="password"
                    id="password"
                    bind:value={password}
                />
            </div>

            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label for="paymail">Paymail id:</label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="password"
                    id="password"
                    bind:value={password}
                />
            </div>

            <button
                class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-10 rounded"
                style="padding: 10px;"
                type="submit">Login</button
            >
        </div>
    </form>
</div>
