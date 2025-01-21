
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) ;

    console.log(body,'ehehdeh');
    



 
  } catch (error) {
    console.log('[Checkout Callback] Error:', error);
    return NextResponse.json({ error: 'Server error' });
  }
}