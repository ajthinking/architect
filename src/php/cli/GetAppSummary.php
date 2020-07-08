<?php

namespace Architect\CLI;

use LaravelFile;

class GetAppSummary
{
    public function __invoke($data)
    {
        // php artisan --version
        // succesful bootstrap
        // app name
        // app url
        // database (migrated)
        // git branch
        // etc...

        return;
    }

    public function schema()
    {
        return [
            'models' => [

            ]
        ];
    }
}