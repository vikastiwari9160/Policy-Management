<svelte:head>
    <title>Dashboard</title>
</svelte:head>

<div
    class="mt-10 pt-10 w-full max-w-md p-5 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg;"
>
    <div
        style="display: flex; align-item: space-between; flex-direction:column; text-align:center;"
    >
        <h1
            class=" text-xl font-semibold text-gray-900 px-6 py-4 whitespace-nowrap"
        >
            Choose any one service
        </h1>
        <a
            href="/Dashboard/Policy"
            style="display: flex; justify-content: center;"
        >
            <button
                class="bg-orange-500 mt-4 hover:bg-blue-700 text-white text-lg font-bold px-28 py-6 rounded-xl"
                >Policy
            </button></a
        >
        <a
            href="/Dashboard/Claims"
            style="display: flex; justify-content: center;"
        >
            <button
                class="bg-orange-500 hover:bg-blue-700 text-white text-lg mt-10 mb-5 font-bold px-28 py-6 rounded-xl"
                >Claims
            </button></a
        >
    </div>
</div>
