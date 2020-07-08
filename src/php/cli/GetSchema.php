<?php

namespace Architect\CLI;

use LaravelFile;

class GetSchema
{
    public $signature = 'get-schema';

    public function __invoke($data)
    {
        return LaravelFile::models()->get()->map->className()->values();
    }

}