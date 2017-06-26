import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy } from '@angular/core';

import { TimepickerComponent } from '../../timepicker/timepicker.component';
import { TimepickerConfig } from '../../timepicker/timepicker.config';
import { TimepickerActions } from '../../timepicker/reducer/timepicker.actions';

/*function createComponent(htmlTemplate, dtc?: string): ComponentFixture<TimepickerComponent> {
  switch (dtc) {
    case 'OnPush':
      TestBed.overrideComponent(TimepickerComponent, {
        set: {
          template: htmlTemplate,
          changeDetection: ChangeDetectionStrategy.OnPush
        }
      });
      break;
    default:
      TestBed.overrideComponent(TimepickerComponent, {
        set: {template: htmlTemplate}
      });
  }

  const fixture = TestBed.createComponent(TimepickerComponent);
  fixture.detectChanges();
  return fixture as ComponentFixture<TimepickerComponent>;
}*/

describe('Component: timepicker', () => {
  let fixture: ComponentFixture<TimepickerComponent>;
  let context: TimepickerComponent;
  let nativeElement: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimepickerComponent],
      providers: [
        TimepickerConfig,
        TimepickerActions
      ]
    });

    fixture = TestBed.createComponent(TimepickerComponent);
    context = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  // validate input fields
  it('should validate the data in the minutes input', () => {});
  it('should validate the data in the seconds input', () => {});
  it('should change the active input field after enter click', () => {});
  it('should auto complete input field after enter click if enter half value', () => {});
  it('should auto clean input field after enter invalid value', () => {});
  it('should display error input field after enter invalid value', () => {});

  // validate input fields with property of 'showMeridian'
  it('should default state showMeridian display AM/PM button', () => {});
  it('should display time at time format 12h', () => {});
  it('should validate the data in the hours input at time format 12h', () => {});
  it('should change time period after click on AM/PM button', () => {});
  it('should not display AM/PM button if showMeridian switch off', () => {});
  it('should display time at time format 24h', () => {});
  it('should validate the data in the hours input at time format 24h', () => {});

  // validate input fields with property of 'max'
  it('should not value of the input field exceed the specified value', () => {});
  it('should change the input field to specified value if it exceed the specified value', () => {});

  // validate input fields with property of 'min'
  it('should not value of the input field less the specified value', () => {});
  it('should change the input field to specified value if it less the specified value', () => {});

  // display seconds fields with property of 'showSeconds'
  it('should default state showSeconds is not display seconds field', () => {});
  it('should display seconds field if showMeridian switch on', () => {});

  // display seconds fields with property of 'readonlyInput'
  it('should be possible to enter values', () => {});
  it('should be display is time change buttons', () => {});
  it('should be impossible to enter values', () => {});
  it('should be not display is time change buttons', () => {});

  // display seconds fields with property of 'hourStep'
  it('should add to the hour input field value, hourStep value', () => {});
  it('should subtract to the hour input field value, hourStep value', () => {});

  // display seconds fields with property of 'minuteStep'
  it('should add to the minute input field value, minuteStep value', () => {});
  it('should subtract to the minute input field value, minuteStep value', () => {});

  // default configuration
  it('should be empty input fields', () => {});
  it('should set time in a input field after click on input change button', () => {});

  // hide change button
  it('should display change button in default state', () => {});
  it('should hide change button', () => {});

  // validate 'mousewheel'
  it('should can change input value with the mouse wheel', () => {});
  it('should can not change input value with the mouse wheel', () => {});

  // validate 'arrowkeys'
  it('should can change input value with the arrow keys', () => {});
  it('should can not change input value with the arrow keys', () => {});

  // custom validate
  it('should leave the input fields not specified', () => {});
  it('should valid value in input fields', () => {});
  it('should invalid value in input fields', () => {});

/*it('should prevDef', () => {
    context.prevDef(new Event('customWheel'));
  });

  it('should wheelSign', () => {
    context.wheelSign(new Event('customWheel'));
  });

  it('should canBeChanged wheel', () => {
    context.mousewheel = false;
    context.canBeChanged('wheel');
  });

  it('should canBeChanged key', () => {
    context.arrowkeys = false;
    context.canBeChanged('key');
  });

  it('should canBeChanged true', () => {
    context.readonlyInput = true;
    context.canBeChanged();
  });

  it('should changeHours', () => {
    context.changeHours(3);
  });

  it('should changeHours canIncrementHours', () => {
    context.canIncrementHours = false;
    context.changeHours(3);
  });

  it('should changeHours canDecrementHours', () => {
    context.canDecrementHours = false;
    context.changeHours(-3);
  });

  it('should changeHours wheel', () => {
    context.mousewheel = false;
    context.changeHours(3, 'wheel');
  });

  it('should changeMinutes', () => {
    context.changeMinutes(3);
  });

  it('should changeMinutes canIncrementHours', () => {
    context.canIncrementMinutes = false;
    context.changeMinutes(3);
  });

  it('should changeMinutes canDecrementHours', () => {
    context.canDecrementMinutes = false;
    context.changeMinutes(-3);
  });

  it('should changeMinutes wheel', () => {
    context.mousewheel = false;
    context.changeMinutes(3, 'wheel');
  });

  it('should changeSeconds', () => {
    context.changeSeconds(3);
  });

  it('should changeSeconds canIncrementHours', () => {
    context.canIncrementSeconds = false;
    context.changeSeconds(3);
  });

  it('should changeSeconds canDecrementHours', () => {
    context.canDecrementSeconds = false;
    context.changeSeconds(-3);
  });

  it('should changeSeconds wheel', () => {
    context.mousewheel = false;
    context.changeSeconds(3, 'wheel');
  });

  it('should updateHours', () => {
    context.readonlyInput = true;
    context.updateHours('0');
  });

  it('should updateHours', () => {
    context.updateHours('');
    context.updateHours('-1');
    context.updateHours('1');
  });

  it('should updateMinutes', () => {
    context.readonlyInput = true;
    context.updateMinutes('0');
  });

  it('should updateMinutes', () => {
    context.updateMinutes('');
    context.updateMinutes('-1');
    context.updateMinutes('1');
  });

  it('should updateSeconds', () => {
    context.readonlyInput = true;
    context.updateSeconds('0');
  });

  it('should updateSeconds', () => {
    context.updateSeconds('');
    context.updateSeconds('-1');
    context.updateSeconds('1');
  });

  it('should toggleMeridian true', () => {
    context.showMeridian = true;
    context.toggleMeridian();
  });

  it('should toggleMeridian false', () => {
    context.showMeridian = false;
    context.toggleMeridian();
  });

  it('should writeValue', () => {
    context.writeValue('1');
  });

  it('should writeValue', () => {
    context.writeValue('');
  });

  it('should registerOnChange', () => {
    context.registerOnChange((val: any) => val);
  });

  it('should registerOnTouched', () => {
    context.registerOnTouched(() => true);
  });

  it('should setDisabledState', () => {
    context.setDisabledState(true);
  });

  it('should showMeridian change', () => {
    context.showMeridian = false;
    (context as any)._renderTime('-1');
  });*/
});
