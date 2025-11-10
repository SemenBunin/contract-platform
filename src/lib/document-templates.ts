export function generateAuthorContract(data: any): string {
  return `
ДОГОВОР АВТОРСКОГО ЗАКАЗА

г. Москва
${new Date().toLocaleDateString('ru-RU')}

${data.parties.customer.name}, именуемый в дальнейшем «Заказчик», 
с одной стороны, и 
${data.parties.executor.name}, именуемый в дальнейшем «Исполнитель», 
с другой стороны, заключили настоящий договор о нижеследующем:

1. ПРЕДМЕТ ДОГОВОРА
1.1. Исполнитель обязуется создать произведение: "${data.subject.description}"
1.2. Заказчик обязуется принять и оплатить результат работ.

2. СРОКИ ВЫПОЛНЕНИЯ
2.1. Работы должны быть выполнены до: ${data.subject.deadline}

3. ПРАВА НА РЕЗУЛЬТАТ РАБОТ
3.1. Исключительные права на созданное произведение переходят к Заказчику.
3.2. Территория использования: ${data.rights.territory}
3.3. Срок действия прав: ${data.rights.duration}

4. ВОЗНАГРАЖДЕНИЕ
4.1. Стоимость работ составляет: ${data.payment.amount} ${data.payment.currency}
4.2. Условия оплаты: ${data.payment.terms}

ПОДПИСИ СТОРОН:

Заказчик: _________________ ${data.parties.customer.name}
Исполнитель: _________________ ${data.parties.executor.name}
`
}