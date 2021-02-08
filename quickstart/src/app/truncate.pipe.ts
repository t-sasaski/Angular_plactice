import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string,length: number = 50, omission: string = '...') {
    // 加工対象の文字列でない場合、もとの値をそのまま返す
    if (typeof value !== 'string') {
      return value;
    }
    // 文字列長が指定文字数（length）以下の場合は、もとの値をそのまま返す
    if (value.length <= length) {
      return value;
    } else {
      return value.substring(0, length) + omission;    
    }
  }
}

