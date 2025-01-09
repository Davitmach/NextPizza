import jwt from "jsonwebtoken";

export async function POST(request: any) {
  const data = await request.json();
  const { token } = data;
  const Secret_code = process.env.NEXT_JWT_SECRET;
  if(Secret_code) {
  const JWT_token = jwt.sign(token, Secret_code, { expiresIn: "7d" });
  
  return new Response(JSON.stringify({ token: JWT_token }), {
    status: 200,
  });
}
}
