// const fs = require('fs')

// function loadRecentFiles() {
//     fs.readdir(dir, function(err, files){
//         files = files.map(function (fileName) {
//             return {
//             name: fileName,
//             time: fs.statSync(dir + '/' + fileName).mtime.getTime()
//             };
//         })
//         .sort(function (a, b) {
//             return b.time - a.time; })
//         .map(function (v) {
//             return v.name;
//         })
//         .slice(0, 10);
    
//         win.webContents.send('recent-projects-loaded', files);
//     });
    
// }

// MENU SKETCH

//   var menu = Menu.buildFromTemplate([
//         {
//             label: 'Menu',
//             submenu: [
//                 {
//                     label:'Open',
//                     click() {
//                         //app.emit('open-project-browse')
//                         //ipcRenderer.send('open-project-browse')

//                     },
//                     accelerator: 'CmdOrCtrl+O'
//                 },
//                 {
//                     label:'Exit',
//                     click() { 
//                         app.quit() 
//                     }
//                 },                
//             ]
//         }
//     ])

//     Menu.setApplicationMenu(menu);   



// TASK ALA GITHUB ACTIONS VISUALIZED
<!--
        <div class="h-12"></div>
        <div class="flex flex-col items-center w-full text-white">
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold shadow-lg">laravel-new</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">set-app-name</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">use-sqlite</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">make-readme</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">use-models-dir</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">use-vue-preset</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">add-tailwindcss</div>
            <div class="border-l-2 h-6 border-gray-600"></div>
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">git-init</div>
            <div class="border-l-2 h-6 border-gray-600"></div>            
            <div class="flex mx-auto px-4 bg-indigo-500 w-full rounded py-2 text-sm font-bold">git-initial-commit</div>
            <div class="border-l-2 h-12 border-gray-600"></div>                        

            <div class="flex mx-auto justify-center bg-gray-100 w-full rounded py-2 text-sm text-indigo-500 font-bold">+ add</div>
        </div>
        -->