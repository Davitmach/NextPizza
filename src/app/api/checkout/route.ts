
export async function POST(request: any) {
    const data = await request.json();
    const token = data;
    return new Response(JSON.stringify({ token: token }), {
        status: 200,
      });
}
