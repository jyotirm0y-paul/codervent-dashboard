import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const BlankPage = ({ name, title }) => {
  return (
    <>
      <Breadcrumb name={name} title={title} />
      <div class="card shadow-sm radius-10 border-0 mb-3">
        <div class="card-body">
          <h4>Where does it come from?</h4>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
          <h4>Where can I get some?</h4>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
        </div>
      </div>
    </>
  );
};

export default BlankPage;