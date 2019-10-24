<?php
namespace EventEspresso\core\domain\services\graphql\mutators;

use EEM_Datetime;
use EE_Datetime;
use EventEspresso\core\domain\services\graphql\types\Datetime;
use EventEspresso\core\domain\services\graphql\data\mutations\DatetimeMutation;
use GraphQL\Type\Definition\ResolveInfo;
use WPGraphQL\AppContext;
use GraphQL\Error\UserError;

class DatetimeUpdate {

	/**
	 * Defines the mutation data modification closure.
	 *
     * @param EEM_Datetime $model
     * @param Datetime $type
	 * @return callable
	 */
	public static function mutateAndGetPayload(EEM_Datetime $model, Datetime $type)
	{
		return static function ($input, AppContext $context, ResolveInfo $info) use ($model, $type)
		{
			/**
			 * Stop now if a user isn't allowed to create a datetime.
			 */
			if (! current_user_can('ee_edit_events')) {
				// translators: the %1$s is the name of the object being mutated
				throw new UserError(sprintf(__('Sorry, you are not allowed to edit %1$s', 'event_espresso' ), $type->name()));
			}

			$id = ! empty($input['id']) ? absint($input['id']) : 0;
			$entity = null;

			if ($id) {
				$entity = $model->get_one_by_ID($id);
			}

			/**
			 * If there's no existing datetime, throw an exception
			 */
			if (! $id || ! ($entity instanceof EE_Datetime)) {
				// translators: the placeholder is the name of the type being updated
				throw new UserError(sprintf(__( 'No %1$s could be found to update', 'event_espresso' ), $type->name()));
			}

			$args = DatetimeMutation::prepare_fields($input, $mutation_name);

			// Update the entity
			$entity->save($args);

			return [
				'id' => $id,
			];
		};
	}
}
