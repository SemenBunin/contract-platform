import { Metadata } from 'next'
import { ContractTypeCard } from '@/components/contracts/ContractTypeCard'
import { contractTypes } from '@/data/contract-types'

export const metadata: Metadata = {
  title: 'Готовые договоры интеллектуальной собственности',
  description: 'Выберите тип договора для защиты вашей интеллектуальной собственности.',
}

export default function ContractsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Выберите тип договора
          </h1>
          <p className="text-xl text-gray-600">
            Подберите подходящий договор для вашей ситуации
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contractTypes.map((contractType) => (
            <ContractTypeCard
              key={contractType.id}
              contractType={contractType}
            />
          ))}
        </div>
      </div>
    </div>
  )
}