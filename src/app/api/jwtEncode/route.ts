import jwt from "jsonwebtoken";

export async function POST(request: any) {
  const data = await request.json();
  const { jwtToken } = data;
  const Secret_code = process.env.NEXT_JWT_SECRET;
  if(Secret_code) {
const JWT = jwt.verify(jwtToken,Secret_code)
  return new Response(JSON.stringify({ encode: JWT }), {
    status: 200,
  });
  }
}
