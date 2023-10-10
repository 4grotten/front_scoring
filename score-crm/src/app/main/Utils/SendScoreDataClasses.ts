import { FormArray, FormControl, Validators } from "@angular/forms";
import { VirtualTimeScheduler, from } from "rxjs";
import { 
    IAccountsReceivable, 
    IActive, 
    IBalance, 
    IBalanceDates, 
    IBankInfo, 
    IBankLoanManager, 
    IBorrowedCapital, 
    IClientInfo, ICommercialProperty, ICredit, IFinancialData, IFinancialDataFromBank, IInventories, ILiquidFunds, IMainCapital, IMutableDaum, IOpiU, IOpiUdaum, IOverheads, IOwnCapital, IPassive, IQualityIndicator, IRoot, IShortTermDebt, ITotalInf, IUsedKindBusinessIdent, IWorkingAssets } from "./ISendScoreDatas";
import { numberAttribute } from "@angular/core";
// import { mergeNsAndName } from "@angular/compiler";
// import { Compiler } from "@angular/core";

// total info

interface IGetDto {
    getDto(): any;
    isValid(): boolean;
}

export class ClientInfo implements IGetDto{
    phone_number = new FormControl<string | ''>('', [Validators.required]);
    first_name = new FormControl<string | ''>('', [Validators.required]);
    middle_name = new FormControl<string | ''>('', [Validators.required]);
    last_name = new FormControl<string | ''>('', [Validators.required]);
    inn = new FormControl<number | null>(null, [Validators.required]);

    public getDto(): IClientInfo {
        return {
            phone_number: this.phone_number.value || '',
            first_name: this.first_name.value || '',
            middle_name: this.middle_name.value || '',
            last_name: this.last_name.value || '',
            inn: this.inn.value || 0
        }
    }

    public isValid(): boolean {
        return this.phone_number.valid 
            && this.first_name.valid 
            && this.middle_name.valid 
            && this.last_name.valid 
            && this.inn.valid;
    }
}

export class BankLoanManager implements IGetDto {
    phone_number = new FormControl<string | ''>('', [Validators.required]);
    first_name = new FormControl<string | ''>('', [Validators.required]);
    middle_name = new FormControl<string | ''>('', [Validators.required]);
    last_name = new FormControl<string | ''>('', [Validators.required]);

    public getDto(): IBankLoanManager {
        return {
            phone_number: this.phone_number.value || '',
            first_name: this.first_name.value || '',
            middle_name: this.middle_name.value || '',
            last_name: this.last_name.value || ''
        }
    }

    public isValid(): boolean {
        return this.phone_number.valid
            && this.first_name.valid
            && this.middle_name.valid
            && this.last_name.valid;
    }
}

export class BankInfo implements IGetDto {
    bank_name = new FormControl<string | ''>('', [Validators.required]);
    bank_branch = new FormControl<string | ''>('', [Validators.required]);
    bank_loan_manager = new BankLoanManager();

    public getDto(): IBankInfo {
        return {
            bank_name: this.bank_name.value || '',
            bank_branch: this.bank_branch.value || '',
            bank_loan_manager: this.bank_loan_manager.getDto()
        }
    }

    public isValid(): boolean {
        return this.bank_name.valid
            && this.bank_branch.valid
            && this.bank_loan_manager.isValid()
    }
}

export class FinancialDataFromBank implements IGetDto {
    funding_amount = new FormControl<number | null>(null, [Validators.required]);
    guarantee_amount = new FormControl<number | null>(null, [Validators.required]);
    funding_term_month = new FormControl<number | null>(null, [Validators.required]);
    interest_rate = new FormControl<string | ''>('0', [Validators.required]);
    purpose_funding = new FormControl<string | ''>('', [Validators.required]);
    kind_of_business = new FormControl<number | null>(null, [Validators.required]);

    public getDto(): IFinancialDataFromBank {
        return {
            funding_amount: this.funding_amount.value || 0,
            guarantee_amount: this.guarantee_amount.value || 0,
            funding_term_month: this.funding_term_month.value || 0,
            interest_rate: this.interest_rate.value || '0',
            purpose_funding: this.purpose_funding.value || '',
            kind_of_business: this.kind_of_business.value || 0
        }
    }

    public isValid(): boolean {
        return this.funding_amount.valid
            && this.guarantee_amount.valid
            && this.funding_term_month.valid
            && this.interest_rate.valid
            && this.purpose_funding.valid
            && this.kind_of_business.valid
    }
}

