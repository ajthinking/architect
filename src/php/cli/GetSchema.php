<?php

namespace Architect\CLI;

use LaravelFile;

class GetSchema
{
    public function __invoke($data)
    {
        return LaravelFile::models()->get()->map->className()->values();
    }

    public function schema()
    {
        return [
            'models' => [

            ]
        ];
    }
}