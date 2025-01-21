
export async function POST(request: any) {
    const data = await request.json();
    const token = data;
    console.log('Received notification:', data);
console.log('Sending confirmation response to YooKassa');

    return new Response(JSON.stringify({ token: token }), {
        status: 200,
      });
}
