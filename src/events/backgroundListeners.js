const { ipcMain, ipcMainEvent } = require('electron')
const { exec } = require("child_process");
const storage = require('electron-json-storage');
import { dialog } from 'electron'

export default (win) => {
    ipcMain.on('create-new-project', async (event, dir, name) => {
        exec(
            'laravel new ' + name,
            { cwd: dir },
            (error, stdout, stderr) => {
            if (error) {
                console.log("ERROR!")
                event.reply('create-new-project-failed', error.message)
                return;
            }
            if (stderr) {
                console.log("STDERR!")
                event.reply('create-new-project-failed', stderr)
                return;
            }
    
            event.reply('current-project-updated', dir + '/' + name)
    
            return;
        });
      })
    
    ipcMain.on('open-project-browse', async (event, arg) => {
        const result = await dialog.showOpenDialog(win, {
            properties: ['openDirectory']
        })
    
        if(!result.canceled) event.reply('current-project-updated', result.filePaths[0])
    })

    ipcMain.on('set-code-home-browse', async (event, arg) => {
        const result = await dialog.showOpenDialog(win, {
          properties: ['openDirectory']
        })
      
        if(!result.canceled) event.reply('code-home-updated', result.filePaths[0])
      }) 
      
      ipcMain.on('set-plugins-directory-browse', async (event, arg) => {
        const result = await dialog.showOpenDialog(win, {
          properties: ['openDirectory']
        })
      
        if(!result.canceled) event.reply('plugins-directory-updated', result.filePaths[0])
      })       
    
    ipcMain.on('open-project', async (event, path) => {
        event.reply('current-project-updated', path)
    })
    
    ipcMain.on('architect-api-request', (event, request) => {
        let phpBinary = 'php'

        // How to do this properly?
        let architect = __dirname + '/../src/php/cli/architect.php'

        let target = request.target
        let endpoint = request.endpoint
        let data = JSON.stringify(
            request.data ? request.data : {}
        )
        let signature = `${phpBinary} ${architect} ${target} ${endpoint} ${data}`
    
        exec(signature, (error, stdout, stderr) => {
            if (error) {
                event.reply('architect-api-request-failed', error.message)
                return;
            }
            if (stderr) {
                event.reply('architect-api-request-failed', stderr)
                return;
            }
    
            event.reply('architect-api-request-successful', JSON.parse(stdout))
            return;
        });
    })

    ipcMain.on('persist-state', (event, state) => {
        storage.set('statex', state), function(error, data) {
            if (error) throw error;
        }
    })
}