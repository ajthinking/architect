<?php

namespace Architect;

class Architect
{
    public function __construct()
    {

    }

    public static function make()
    {
        return new static;
    }
}