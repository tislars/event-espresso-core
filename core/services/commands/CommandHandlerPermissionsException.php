<?php
namespace EventEspresso\core\services\commands;

if ( ! defined( 'EVENT_ESPRESSO_VERSION' ) ) {
	exit( 'No direct script access allowed' );
}



/**
 * Class CommandHandlerPermissionsException
 * Thrown when the current user does not have the required permissions to execute the requested service
 *
 * @package       Event Espresso
 * @author        Brent Christensen
 * @since         4.9.0
 */
class CommandHandlerPermissionsException extends \RuntimeException {

	/**
	 * @access public
	 * @param  string $action
	 * @param  string $message
	 * @param  int $code
	 * @param  \Exception $previous
	 */
	public function __construct( $action, $message = '', $code = 0, \Exception $previous = null ) {
		if ( empty( $message ) ) {
			$message = sprintf(
				__(
					'We\'re sorry, but you do not have the required permissions to perform the following action: ',
					'event_espresso'
				),
				$action
			);
		}
		parent::__construct( $message, $code, $previous );
	}



}
// End of file CommandHandlerPermissionsException.php
// Location: /CommandHandlerPermissionsException.php