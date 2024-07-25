<script>
  export let claims;
  import { isOverlayOpen } from "../store/overlayStore";
</script>

<div
  class="mt-10 pt-10 w-full max-w-4xl p-5 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
  <div class="flex items-center justify-between mb-4">
    <div class="space-y-1">
      <h2 class="text-xl font-semibold">List of Your Claims</h2>
      <p class="text-sm text-gray-500">Fetched {claims.length} Claims</p>
    </div>
  </div>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-400">
      <tr>
        <th
          class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >Claim Id</th
        >
        <th
          class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >Status</th
        >
        <th
          class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >Update History</th
        >
        <th
          class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >Details</th
        >
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {#each claims as claim (claim.claim_id)}
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">{claim.claim_id}</td>
          <td class="px-6 py-4 whitespace-nowrap">{claim.status}</td>
          <td class="px-6 py-4 whitespace-nowrap"
            >{claim.createdAt.toString().split("GMT")[0]}</td
          >
          <td class="px-6 py-4 whitespace-nowrap">
            <form method="GET" action="" class="inline-block">
              <input type="hidden" name="id" value={claim.claim_id} />
              <button
                class=" bg-orange-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded-xl"
                type="submit"
                on:click={() => {
                  isOverlayOpen.set(true);
                }}
              >
                View Details
              </button>
            </form>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
