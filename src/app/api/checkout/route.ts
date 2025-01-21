
export async function POST(request: any) {
    const data = await request.json();

    // Доступ к данным
    const token = data.qaq;

    return new Response(JSON.stringify({ token: token }), {
        status: 200,
      });
}
