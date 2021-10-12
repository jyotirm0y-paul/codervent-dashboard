import React, {useState} from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';

const DateTimePickes = ({name, title}) => {

  const [value, onChange] = useState(new Date());
  const [valu, onChang] = useState('10:00');

  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h6 class="mb-0 text-uppercase">Date Time Pickers</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="border p-3 rounded">
                <div class="mb-3">
                  <label class="form-label">Pick a Date</label>
                  <DatePicker
        onChange={onChange}
        value={value}
      />
                </div>
                <div class="">
                  <label class="form-label">Time Picker</label>
                  
      <TimePicker
        onChange={onChang}
        value={valu}
      />
                </div> 
              </div>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Material DatePicker</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="border p-3 rounded">
                <div class="mb-3">
                  <label class="form-label">Default Date and Time Picker</label>
                  <input class="result form-control" type="text" id="date-time" placeholder="Date Picker..."/>
                </div>
                <div class="mb-3">
                  <label class="form-label">Date Only Picker</label>
                  <DatePicker
        onChange={onChange}
        value={value}
      />
                </div>
                <div class="">
                  <label class="form-label">Time Only Picker</label>
                  <TimePicker
        onChange={onChang}
        value={valu}
      />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateTimePickes;