<?php
use \TYPO3\CMS\Core\Core\Environment;

if (!defined('TYPO3_MODE'))
{
    die('Access denied.');
}

if (!function_exists('ms_setCacheBackend'))
{
    function ms_setCacheBackend($backendClassName, $cacheName)
    {
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations'][$cacheName]['backend'] = $backendClassName;
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations'][$cacheName]['options'] = [];
    }
}
include_once "MwCachingConfiguration.php";

if (file_exists(Environment::getPublicPath() . '/typo3conf/ext/ms_base/Classes/Core/Bootstrap/ContextConfigurationProvider.php'))
{
    if (!class_exists('Ms\MsBase\Core\Bootstrap\ContextConfigurationProvider'))
    {
        include Environment::getPublicPath() . '/typo3conf/ext/ms_base/Classes/Core/Bootstrap/ContextConfigurationProvider.php';
    }
    (new Ms\MsBase\Core\Bootstrap\ContextConfigurationProvider)->includeAllContextSpecificConfiguration();
}

if (\TYPO3\CMS\Core\Utility\GeneralUtility::_GP('type') !== NULL && \TYPO3\CMS\Core\Utility\GeneralUtility::_GP('type') != 0)
{
    $GLOBALS['TYPO3_CONF_VARS']['FE']['debug'] = FALSE;
}

