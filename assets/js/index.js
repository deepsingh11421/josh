  var slider = tns({
    container: '.my-slider',
    items: 1,
    mode: 'carousel',
    controls: false,
    nav: true,
    navPosition: 'bottom',
    navAsThumbnails: true
  });

  var stopVideos = function () {
      var videos = document.querySelectorAll('iframe, video');
      Array.prototype.forEach.call(videos, function (video) {
          if (video.tagName.toLowerCase() === 'video') {
              video.pause();
          } else {
              var src = video.src;
              video.src = src;
          }
      });
  };

  shave('#article-content',80,{character: '... <span style="color: green;cursor: pointer;">continue reading</span>'})
  shave('.section4-content',60,{character: ' <span style="color: green;cursor: pointer;">continue reading</span>'})

  var modal = new tingle.modal({
      closeMethods: ['overlay', 'button', 'escape'],
      closeLabel: "Close",
      cssClass: ['custom-class-1', 'custom-class-2'],
      onOpen: function() {
          console.log('modal open');
      },
      onClose: function() {
          console.log('modal closed');
      },
      beforeClose: function() {
          stopVideos();
          return true; // close the modal
          return false; // nothing happens
      }
  });

  var show_img = (num) => {
      modal.close();
      switch(num){
          case 1: modal.setContent('<div><div class="head">BRIDGE VIEW</div><img src="./assets/photo-1.png"></div> <button class="prev" onclick="show_img(4)"></button> <button class="next" onclick="show_img(2)"></button>');
                  break;
          case 2: modal.setContent('<div><div class="head">TABLE VIEW</div><img src="./assets/photo-2.jpg"></div> <button class="prev" onclick="show_img(1)"></button> <button class="next" onclick="show_img(3)"></button>');
                  break;
          case 3: modal.setContent('<div><div class="head">VARIOUS SPICES</div><img src="./assets/photo-3.jpg"></div> <button class="prev" onclick="show_img(2)"></button> <button class="next" onclick="show_img(4)"></button>');
                  break;
          case 4: modal.setContent('<div><div class="head">SCULPTURE</div><img src="./assets/photo-4.jpg"></div> <button class="prev" onclick="show_img(3)"></button> <button class="next" onclick="show_img(1)"></button>');
                  break;       
      }
      modal.open();
  }
  
  var show_vid = (num) => {
      modal.close();
      switch(num){
          case 1: modal.setContent('<div><div class="head">CARTOON - ON & ON</div><iframe class="youtube-video" width="630" height="375" src="https://www.youtube.com/embed/K4DyBUG242c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><button class="prev" onclick="show_vid(4)"></button> <button class="next" onclick="show_vid(2)"></button>');break;
          case 2: modal.setContent('<div><div class="head">Warriyo - Mortals (feat. Laura Brehm)</div><iframe class="youtube-video" width="630" height="375" src="https://www.youtube.com/embed/yJg-Y5byMMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><button class="prev" onclick="show_vid(1)"></button> <button class="next" onclick="show_vid(3)"></button>');break;
          case 3: modal.setContent('<div><div class="head">Unknown Brain - Dancing On The Moon</div><iframe class="youtube-video" width="630" height="375" src="https://www.youtube.com/embed/9EHXqi0ez54" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><button class="prev" onclick="show_vid(2)"></button> <button class="next" onclick="show_vid(4)"></button>');break;
          case 4: modal.setContent('<div><div class="head">Rival x Egzod - Live A Lie</div><iframe class="youtube-video" width="630" height="375" src="https://www.youtube.com/embed/GpoYRPA7YFw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><button class="prev" onclick="show_vid(3)"></button> <button class="next" onclick="show_vid(5)"></button>');break;
      }
      modal.open();
  }