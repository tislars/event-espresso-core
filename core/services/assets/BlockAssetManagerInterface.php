<?php

namespace EventEspresso\core\services\assets;

/**
 * Interface BlockAssetManagerInterface
 * Defines any class capable of handling asset registration via EventEspresso\core\services\assets\Registry
 *
 * @package EventEspresso\core\services\assets
 * @author  Brent Christensen
 * @since   4.9.71.p
 */
interface BlockAssetManagerInterface
{
    /**
     * @since 4.9.71.p
     * @return string
     */
    public function assetNamespace(): string;

    /**
     * @since 4.9.71.p
     * @return void
     */
    public function setAssetHandles();

    /**
     * @since 4.9.71.p
     * @return string
     */
    public function getEditorScriptHandle(): string;


    /**
     * @since 4.9.71.p
     * @return string
     */
    public function getEditorStyleHandle(): string;


    /**
     * @since 4.9.71.p
     * @return string
     */
    public function getScriptHandle(): string;


    /**
     * @since 4.9.71.p
     * @return string
     */
    public function getStyleHandle(): string;
}