<?php

if (! defined('EVENT_ESPRESSO_VERSION')) {
    exit('No direct script access allowed');
}

/**
 *
 * EEM_Soft_Delete_Base_Test
 *
 * @package               Event Espresso
 * @subpackage
 * @author                Mike Nelson
 *
 */
class EEM_Soft_Delete_Base_Test extends EE_UnitTestCase
{

    public function test_soft_delete()
    {
        $a1 = EE_Attendee::new_instance(['ATT_fname' => 'tim', 'ATT_lname' => 'bob', 'ATT_email' => 'few@ew.efds']);
        $a1->save();


        $a2 = EE_Attendee::new_instance(['ATT_fname' => 'update-me', 'ATT_lname' => 'man', 'ATT_email' => 'few@ew.efds']);
        $a2->save();

        //and insert another attendee NOT using the models system
        $new_attendee_id = wp_insert_post(
            [
                'post_name'    => 'update-me-abnormal-man',
                'post_content' => 'the man',
                'post_status'  => 'publish',
                'post_type'    => 'espresso_attendees',
            ],
            true
        );
        $this->assertNotEmpty($new_attendee_id);
        $this->assertFalse(is_array($new_attendee_id));
        global $wpdb;
        $wpdb->insert(
            $wpdb->prefix . "esp_attendee_meta",
            [
                'ATT_ID'    => $new_attendee_id,
                'ATT_fname' => 'update-me-abnormal',
                'ATT_lname' => 'man',
                'ATT_email' => 'few@fewd.v4',
            ],
            [
                '%d', //ATT_ID'
                '%s', //ATT_fname
                '%s', //ATT_lname
                '%s', //ATT_email
            ]
        );
        $this->assertNotEmpty($wpdb->insert_id);

        //soft delete 'update-me' and 'update-me-abnormal'
        $a2->delete();
        $this->assertNotEquals(EEM_CPT_Base::post_status_trashed, $a1->status());
        $this->assertEquals(EEM_CPT_Base::post_status_trashed, $a2->status());

        $abnormal_attendee = EEM_Attendee::instance()->get_one_by_ID($new_attendee_id);
        $this->assertInstanceOf('EE_Attendee', $abnormal_attendee);
        $abnormal_attendee->delete();
        $this->assertEquals(EEM_CPT_Base::post_status_trashed, $abnormal_attendee->status());
    }


    /**
     * This tests a soft delete trash and restore of a cpt model item.
     * Test prompted by https://events.codebasehq.com/projects/event-espresso/tickets/6625
     *
     * @return void
     * @since 4.4.0
     *
     */
    public function test_soft_trash_restore_cpt_from_model_context()
    {
        //create attendee model object and dependencies.
        $attendee = $this->new_model_obj_with_dependencies('Attendee');

        //verify have an attendeee object
        $this->assertInstanceOf('EE_Attendee', $attendee);

        //use this attendee_id for every model request.
        $att_id = $attendee->ID();

        //reset model
        EEM_Attendee::instance()->reset();

        //verify not trashed.
        $status = $attendee->status();
        $this->assertFalse($status == 'trash');

        //k now let's trash it
        EEM_Attendee::instance()->delete_by_ID($att_id);

        //verify
        $trash_attendee = EEM_Attendee::instance()->get_one_by_ID($att_id);
        $this->assertInstanceOf('EE_Attendee', $trash_attendee);
        $status = $trash_attendee->status();
        $this->assertTrue($status == 'trash');

        //reset model again
        EEM_Attendee::instance()->reset();

        //now let's try to restore.
        EEM_Attendee::instance()->restore_by_ID($att_id);
        $restore_attendee = EEM_Attendee::instance()->get_one_by_ID($att_id);
        $this->assertInstanceOf('EE_Attendee', $restore_attendee);
        $status = $restore_attendee->status();
        $this->assertFalse($status == 'trash');
    }


    /**
     * @group 9179
     */
    public function test_get_minimum_where_conditions_during_query()
    {
        $this->new_model_obj_with_dependencies('Registration', ['REG_deleted' => true]);
        $this->new_model_obj_with_dependencies('Registration', ['REG_deleted' => false]);
        //count using the default where conditions, which excludes the deleted one
        $this->assertEquals(
            1,
            EEM_Registration::instance()->count()
        );
        //count using the MINIMUM where conditions, which INCLUDES the deleted one
        $this->assertEquals(
            2,
            EEM_Registration::instance()->count(
                [
                    'default_where_conditions' => 'minimum',
                ]
            )
        );
    }


}

// End of tests/testcases/core/db_models/EEM_Soft_Delete_Base_Test.php
