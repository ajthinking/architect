<template>
    <div class="flex flex-col w-full justify-center text-gray-400">
        <div class="mx-8 my-2">
            <h1 class="text-gray-500 border-b mb-8 py-2">scripts</h1>
            <!-- <div v-for="script in scripts" :key="script.name" class="flex bg-gray-700 p-4 rounded">
                <div class="flex flex-col">
                    <label class="block font-bold md:mb-0 pr-4" for="inline-full-name">
                        {{script.name}}
                    </label>
                    <div class="text-xs my-2">{{script.description}}</div>
                </div>
            </div> -->
            <table class="table-auto">
            <!-- <thead>
                <tr>
                <th class="px-4 py-2">Title</th>
                <th class="px-4 py-2">Author</th>
                </tr>
            </thead> -->
            <tbody>
                <tr class="odd:bg-gray-600 even:bg-gray-700" v-for="script in scripts" :key="script.name">
                    <td class="px-4 py-1">{{script.name}}</td>
                    <td class="px-4 py-1">Run</td>
                </tr>
            </tbody>
            </table>            
                <!--<div v-for="script in scripts" :key="script.name" class="mb-6 bg-gray-700 p-4 rounded">
                    <div class="flex flex-col">
                        <label class="block font-bold md:mb-0 pr-4" for="inline-full-name">
                            {{script.name}}
                        </label>
                        <div class="text-xs my-2">{{script.description}}</div>
                    </div>
                    <div class="flex p-2">
                        <div class="flex border rounded bg-gray-600 text-gray-200 px-6 py-1 text-sm shadow-xl cursor-pointer font-bold hover:bg-gray-700">
                            Run
                        </div>
                    </div>
                </div>-->                                                                                  
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            'scripts': [
                {name: 'Use sqlite default database', description: 'Sets DB_CONNECTION=sqlite and comments out any other value in .env.'},
                {name: 'Use Models directory', description: 'Moves any model in /app to /app/Models'},
                {name: 'Set APP_NAME', description: 'Sets APP_NAME in .env to Title case of application directory name'},
                {name: 'Make readme', description: 'Make a minimal readme'},
                {name: 'git initial commit', description: 'git init + git add . + git commit -m "Initial commit"'},
            ]
        }  
    }
}
</script>