
interface locationProps {
  lat: string
  lng: string
}

interface AddressProps {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: locationProps
}

interface CompanyProps {
  name: string
  catchPhrase: string
  bs: string
}

export interface UserProps {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: AddressProps
  company: CompanyProps
}
