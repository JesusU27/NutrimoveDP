import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Food} from "../model/food.entity";
import {FormBuilder, FormsModule, NgForm} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {ToolbarComponent} from "../../../public/components/toolbar/toolbar.component";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatSortHeader} from "@angular/material/sort";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-mydiet-page',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
    ToolbarComponent,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatPaginator,
    MatCard,
    MatCardContent,
    MatColumnDef,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatSortHeader,
    RouterOutlet
  ],
  templateUrl: './mydiet-page.component.html',
  styleUrl: './mydiet-page.component.css'
})

export class MydietPageComponent{

  //#region Attributes
  @Input() mydiet!: Food;
  @Input() editMode: boolean = false;
  @Output() protected mydietAddRequested = new EventEmitter<Food>();
  @Output() protected mydietUpdateRequested = new EventEmitter<Food>();
  @Output() protected cancelRequested = new EventEmitter<void>();
  @ViewChild('mydietForm', { static: false }) protected mydietForm!: NgForm;

  constructor() {
    this.mydiet = new Food({});
  }

  private resetEditState() {
    this.mydiet = new Food({});
    this.editMode = false;
    this.mydietForm.reset();
  }

  protected  onCancel() {
    this.cancelRequested.emit();
    this.resetEditState()
  }

  private  isValid = () => this.mydietForm.valid;
  protected isEditMode = (): boolean => this.editMode;

  protected onSubmit() {
    if (this.isValid()) {
      let emitter = this.isEditMode() ? this.mydietUpdateRequested : this.mydietAddRequested;
      emitter.emit(this.mydiet);
      this.resetEditState();
    } else {
      console.error('Invalid from data');
    }
  }

}