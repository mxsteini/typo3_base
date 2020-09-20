<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

/***************
 * BackendLayoutDataProvider
 */
if (TYPO3_MODE === 'BE')
{
	$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutDataProvider']['file'] = \Ms\MsBase\Provider\BackendLayoutFileProvider::class;
	$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutFileProvider']['ext'][] = 'ms_base';
}

