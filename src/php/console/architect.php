<?php

// Require the Architect and other dependencies
require_once(__DIR__ . '/../vendor/autoload.php');

// Get target path
$projectPath = $argv[1];

// Bootstrap target
require_once($projectPath . '/vendor/autoload.php');
$app = require_once($projectPath . '/bootstrap/app.php');

$kernel = $app->make(\Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$app->register(\Archetype\ServiceProvider::class);

// Output JSON to be consumed by our electron app
echo app('LaravelFile')::models()->get()->map->className()->values();