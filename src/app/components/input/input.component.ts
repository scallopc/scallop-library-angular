import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit {
  // @Input() value = new FormControl('', Validators.required);
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() inputId?: string;
  @Input() label: string = '';
  @Input() cssClass?: string;
  @Input() required?: boolean = false;
  @Input() control?: any;
  @Input() disabled?: boolean = false;
  @Input() mask?: string = '';
  @Input() customValidator?: () => void;
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  constructor() {}

  ngOnInit() {}

  // writeValue(value: string): void {
  //   if (value) {
  //     this.value.setValue(value);
  //   }
  //   if (value === null) {
  //     this.value.reset();
  //   }
  // }

  writeValue(value: string): void {
    if (value) {
      this.value = this.formatWithMask(value, this.mask);
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Função para aplicar a máscara ao valor do campo e remover caracteres não numéricos
  formatWithMask(value: string, mask: string | string[]): string {
    if (!mask || !value) {
      return value;
    }

    // Remover caracteres não numéricos
    const numericValue = value.replace(/\D/g, '');

    if (Array.isArray(mask)) {
      // Se houver várias máscaras, aplique a primeira máscara que se encaixe no valor
      for (const singleMask of mask) {
        const result = this.applyMask(numericValue, singleMask);
        if (result.length === singleMask.length) {
          return result;
        }
      }
    } else {
      // Se houver apenas uma máscara, aplique-a diretamente
      return this.applyMask(numericValue, mask);
    }

    return numericValue;
  }

  applyMask(value: string, mask: string): string {
    let result = '';
    let valueIndex = 0;

    for (let i = 0; i < mask.length; i++) {
      if (valueIndex >= value.length) {
        break;
      }
      const maskChar = mask[i];
      if (maskChar === '0') {
        result += value[valueIndex];
        valueIndex++;
      } else {
        result += maskChar;
      }
    }

    return result;
  }

  fillValue($event: Event) {
    const e = $event.target as HTMLInputElement;
    this.value = this.formatWithMask(e.value, this.mask);
    this.onChange(this.value);
    this.onTouched();
  }
}
