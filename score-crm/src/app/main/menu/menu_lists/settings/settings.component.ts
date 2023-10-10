import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ScoringForm, UsedKindBusinessIdent } from 'src/app/main/Utils/SendScoreDataClasses';
import { bank_list, credit_history_of_spouse_repaiment_status, vid_deyatilnosti } from '../scoring/data-select';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  banklist = bank_list;
  vid_deyat = vid_deyatilnosti;
  repaiment_status = credit_history_of_spouse_repaiment_status;
  constructor(
    private http: HttpClient
  ) { }

  step: number = 1;
  scoringForm = new ScoringForm()
  selectedUsedKinOfBusiness: UsedKindBusinessIdent[] = []
  res?: any = null

  scrolNext() {
    this.step += 1;
  }

  scrolPrev() {
    if (this.step != 1) {
      this.step -= 1;
    }
  }

  addOpiuData() {
    this.scoringForm.financial_data.OPiU.addOPiuData();
  }

  removeOpiuData(index: number) {
    this.scoringForm.financial_data.OPiU.removeOPiUData(index);
  }

  addUsedKindOfBusiness() {
    this.scoringForm.financial_data.OPiU.addUsedKindBusiness();
  }

  removeUsedKindOfBusiness(index: number) {
    this.scoringForm.financial_data.OPiU.removeUsedKindBusiness(index);
  }

  checkFormControl(formControl: FormControl): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

  addLoanInstallmentInput(index: number) {
    // this.scoringForm.financial_data.OPiU.OPiUData[index].addLoanInstallment()
    this.scoringForm.financial_data.OPiU.OPiUData[index].addLoanInstallment()
  }

  removeLoanInstallmentInput(indexOPiUData: number ,indexLoanInst: number) {
    this.scoringForm.financial_data.OPiU.OPiUData[indexOPiUData].removeLoanInstallment(indexLoanInst);
    // this.scoringForm.financial_data.OPiU.OPiUData[1].removeLoanInstallment(indexLoanInst);
  }

  private url = 'http://192.168.20.121:8000/'
  onSumbit() {
    // console.log(JSON.stringify(this.scoringForm.getDto()));
    // console.log(this.scoringForm.isValid())
    // if (this.scoringForm.isValid()) {
    this.http.post(this.url + 'scoring/math', this.scoringForm.getDto()).subscribe(res => {
      this.res = res;
      this.step = 0;
    })  
    // }
  }
}
