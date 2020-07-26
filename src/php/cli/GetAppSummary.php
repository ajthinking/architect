<?php

namespace Architect\CLI;

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
        return [
            'status' => 200,
            'app' => [
                'version' => \Illuminate\Foundation\Application::VERSION,
                'name' => config('app.name'),
                'url' => config('app.url'),
                'database' => config('database.default'),
                // 'schema' => [
                //     'models' => app('LaravelFile')::models()->get()->map->className()->values()
                // ],
                'schema' => app('Archetype\Schema\LaravelSchema')::get(),
                'env' => [
                    'DB_CONNECTION' => env('DB_CONNECTION'),
                    'DB_DATABASE' => env('DB_DATABASE'),
                ],
                'can_connect_to_database' => $this->canConnectToDatabase()
            ]
        ];
    }

    protected function canConnectToDatabase()
    {
        try {
            \DB::connection()->getPdo();
            return true;
        } catch (\Exception $e) {
            return false;
        }        
    }
}