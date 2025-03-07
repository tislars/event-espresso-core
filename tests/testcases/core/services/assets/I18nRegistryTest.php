<?php

use EventEspresso\core\domain\DomainFactory;
use EventEspresso\core\domain\values\FilePath;
use EventEspresso\core\domain\values\FullyQualifiedName;
use EventEspresso\core\domain\values\Version;
use EventEspresso\core\exceptions\InvalidClassException;
use EventEspresso\core\exceptions\InvalidDataTypeException;
use EventEspresso\core\exceptions\InvalidFilePathException;
use EventEspresso\core\exceptions\InvalidInterfaceException;
use EventEspresso\tests\mocks\core\services\assets\I18nRegistryMock;

class I18nRegistryTest extends EE_UnitTestCase
{

    /**
     * @var I18nRegistryMock
     */
    private        $i18n;

    /**
     * @var string[][]
     */
    private static $test_map = [
        'test' => [
            'Do you have a moment to share why you are deactivating Event Espresso?',
            "Sure I'll help",
            'Skip',
        ],
    ];


    /**
     * @throws DomainException
     * @throws InvalidArgumentException
     * @throws InvalidClassException
     * @throws InvalidDataTypeException
     * @throws InvalidFilePathException
     * @throws InvalidInterfaceException
     * @throws EE_Error
     */
    public function set_up()
    {
        $domain     = DomainFactory::getShared(
            new FullyQualifiedName(
                'EventEspresso\core\domain\Domain'
            ),
            [
                new FilePath(EVENT_ESPRESSO_MAIN_FILE),
                Version::fromString(espresso_version()),
            ]
        );
        $this->i18n = new I18nRegistryMock($domain, I18nRegistryTest::$test_map);
        parent::set_up();
    }


    public function tear_down()
    {
        parent::tear_down();
        $this->i18n = null;
    }


    /**
     * see https://github.com/eventespresso/event-espresso-core/pull/458
     *
     * @group 458
     */
    public function testInlineScriptsOnlyQueuedOnce()
    {
        // simulate registering the script handle
        $this->i18n->registerScriptI18n('test');

        //let's trigger `print_scripts_array` twice.
        apply_filters('print_scripts_array', ['test']);
        apply_filters('print_scripts_array', ['test']);

        //now we expect `registerInlineScript to have been called only once
        $this->assertEquals(
            1,
            $this->i18n->getCountOfMethodCalled(
                'EventEspresso\tests\mocks\core\services\assets\I18nRegistryMock::registerInlineScript'
            )
        );

        //register script again *gasp*
        $this->i18n->registerScriptI18n('test');

        //call apply_filters again
        apply_filters('print_scripts_array', ['test']);

        //still should only have been called once
        $this->assertEquals(
            1,
            $this->i18n->getCountOfMethodCalled(
                'EventEspresso\tests\mocks\core\services\assets\I18nRegistryMock::registerInlineScript'
            )
        );
    }
}
