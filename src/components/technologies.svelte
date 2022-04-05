<script>
    import Li from './listElement.svelte';
</script>

<div class="h-fit my-5 text-center max-w-7xl m-auto divide-y">
    <h1 class="text-2xl mb-3 font-bold font-mono dark:text-gray-100 text-gray-600">Technologies</h1>
    <div class="grid sm:grid-cols-4 grid-cols-2 p-8 pt-3">
        <ul>
            <li class="mb-2 font-semibold text-lg font-mono text-gray-600 dark:text-gray-300">Languages</li>
            <Li>Python</Li>
            <Li>Javascript (TS)</Li>
            <Li>Java</Li>
        </ul>
        <ul>
            <li class="mb-2 font-semibold text-lg font-mono text-gray-600 dark:text-gray-300">Front-end</li>
            <Li>Vue (Vuex)</Li>
            <Li>Svelte</Li>
            <Li>Tailwind</Li>
        </ul>
        <ul>
            <li class="mt-10 sm:mt-0 mb-2 font-semibold text-lg font-mono text-gray-600 dark:text-gray-300">Back-end</li>
            <Li>Flask</Li>
            <Li>MongoDB</Li>
            <Li>PosgreSQL</Li>
        </ul>
        <ul>
            <li class="mt-10 sm:mt-0 mb-2 font-semibold text-lg font-mono text-gray-600 dark:text-gray-300">Other</li>
            <Li>Git</Li>
            <Li>Jira</Li>
            <Li>Agile Experience</Li>
        </ul>
    </div>
</div>