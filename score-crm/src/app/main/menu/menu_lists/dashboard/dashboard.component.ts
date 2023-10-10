import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  // form = this.fb.group({
  //   lessons: this.fb.array([])
  // })
  // form = this.fb.control('')

  formScore = this.fb.group ({
    total_inf: this.fb.group ({
      client_info: this.fb.group ({
        phone_number: ['', Validators.required],
        first_name: ['', Validators.required],
        middle_name: ['', Validators.required],
        last_name: [''],
        inn: [0, Validators.required]
      }),
      bank_info: this.fb.group ({
        bank_name: ['', Validators.required],
        bank_branch: ['', Validators.required],
        bank_loan_manager: this.fb.group ({
          phone_number: ['', Validators.required],
          first_name: ['', Validators.required],
          middle_name: ['', Validators.required],
          last_name: ['']
        })
      }),
      financial_data_from_bank: this.fb.group ({
        funding_amount: [0, Validators.required],
        guarantee_amount: [0, Validators.required],
        funding_term_month: [0, Validators.required],
        interest_rate: [0, Validators.required],
        purpose_funding: ['', Validators.required],
        kind_of_business: [0, Validators.required]
      })
    }),
    quality_indicator: this.fb.group ({
      business_lifespan: [0, Validators.required],
      term_has_patent: [0, Validators.required],
      debt_to_budget: [false, Validators.required],
      credit_history_of_spouse: [0, Validators.required],
      commercial_property: this.fb.group ({
        own_property: [false, Validators.required],
        rented_property: [false, Validators.required],
        own_property_percentage: [0, Validators.required]
      }),
      own_property: [false, Validators.required]
    }),
    financial_data: this.fb.group ({
      balance: this.fb.group ({
        first_date: this.fb.group ({
          date: ['2023-08-10'],
          active: this.fb.group ({
            working_assets: this.fb.group ({
              liquid_funds: this.fb.group ({
                cash_box: [0],
                bank_account: [0],
                conservation: [0]
              }),
              accounts_receivable: this.fb.group ({
                check_to_receive: [0],
                prepayment_to_product: [0],
                paid_prepaid_expense: [0]
              }),
              inventories: this.fb.group ({
                first: [0],
                second: [0],
                third: [0],
                fourth: [0],
                five: [0],
                six: [0]
              })
            }),
            main_capital: this.fb.group ({
              property: [0],
              equipment: [0],
              vehicle: [0],
              other: [0],
              investments: [0]
            })
          }),
          passive: this.fb.group ({
            borrowed_capital: this.fb.group ({
              short_term_debt: this.fb.group ({
                credit: this.fb.group ({
                  client: [0],
                  spouse: [0]
                }),
                account_for_occasion: [0],
                trade_credit: [0],
                prepayment_from_customer: [0],
                settlements_with_budget: [0],
                off_budget_payments: [0],
                other: [0]
              }),
              long_term_debt: [0]
            }),
            own_capital: this.fb.group ({
              statutory_capital_startup: [0],
              own_capital_profit: [0]
            })
          })
        }),
        second_date: this.fb.group ({
          date: ['2023-08-10'],
          active: this.fb.group ({
            working_assets: this.fb.group ({
              liquid_funds: this.fb.group ({
                cash_box: [0],
                bank_account: [0],
                conservation: [0]
              }),
              accounts_receivable: this.fb.group ({
                check_to_receive: [0],
                prepayment_to_product: [0],
                paid_prepaid_expense: [0]
              }),
              inventories: this.fb.group ({
                first: [0],
                second: [0],
                third: [0],
                fourth: [0],
                five: [0],
                six: [0]
              })
            }),
            main_capital: this.fb.group ({
              property: [0],
              equipment: [0],
              vehicle: [0],
              other: [0],
              investments: [0]
            })
          }),
          passive: this.fb.group ({
            borrowed_capital: this.fb.group ({
              short_term_debt: this.fb.group ({
                credit: this.fb.group ({
                  client: [0],
                  spouse: [0]
                }),
                account_for_occasion: [0],
                trade_credit: [0],
                prepayment_from_customer: [0],
                settlements_with_budget: [0],
                off_budget_payments: [0],
                other: [0]
              }),
              long_term_debt: [0]
            }),
            own_capital: this.fb.group ({
              statutory_capital_startup: [0],
              own_capital_profit: [0]
            })
          })
        })
      }),
      OPiU: this.fb.group ({
        used_kind_business_ident: this.fb.array ([
          this.fb.group({
            used_kind_business_id: [0, Validators.required],
            used_kind_business_name: ['Name kind of business', Validators.required]
          })
        ]),
        trade_margin_percentage: [0, Validators.required],
        OPiUData: this.fb.array ([
          this.fb.group({
            date: ['2023-08-10'],
            mutable_data: this.fb.array ([
              this.fb.group ({
                id_kind_business: [0, Validators.required],
                revenue: [0, Validators.required],
                overheads: this.fb.group ({
                  electricity: [0, Validators.required],
                  car_payments: [0, Validators.required],
                  taxes: [0, Validators.required],
                  salary: [0, Validators.required],
                  GSM: [0, Validators.required],
                  food: [0, Validators.required],
                  rent: [0, Validators.required]
                })
              })
            ]),
            family_expenses: [0, Validators.required],
            loan_installment: this.fb.array([
              [0]
            ]),
            additional_income: [0, Validators.required]
          })
        ])
      })
    })
  })

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}
  
  get used_kind_business_ident() {
    return this.formScore.get('used_kind_business_ident') as unknown as FormArray;
  }

  addUsed_kind_business_ident() {
    this.used_kind_business_ident.push(
      this.fb.group({
        used_kind_business_id: [0, Validators.required],
        used_kind_business_name: ['Name kind of business', Validators.required]
      })
    )
  }

  clickCheck() {
    console.log(JSON.stringify(this.formScore.value))
  }
  url = 'http://127.0.0.1:8000/scoring/math'
  sendBack(DataForm: any) {
    this.http.post(this.url, DataForm).subscribe(res =>{

    })
  }
}


