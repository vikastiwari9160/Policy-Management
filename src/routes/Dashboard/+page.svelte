<script lang="ts">
    import Table from "$lib/Table.svelte";
    export let data;
    export let form;
</script>

<Table claims={data.claims} />
<!-- claimId, claimDetails, status, timestamp -->
<div
    class="mt-10 pt-10 w-full max-w-5xl p-5 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
    <form method="POST" action="?/create">
        <h1 class=" text-2xl font-bold">Fill A New Claim</h1>
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full mt-5 md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="claim_id"
                >
                    Policy Id
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="claim_id"
                    type="number"
                    placeholder="Enter Policy Id"
                    name="claim_id"
                />
            </div>
            <div class="w-full mt-5 md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="amount"
                >
                    Claim Amount
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="amount"
                    type="number"
                    placeholder="Enter claimed amount "
                    name="amount"
                />
            </div>
            <div class="w-full mt-5 md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="desc"
                >
                    Claim Description
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="desc"
                    type="text"
                    placeholder="Describe the reason"
                    name="desc"
                />
            </div>

            <div class="w-full mt-5 md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="bill"
                    >Attach Digital Bill
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="bill"
                    type="url"
                    placeholder="Provide the Url of the Bill"
                    name="bill"
                />
            </div>
            <div class="w-full mt-5 md:w-1/3 px-3 mb-6 md:mb-0">
                <button
                    class="bg-orange-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded-xl"
                    type="submit">Fill Claim</button
                >
            </div>
        </div>
    </form>
    <!-- {#if form?.success}
        this message is ephemeral; it exists because the page was rendered in
             response to a form submission. it will vanish if the user reloads
        <p class="pt-2 text-green-600 font-semibold">Added new Applicant!</p>
    {/if} -->
</div>
