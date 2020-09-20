<?php

namespace Ms\MsBase\Core\Bootstrap;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use \TYPO3\CMS\Core\Core\Environment;

/**
 * Basically this class loads additional configuration files. So it is possible to overwrite default/production settings
 * based on the TYPO3_CONTEXT which is set via vhost/htaccess ...
 *
 * It is now very simple to have configurations for a standard development chain aka DEV1/DEV2/DEV3->CI-TEST->STAGING->PRODUCTION
 * all with different config files.
 *
 * If you set the context for example to Development/Cyz/Devname then three config files are trying to load => Development,
 * Development_Cyz and Development_Cyz_Devname. In that Order and only if the files exist in the configured path.
 *
 * Default is ../typo3conf/ContextConfiguration/Specific_Configuration.php
 *
 * Tutorial:
 * @see http://blog.marit.ag/2014/11/03/typo3-context-verstehen-und-anwenden/
 *
 * @TODO make it more flexible/configurable via TYPOSCRIPT
 * @package Ms\MsBase\Core\Bootstrap
 */
class ContextConfigurationProvider
{
	/**
	 * @var
	 */
	protected $contextSeperator = '/';


	/**
	 *  Containes the prepend string.
	 * @var
	 */
	protected $configFilePrependString = 'AdditionalConfiguration_';


	/**
	 * Conatins the variable of the TYPO3_CONTEXT
	 * @var
	 */
	protected $context;


	/**
	 * Default file ending for configuration files.
	 * @var string
	 */
	protected $defaultFileEnding = 'php';


	/**
	 * The Folder which contains the different files.
	 * @var
	 */
	protected $configurationFilesFolder;


	/**
	 * The root folder.
	 * @var
	 */
	protected $rootFolder;


	/**
	 * Constructor which basically sets the TYPO3_CONTEXT variable to a variable.
	 */
	public function __construct()
	{
		if (null == $this->getContext()) {
			$context = Environment::getContext();
			$this->setContext($context);
		}
	}


	/**
	 * Simple setter.
	 * @param mixed $contextSeperator
	 */
	public function setContextSeperator($contextSeperator)
	{
		$this->contextSeperator = $contextSeperator;
	}


	/**
	 * It is possible to define a seperator to seperate the different parts of the filename. So a context
	 * Development/Cyz/DevAbc would result in a filename development_cyz_dev (with the default seperator).
	 * @return mixed
	 */
	public function getContextSeperator()
	{
		return $this->contextSeperator;
	}


	/**
	 * Simple setter.
	 * @param mixed $configFilePrependString
	 */
	public function setConfigFilePrependString($configFilePrependString)
	{
		$this->configFilePrependString = $configFilePrependString;
	}


	/**
	 * Getter for the string which is automatically prepended before a custom config file.
	 * Defaults to "AdditionalConfiguration_" if not set.
	 * @return mixed
	 */
	public function getConfigFilePrependString()
	{
		if (null == $this->configFilePrependString) {
			$this->setConfigFilePrependString('AdditionalConfiguration_');
		}
		return $this->configFilePrependString;
	}


	/**
	 * Simple setter
	 * @param string $defaultFileEnding
	 */
	public function setDefaultConfigurationFileEnding($defaultFileEnding)
	{
		$this->defaultFileEnding = $defaultFileEnding;
	}


	/**
	 *
	 * @return string
	 */
	public function getDefaultFileEnding()
	{
		return $this->defaultFileEnding;
	}


	/**
	 *
	 * @param mixed $configurationFilesFolder
	 */
	public function setConfigurationFilesFolder($configurationFilesFolder)
	{
		$this->configurationFilesFolder = $configurationFilesFolder;
	}


	/**
	 *
	 * @return mixed
	 */
	public function getConfigurationFilesFolder()
	{
		if (null == $this->configurationFilesFolder) {
			$this->setConfigurationFilesFolder('/typo3conf/ContextConfiguration/');
		}
		return $this->configurationFilesFolder;
	}


	/**
	 * @param mixed $rootFolder
	 */
	public function setRootFolder($rootFolder)
	{
		$this->rootFolder = $rootFolder;
	}


	/**
	 * @return mixed
	 */
	public function getRootFolder()
	{
		if (null == $this->rootFolder) {
			$this->setRootFolder(Environment::getPublicPath());
		}
		return $this->rootFolder;
	}


	/**
	 * Simple setter
	 * @param mixed $context
	 */
	public function setContext($context)
	{
		$this->context = $context;
	}


	/**
	 * Simple getter
	 * @return mixed
	 */
	public function getContext()
	{
		return $this->context;
	}


	/**
	 * Returns the concatenated string of the rootpath and the configured fodler which contains the config files.
	 * @return string
	 */
	public function getPathToSpecificConfigurationFiles()
	{
		$rootFolder = $this->getRootFolder();
		$concreteFolder = $this->getConfigurationFilesFolder();
		return $rootFolder . $concreteFolder;
	}


	/**
	 * Loads the specific context based on the value that was passed to the function.
	 * ie. "development_cyz_dba"
	 *
	 */
	private function loadContextSpecificConfiguration($context)
	{
		$file = $this->getConfigFilePrependString() . mb_strtolower(str_replace('/', '_', $context) . '.' . $this->getDefaultFileEnding());
		$fullContextPath = $this->getPathToSpecificConfigurationFiles() . $file;
		if (file_exists($fullContextPath)) {
			require_once $fullContextPath;
		}
	}


	/**
	 *
	 * @param $context
	 * @return string
	 */
	private function addSeperator($context)
	{
		return $context .= $this->getContextSeperator();
	}


	/**
	 * It might be possible that a context consists of a root context and multiple subcontexts. To extract all
	 * possible contexts we have to cut the full context into its parts.
	 *
	 * @param $fullContext
	 * @return array
	 */
	private function splitDifferentContexts($fullContext)
	{
		$splittedContextCollection = explode('/', mb_strtolower($fullContext));
		$currentContext = '';
		$firstEntry = reset($splittedContextCollection);
		$contextArray = null;
		$contextCollection = array();

		foreach ($splittedContextCollection as $key => $context) {

			if (!empty($currentContext) && $context !== $firstEntry) {
				$currentContext = $this->addSeperator($currentContext);
			}

			$currentContext .= $splittedContextCollection[$key];
			$contextCollection[] = $currentContext;
		}

		return $contextCollection;
	}


	/**
	 * Loads the configuration for a single context.
	 * @param $context
	 */
	public function includeSingleContextSpecificConfiguration($context)
	{
		$this->loadContextSpecificConfiguration($context);
	}


	/**
	 * Loads ALL contextspeicific configurations. This includes the root context as well as optionally other
	 * sub contexts.
	 */
	public function includeAllContextSpecificConfiguration()
	{
		if (null == $this->getContext()) {
			return;
		}

		$contextCollection = $this->splitDifferentContexts($this->getContext());
		foreach ($contextCollection as $singleContext) {
			$this->loadContextSpecificConfiguration($singleContext);
		}
	}
}
