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

function watchClickName() {
  $('#nav1').on('click', event => {
    event.preventDefault();
    currentView = 1;
    for (let i=1; i <= pageCount; i++) {
      $(`#div${i}`).prop('hidden', true);
    };
    $('#div1').prop('hidden', false);
  });
};

function watchClickAbout() {
  $('#nav2').on('click', event => {
    event.preventDefault();
    currentView = 2;
    for (let i=1; i <= pageCount; i++) {
      $(`#div${i}`).prop('hidden', true);
    };
    $('#div2').prop('hidden', false);
  });
};

function watchClickWork() {
  $('#nav3').on('click', event => {
    event.preventDefault();
    currentView = 3;
    for (let i=1; i <= pageCount; i++) {
      $(`#div${i}`).prop('hidden', true);
    };
    $('#div3').prop('hidden', false);
  });
};

function watchClickContact() {
  $('#nav4').on('click', event => {
    event.preventDefault();
    currentView = 6;
    for (let i=1; i <= pageCount; i++) {
      $(`#div${i}`).prop('hidden', true);
    };
    $('#div6').prop('hidden', false);
  });
};

function handleNav() {
  watchClickName();
  watchClickAbout();
  watchClickWork();
  watchClickContact();
};

function handlePage() {
  watchClickRight();
  watchClickLeft();
  handleNav();
};

$(handlePage());
