const { ipcMain } = require('electron')
const { exec } = require("child_process");
const storage = require('electron-json-storage');
import { dialog } from 'electron'

export default (win) => {
    ipcMain.on('create-new-project', async (event, arg) => {
        let codeHome = '/missing/path/'
        let name = 'test-project-' + Math.random().toString(36).substring(7); 
      
        exec(
            'laravel new ' + name,
            { cwd: codeHome },
            (error, stdout, stderr) => {
            if (error) {
                event.reply('create-new-project-failed', error.message)
                return;
            }
            if (stderr) {
                event.reply('create-new-project-failed', stderr)
                return;
            }
    
            event.reply('current-project-updated', codeHome + name)
    
            return;
        });
      })
    
    ipcMain.on('open-project-browse', async (event, arg) => {
      const result = await dialog.showOpenDialog(win, {
        properties: ['openDirectory']
      })
    
      if(!result.canceled) event.reply('current-project-updated', result.filePaths[0])
    })
    
    ipcMain.on('open-project', async (event, path) => {
        event.reply('current-project-updated', path)
    })
    
    ipcMain.on('add-recent-project', (event, path) => {
        storage.get('recent-projects', function(error, data) {
            if (error) throw error;
        })    
        storage.get('recent-projects', function(error, data) {
            if (error) throw error;
            data = Array.isArray(data) ? data : []
            storage.set('recent-projects', [
                ...data,
                path
            ]), function(error, data) {
                if (error) throw error;
            }     
        });
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
}