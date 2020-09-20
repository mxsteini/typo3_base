<?php

// set before GeneralUtility::getIndpEnv
$GLOBALS['TYPO3_CONF_VARS']['SYS']['trustedHostsPattern'] = '.*';

// Just set your local development configuration in this file.
// Avoid to deploy this file to production systems.

// extend TYPO3_CONF_VARS with development settings

$GLOBALS['TYPO3_CONF_VARS']['BE']['debug'] = TRUE;
$GLOBALS['TYPO3_CONF_VARS']['FE']['debug'] = TRUE;

// set installtool password to vagrant
$GLOBALS['TYPO3_CONF_VARS']['BE']['installToolPassword'] = '$argon2i$v=19$m=65536,t=16,p=1$NjlJTFhzZ2pTMlZTQ1RhYQ$FZkqxfRK22kCR/h5dd64aQym6IwcvrLb2ubhWnKaSic';


$GLOBALS['TYPO3_CONF_VARS']['SYS'] = array_merge($GLOBALS['TYPO3_CONF_VARS']['SYS'], array(
    'devIPmask' => '*',
    'displayErrors' => TRUE,
    'sqlDebug' => 1,
    'enableDeprecationLog' => 'file',
    'systemLogLevel' => 0,
    'exceptionalErrors' => 28674,
    'clearCacheSystem' => TRUE,
));

$GLOBALS['TYPO3_CONF_VARS']['HTTP']['verify'] = '0';


$GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default'] = array_merge($GLOBALS['TYPO3_CONF_VARS']['DB']['Connections']['Default'], [
	'dbname' => 'MS_BASE',
	'host' => '127.0.0.1',
	'password' => 'root',
	'user' => 'root',
]);

$GLOBALS['TYPO3_CONF_VARS']['HTTP']['verify'] = '0';

$GLOBALS['TYPO3_CONF_VARS']['SYS']['reverseProxyIP'] = '127.0.0.1';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['reverseProxyHeaderMultiValue'] = 'last';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['reverseProxySSL'] = '*';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['trustedHostsPattern'] = '.*';
//$GLOBALS['TYPO3_CONF_VARS']['SYS']['doNotCheckReferer'] = '1';

//foreach ($GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations'] as $cacheName => $cacheConfiguration)
//{
//    $GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations'][$cacheName]['backend'] = \TYPO3\CMS\Core\Cache\Backend\NullBackend::class;
//}
