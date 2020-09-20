<?php

namespace Cyz\CyzBain\Utils;


class PowermailHelper
{


    /**
     * @param string $title
     * @param \In2code\Powermail\Domain\Model\Form $form
     * @return bool|\In2code\Powermail\Domain\Model\Answer
     */
    public function removeFieldByTitle($title, $form)
    {
        $field = $this->getFieldByTitle2($title, $form->getPages());
        $field->getPages()->removeField($field);
    }

    /**
     * @param $title
     * @param \In2code\Powermail\Domain\Model\Page $page
     * @return bool|\In2code\Powermail\Domain\Model\Field
     */
    public function getFieldByTitle2($title, $pages)
    {
        foreach ($pages as $page)
        {
            /** @var \In2code\Powermail\Domain\Model\Field $field */
            foreach ($page->getFields() as $field)
            {
                if ($field->getTitle() == $title)
                {
                    return $field;
                }
            }
        }
        return FALSE;
    }

    /**
     * @param integer $uid
     * @param \In2code\Powermail\Domain\Model\Form $form
     * @return bool|\In2code\Powermail\Domain\Model\Answer
     */
    public function removeFieldByUid($uid, $form)
    {
        $field = $this->getFieldByUid2($uid, $form->getPages());
        $field->getPages()->removeField($field);
    }

    /**
     * @param $uid
     * @param \In2code\Powermail\Domain\Model\Page $page
     * @return bool|\In2code\Powermail\Domain\Model\Field
     */
    public function getFieldByUid2($uid, $pages)
    {
        foreach ($pages as $page)
        {
            /** @var \In2code\Powermail\Domain\Model\Field $field */
            foreach ($page->getFields() as $field)
            {
                if ($field->getUid() == $uid)
                {
                    return $field;
                }
            }
        }
        return FALSE;
    }

    /**
     * @param integer $uid
     * @param \TYPO3\CMS\Extbase\Persistence\ObjectStorage $answers
     * @return bool|\In2code\Powermail\Domain\Model\Answer
     */
    public function getAnswerByUid($uid, $answers)
    {
        /** @var \In2code\Powermail\Domain\Model\Answer $answer */
        foreach ($answers as $answer)
        {
            if ($answer->getField()->getUid() == $uid)
            {
                return $answer;
            }
        }
        return FALSE;
    }

    /**
     * @param string $title
     * @param \TYPO3\CMS\Extbase\Persistence\ObjectStorage $answers
     * @return bool|\In2code\Powermail\Domain\Model\Answer
     */
    public function getAnswerByTitle($title, $answers)
    {
        /** @var \In2code\Powermail\Domain\Model\Answer $answer */
        foreach ($answers as $answer)
        {
            if ($answer->getField()->getTitle() == $title)
            {
                return $answer;
            }
        }
        return FALSE;
    }

    /**
     * @param $title
     * @param \In2code\Powermail\Domain\Model\Page $page
     * @return bool|\In2code\Powermail\Domain\Model\Field
     */
    public function getFieldByTitle($title, $page)
    {
        /** @var \In2code\Powermail\Domain\Model\Field $field */
        foreach ($page->getFields() as $field)
        {
            if ($field->getTitle() == $title)
            {
                return $field;
            }
        }
        return FALSE;
    }

    /**
     * @param $uid
     * @param \In2code\Powermail\Domain\Model\Page $page
     * @return bool|\In2code\Powermail\Domain\Model\Field
     */
    public function getFieldByUid($uid, $page)
    {
        /** @var \In2code\Powermail\Domain\Model\Field $field */
        foreach ($page->getFields() as $field)
        {
            if ($field->getUid() == $uid)
            {
                return $field;
            }
        }
        return FALSE;
    }

    /**
     * @param $uid
     * @param array $pages
     * @return bool|\In2code\Powermail\Domain\Model\Page
     */
    public function getPageByUid($uid, $pages)
    {
        /** @var \In2code\Powermail\Domain\Model\Page $page */
        foreach ($pages as $page)
        {
            if ($page->getUid() == $uid)
            {
                return $page;
            }
        }
        return FALSE;
    }

}
