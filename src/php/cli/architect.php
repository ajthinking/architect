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
| Let's hope it works!
|
*/

try {
    require_once($projectPath . '/vendor/autoload.php');

    $app = require_once($projectPath . '/bootstrap/app.php');
    
    $kernel = $app->make(\Illuminate\Contracts\Console\Kernel::class);
    
    $kernel->bootstrap();
} catch(\Throwable $e) {
    echo json_encode((object) [
        'status' => 500,
        'message' => 'Could not bootsrap project',
        'error' => $e->getMessage(),
    ]);

    exit(1);
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
    $app->register(\Architect\ServiceProvider::class);
} catch(\Throwable $e) {
    echo json_encode((object) [
        'status' => 500,
        'message' => 'Could not register the Architect serviceprovider',
        'error' => $e->getMessage(),
    ]);

    exit(1);
}

try {
    echo app('Architect\\Architect')::api($endpoint, $data);
} catch(\Throwable $e) {
    echo json_encode((object) [
        'status' => 500,
        'message' => 'Error while hitting Architect API endpoint',
        'error' => $e->getMessage(),
    ]);

    exit(1);
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