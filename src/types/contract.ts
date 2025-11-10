export interface ContractType {
  id: string
  title: string
  description: string
  icon: string
  slug: string
  seoTitle: string
  seoDescription: string
}

export interface ContractFormData {
  contractType: string | null
  parties: {
    customer: {
      name: string
      address: string
      details: string
    }
    executor: {
      name: string
      address: string
      details: string
    }
  }
  subject: {
    description: string
    purpose: string
    deadline: string
  }
  rights: {
    territory: string
    duration: string
    exclusivity: 'exclusive' | 'non-exclusive'
  }
  payment: {
    amount: string
    currency: string
    terms: string
  }
}

export interface GeneratedContract {
  id: string
  title: string
  content: string
  createdAt: string
  downloadUrl: string
}