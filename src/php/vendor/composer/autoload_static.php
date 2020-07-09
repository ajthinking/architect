<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb862cc61820b9f3bf9551b5083824212
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Architect\\' => 10,
            'Archetype\\Tests\\' => 16,
            'Archetype\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Architect\\' => 
        array (
            0 => __DIR__ . '/../..' . '/',
        ),
        'Archetype\\Tests\\' => 
        array (
            0 => __DIR__ . '/..' . '/ajthinking/archetype/tests',
        ),
        'Archetype\\' => 
        array (
            0 => __DIR__ . '/..' . '/ajthinking/archetype/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitb862cc61820b9f3bf9551b5083824212::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitb862cc61820b9f3bf9551b5083824212::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
