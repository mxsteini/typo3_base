<?php


namespace Cyz\CyzBain\Utils;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;


class MTime
{
    /**
     * Reference to the parent (calling) cObject set from TypoScript
     *
     * @var ContentObjectRenderer
     */
    public $cObj;


    public function get($content, $conf)
    {
        $file = $this->cObj->cObjGetSingle($conf['file'], $conf['file.']);
        $absFile = \TYPO3\CMS\Core\Utility\GeneralUtility::getFileAbsFileName($file);
        if (!file_exists($absFile)) {
            return '';
        } else {
            $time = filemtime($absFile);
        }
        $link = $this->cObj->typoLink('',[
            'parameter' => $absFile,
            'returnLast' => 'url'
        ]);
        return $link . '?' . $time;
    }
}