export class TotalInf implements IGetDto {
    client_info = new ClientInfo();
    bank_info = new BankInfo();
    financial_data_from_bank = new FinancialDataFromBank();

    public getDto(): ITotalInf {
        return {
            client_info: this.client_info.getDto(),
            bank_info: this.bank_info.getDto(),
            financial_data_from_bank: this.financial_data_from_bank.getDto()
        }
    }

    public isValid(): boolean {
        return this.client_info.isValid()
            && this.bank_info.isValid()
            && this.financial_data_from_bank.isValid()    
    }
}

// quality


export class CommercialProperty implements IGetDto {
    own_property = new FormControl<boolean | null>(null, [Validators.required]);
    rented_property = new FormControl<boolean | null>(null, [Validators.required]);;
    own_property_percentage = new FormControl<number | null>(null, [Validators.required]);

    public getDto(): ICommercialProperty {
        return {
            own_property: this.own_property.value || false,
            rented_property: this.rented_property.value || false,
            own_property_percentage: this.own_property_percentage.value || 0
        }
    }
    public isValid(): boolean {
        return this.own_property.valid
            && this.rented_property.valid
            && this.own_property_percentage.valid
    }

}

export class QualityIndicator implements IGetDto {
    business_lifespan = new FormControl<number | null>(null, [Validators.required]);
    term_has_patent = new FormControl<number | null>(null, [Validators.required]);
    debt_to_budget = new FormControl<boolean | null>(null, [Validators.required]);
    credit_history_of_spouse = new FormControl<number | null>(null, [Validators.required]);
    commercial_property = new CommercialProperty();
    own_property = new FormControl<boolean | null>(null, [Validators.required]);

    public getDto(): IQualityIndicator {
        return {
            business_lifespan: this.business_lifespan.value || 0,
            term_has_patent: this.term_has_patent.value || 0,
            debt_to_budget: this.debt_to_budget.value || false,
            credit_history_of_spouse: this.credit_history_of_spouse.value || 0,
            commercial_property: this.commercial_property.getDto(),
            own_property: this.own_property.value || false
        }
    }
    public isValid(): boolean {
        return this.business_lifespan.valid
            && this.term_has_patent.valid
            && this.debt_to_budget.valid
            && this.credit_history_of_spouse.valid
            && this.commercial_property.isValid()
            && this.own_property.valid
    }
}

// FinancialData

export class LiquidFunds implements IGetDto {
    cash_box = new FormControl<number | null>(null, [Validators.required]);
    bank_account = new FormControl<number | null>(null, [Validators.required]);
    conservation = new FormControl<number | null>(null, [Validators.required]);

    public getDto(): ILiquidFunds {
        return {
            cash_box: this.cash_box.value || 0,
            bank_account: this.bank_account.value || 0,
            conservation: this.conservation.value || 0
        }
    }
    public isValid(): boolean {
        return this.cash_box.valid
            && this.bank_account.valid
            && this.conservation.valid
    }
}

export class AccountsReceivable implements IGetDto {
    check_to_receive = new FormControl<number | null>(null, [Validators.required]);
    prepayment_to_product = new FormControl<number | null>(null, [Validators.required]);
    paid_prepaid_expense = new FormControl<number | null>(null, [Validators.required]);

    public getDto(): IAccountsReceivable {
        return {
            check_to_receive: this.check_to_receive.value || 0,
            prepayment_to_product: this.prepayment_to_product.value || 0,
            paid_prepaid_expense: this.paid_prepaid_expense.value || 0
        }
    }
    public isValid(): boolean {
        return this.check_to_receive.valid
            && this.prepayment_to_product.valid
            && this.paid_prepaid_expense.valid
    }
}

export class Inventories implements IGetDto {
    first = new FormControl<number | null>(null, [Validators.required]);
    second = new FormControl<number | null>(null, [Validators.required]);
    third = new FormControl<number | null>(null, [Validators.required]);
    fourth = new FormControl<number | null>(null, [Validators.required]);
    five = new FormControl<number | null>(null, [Validators.required]);
    six = new FormControl<number | null>(null, [Validators.required]);

