export const ProductService = {
    getRequestsData() {
        return [
            {
                id: '1000',
                orderNumber: '1112333',
                name: 'أحمد جاسعارف احمد عبد العزيز الخالديم السلطان',
                orderType: 'طلب حصر إرث',
                status: 2,
                lastAction: 'مراجعة وثيقة حصر الرث اذا كان هناك اي اعتراض',
            },
            {
                id: '1001',
                orderNumber: '1112356',
                name: 'أحمد جاسعارف احمد عبد العزيز الخالديم السلطان',
                orderType: 'الإفصاح عن دين',
                status: 2,
                otherOrders: 2,
                step: 'الموافقة على معلومات التركة',
                lastAction: 'مراجعة وثيقة حصر الرث اذا كان هناك اي اعتراض',
            },
            {
                id: '1002',
                orderNumber: '1112657',
                name: 'أحمد جاسعارف احمد عبد العزيز الخالديم السلطان',
                orderType: 'الإفصاح عن وصية',
                status: 1,
                otherOrders: 4,
                step: 'اصدار الوثيقة النهائية',
                lastAction: 'مراجعة وثيقة حصر الرث اذا كان هناك اي اعتراض',
            },
            {
                id: '1003',
                orderNumber: '1112667',
                name: 'أحمد جاسعارف احمد عبد العزيز الخالديم السلطان',
                orderType: 'الإفصاح عن وقف',
                status: 1,
                otherOrders: 2,
                step: 'تهيئة التركة',
                lastAction: 'مراجعة وثيقة حصر الرث اذا كان هناك اي اعتراض',
            },
            {
                id: '1004',
                orderNumber: '1112787',
                name: 'أحمد جاسعارف احمد عبد العزيز الخالديم السلطان',
                orderType: 'طلب شاهد',
                status: 2,
                otherOrders: 1,
                step: 'قسمة التركة',
                lastAction: 'مراجعة وثيقة حصر الرث اذا كان هناك اي اعتراض',
            },
            {
                id: '1005',
                orderNumber: '1112888',
                name: 'أحمد جاسعارف احمد عبد العزيز الخالديم السلطان',
                orderType: 'الإفصاح عن ورث',
                status: 2,
                otherOrders: 3,
                step: 'الموافقة على معلومات الورثة',
                lastAction: 'مراجعة وثيقة حصر الرث اذا كان هناك اي اعتراض',
            },
            {
                id: '1006',
                orderNumber: '1112984',
                name: 'أحمد جاسعارف احمد عبد العزيز الخالديم السلطان',
                orderType: 'الإفصاح عن دين',
                status: 2,
                otherOrders: 2,
                step: 'الموافقة على معلومات التركة',
                lastAction: 'مراجعة وثيقة حصر الرث اذا كان هناك اي اعتراض',
            },
            {
                id: '1007',
                orderNumber: '1112043',
                name: 'أحمد جاسعارف احمد عبد العزيز الخالديم السلطان',
                orderType: 'الإفصاح عن وقف',
                status: 1,
                otherOrders: 2,
                step: 'تهيئة التركة',
                lastAction: 'مراجعة وثيقة حصر الرث اذا كان هناك اي اعتراض',

            },
            {
                id: '1008',
                orderNumber: '1112043',
                name: 'أحمد جاسعارف احمد عبد العزيز الخالديم السلطان',
                orderType: 'توثيق وثيقة',
                status: 1,
                otherOrders: 1,
                step: 'توثيق وثيقة حصر تركة',
                lastAction: 'مراجعة وثيقة حصر الرث اذا كان هناك اي اعتراض',

            }
        ];
    },

    getStepsData() {
        return [
            {
                id: '1000',
                name: 'هدى عارف احمد الخالدي',
                relationShip: 'إبنة',
                heirStatus: 'راشد',
                nationality: 'سعودي',
                status: 2,
            },
            {
                id: '1001',
                name: 'نور عارف احمد الخالدي',
                relationShip: 'إبنة',
                heirStatus: 'راشد',
                nationality: 'سعودي',
                status: 1,
            },
            {
                id: '1002',
                name: 'فاطمة عارف احمد الخالدي',
                relationShip: 'إبنة',
                heirStatus: 'راشد',
                nationality: 'سعودي',
                status: 1,
            },
            {
                id: '1003',
                name: 'حمد عارف احمد الخالدي',
                relationShip: 'إبن',
                heirStatus: 'راشد',
                nationality: 'سعودي',
                status: 1,
            },
            {
                id: '1004',
                name: 'ايمان عارف احمد الخالدي',
                relationShip: 'إبنة',
                heirStatus: 'قاصر',
                nationality: 'سعودي',
                status: 1,
            },
        ];
    },

    getHeirdomData() {
        return [
            {
                id: '1000',
                name: 'قاسم عبد الرحمن الفيصل',
                relationShip: 'إبن',
                heirStatus: 'راشد',
                nationality: 'سعودي',
                nationalType: "هوية وطنية",
                nationalId: "1834573680",
            },
            {
                id: '1001',
                name: 'حمد عبدالرحمن الفيصل',
                relationShip: 'إبن',
                heirStatus: 'راشد',
                nationality: 'سعودي',
                nationalType: "هوية وطنية",
                nationalId: "1834573680",
            },
            {
                id: '1002',
                name: 'هدى عبدالرحمن الفيصل',
                relationShip: 'إبنة',
                heirStatus: 'راشد',
                nationality: 'سعودي',
                nationalType: "هوية وطنية",
                nationalId: "1834573680",
            },
            {
                id: '1003',
                name: 'جاسم عبدالرحمن الفيصل',
                relationShip: 'إبن',
                heirStatus: 'راشد',
                nationality: 'سعودي',
                nationalType: "هوية وطنية",
                nationalId: "1834573680",
            },
            {
                id: '1004',
                name: 'ايمان عارف احمد الخالدي',
                relationShip: 'إبنة',
                heirStatus: 'قاصر',
                nationality: 'سعودي',
                nationalType: "هوية وطنية",
                nationalId: "1834573680",
            },
        ];
    },

    getWitnessesData() {
        return [
            {
                id: '1000',
                name: 'قاسم عبد الرحمن الفيصل',
                relationShip: 'إبن',
                nationalType: "هوية وطنية",
                nationalId: "1834573680",
                dob: '1445/10/30 هـ',
                phoneNumber: '90876745',
            },
            {
                id: '1001',
                name: 'حمد عبدالرحمن الفيصل',
                relationShip: 'إبن',
                nationalType: "هوية وطنية",
                nationalId: "1834573680",
                dob: '1445/10/30 هـ',
                phoneNumber: '80796576',
            },
        ];
    },

    getRequestDataList() {
        return Promise.resolve(this.getRequestsData());
    },

    getRequestStepsData() {
        return Promise.resolve(this.getStepsData());
    },

    getRequestHeirdomData() {
        return Promise.resolve(this.getHeirdomData());
    },

    getRequestWitnessesData() {
        return Promise.resolve(this.getWitnessesData());
    },
};