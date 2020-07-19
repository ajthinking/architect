<?php

/*
|--------------------------------------------------------------------------
| Setup
|--------------------------------------------------------------------------
|
| Autoload the Architect and other dependencies
| Use signature <TARGET> <ENDPOINT> [<DATA>]
|
*/

require_once(__DIR__ . '/../vendor/autoload.php');

// Get target project
$projectPath = $argv[1];

// Get request type
$endpoint = $argv[2];

// Get request data
$data = json_decode($argv[3] ?? '{}');

/*
|--------------------------------------------------------------------------
| Bootstrap target
|--------------------------------------------------------------------------
|
| Bootstrap target project
| Let's see if it works
|
*/

try {
    $autoloader = $projectPath . '/vendor/autoload.php';
    $bootstrapper = $projectPath . '/bootstrap/app.php';

    if (!file_exists($autoloader)) {
        throw new Exception ('Could not find autoloader at ' . $autoloader);
    }

    if (!file_exists($bootstrapper)) {
        throw new Exception ('Could not find bootstrap/app.php');
    }    

    require_once($autoloader);

    $app = require_once($bootstrapper);
    
    $kernel = $app->make(\Illuminate\Contracts\Console\Kernel::class);
    
    $kernel->bootstrap();
    
} catch(\Throwable $e) {
    echo json_encode((object) [
        'status' => 500,
        'message' => 'Could not bootsrap project',
        'error' => $e->getMessage(),
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| Validate target
|--------------------------------------------------------------------------
|
| Ensure Laravel version > 7.x
|
*/
try {
    $version = \Illuminate\Foundation\Application::VERSION;
    if(!preg_match('/7.*/', $version)) {
        throw new Exception ('Version ' . $version . ' is not supported. Please update your application and try again.');
    }
} catch(\Throwable $e) {
    echo json_encode((object) [
        'status' => 500,
        'message' => $e->getMessage(),
        'error' => $e,
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| Perform Request
|--------------------------------------------------------------------------
|
| Register the Architect ServiceProvider in the laravel app
| Echo JSON to be consumed by the architect electron app
|
*/

try {
    $app->register(\Archetype\ServiceProvider::class);
    $app->register(\Architect\ServiceProvider::class);
} catch(\Throwable $e) {
    echo json_encode((object) [
        'status' => 500,
        'message' => 'Could not register the Architect serviceprovider',
        'error' => $e->getMessage(),
    ]);

    exit;
}

try {
    echo app('Architect\\Architect')::api($endpoint, $data);
} catch(\Throwable $e) {
    echo json_encode((object) [
        'status' => 500,
        'message' => 'Error while hitting Architect API endpoint',
        'error' => $e->getMessage(),
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| Successful Request
|--------------------------------------------------------------------------
|
| We made it!
| Farewell
|
*/
exit(0);