import { useEffect, useState } from 'react';

const PayPalButtonComponent = () => {
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  // Проверка загрузки скрипта PayPal
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=ARi-8VmcAY_bRF14VA--f7F7I8tz3eVH2JDkr9b5pIg76_a0qeyDyrEyfzkfs6kkx572VJJHMK_fGLQI&currency=RUB&locale=ru_RU`; // Используем валюту RUB и язык ru_RU
    script.onload = () => setPaypalLoaded(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (paypalLoaded && window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '1000.00', // сумма заказа
                  currency_code: 'RUB', // валюта
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          // Подтверждение оплаты
          const order = await actions.order.capture();

          // Редирект на страницу PayPal с ID заказа
          const redirectUrl = `https://www.paypal.com/checkoutnow?token=${data.orderID}&locale=ru_RU`; // Указываем локаль ru_RU
          window.location.href = redirectUrl; // Перенаправление на PayPal
        },
        onError: (err) => {
          console.error('Ошибка PayPal:', err);
          alert('Произошла ошибка при обработке платежа');
        },
      }).render('#paypal-button-container');
    }
  }, [paypalLoaded]);

  if (!paypalLoaded) {
    return <div>Loading PayPal...</div>;
  }

  return <div id="paypal-button-container"></div>;
};

export default PayPalButtonComponent;
