export type Users = {
    gender: string
    name: {
        first: string,
        last: string,
    },
    picture: {
        medium: string
    }
    location: string,
    dob: string,
    phone: string,
    cell: string
}