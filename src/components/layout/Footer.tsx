import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">IP</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900 block leading-tight">
                  ДоговорыИС
                </span>
                <span className="text-sm text-gray-500 block leading-tight">
                  защита интеллектуальной собственности
                </span>
              </div>
            </Link>
            <p className="text-gray-600 max-w-md text-lg leading-relaxed">
              Профессиональные договоры для защиты вашего контента, кода и идей. 
              Составлено практикующими юристами.
            </p>
          </div>
          
          {/* Contracts Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 text-lg">Договоры</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contracts/avtorskij-zakaz" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Авторский заказ
                </Link>
              </li>
              <li>
                <Link href="/contracts/litsenzionnyj-dogovor" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Лицензионный договор
                </Link>
              </li>
              <li>
                <Link href="/contracts/dogovor-otchuzhdeniya-prav" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Отчуждение прав
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 text-lg">Помощь</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  База знаний
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-200/60 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500">
              © 2024 ДоговорыИС. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}