    public getDto(): IInventories {
        return {
            first: this.first.value || 0,
            second: this.second.value || 0,
            third: this.third.value || 0,
            fourth: this.fourth.value || 0,
            five: this.five.value || 0,
            six: this.six.value || 0
        }
    }
    public isValid(): boolean {
        return this.first.valid
            && this.second.valid
            && this.second.valid
            && this.third.valid
            && this.fourth.valid
            && this.five.valid
            && this.six.valid
    }
}

export class WorkingAssets implements IGetDto {
    liquid_funds = new LiquidFunds();
    accounts_receivable = new AccountsReceivable();
    inventories = new Inventories();

    public getDto(): IWorkingAssets {
        return {
            liquid_funds: this.liquid_funds.getDto(),
            accounts_receivable: this.accounts_receivable.getDto(),
            inventories: this.inventories.getDto()
        }
    }
    public isValid(): boolean {
        return this.liquid_funds.isValid()
            && this.accounts_receivable.isValid()
            && this.inventories.isValid()
    }
}

export class MainCapital implements IGetDto {
    property = new FormControl<number | null>(null, [Validators.required]);
    equipment = new FormControl<number | null>(null, [Validators.required]);
    vehicle = new FormControl<number | null>(null, [Validators.required]);
    other = new FormControl<number | null>(null, [Validators.required]);
    investments = new FormControl<number | null>(null, [Validators.required]);

    public getDto(): IMainCapital {
        return {
            property: this.property.value || 0,
            equipment: this.equipment.value || 0,
            vehicle: this.vehicle.value || 0,
            other: this.other.value || 0,
            investments: this.investments.value || 0
        }
    }
    public isValid(): boolean {
        return this.property.valid
            && this.equipment.valid
            && this.vehicle.valid
            && this.other.valid
            && this.investments.valid
    }
}

export class Active implements IGetDto {
    working_assets = new WorkingAssets();
    main_capital = new MainCapital();

    public getDto(): IActive {
        return {
            working_assets: this.working_assets.getDto(),
            main_capital: this.main_capital.getDto()
        }
    }
    public isValid(): boolean {
        return this.working_assets.isValid()
            && this.main_capital.isValid()
    }
}

export class Credit implements IGetDto{
    client = new FormControl<number | null>(null, [Validators.required]);
    spouse = new FormControl<number | null>(null, [Validators.required]);

    public getDto(): ICredit {
        return {
            client: this.client.value || 0,
            spouse: this.spouse.value || 0
        }
    }
    public isValid(): boolean {
        return this.client.valid
            && this.spouse.valid
    }
}

export class ShortTermDebt implements IGetDto {
    credit = new Credit();
    account_for_occasion = new FormControl<number | null>(null, [Validators.required]);
    trade_credit = new FormControl<number | null>(null, [Validators.required]);
    prepayment_from_customer = new FormControl<number | null>(null, [Validators.required]);
    settlements_with_budget = new FormControl<number | null>(null, [Validators.required]);
    off_budget_payments = new FormControl<number | null>(null, [Validators.required]);
    other = new FormControl<number | null>(null, [Validators.required]);

    public getDto(): IShortTermDebt {
        return {
            credit: this.credit.getDto(),
            account_for_occasion: this.account_for_occasion.value || 0,
            trade_credit: this.trade_credit.value || 0,
            prepayment_from_customer: this.prepayment_from_customer.value || 0,
            settlements_with_budget: this.settlements_with_budget.value || 0,
            off_budget_payments: this.off_budget_payments.value || 0,
            other: this.other.value || 0
        }
    }
    public isValid(): boolean {
        return this.credit.isValid()
            && this.account_for_occasion.valid
            && this.trade_credit.valid
            && this.prepayment_from_customer.valid
            && this.settlements_with_budget.valid
            && this.off_budget_payments.valid
            && this.other.valid
    }
}

export class BorrowedCapital implements IGetDto {
    short_term_debt = new ShortTermDebt();
    long_term_debt = new FormControl<number | null>(null, [Validators.required]);

    public getDto(): IBorrowedCapital {
        return {
            short_term_debt: this.short_term_debt.getDto(),
            long_term_debt: this.long_term_debt.value || 0
        }
    }
    public isValid(): boolean {
        return this.short_term_debt.isValid()
            && this.long_term_debt.valid
    }
}

export class OwnCapital implements IGetDto {
    statutory_capital_startup = new FormControl<number | null>(null, [Validators.required]);
    own_capital_profit = new FormControl<number | null>(null, [Validators.required]);

