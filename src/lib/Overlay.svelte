<script>
    import { isOverlayOpen } from "../store/overlayStore";
</script>

<div
    class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-10 opacity-60 bg-black"
    on:click={() => {
        isOverlayOpen.set(false);
    }}
>
    <div
        class=" bg-gray-900 text-white rounded-md px-8 py-10 relative max-w-lg"
        role="button"
        on:click|stopPropagation
    >
        <button
            class="absolute top-2 right-3 text-4xl text-gray-300 hover:translate-y-1 transition-transform"
            on:click={() => {
                isOverlayOpen.set(false);
            }}>&times;</button
        >
        <slot />
    </div>
</div>
