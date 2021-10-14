import React from 'react';

const FileUpload = () => {
  return (
    <>
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h6 class="mb-0 text-uppercase">Fancy File Upload</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <input id="fancy-file-upload" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png" multiple />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h6 class="mb-0 text-uppercase">Image Uploadify</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <form>
                <input id="image-uploadify" type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" multiple />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUpload;