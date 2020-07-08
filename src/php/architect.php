<?php

namespace Architect;

use Illuminate\Support\Str;

class Architect
{
    public static function api($endpoint, $data)
    {
        $endpoint = '\\Architect\\CLI\\' . Str::studly($endpoint);
        return json_encode($endpoint($data));
    }
}