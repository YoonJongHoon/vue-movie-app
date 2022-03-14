exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'YOON',
      age: 27,
      email: 'ertyt345@gmail.com'
    })
  }
}