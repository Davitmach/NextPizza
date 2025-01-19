// pages/api/paypal.js
import paypal from '@paypal/checkout-server-sdk';

const clientId = 'ARi-8VmcAY_bRF14VA--f7F7I8tz3eVH2JDkr9b5pIg76_a0qeyDyrEyfzkfs6kkx572VJJHMK_fGLQI';
const clientSecret = 'ENPIJeqKu2X9NR739PfouEtN5EzD1LcuP19nLnrVnsqfVa4ZCzgJPPq3abas5urmPNKe5VolgTvBHc2f'

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const request = new paypal.orders.OrdersCreateRequest();
    request.headers['Prefer'] = 'return=representation';
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'RUB',
            value: body.amount,
          },
        },
      ],
      application_context: {
        return_url: body.returnUrl,
        cancel_url: body.cancelUrl,
      },
    });

    const order = await client.execute(request);

    return new Response(
      JSON.stringify({ orderID: order.result.id }),
      { status: 200 }
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 500 }
      );
    } else {
      return new Response(
        JSON.stringify({ error: 'An unknown error occurred' }),
        { status: 500 }
      );
    }
  }
}