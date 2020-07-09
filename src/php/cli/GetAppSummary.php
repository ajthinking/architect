<?php

namespace Architect\CLI;

use LaravelFile;

class GetAppSummary
{
    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public static function make($data)
    {
        return new static($data);
    }

    public function response()
    {
        // php artisan --version
        // succesful bootstrap
        // app name
        // app url
        // database (migrated)
        // git branch
        // etc...

        return [
            'status' => 200,
            'app' => [
                'version' => \Illuminate\Foundation\Application::VERSION,
                'name' => config('app.name'),
                'url' => config('app.url'),
                'database' => config('database.default'),
                'schema' => [
                    'models' => LaravelFile::models()->get()->map->className()->values()
                ]
            ]
        ];
    }
}