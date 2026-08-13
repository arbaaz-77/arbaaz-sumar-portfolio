export interface Certification {
  name: string
  provider: string
  year: number
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified AI Practitioner',
    provider: 'Amazon Web Services',
    year: 2026,
    credentialUrl:
      'https://www.credly.com/badges/8fe8c9ec-ea95-4447-958c-864797fb3040',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    provider: 'Amazon Web Services',
    year: 2026,
    credentialUrl:
      'https://www.credly.com/badges/5d604b9e-4b40-4bda-b082-82907bde42d8',
  },
]
