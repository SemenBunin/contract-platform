import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const contractContent = `
ДОГОВОР АВТОРСКОГО ЗАКАЗА

г. Москва
${new Date().toLocaleDateString('ru-RU')}

${data.parties?.customer?.name || 'Заказчик'}, именуемый в дальнейшем «Заказчик», 
с одной стороны, и 
${data.parties?.executor?.name || 'Исполнитель'}, именуемый в дальнейшем «Исполнитель», 
с другой стороны, заключили настоящий договор о нижеследующем:

1. ПРЕДМЕТ ДОГОВОРА
1.1. Исполнитель обязуется создать произведение.
1.2. Заказчик обязуется принять и оплатить результат работ.

2. ПРАВА НА РЕЗУЛЬТАТ РАБОТ
2.1. Исключительные права на созданное произведение переходят к Заказчику.

ПОДПИСИ СТОРОН:

Заказчик: _________________ 
Исполнитель: _________________ 
`

    return NextResponse.json({
      success: true,
      contract: {
        content: contractContent,
        title: `Договор ${new Date().toLocaleDateString('ru-RU')}`,
        downloadUrl: `data:text/plain;charset=utf-8,${encodeURIComponent(contractContent)}`
      }
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Ошибка генерации договора' },
      { status: 500 }
    )
  }
}