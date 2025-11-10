import Link from 'next/link'

interface ContractTypeCardProps {
  contractType: {
    id: string
    title: string
    description: string
    icon: string
    slug: string
  }
}

export function ContractTypeCard({ contractType }: ContractTypeCardProps) {
  const gradientMap = {
    'author-order': 'from-blue-500 to-cyan-500',
    'license': 'from-purple-500 to-pink-500',
    'transfer': 'from-green-500 to-emerald-500',
    'nda': 'from-orange-500 to-red-500'
  }

  const gradient = gradientMap[contractType.id as keyof typeof gradientMap] || 'from-blue-500 to-purple-500'

  return (
    <Link 
      href={`/contracts/${contractType.slug}`}
      className="block group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 card-hover h-full">
        {/* Background Gradient */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
        
        {/* Icon */}
        <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-2xl text-white">{contractType.icon}</span>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
            {contractType.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {contractType.description}
          </p>
          
          {/* CTA */}
          <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
            <span>Создать договор</span>
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}