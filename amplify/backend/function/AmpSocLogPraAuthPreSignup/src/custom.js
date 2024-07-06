/**
 * @type {import('@types/aws-lambda').PreSignUpTriggerHandler}
 */
exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  console.log('Received event:', JSON.stringify(event, null, 2))
  console.log('Received context:', JSON.stringify(context, null, 2))
  return event
}