    public getDto(): IOwnCapital {
        return {
            statutory_capital_startup: this.statutory_capital_startup.value || 0,
            own_capital_profit: this.own_capital_profit.value || 0
        }
    }
    public isValid(): boolean {
        return this.statutory_capital_startup.valid
            && this.own_capital_profit.valid
    }
}

export class Passive implements IGetDto {
    borrowed_capital = new BorrowedCapital();
    own_capital = new OwnCapital();

    public getDto(): IPassive {
        return {
            borrowed_capital: this.borrowed_capital.getDto(),
            own_capital: this.own_capital.getDto()
        }
    }
    public isValid(): boolean {
        return this.borrowed_capital.isValid()
            && this.own_capital.isValid()
    }
}

export class BalanceDates implements IGetDto {
    date = new FormControl<string>('', [Validators.required]);
    active = new Active();
    passive = new Passive();

    public getDto(): IBalanceDates {
        return {
            date: this.date.value || '',
            active: this.active.getDto(),
            passive: this.passive.getDto()
        }
    }
    public isValid(): boolean {
        return this.date.valid
            && this.active.isValid()
            && this.passive.isValid()
    }
}

export class Balance implements IGetDto {
    first_date = new BalanceDates();
    second_date = new BalanceDates();

    public getDto(): IBalance {
        return {
            first_date: this.first_date.getDto(),
            second_date: this.second_date.getDto()
        }
    }
    public isValid(): boolean {
        return this.first_date.isValid()
            && this.second_date.isValid()
    }
}

export class UsedKindBusinessIdent implements IGetDto {
    used_kind_business_id = new FormControl<number | null>(null, [Validators.required]);
    used_kind_business_name = new FormControl<string>('', [Validators.required]);

    public getDto(): IUsedKindBusinessIdent {
        return {
            used_kind_business_id:this.used_kind_business_id.value || 0,
            used_kind_business_name: this.used_kind_business_name.value || ''
        }
    }
    public isValid(): boolean {
        return this.used_kind_business_id.valid
            && this.used_kind_business_name.valid
    }
}

export class Overheads implements IGetDto {
    electricity = new FormControl<number | null>(null, [Validators.required]);
    car_payments = new FormControl<number | null>(null, [Validators.required]);
    taxes = new FormControl<number | null>(null, [Validators.required]);
    salary = new FormControl<number | null>(null, [Validators.required]);
    GSM = new FormControl<number | null>(null, [Validators.required]);
    food = new FormControl<number | null>(null, [Validators.required]);
    rent = new FormControl<number | null>(null, [Validators.required]);

    public getDto(): IOverheads {
        return {
            electricity: this.electricity.value || 0,
            car_payments: this.car_payments.value || 0,
            taxes: this.taxes.value || 0,
            salary: this.salary.value || 0,
            GSM: this.GSM.value || 0,
            food: this.food.value || 0,
            rent: this.rent.value || 0
        }
    }
    public isValid(): boolean {
        return this.electricity.valid
            && this.car_payments.valid
            && this.taxes.valid
            && this.salary.valid
            && this.GSM.valid
            && this.food.valid
            && this.rent.valid
    }
}

export class MutableDaum implements IGetDto {
    id_kind_business = new FormControl<number | null>(null, [Validators.required]);
    revenue = new FormControl<number | null>(null, [Validators.required]);;
    overheads = new Overheads();

    public getDto(): IMutableDaum {
        return {
            id_kind_business: this.id_kind_business.value || 0,
            revenue: this.revenue.value || 0,
            overheads: this.overheads.getDto()
        }
    }
    public isValid(): boolean {
        return this.id_kind_business.valid
            && this.revenue.valid
            && this.overheads.isValid()
    }
}

export class OpiUdaum implements IGetDto {
    date = new FormControl<string>('', [Validators.required]);
    mutable_data: Array<MutableDaum> = new Array<MutableDaum>();
    family_expenses = new FormControl<number | null>(null, [Validators.required]);
    loan_installment: Array<FormControl<number>> = new Array<FormControl<number>>();
    // loan_installment: FormArray = new FormArray([new FormControl()]);
    additional_income = new FormControl<number | null>(null, [Validators.required]);

    isCollapsed: boolean = false;
    
    constructor() {
        this.mutable_data.push(new MutableDaum());
        // this.loan_installment.push(new FormControl());
    }

    addMutableData() {
        this.mutable_data.push(new MutableDaum());
    }

