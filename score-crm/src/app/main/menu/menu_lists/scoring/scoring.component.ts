import { Component, OnInit } from '@angular/core';
// import { ISelectItems, bank_list, vid_deyatilnosti } from './data-select';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScoringForm } from 'src/app/main/Utils/SendScoreDataClasses';
import { IRoot } from 'src/app/main/Utils/ISendScoreDatas';

export interface ISelectItems {
  text: string,
  value: string | number,
}


@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.scss']
})
export class ScoringComponent {
  bank_list: ISelectItems[] = [
    { text: 'Optima Bank', value: 'optima' },
    { text: 'Keremet Bank', value: 'keremet' },
    { text: 'KYRGYZKOMERTZBANK', value: 'kkb' },
    { text: 'Kyrgystan Bank', value: 'cbk' },
    { text: 'Bakai Bank', value: 'bakai' },
  ];

  vid_deyatilnosti: ISelectItems[] = [
    { text: 'Торговля', value: 0 },
    { text: 'Услуги', value: 1 },
    { text: 'Производство', value: 2 },
    { text: 'Сельское хозяйство', value: 3 },
  ];

  userForm!: FormGroup;

  // userForm = new FormGroup({
  //   total_inf: new FormGroup({
  //     client_info: new FormGroup({
  //       phone_number: new FormControl<number | null>(null, { nonNullable: true }),
  //       first_name: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
  //       middle_name: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
  //       last_name: new FormControl<string>('', [Validators.minLength(1), Validators.maxLength(100)]),
  //       inn: new FormControl<number | null>(null, [Validators.required])
  //     }),
  //     bank_info: new FormGroup({
  //       bank_name: new FormControl<string>('', [Validators.required]),
  //       bank_branch: new FormControl<string>('', [Validators.required]),
  //       bank_loan_manager: new FormGroup({
  //         phone_number: new FormControl<string>('', [Validators.required]),
  //         first_name: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
  //         middle_name: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
  //         last_name: new FormControl<string>('', [Validators.minLength(1), Validators.maxLength(100)])
  //       })
  //     }),
  //     financial_data_from_bank: new FormGroup({
  //       funding_amount: new FormControl<number | null>(null, [Validators.required]),
  //       guarantee_amount: new FormControl<number | null>(null, [Validators.required]),
  //       funding_term_month: new FormControl<number | null>(null, [Validators.required]),
  //       interest_rate: new FormControl<number | null>(null, [Validators.pattern("^[0-9]*$")]),
  //       purpose_funding: new FormControl<number | null>(null, [Validators.minLength(1), Validators.maxLength(100)]),
  //       kind_of_business: new FormControl<number | null>(null, [Validators.pattern("^[0-9]*$")])
  //     }),
  //   }),
  //   quality_indicator: new FormGroup({
  //     business_lifespan: new FormControl<number | null>(null, [Validators.required]),
  //     term_has_patent: new FormControl<number | null>(null, [Validators.required]),
  //     debt_to_budget: new FormControl<boolean | null>(null, [Validators.required]),
  //     credit_history_of_spouse: new FormControl<boolean | null>(null, [Validators.required]),
  //     commercial_property: new FormGroup({
  //       own_property: new FormControl<boolean | null>(null, [Validators.required]),
  //       rented_property: new FormControl<boolean | null>(null, [Validators.required]),
  //       own_property_percentage: new FormControl<number | null>(null, [Validators.required]),
  //     }),
  //     own_property: new FormControl<boolean | null>(null, [Validators.required]),
  //   }),
  //   financial_data: new FormGroup({
  //     balance: new FormGroup({
  //       first_date: new FormGroup({
  //         date: new FormControl<Date | null>(null),
  //         active: new FormGroup({
  //           working_assets: new FormGroup({
  //             liquid_funds: new FormGroup({
  //               cash_box: new FormControl<number | null>(null),
  //               bank_account: new FormControl<number | null>(null),
  //               conservation: new FormControl<number | null>(null)
  //             }),
  //             accounts_receivable: new FormGroup ({
  //               check_to_receive: new FormControl<number | null>(null),
  //               prepayment_to_product: new FormControl<number | null>(null),
  //               paid_prepaid_expense: new FormControl<number | null>(null)
  //             }),
  //             inventories: new FormGroup({
  //               first: new FormControl<number | null>(null),
  //               second: new FormControl<number | null>(null),
  //               third: new FormControl<number | null>(null),
  //               fourth: new FormControl<number | null>(null),
  //               five: new FormControl<number | null>(null),
  //               six: new FormControl<number | null>(null)
  //             })
  //           }),
  //           main_capital: new FormGroup({
  //             property: new FormControl<number | null>(null),
  //             equipment: new FormControl<number | null>(null),
  //             vehicle: new FormControl<number | null>(null),
  //             other: new FormControl<number | null>(null),
  //             investments: new FormControl<number | null>(null)
  //           })
  //         }),
  //         passive: new FormGroup({
  //           borrowed_capital: new FormGroup({
  //             short_term_debt: new FormGroup({
  //               credit: new FormGroup({
  //                 client: new FormControl<number | null>(null),
  //                 spouse: new FormControl<number | null>(null)
  //               }),
  //               account_for_occasion: new FormControl<number | null>(null),
  //               trade_credit: new FormControl<number | null>(null),
  //               prepayment_from_customer: new FormControl<number | null>(null),
  //               settlements_with_budget: new FormControl<number | null>(null),
  //               off_budget_payments: new FormControl<number | null>(null),
  //               other: new FormControl<number | null>(null)
  //             }),
  //             long_term_debt: new FormControl<number | null>(null)
  //           }),
  //           own_capital: new FormGroup({
  //             statutory_capital_startup: new FormControl<number | null>(null),
  //             own_capital_profit: new FormControl<number | null>(null)
  //           })
  //         })
  //       }),
  //       second_date: new FormGroup({
  //         date: new FormControl<Date | null>(null, [Validators.required]),
  //         active: new FormGroup({
  //           working_assets: new FormGroup({
  //             liquid_funds: new FormGroup({
  //               cash_box: new FormControl<number | null>(null, [Validators.required]),
  //               bank_account: new FormControl<number | null>(null, [Validators.required]),
  //               conservation: new FormControl<number | null>(null, [Validators.required])
  //             }),
  //             accounts_receivable: new FormGroup({
  //               check_to_receive: new FormControl<number | null>(null, [Validators.required]),
  //               prepayment_to_product: new FormControl<number | null>(null, [Validators.required]),
  //               paid_prepaid_expense: new FormControl<number | null>(null, [Validators.required])
  //             }),
  //             inventories: new FormGroup({
  //               first: new FormControl<number | null>(null, [Validators.required]),
  //               second: new FormControl<number | null>(null, [Validators.required]),
  //               third: new FormControl<number | null>(null, [Validators.required]),
  //               fourth: new FormControl<number | null>(null, [Validators.required]),
  //               five: new FormControl<number | null>(null, [Validators.required]),
  //               six: new FormControl<number | null>(null, [Validators.required])
  //             })
  //           }),
  //           main_capital: new FormGroup({
  //             property: new FormControl<number | null>(null, [Validators.required]),
  //             equipment: new FormControl<number | null>(null, [Validators.required]),
  //             vehicle: new FormControl<number | null>(null, [Validators.required]),
  //             other: new FormControl<number | null>(null, [Validators.required]),
  //             investments: new FormControl<number | null>(null, [Validators.required])
  //           })
  //         }),
  //         passive: new FormGroup({
  //           borrowed_capital: new FormGroup({
  //             short_term_debt: new FormGroup({
  //               credit: new FormGroup({
  //                 client: new FormControl<number | null>(null, [Validators.required]),
  //                 spouse: new FormControl<number | null>(null, [Validators.required])
  //               }),
  //               account_for_occasion: new FormControl<number | null>(null, [Validators.required]),
  //               trade_credit: new FormControl<number | null>(null, [Validators.required]),
  //               prepayment_from_customer: new FormControl<number | null>(null, [Validators.required]),
  //               settlements_with_budget: new FormControl<number | null>(null, [Validators.required]),
  //               off_budget_payments: new FormControl<number | null>(null, [Validators.required]),
  //               other: new FormControl<number | null>(null, [Validators.required])
  //             }),
  //             long_term_debt: new FormControl<number | null>(null, [Validators.required])
  //           }),
  //           own_capital: new FormGroup({
  //             statutory_capital_startup: new FormControl<number | null>(null, [Validators.required]),
  //             own_capital_profit: new FormControl<number | null>(null, [Validators.required])
  //           })
  //         })
  //       })  
  //     }),
  //     OPiU: new FormGroup ({
  //       used_kind_business_ident: new FormArray({[
  //         {
  //           used_kind_business_id: 0,
  //           used_kind_business_name: Name kind of business
  //         }
  //       ]}),
  //       trade_margin_percentage: 0,
  //       OPiUData: [
  //         {
  //           date: 2023-08-10,
  //           mutable_data: [
  //             {
  //               id_kind_business: 0,
  //               revenue: 0,
  //               overheads: {
  //                 electricity: 0,
  //                 car_payments: 0,
  //                 taxes: 0,
  //                 salary: 0,
  //                 GSM: 0,
  //                 food: 0,
  //                 rent: 0
  //               }
  //             }
  //           ],
  //           family_expenses: 0,
  //           loan_installment: [
  //             0
  //           ],
  //           additional_income: 0
  //         }
  //       ]
  //     })
  //   })
  // })

  // scoringForm!: ScoringForm;
  // userForm: FormGroup = this.fb.group<IRoot>({

  // });

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder
  ) { }
  // ngOnInit(): void {
  //   // this.userForm = new FormGroup<IRoot>({

  //   // })
  // }


  ngOnInit(): void {
    
  }

  clickEv() {
    // console.log(this.userForm.value);
  }
    


  onDataCreate(DataForm: {}) {}
  // private url: string = 'http://127.0.0.1:8000/scoring/'
  // onDataCreate(DataForm: {}) {
  //   this.http.post<any>((this.url + 'math'), {'data': DataForm}).subscribe(res => {
  //     console.log(res);
  //   })
  // }
}
