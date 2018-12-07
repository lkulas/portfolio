'use strict';

let currentView = 1;

const pageCount = document.getElementById('content').children.length;

function removeActive() {
  for (let i=1; i <= 4; i++) {
    $(`#nav${i}`).removeClass('active');
  };
};

function watchActivePage() {
  console.log(currentView);
  removeActive();
  if (currentView === 1) {
    $('#nav1').addClass('active');
  } else if (currentView === 2) {
    $('#nav2').addClass('active');
  } else if (currentView === 3) {
    $('#nav3').addClass('active');
  } else if (currentView === 4) {
    $('#nav3').addClass('active');
  } else if (currentView === 5) {
    $('#nav3').addClass('active');
  }  else {
    $('#nav4').addClass('active');
  };
};

function watchClickRight() {
  $('.right-arrow-icon').on('click', event => {
    currentView += 1;
    watchActivePage();
    for (let i=1; i <= pageCount; i++) {
      $(`#div${i}`).prop('hidden', true);
    };
    $(`#div${currentView.toString()}`).prop('hidden', false);
  });
};

function watchClickLeft() {
  $('.left-arrow-icon').on('click', event => {
    currentView -= 1;
    watchActivePage();
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
    watchActivePage();
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
    watchActivePage();
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
    watchActivePage();
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
    watchActivePage();
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
  watchActivePage();
};

$(handlePage());
