<script lang="ts">
    const { title = "", className = "", desc = "", children } = $props();
</script>

<div
    class="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] {className}"
>
    <div class="px-3 py-4">
        <h3
            class="text-lg text-center w-full font-medium text-gray-800 dark:text-white/90"
        >
            {title}
        </h3>
        {#if desc}
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {desc}
            </p>
        {/if}
    </div>

    <div class="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
        <div class="space-y-6">
            {#if children}
                {@render children()}
            {/if}
        </div>
    </div>
</div>
