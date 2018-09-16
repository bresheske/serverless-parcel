
export async function handle(event, context) {

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'A message!'
    })
  };

}