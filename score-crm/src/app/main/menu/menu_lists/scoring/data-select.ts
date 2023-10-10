export interface ISelectItems {
    text: string,
    value: number | string,
}

export let bank_list: ISelectItems[] = [
    { text: "ЗАО 'Банк Азии'", value: "bank_asia"},
    { text: "ЗАО 'Банк Компаньон'", value: "bank_companion"},
    { text: "ЗАО 'Демир Кыргыз Интернэшнл Банк'", value: "demir_bank"},
    { text: "ЗАО 'Кыргызский Инвестиционно-Кредитный Банк'", value: "bank_kicb"},
    { text: "ЗАО 'Кыргызско-Швейцарский Банк'", value: "kg-swithrzland_bank"},
    { text: "ЗАО 'Финка Банк'", value: "finca_bank"},
    { text: "ЗАО 'ЭкоИсламикБанк'", value: "eco_islam_bank"},
    { text: "ОАО 'Айыл Банк'", value: "ayil_bank"},
    { text: "ОАО 'Бакай Банк'", value: "bakai_bank"},
    { text: "ОАО 'Дос-Кредобанк'", value: "dos-credoBank"},
    { text: "ОАО 'Евразийский Сберегательный Банк'", value: "eurasion_saving_bank"},
    { text: "ОАО 'Капитал Банк'", value: "capital_bank"},
    { text: "ОАО 'Керемет Банк'", value: "keremet_bank"},
    { text: "ОАО 'Коммерческий банк Кыргызстан'", value: "cbk_bank"},
    { text: "ОАО 'Кыргызкоммерцбанк'", value: "kkb_bank"},
    { text: "ОАО 'Оптима Банк'", value: "optima_bank"},
    { text: "ОАО 'РСК Банк'", value: "rsk_bank"},
    { text: "ОАО 'Финанс Кредит Банк'", value: "finance_credit_bank"},
    { text: "ОАО 'Халык Банк Кыргызстан'", value: "halyk_bank_kg"},
    { text: "ОАО Банк 'Бай-Тушум'", value: "bay_tyshym"},
    { text: "ОАО Микрофинансовая компания 'Салым Финанс'", value: "salym_finance"},
    { text: "Российско-Кыргызский Фонд Развития", value: "Ru-Kg_Fond_Development"},
    { text: "Узбекско-Кыргызский Фонд Развития", value: "Uz-Kg_Fond_Development"},
    { text: "ЗАО МФК 'Элет-Капитал'", value: "elet_capital"},
    { text: "ОАО МФК АБН", value: "MFK_abn"}
];

export let vid_deyatilnosti: ISelectItems[] = [
    { text: 'Торговля', value: 0 },
    { text: 'Услуги', value: 1 },
    { text: 'Производство', value: 2 },
    { text: 'Сельское хозяйство', value: 3 },
];

export let credit_history_of_spouse_repaiment_status: ISelectItems[] = [
    {text: 'Хороший случай (3 балла)', value: 1},
    {text: 'Средний случай(2 балла)', value: 2},
    {text: 'Нету кредита (1 балла)', value: 3},
    {text: 'Худший случай (0 балла)', value: 4},
]