    removeMutableData(index: number) {
        this.mutable_data.splice(index, 1);
    }

    addLoanInstallment() {
        this.loan_installment.push(new FormControl())
        // this.loan_installment.push(new FormControl(0, Validators.required));
    }

    removeLoanInstallment(index: number) {
        this.loan_installment.splice(index, 1);
        // this.loan_installment.removeAt(index);
    }

    public getDto(): IOpiUdaum {
        return {
            date: this.date.value || '',
            mutable_data: this.mutable_data.map(mutable_data => {
                return mutable_data.getDto();
            }),
            family_expenses: this.family_expenses.value || 0,
            loan_installment: this.loan_installment.map(loan_inst => {
                if (loan_inst.value === null) {
                    loan_inst.setValue(0);
                }
                return loan_inst.value;
            }),
            // loan_installment: this.loan_installment.value,
            additional_income: this.additional_income.value || 0
        }
    }
    public isValid(): boolean {
        return this.date.valid
            && this.validMutableData()
            && this.family_expenses.valid
            && this.validLoanInstallment()
            && this.additional_income.valid
    }

    public validMutableData(): boolean {
        let valid: boolean = true;
        this.mutable_data.forEach(mut_data => {
            if (!mut_data.isValid()) {
                valid = false;
            }
        })
        return valid;
    }

    public validLoanInstallment(): boolean {
        let valid: boolean = true;
        this.loan_installment.forEach(loan_inst => {
            if(!loan_inst.valid) {
                valid = false;
            }
        })
        return valid;
        // return this.loan_installment.valid
    }
}

export class OpiU implements IGetDto {
    used_kind_business_ident: Array<UsedKindBusinessIdent> = new Array<UsedKindBusinessIdent>();
    trade_margin_percentage = new FormControl<number | null>(null, [Validators.required]);
    OPiUData: Array<OpiUdaum> = new Array<OpiUdaum>();

    isCollapsed: boolean = false;

    constructor() {
        this.used_kind_business_ident.push(new UsedKindBusinessIdent());
        this.OPiUData.push(new OpiUdaum());
    }

    addUsedKindBusiness() {
        this.used_kind_business_ident.push(new UsedKindBusinessIdent());
    }

    removeUsedKindBusiness(index: number) {
        this.used_kind_business_ident.splice(index, 1)
    }

    addOPiuData() {
        this.OPiUData.push(new OpiUdaum());
    }

    removeOPiUData(index: number) {
        this.OPiUData.splice(index, 1);
    }

    public getDto(): IOpiU {
        return {
            used_kind_business_ident: this.used_kind_business_ident.map(usedKindBusinessIdent => {
                return usedKindBusinessIdent.getDto();
            }),
            trade_margin_percentage: this.trade_margin_percentage.value || 0,
            OPiUData: this.OPiUData.map(oPiUData => {
                return oPiUData.getDto()
            }),
        }
    }

    public isValid(): boolean {
        return this.validUsedKindBusinessIdent()
            && this.trade_margin_percentage
            && this.validOPiUData()
    }

    validUsedKindBusinessIdent(): boolean {
        let valid = true;
        this.used_kind_business_ident.forEach(kind_business => {
            if(!kind_business.isValid()){
                valid = false;
            }
        })
        return valid;
    }

    validOPiUData(): boolean {
        let valid = true;
        this.OPiUData.forEach(oPiUData => {
            if(!oPiUData.isValid()){
                valid = false;
            }
        })
        return valid
    }
    
}

export class FinancialData implements IGetDto {
    balance = new Balance();
    OPiU = new OpiU();

    public getDto(): IFinancialData {
        return {
            balance: this.balance.getDto(),
            OPiU: this.OPiU.getDto()
        }
    }

    public isValid(): boolean {
        return this.balance.isValid()
            && this.OPiU.isValid()
    }
}

export class ScoringForm implements IGetDto {
    total_inf: TotalInf = new TotalInf();
    quality_indicator = new QualityIndicator();
    financial_data = new FinancialData();
    
    public getDto(): IRoot {
        return {
            total_inf: this.total_inf.getDto(),
            quality_indicator: this.quality_indicator.getDto(),
            financial_data: this.financial_data.getDto()
        }
    }

    public isValid(): boolean {
        return this.total_inf.isValid()
            && this.quality_indicator.isValid()
            && this.financial_data.isValid()
    }
}
