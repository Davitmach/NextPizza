
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
      console.log('Received notification:', JSON.stringify(body, null, 2)); // Более читаемый вывод
  
      // Выводим статус и другие возможные параметры для проверки
      console.log('Notification status:', body?.status);
      console.log('Order ID:', body?.orderId);
  
      // Проверьте, что статус приходит в ответе
      if (body?.status === 'SUCCESS') {
        // Обработайте успешную оплату
        console.log('Payment was successful for order:', body.orderId);
      }
  
      // Возвращаем успешный ответ
      return NextResponse.json({ status: 'ok' });
  
    } catch (error) {
      console.log('[Checkout Callback] Error:', error);
      return NextResponse.json({ error: 'Server error' });
    }
  }
  