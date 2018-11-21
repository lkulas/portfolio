'use strict';

let currentView = 1;

const pageCount = document.getElementById('content').children.length;

function watchClickRight() {
  $('.right-arrow-icon').on('click', event => {
    currentView += 1;
    for (let i=1; i <= pageCount; i++) {
      $(`#div${i}`).prop('hidden', true);
    };
    $(`#div${currentView.toString()}`).prop('hidden', false);
  });
};

function watchClickLeft() {
  $('.left-arrow-icon').on('click', event => {
    currentView -= 1;
    for (let i=1; i <= pageCount; i++) {
      $(`#div${i}`).prop('hidden', true);
    };
    $(`#div${currentView.toString()}`).prop('hidden', false);
  });
};

function handlePage() {
  watchClickRight();
  watchClickLeft();
};

$(handlePage());
