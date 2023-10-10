export interface IRoot {
    total_inf: ITotalInf
    quality_indicator: IQualityIndicator
    financial_data: IFinancialData
}

export interface ITotalInf {
    client_info: IClientInfo
    bank_info: IBankInfo
    financial_data_from_bank: IFinancialDataFromBank
}

export interface IClientInfo {
    phone_number: string
    first_name: string
    middle_name: string
    last_name: string
    inn: number
}

export interface IBankInfo {
    bank_name: string
    bank_branch: string
    bank_loan_manager: IBankLoanManager
}

export interface IBankLoanManager {
    phone_number: string
    first_name: string
    middle_name: string
    last_name: string
}

export interface IFinancialDataFromBank {
    funding_amount: number
    guarantee_amount: number
    funding_term_month: number
    interest_rate: string
    purpose_funding: string
    kind_of_business: number
}

export interface IQualityIndicator {
    business_lifespan: number
    term_has_patent: number
    debt_to_budget: boolean
    credit_history_of_spouse: number
    commercial_property: ICommercialProperty
    own_property: boolean
}

export interface ICommercialProperty {
    own_property: boolean
    rented_property: boolean
    own_property_percentage: number
}

export interface IFinancialData {
    balance: IBalance
    OPiU: IOpiU
}

export interface IBalance {
    first_date: IBalanceDates
    second_date: IBalanceDates
}

export interface IBalanceDates {
    date: string
    active: IActive
    passive: IPassive
}

export interface IActive {
    working_assets: IWorkingAssets
    main_capital: IMainCapital
}

export interface IWorkingAssets {
    liquid_funds: ILiquidFunds
    accounts_receivable: IAccountsReceivable
    inventories: IInventories
}

export interface ILiquidFunds {
    cash_box: number
    bank_account: number
    conservation: number
}

export interface IAccountsReceivable {
    check_to_receive: number
    prepayment_to_product: number
    paid_prepaid_expense: number
}

export interface IInventories {
    first: number
    second: number
    third: number
    fourth: number
    five: number
    six: number
}

export interface IMainCapital {
    property: number
    equipment: number
    vehicle: number
    other: number
    investments: number
}

export interface IPassive {
    borrowed_capital: IBorrowedCapital
    own_capital: IOwnCapital
}

export interface IBorrowedCapital {
    short_term_debt: IShortTermDebt
    long_term_debt: number
}

export interface IShortTermDebt {
    credit: ICredit
    account_for_occasion: number
    trade_credit: number
    prepayment_from_customer: number
    settlements_with_budget: number
    off_budget_payments: number
    other: number
}

export interface ICredit {
    client: number
    spouse: number
}

export interface IOwnCapital {
    statutory_capital_startup: number
    own_capital_profit: number
}

export interface IOpiU {
    used_kind_business_ident: Array<IUsedKindBusinessIdent>
    trade_margin_percentage: number
    OPiUData: Array<IOpiUdaum>
}

export interface IUsedKindBusinessIdent {
    used_kind_business_id: number
    used_kind_business_name: string
}

export interface IOpiUdaum {
    date: string
    mutable_data: Array<IMutableDaum>
    family_expenses: number
    loan_installment: Array<number>
    additional_income: number
}

export interface IMutableDaum {
    id_kind_business: number
    revenue: number
    overheads: IOverheads
}

export interface IOverheads {
    electricity: number
    car_payments: number
    taxes: number
    salary: number
    GSM: number
    food: number
    rent: number
}
