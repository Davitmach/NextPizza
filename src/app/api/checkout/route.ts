export async function POST(request: Request) {
    try {
      // Получаем данные из тела запроса
      const data = await request.json();
  
   console.log(data);
   
  
      // Возвращаем ответ с этим токеном
      return new Response(JSON.stringify({ data }), {
        status: 200,
      });
    } catch (error) {
      // Обработка ошибок, если данные не могут быть распарсены
      return new Response(JSON.stringify({ error: 'Invalid request data' }), {
        status: 400,
      });
    }
  }
  