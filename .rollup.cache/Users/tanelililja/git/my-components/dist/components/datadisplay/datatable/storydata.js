export var projects = [
    {
        guid: 'p111',
        name: 'Marketing campaign',
        customerOwner: {
            guid: 'u111',
            name: 'John Doe'
        },
        deadline: '2023-11-09',
        workHours: 15,
        workHoursEstimate: 150,
        progress: 10
    },
    {
        guid: 'p222',
        name: 'Strategy consulting',
        customerOwner: {
            guid: 'u111',
            name: 'John Doe'
        },
        deadline: '2023-10-22',
        workHours: 40,
        workHoursEstimate: 150,
        progress: 27
    },
    {
        guid: 'p333',
        name: 'Innovation',
        customerOwner: {
            guid: 'u222',
            name: 'Jane Doe'
        },
        deadline: '2023-10-22',
        workHours: 124,
        workHoursEstimate: 80,
        progress: 155
    },
    {
        guid: 'p444',
        name: 'New website',
        customerOwner: {
            guid: 'u333',
            name: 'Arthur Rodriguez'
        },
        deadline: '2023-12-01',
        workHours: 20,
        workHoursEstimate: 100,
        progress: 20
    },
    {
        guid: 'p555',
        name: 'Big project',
        customerOwner: {
            guid: 'u444',
            name: 'Kevin Young'
        },
        deadline: '2023-11-15',
        workHours: 150,
        workHoursEstimate: 300,
        progress: 50
    },
    {
        guid: 'p666',
        name: 'Small project',
        customerOwner: {
            guid: 'u555',
            name: 'Maria Hereford'
        },
        deadline: '2023-07-07',
        workHours: 1,
        workHoursEstimate: 10,
        progress: 10
    }
];
export var expandableProjects = [
    {
        guid: 'p111',
        name: 'Marketing campaign',
        customerOwner: {
            guid: 'u111',
            name: 'John Doe'
        },
        deadline: '2023-11-09',
        workHours: 15,
        workHoursEstimate: 150,
        progress: 10,
        subRows: [
            {
                guid: 'p444',
                name: 'New website',
                customerOwner: {
                    guid: 'u333',
                    name: 'Arthur Rodriguez'
                },
                deadline: '2023-12-01',
                workHours: 20,
                workHoursEstimate: 100,
                progress: 20
            },
            {
                guid: 'p555',
                name: 'Big project',
                customerOwner: {
                    guid: 'u444',
                    name: 'Kevin Young'
                },
                deadline: '2023-11-15',
                workHours: 150,
                workHoursEstimate: 300,
                progress: 50
            }
        ]
    },
    {
        guid: 'p222',
        name: 'Strategy consulting',
        customerOwner: {
            guid: 'u111',
            name: 'John Doe'
        },
        deadline: '2023-10-22',
        workHours: 40,
        workHoursEstimate: 150,
        progress: 27,
        subRows: [
            {
                guid: 'p666',
                name: 'Small project',
                customerOwner: {
                    guid: 'u555',
                    name: 'Maria Hereford'
                },
                deadline: '2023-07-07',
                workHours: 1,
                workHoursEstimate: 10,
                progress: 10
            }
        ]
    },
    {
        guid: 'p333',
        name: 'Innovation',
        customerOwner: {
            guid: 'u222',
            name: 'Jane Doe'
        },
        deadline: '2023-10-22',
        workHours: 124,
        workHoursEstimate: 80,
        progress: 155
    },
    {
        guid: 'lvl-0',
        name: 'Deep project',
        customerOwner: {
            guid: 'u222',
            name: 'Jane Doe'
        },
        deadline: '2023-01-01',
        workHours: 0,
        workHoursEstimate: 100,
        progress: 0,
        subRows: [
            {
                guid: 'lvl-1',
                name: 'Level 1 project',
                customerOwner: {
                    guid: 'u222',
                    name: 'Jane Doe'
                },
                deadline: '2023-02-01',
                workHours: 0,
                workHoursEstimate: 100,
                progress: 0,
                subRows: [
                    {
                        guid: 'lvl-2',
                        name: 'Level 2 project',
                        customerOwner: {
                            guid: 'u222',
                            name: 'Jane Doe'
                        },
                        deadline: '2023-03-01',
                        workHours: 0,
                        workHoursEstimate: 100,
                        progress: 0,
                        subRows: [
                            {
                                guid: 'lvl-3',
                                name: 'Level 3 project',
                                customerOwner: {
                                    guid: 'u222',
                                    name: 'Jane Doe'
                                },
                                deadline: '2023-04-01',
                                workHours: 0,
                                workHoursEstimate: 100,
                                progress: 0,
                                subRows: [
                                    {
                                        guid: 'lvl-4',
                                        name: 'Level 4 project',
                                        customerOwner: {
                                            guid: 'u222',
                                            name: 'Jane Doe'
                                        },
                                        deadline: '2023-05-01',
                                        workHours: 0,
                                        workHoursEstimate: 100,
                                        progress: 0,
                                        subRows: [
                                            {
                                                guid: 'lvl-5',
                                                name: 'Level 5 project',
                                                customerOwner: {
                                                    guid: 'u222',
                                                    name: 'Jane Doe'
                                                },
                                                deadline: '2023-06-01',
                                                workHours: 0,
                                                workHoursEstimate: 100,
                                                progress: 0
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
export var invoiceRowsWithSubRows = [
    {
        guid: 'r111',
        description: 'Grouped work hours for Mr. A',
        level: 0,
        quantity: 10,
        unit: 'h',
        unitPrice: '10,00',
        vat: '24',
        total: '100,00',
        subRows: [
            {
                guid: 'r1111',
                description: 'Work hour, Mr. A',
                invoiceRowGuid: 'r111',
                level: 1,
                quantity: 10,
                unit: 'h',
                unitPrice: '10,00',
                vat: '24',
                total: '100,00'
            }
        ]
    },
    {
        guid: 'r222',
        description: 'Grouped work hours for Mrs. B',
        level: 0,
        quantity: 15,
        unit: 'h',
        unitPrice: '20,00',
        vat: '24',
        total: '300,00',
        subRows: [
            {
                guid: 'r2221',
                description: 'Work hour, Mrs. B, frontend',
                invoiceRowGuid: 'r222',
                level: 1,
                quantity: 1,
                unit: 'h',
                unitPrice: '20,00',
                vat: '24',
                total: '100,00'
            },
            {
                guid: 'r2222',
                description: 'Work hour, Mrs. B, backend',
                invoiceRowGuid: 'r222',
                level: 1,
                quantity: 1,
                unit: 'h',
                unitPrice: '20,00',
                vat: '24',
                total: '200,00'
            },
            {
                guid: 'r2223',
                description: 'Work hour, Mrs. B, fullstack',
                invoiceRowGuid: 'r222',
                level: 1,
                quantity: 1,
                unit: 'h',
                unitPrice: '00,00',
                vat: '24',
                total: '000,00'
            }
        ]
    },
    {
        guid: 'r333',
        description: 'Grouped work hours for Ms. C',
        level: 0,
        quantity: 12,
        unit: 'h',
        unitPrice: '10,00',
        vat: '24',
        total: '120,00',
        subRows: [
            {
                guid: 'r3331',
                description: 'Work hour, Ms. C, UI',
                invoiceRowGuid: 'r333',
                level: 1,
                quantity: 6,
                unit: 'h',
                unitPrice: '10,00',
                vat: '24',
                total: '60,00'
            },
            {
                guid: 'r3332',
                description: 'Work hour, Ms. C, UX',
                invoiceRowGuid: 'r333',
                level: 1,
                quantity: 6,
                unit: 'h',
                unitPrice: '10,00',
                vat: '24',
                total: '60,00'
            }
        ]
    },
    {
        guid: 'r444',
        description: 'Fee, not grouped',
        level: 0,
        quantity: 1,
        unit: 'pc',
        unitPrice: '100,00',
        vat: '24',
        total: '100,00'
    },
    {
        guid: 'r555',
        description: 'Travel expense, not grouped',
        level: 0,
        quantity: 1,
        unit: 'pc',
        unitPrice: '50,00',
        vat: '24',
        total: '50,00'
    }
];
export var phases = [
    {
        guid: 'root',
        name: 'Project',
        startDate: '2025-01-01',
        deadline: '2026-01-01',
        workHours: 275,
        workHoursEstimate: 1000,
        subRows: [
            {
                guid: 'docs',
                name: 'Documentation',
                startDate: '2025-01-01',
                deadline: '2026-01-01',
                workHours: 0,
                workHoursEstimate: 100
            },
            {
                guid: 'plan',
                name: 'Planning',
                startDate: '2025-01-01',
                deadline: '2025-03-31',
                workHours: 75,
                workHoursEstimate: 100,
                subRows: [
                    {
                        guid: 'requirements',
                        name: 'Requirements gathering',
                        startDate: '2025-01-01',
                        deadline: '2025-03-31',
                        workHours: 75,
                        workHoursEstimate: 100
                    },
                    {
                        guid: 'design',
                        name: 'Design',
                        startDate: '2025-01-01',
                        deadline: '2025-03-31',
                        workHours: 75,
                        workHoursEstimate: 100
                    }
                ]
            },
            {
                guid: 'impl',
                name: 'Implementation',
                startDate: '2025-04-01',
                deadline: '2025-10-31',
                workHours: 100,
                workHoursEstimate: 500,
                subRows: [
                    {
                        guid: 'investigation',
                        name: 'Investigation',
                        startDate: '2025-04-01',
                        deadline: '2025-10-31',
                        workHours: 25,
                        workHoursEstimate: 100
                    },
                    {
                        guid: 'dev',
                        name: 'Development',
                        startDate: '2025-04-01',
                        deadline: '2025-10-31',
                        workHours: 75,
                        workHoursEstimate: 400
                    },
                    {
                        guid: 'unittest',
                        name: 'Unit testing',
                        startDate: '2025-04-01',
                        deadline: '2025-10-31',
                        workHours: 75,
                        workHoursEstimate: 400
                    }
                ]
            },
            {
                guid: 'qa',
                name: 'QA',
                startDate: '2025-06-01',
                deadline: '2025-12-31',
                workHours: 100,
                workHoursEstimate: 500
            },
            {
                guid: 'marketing',
                name: 'Marketing',
                startDate: '2025-06-01',
                deadline: '2025-12-31',
                workHours: 0,
                workHoursEstimate: 100
            }
        ]
    }
];
//# sourceMappingURL=storydata.js.map