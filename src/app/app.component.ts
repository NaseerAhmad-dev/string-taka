import { CommonModule } from '@angular/common';
import { Component, inject, Inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StringCalculatorService } from './services/string-calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule],
  providers:[StringCalculatorService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'string-taka-assignment';

  isFocused: boolean = false;
  inputValue: string = '';
  total!:number; 
   private calculatorService = inject(StringCalculatorService);

  onSubmit(){
   this.total =  this.calculatorService.add(this.inputValue);
  }
  
}
