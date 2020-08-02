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