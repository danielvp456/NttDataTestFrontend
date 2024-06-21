export class User {
    constructor(
        public id: number,
        public documentType: string,
        public documentNumber: string,
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public secondLastName: string,
        public phoneNumber: string,
        public address: string,
        public city: string
    ) { }
}
