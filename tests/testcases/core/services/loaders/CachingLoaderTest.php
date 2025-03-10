<?php

use EventEspresso\core\exceptions\InvalidDataTypeException;
use EventEspresso\core\exceptions\InvalidInterfaceException;
use EventEspresso\core\services\collections\LooseCollection;
use EventEspresso\core\services\loaders\ClassInterfaceCache;
use EventEspresso\core\services\loaders\CoreLoader;
use EventEspresso\core\services\loaders\LoaderDecorator;
use EventEspresso\core\services\loaders\ObjectIdentifier;
use EventEspresso\tests\mocks\core\services\loaders\CachingLoaderMock;
use PHPUnit\Framework\AssertionFailedError;
use PHPUnit\Framework\Exception;

/**
 * CachingLoaderTest
 * Tests CachingLoader
 *
 * @package EventEspresso\tests
 * @subpackage \testcases
 * @author  Brent Christenson
 * @since   4.9.38.rc
 * @group LoaderTest
 * @group CachingLoaderTest
 */
class CachingLoaderTest extends EE_UnitTestCase
{
    /**
     * @var CachingLoaderMock $loader
     */
    private $loader;


    /**
     * @throws EE_Error
     * @throws InvalidArgumentException
     * @throws InvalidDataTypeException
     * @throws InvalidInterfaceException
     */
    public function set_up()
    {
        parent::set_up();
        remove_all_filters('FHEE__EventEspresso_core_services_loaders_CachingLoader__load__bypass_cache');
        //caching is turned off by default in the parent test case.  For tests in here where we're doing a number of
        //different persistence tests
        if (! $this->loader instanceof LoaderDecorator) {
            $this->loader = new CachingLoaderMock(
                new CoreLoader(EE_Registry::instance()),
                new LooseCollection(''),
                new ObjectIdentifier(new ClassInterfaceCache())
            );
        }
    }


    private function getFqcnForTest(): string
    {
        return '\EventEspresso\core\services\address\formatters\AddressFormatter';
    }


    /**
     * This ensures there is no persistence with caching off (caching is off by default in unit tests).
     *
     * @throws Exception
     */
    public function testLoadCachingOff(): string
    {
        $this->loader->setBypass(true);
        $object = $this->loader->load($this->getFqcnForTest());
        $this->assertInstanceOf(
            $this->getFqcnForTest(),
            $object,
            sprintf(
                '%1$s is not an instance of %2$s',
                is_object($object) ? get_class($object) : print_r($object, true),
                $this->getFqcnForTest()
            )
        );
        $obj1ID = spl_object_hash($object);
        // none of these objects are getting cached because it is turned off for unit testing
        $object2 = $this->loader->load($this->getFqcnForTest());
        $obj2ID = spl_object_hash($object2);
        $this->assertNotEquals($obj1ID, $obj2ID);

        // this time let's load the object with caching turned on so it gets in the cache
        // and we'll send that objects hash along for the persistence test.
        $this->loader->setBypass(false);
        return spl_object_hash($this->loader->load($this->getFqcnForTest()));
    }



    /**
     * This tests persistence with caching on.
     */
    public function testLoadCachingOn()
    {
        //turn caching on.
        $this->loader->setBypass(false);
        $this->assertEquals(
            spl_object_hash($this->loader->load($this->getFqcnForTest())),
            spl_object_hash($this->loader->load($this->getFqcnForTest()))
        );
    }


    /**
     * This tests the resetting of cache
     *
     * @throws Exception
     */
    public function testResetCache()
    {
        // turn caching on again
        $this->loader->setBypass(false);
        // add a few different objects this time, but confirm that they are getting cached
        $fqcn7 = '\EventEspresso\core\services\address\formatters\AddressFormatter';
        $object7 = $this->loader->load($fqcn7);
        $this->assertInstanceOf($fqcn7, $object7);
        $this->assertEquals(spl_object_hash($object7), spl_object_hash($this->loader->load($fqcn7)));
        $fqcn8 = '\EventEspresso\core\services\address\formatters\InlineAddressFormatter';
        $object8 = $this->loader->load($fqcn8);
        $this->assertInstanceOf($fqcn8, $object8);
        $this->assertEquals(spl_object_hash($object8), spl_object_hash($this->loader->load($fqcn8)));
        $fqcn9 = '\EventEspresso\core\services\address\formatters\MultiLineAddressFormatter';
        $object9 = $this->loader->load($fqcn9);
        $this->assertInstanceOf($fqcn9, $object9);
        $this->assertEquals(spl_object_hash($object9), spl_object_hash($this->loader->load($fqcn9)));
        $this->assertCount(3, $this->loader->getCache());
        // now reset the cache using the do_action()
        do_action('AHEE__EventEspresso_core_services_loaders_CachingLoader__resetCache');
        $this->assertCount(0, $this->loader->getCache());
        // confirm that reloading the same FCQNs as above results in new objects
        $this->assertNotEquals(spl_object_hash($object7), spl_object_hash($this->loader->load($fqcn7)));
        $this->assertNotEquals(spl_object_hash($object8), spl_object_hash($this->loader->load($fqcn8)));
        $this->assertNotEquals(spl_object_hash($object9), spl_object_hash($this->loader->load($fqcn9)));
    }

    /**
     * @since 4.9.66.p
     * @throws Exception
     * @throws InvalidArgumentException
     * @throws AssertionFailedError
     */
    public function testShare()
    {
        // turn caching on again
        $this->loader->setBypass(false);
        // create a context object
        $context1 = new EventEspresso\core\domain\entities\contexts\Context(
            'testShare',
            'we are testing the share method'
        );
        // share it but don't pass any arguments
        $added = $this->loader->share('EventEspresso\core\domain\entities\contexts\Context', $context1);
        $this->assertTrue($added);
        $object1 = $this->loader->load('EventEspresso\core\domain\entities\contexts\Context');
        $this->assertEquals(spl_object_hash($object1), spl_object_hash($context1));
        // create another context object
        $context2 = new EventEspresso\core\domain\entities\contexts\Context(
            'testShare2',
            'we are testing the share method again'
        );
        // share it but pass an array of its arguments
        $added2 = $this->loader->share(
            'EventEspresso\core\domain\entities\contexts\Context',
            $context2,
            array('testShare2', 'we are testing the share method again')
        );
        $this->assertTrue($added2);
        // just load using FQCN... should match object 1
        $not_object2 = $this->loader->load('EventEspresso\core\domain\entities\contexts\Context');
        $this->assertNotEquals(spl_object_hash($not_object2), spl_object_hash($context2));
        // because it's context 1
        $this->assertEquals(spl_object_hash($not_object2), spl_object_hash($context1));
        // now load using arguments
        $object2 = $this->loader->load(
            'EventEspresso\core\domain\entities\contexts\Context',
            array('testShare2', 'we are testing the share method again')
        );
        $this->assertEquals(spl_object_hash($object2), spl_object_hash($context2));
    }
}
// Location: testcases/core/services/loaders/CachingLoaderTest.php
