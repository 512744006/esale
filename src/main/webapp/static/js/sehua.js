gogoroApp.controller('CustomizeController', ["$scope", "$window", "SVGSwapService", "GATrackingService", "$location",
  function ($scope, $window, SVGSwapService, GATrackingService, $location) {
    // console.log('customize');
    $window.scrollTo(0,0);

    // Google Analytics Event Tracking
    var gaConfig = {id:'customize'};
    GATrackingService.init(gaConfig);

    //Google Analytics Event Tracking
    ga('send', 'pageview', '/#/customize');

    // If active, close side nav
    if ( $('body').hasClass('navigation-active') ) {
      $('.navbar-toggle').click();
    }

    // Setup responsive images
    var ResponsiveImages = new gogoro.common.ResponsiveImages();

    SVGSwapService();

    // to prevent mobile site loading video
    videoSetting = [
        {
            sources: [
              { url: '//movies.gogoroapp.com/CustomizeColor3MatchWhite_2015-06-23.webm', type: 'video/webm' },
              { url: '//movies.gogoroapp.com/CustomizeColor3MatchWhite_2015-06-23.mp4', type: 'video/mp4' }
            ]
        }
    ];

    var _loaded = false;
    function loadingVideo() {
        if (gogoro.App.getState() === 'standard' && !_loaded) {
            $('video').each(function (i) {
                $(this).append('<source src="' + videoSetting[i].sources[0].url + '" type="' + videoSetting[i].sources[0].type + '"></source>');
                $(this).append('<source src="' + videoSetting[i].sources[1].url + '" type="' + videoSetting[i].sources[1].type + '"></source>');
            });
            _loaded = true;
        }
    }
    loadingVideo();
    $(window).on('resize', function () {
        loadingVideo();
    });

}]);

/* global $:false, imgix:false, TimelineMax:false */


gogoroApp.controller('moduleCustomize1PageIntroController', ["$scope", "$element", "FallbackManagerFactory", "ModulePageIntroService", function ($scope, $element, FallbackManagerFactory, ModulePageIntroService) {
    angular.extend($scope, FallbackManagerFactory);
     
    // Drastic measures

    var $el = $($element);
    if (!$scope.isIE10OrLess()) {
       // inject our svg into title-wrapper 

       $el.find('.title-wrapper').append($el.find('script.svg').html());
    }

    $scope.standard = {
        init: function() {
          imgix.onready(function() {
            imgix.fluid({
              fluidClass: 'background-image-standard'
            });
          });

          var createTitleFadeInTween = function($el, delay) {
            var duration = 0.75;

            return ModulePageIntroService.createElementFadeInTween($el, duration, delay);
          };

          var createTitleFadeOutTween = function($el, delay) {
            var duration = 0.5;

            return ModulePageIntroService.createElementFadeOutTween($el, duration, delay);
          };

          var $el = $($element);
          var findSuffix = $scope.isFF() ? ' text' : ' tspan';

          var title0InTween = createTitleFadeInTween($el.find('.title-0' + findSuffix));

          var title1InTween = createTitleFadeInTween($el.find('.title-1' + findSuffix));
          var title1OutTween = createTitleFadeOutTween($el.find('.title-1' + findSuffix), 0.25);

          var title2InTween = createTitleFadeInTween($el.find('.title-2' + findSuffix));
          var title2OutTween = createTitleFadeOutTween($el.find('.title-2' + findSuffix), 0.25);

          var title3InTween = createTitleFadeInTween($el.find('.title-3' + findSuffix));

          // bring in body

          var bodyTween = ModulePageIntroService.createBodyFadeInTween($element, null, 0.5);

          //

          this.timeline = new TimelineMax({ delay: 0.25 }); // slight delay to allow page to frame up
          this.timeline
            .insert(bodyTween)
            .add(title0InTween)
            .add(title1InTween)
            .add(title1OutTween)
            .add(title2InTween)
            .add(title2OutTween)
            .add(title3InTween)
            .play();
        },
        destroy: function() {
          if (this.timeline) {
            this.timeline.pause(0, true).remove();
            this.timeline = null;
          }
          $('.body', $element).attr('style', '');
        }
      };

      $scope.fallback = {
        init: function() {
          imgix.onready(function() {
            imgix.fluid({
              fluidClass: 'background-image-fallback'
            });
          });
        },
        destroy: function() {
        }
      };

     // Initialize module
     $scope.init($scope, $element, true);
  }]);






/**/
var main = function () {

    $('.original-btn').click(function () {
        $(".colorPotionsWord2").addClass("All_You_hide");
        $(".colorPotionsWord1").removeClass("All_You_hide");

    });


    $('.plus-btn').click(function () {
        $(".colorPotionsWord1").addClass("All_You_hide");
        $(".colorPotionsWord2").removeClass("All_You_hide");
        $(".colorPotionsWord2").addClass("All_You_Show");
    });


};
/* global $:false */
gogoroApp.controller('moduleCustomize2CleanVideoController', ["$scope", "$element", "$window", "$controller", "FallbackManagerFactory", function ($scope, $element, $window, $controller, FallbackManagerFactory) {
    angular.extend($scope, FallbackManagerFactory);

    $scope.standard = {
      init: function() {
        $('.video', $element).css({
          display: 'block'
        });
        $.extend(this, $controller('ModuleVideoController', {
          $scope: $scope,
          $element: $element,
          $window: $window
        }));
        var videoModal = new gogoro.common.VideoModal();
      },
      destroy: function() {
        $('.video', $element).css({
          display: 'none'
        })
      }
    };

    $scope.fallback = {
      init: function() {
        var videoModal = new gogoro.common.VideoModal();
      },
      destroy: function() {

      }
    };

    // Initialize module
    $scope.init($scope, $element);

  }]);


/* global $:false, Blob:false, saveAs:false */


gogoroApp.controller('moduleCustomize4DashboardController', ["$scope", "$element", "$window", "$document", "FallbackManagerFactory", function ($scope, $element, $window, $document, FallbackManagerFactory) {
    angular.extend($scope, FallbackManagerFactory);

    $scope.standard = {
      init: function() {
        imgix.fluid({
          fluidClass: 'customize-4-standard'
        });

        var that = this;

        var draggingDial = false;

        // for our sanity. we could also generate this
        var steps = [
          [12, 255, 255, 'rgb(12, 255, 255)'],
          [12, 197, 255, 'rgb(12, 197, 255)'],
          [12, 139, 255, 'rgb(12, 139, 255)'],
          [12, 81, 255, 'rgb(12, 81, 255)'],
          [12, 23, 255, 'rgb(12, 23, 255)'],
          [59, 12, 255, 'rgb(59, 12, 255)'],
          [117, 12, 255, 'rgb(117, 12, 255)'],
          [175, 12, 255, 'rgb(175, 12, 255)'],
          [233, 12, 255, 'rgb(233, 12, 255)'],
          [255, 12, 218, 'rgb(255, 12, 218)'],
          [255, 12, 161, 'rgb(255, 12, 161)'],
          [255, 12, 103, 'rgb(255, 12, 103)'],
          [255, 12, 45, 'rgb(255, 12, 45)'],
          [255, 37, 12, 'rgb(255, 37, 12)'],
          [255, 95, 12, 'rgb(255, 95, 12)'],
          [255, 153, 12, 'rgb(255, 153, 12)'],
          [255, 211, 12, 'rgb(255, 211, 12)'],
          [240, 255, 12, 'rgb(240, 255, 12)'],
          [185, 255, 12, 'rgb(182, 255, 12)'],
          [125, 255, 12, 'rgb(125, 255, 12)'],
          [67, 255, 12, 'rgb(67, 255, 12)'],
          [12, 255, 15, 'rgb(12, 255, 15)'],
          [12, 255, 73, 'rgb(12, 255, 73)'],
          [12, 255, 131, 'rgb(12, 255, 131)'],
          [12, 255, 189, 'rgb(12, 255, 189)'],
          [12, 255, 247, 'rgb(12, 255, 247)']
        ];

        var hsvToRgb = function(h, s, v) {
          h *= 6;
          var i = ~~h,
            f = h - i,
            p = v * (1 - s),
            q = v * (1 - f * s),
            t = v * (1 - (1 - f) * s),
            mod = i % 6,
            r = [v, q, p, p, t, v][mod] * 255,
            g = [t, v, v, q, p, p][mod] * 255,
            b = [p, p, t, v, v, q][mod] * 255;

          return [r, g, b, 'rgb(' + ~~r + ',' + ~~g + ',' + ~~b + ')'];
        };

        var rgb2hex = function(rgb) {
          rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
          return (rgb && rgb.length === 4) ? '#' +
            ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
        };

        var stepTheta = function(theta) {
          // if we floor our theta, we get PI * 2 (floored) possible positions
          // 15 -> 95 * 95 = 9025 possible backgrounds
          // 6-> 38 * 38 = 1444 possible backgrounds
          // 4 -> 26 * 26 = 676 possible backgrounds

          theta *= 4;
          theta = Math.floor(theta);
          theta /= 4;

          return theta;
        };

        var distanceBetweenColors = function(a, b) {
          return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2));
        };

        var closestColor = function(color) {
          var closestIndex = 0;
          var closestDistance = -1;

          for (var i = 0; i < steps.length; i++) {
            var distance = distanceBetweenColors(color, steps[i]);

            if (closestDistance === -1 || distance < closestDistance) {
              closestIndex = i;
              closestDistance = distance;
            }
          }

          return steps[closestIndex];
        };

        var buildColorWheels = function($el) {
          // hardcode -- if we resize we may not be able to get our width
          var width = 130; //$el.eq(0).width();

          var circleMargin = 14;
          var diameter = width - (circleMargin * 2);
          var radius = diameter / 2;

          var torusThickness = 5;
          var dialTrackRadius = radius - torusThickness / 2;

          var colorWheelCanvas;

          var createColorWheelCanvas = function() {
            // 4 times target size

            var scaleFactor = 4;

            var scaledWidth = width * scaleFactor;

            var scaledRadius = radius * scaleFactor;
            var scaledRadiusSquared = scaledRadius * scaledRadius;

            var scaledTorusThickness = torusThickness * scaleFactor;
            var scaledRMT = scaledRadius - scaledTorusThickness;
            var scaledRMTSquared = scaledRMT * scaledRMT;

            var wheelPixel = circleMargin * 4 * (scaledWidth + 1);

            var canvas = $('<canvas>').attr({
              'width': scaledWidth,
              'height': scaledWidth
            })[0];

            var context = canvas.getContext('2d');
            var imageData = context.createImageData(scaledWidth, scaledWidth);
            var pixels = imageData.data;

            for (var y = 0; y < scaledWidth; y++) {
              for (var x = 0; x < scaledWidth; x++) {
                var rx = x - scaledRadius;
                var ry = y - scaledRadius;
                var d = rx * rx + ry * ry;
                var rgb = hsvToRgb(
                  (Math.atan2(ry, rx) + Math.PI) / (Math.PI * 2),
                  Math.sqrt(d) / scaledRadius,
                  1);

                pixels[wheelPixel++] = rgb[0];
                pixels[wheelPixel++] = rgb[1];
                pixels[wheelPixel++] = rgb[2];
                pixels[wheelPixel++] = (d > scaledRadiusSquared || d < scaledRMTSquared) ? 0 : 255;
              }
            }

            context.putImageData(imageData, 0, 0);

            // scale down once

            scaledWidth /= 2;

            colorWheelCanvas = $('<canvas>').attr({
              'width': scaledWidth,
              'height': scaledWidth
            })[0];

            colorWheelCanvas.getContext('2d').drawImage(canvas, 0, 0, scaledWidth, scaledWidth);
          };

          var buildColorWheel = function(index, element) {
            var $el = $(element);

            var $colorWheelEl;
            var $dialEl;

//          var dialY = index === 1 ? -radius / 2 : radius;
//          var dialX = index === 1 ? radius / 2 : 0;
            var dialY = index === 1 ? -radius / 2 : 81;
            var dialX = index === 1 ? radius / 2 : 50;

            var dialWidth2;

            //Gavin
            var iKey = index;
            var isLoop = false;
            var loopNumber = 0;
            var timeoutSec = 150;
            var pointParting = 10;
            var loopPoints = [];
            var cX = cY = 0;

            var redraw = function(e, eX , eY) {
              if (e) {
               if(!isLoop){e.preventDefault();}

                var offset = $colorWheelEl.offset();
                 //Gavin
                eX = (isNaN(Number(eX))) ? e.pageX : Number(eX);
                eY = (isNaN(Number(eY))) ? e.pageY : Number(eY);
                dialX = eX - offset.left - dialTrackRadius || dialX;
                dialY = eY - offset.top - dialTrackRadius || dialY;
                //dialX = (e.pageX - dialWidth2 / 2) - offset.left - dialTrackRadius || dialX;
                //dialY = (e.pageY - dialWidth2 / 2) - offset.top - dialTrackRadius || dialY;
              }

              var theta = Math.atan2(dialY, dialX);

              dialX = dialTrackRadius * Math.cos(theta);
              dialY = dialTrackRadius * Math.sin(theta);

              var d = dialX * dialX + dialY * dialY;

              // position dial

              $dialEl.css({
                'left': (dialX + dialTrackRadius - dialWidth2 / 2) + 'px',
                'top': (dialY + dialTrackRadius - dialWidth2 / 2) + 'px'
              });

              // set color

              var rgb = hsvToRgb(
                (theta + Math.PI) / (Math.PI * 2),
                Math.sqrt(d) / radius,
                1
              );

              var steppedRgb = closestColor(rgb);

              colorWheelValues[index] = {
                raw: rgb[3],
                stepped: steppedRgb[3]
              };

              $dialEl[0].style.background = steppedRgb[3];

              updateBackground();
            };

            //Gavin
            var circlePoint = function(x,y,r){
                var points = [];
                for(var degree = 360;degree >= 0;degree -= pointParting){
                    var x2 = r * Math.sin(degree * Math.PI / 180);
                    var y2 = r * Math.cos(degree * Math.PI / 180);
                    points.push({"x":x + x2,"y":y + y2});
                }
                return points;
            };

            //Gavin
            var loopAnimation = function(e){
                //var div = '<div style="position:absolute; width:5px; height:5px; background:#000; top:'+loopPoints[loopNumber].y+'px;left:'+loopPoints[loopNumber].x+'px;"></div>';
                //$('body').append(div);
                if(isLoop){
                    redraw(e, loopPoints[loopNumber].x,loopPoints[loopNumber].y);
                    loopNumber++;
                    loopNumber = (loopNumber >= loopPoints.length) ? 0 : loopNumber;
                    setTimeout(function() { loopAnimation(e); },timeoutSec);
                }
            };

            //Gavin
            var startLoop = function(){
              if(!isLoop){
                isLoop = true;
                draggingDial = false;
                loopNumber = (iKey == 0) ? 0 : 30;
                if(cX == 0 || cY == 0){
                    cX = $colorWheelEl.offset().left + 50;
                    cY = $colorWheelEl.offset().top + 50;
                }
                loopPoints = circlePoint(cX,cY,100);
                loopAnimation($dialEl);
              }
            };

            //Gavin
            var stopLoop  = function(){
                //draggingDial = false;
                isLoop = false;
            };

            $colorWheelEl = $('<canvas>').attr({
              'width': width,
              'height': width
            });

            $colorWheelEl[0].getContext('2d').drawImage(colorWheelCanvas, 0, 0, width, width);
            $el.append($colorWheelEl);

            $dialEl = $('<div class="dial"><div class="border"></div></div>');
            $el.append($dialEl);
            dialWidth2 = $dialEl.width() / 2;

            var dialElMousedownFn = function(e) {
              e.preventDefault();
              draggingDial = true;

              $($document).on('mousemove', redraw);
            };

            // need to unbind later
            that.dialElMouseupFn = function(e) {
              draggingDial = false;
              updateSns();

              $($document).off('mousemove', redraw);
            };

            $dialEl.on('mousedown', dialElMousedownFn);
            $($document).on('mouseup', that.dialElMouseupFn);

            redraw();

            //Gavin
            var $gradientToggleEl = $(document).find('.gradient-solid-toggle .gradient');
            var $solidToggleEl = $(document).find('.gradient-solid-toggle .solid');
            var $loopToggleEl = $(document).find('.gradient-solid-toggle .loop');
            $gradientToggleEl.click(function() {
                stopLoop();
            });

            $solidToggleEl.click(function() {
                stopLoop();
            });

            $loopToggleEl.click(function() {
                startLoop();
            });

            //Gavin
            $( window ).resize(function() {
                cX = $colorWheelEl.offset().left + 50;
                cY = $colorWheelEl.offset().top + 50;
                loopPoints = circlePoint(cX,cY,100);
            });
          };

          createColorWheelCanvas();
          $el.each(buildColorWheel);

          // -----------------------------------------------------------------------------
          // -----------------------------------------------------------------------------
          // remove for production

          // only uncomment if you want to bring the pain
          //generateBackgrounds();
          // -----------------------------------------------------------------------------
          // -----------------------------------------------------------------------------
        };

        var updateBackground = function() {
          if (mode === 'solid') {
            var solidColor = colorWheelValues[0].raw;

            if (solidColor !== undefined) $backgroundSolidEl[0].style.background = solidColor;
          } else {
            var leftColor = colorWheelValues[0].raw;
            var rightColor = colorWheelValues[1].raw;

            if (leftColor !== undefined && rightColor !== undefined) {

              $backgroundGradientEl.css({
                'background': '-moz-linear-gradient(left, ' + leftColor + ' 0%, ' + rightColor + ' 100%)'
              }); /* FF 3.6+ */
              $backgroundGradientEl.css({
                'background': '-webkit-gradient(linear, left top, right top, color-stop(0%, ' + leftColor + ')), color-stop(100%,' + rightColor + '))'
              }); /* Chrome, Safari 4+ */
              $backgroundGradientEl.css({
                'background': '-webkit-linear-gradient(left, ' + leftColor + ' 0%, ' + rightColor + ' 100%)'
              }); /* Chrome 10+, Safari 5.1+ */
              $backgroundGradientEl.css({
                'background': '-o-linear-gradient(left, ' + leftColor + ' 0%, ' + rightColor + ' 100%)'
              }); /* Opera 11.10+ */
              $backgroundGradientEl.css({
                'background': '-ms-linear-gradient(left, ' + leftColor + ' 0%, ' + rightColor + ' 100%)'
              }); /* IE 10+ */
              $backgroundGradientEl.css({
                'background': '-linear-gradient(to right, ' + leftColor + ' 0%, ' + rightColor + ' 100%)'
              }); /* W3C */

              var leftColorHex = rgb2hex(leftColor);
              var rightColorHex = rgb2hex(rightColor);

              $backgroundGradientEl.css({
                'filter': "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + leftColorHex + "', endColorstr='" + rightColorHex + "',GradientType=1 )"
              }); /* IE6-8 */
            }
          }
        };

        var updateSns = function() {
          var startColorHex = rgb2hex(colorWheelValues[0].stepped).substr(1, 6);
          var endColorHex;

          if (mode === 'gradient') {
            endColorHex = rgb2hex(colorWheelValues[1].stepped).substr(1, 6);
          } else {
            endColorHex = startColorHex;
          }

          var text = 'Light it up. Make it yours.';

          // get the host (sample)
          //var url = 'http://' + $window.location.host;

          // sample OG sharing -- example uses mod rewrite to rewrite /xxx to /index.php?color=xxx
          var url = 'http://gogoro.tree-axis.com/' + startColorHex + endColorHex;

          var facebookUrl = 'http://www.gogoro.com/about/home/dashboard-social-facebook/' + startColorHex + endColorHex;
          var twitterUrl = 'http://www.gogoro.com/about/home/dashboard-social-twitter/' + startColorHex + endColorHex;

          $facebookEl.attr({
            href: 'http://www.facebook.com/sharer.php?u=' + encodeURI(facebookUrl),
            target: '_blank'
          });
          $twitterEl.attr({
            href: 'http://twitter.com/share?text=' + encodeURI(text) + '&url=' + encodeURI(twitterUrl),
            target: '_blank'
          });
        };

        // setup

        var $el = $($element);

        var $scooterEl = $el.children('.scooter');

        var $backgroundGradientEl = $scooterEl.find('.background .gradient');
        var $backgroundSolidEl = $scooterEl.find('.background .solid');

        var $gradientToggleEl = $el.find('.gradient-solid-toggle .gradient');
        var $solidToggleEl = $el.find('.gradient-solid-toggle .solid');
        //Gavin
        var $loopToggleEl = $el.find('.gradient-solid-toggle .loop');

        var $wheelsEl = $el.find('.color-wheels .wheels');

        var $facebookEl = $el.find('.sns .facebook');
        var $twitterEl = $el.find('.sns .twitter');

        // our wheels

        var colorWheelValues = [{}, {}];
        buildColorWheels($wheelsEl.children('.wheel'));

        updateBackground(); // both wheels are in

        var mode = 'gradient';
        updateSns();

        // hovers

        var gradientToggleFn = function() {
          if (!draggingDial) {
            $gradientToggleEl.stop().fadeTo('fast', 1);
            $solidToggleEl.stop().fadeTo('fast', 0.3);
            //Gavin
            $loopToggleEl.stop().fadeTo('fast', 0.3);

            $wheelsEl.children('.wheel').show();

            $backgroundGradientEl.show();
            $backgroundSolidEl.hide();

            mode = 'gradient';
            updateBackground();
          }
        };

        var solidToggleFn = function() {
          if (!draggingDial) {
            $gradientToggleEl.stop().fadeTo('fast', 0.3);
            $solidToggleEl.stop().fadeTo('fast', 1);
            //Gavin
            $loopToggleEl.stop().fadeTo('fast', 0.3);

            $wheelsEl.children('.wheel').eq(1).hide();

            $backgroundGradientEl.hide();
            $backgroundSolidEl.show();

            mode = 'solid';
            updateBackground();
          }
        };

        //Gavin
        var loopToggleFn = function() {
          if (!draggingDial) {
            $gradientToggleEl.stop().fadeTo('fast', 0.3);
            $solidToggleEl.stop().fadeTo('fast', 0.3);
            $loopToggleEl.stop().fadeTo('fast', 1);
            $wheelsEl.children('.wheel').show();
          }
        };

        $gradientToggleEl.on('click', gradientToggleFn);
        $solidToggleEl.on('click', solidToggleFn);
        //Gavin
        $loopToggleEl.on('click', loopToggleFn);
      },

      destroy: function() {
        var $el = $($element);

        var $gradientToggleEl = $el.find('.gradient-solid-toggle .gradient');
        var $solidToggleEl = $el.find('.gradient-solid-toggle .solid');

        $gradientToggleEl.off('click');
        $solidToggleEl.off('click');

        $($document).off('mouseup', this.dialElMouseupFn);
        $el.find('.wheel').children().remove(); // unbinds dials
      }
    };

    $scope.fallback = {
      init: function() {
      },

      destroy: function() {
      }
    };

    // Initialize module
    $scope.init($scope, $element);
  }]);

/* global $:false */
gogoroApp.controller('moduleCustomize7LightingThemes', ["$scope", "$element", "FallbackManagerFactory", function ($scope, $element, FallbackManagerFactory) {
    angular.extend($scope, FallbackManagerFactory);
        /**
         $video.readyState
            0 = HAVE_NOTHING - no information whether or not the audio/video is ready
            1 = HAVE_METADATA - metadata for the audio/video is ready
            2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond
            3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available
            4 = HAVE_ENOUGH_DATA - enough data available to start playing
         */
    $scope.standard = {
        init: function() {
          var lightingTheme = {
            'one': 0,
            'two': 4,
            'three': 8
          };

          var $video;

          setTimeout(function() {

                  $(".video-lighting-themes").append(
                        '<video class="video-delay" width="2560" height="600" muted preload="auto" loop autoplay  >' +
                            '<source src="//movies.gogoroapp.com/lighting-themes.webm" type="video/webm">' +
                            '<source src="//movies.gogoroapp.com/lighting-themes_2015-01-21.mp4" type="video/mp4">' +
                        '</video>');

                  $video = $('video', $element)[0];
                  //
                  $('.video', $element).css({
                      //  display: 'block'
                  });

                  $('video', $element).on('timeupdate', function(event) {
                      onTimeUpdate(this.currentTime, this.duration);
                  });

                  $('.video-indicator a', $element).unbind().on('click', function(e) {

                      e.preventDefault();

                      $('.video-overlay').velocity({
                          opacity: 0.40
                      }, {
                          display: 'block',
                          duration: 50,
                          easing: 'easeOut',
                          complete: function() {
                              $('.video-overlay').velocity('fadeOut', {
                                  duration: 300,
                                  easing: 'easeOut'
                              })
                          }
                      });

                      var $this = $(this);
                      var theme = $this.attr('data-theme');

                      $video.currentTime = lightingTheme[theme];
                      //$video.play();

                      $('.video-indicator a', $element).removeClass('active');
                      $this.addClass('active');
                  });

          },500);

          function onTimeUpdate(currentTime, duration) {
            if (currentTime > lightingTheme.one && currentTime < lightingTheme.two) {

              $('.video-indicator a', $element).removeClass('active');
              $('.video-indicator a[data-theme*="one"]', $element).addClass('active');

            } else if (currentTime > lightingTheme.two && currentTime < lightingTheme.three) {

              $('.video-indicator a', $element).removeClass('active');
              $('.video-indicator a[data-theme*="two"]', $element).addClass('active');

            } else if (currentTime > lightingTheme.three && currentTime < duration) {

              $('.video-indicator a', $element).removeClass('active');
              $('.video-indicator a[data-theme*="three"]', $element).addClass('active');

            }
          }

        },
        destroy: function() {

//          var $video = $('video', $element)[0];
//          if ($video.readyState === 4) {
//              $video.pause();
//              $video.currentTime = 0;
//          }
//          $('.video', $element).css({
//            display: 'none'
//          });
        }
      };

      $scope.fallback = {
        init: function() {
        },
        destroy: function() {
        }
      };

    // Initialize module
    $scope.init($scope, $element, true);

  }]);

/* global $:false, Processing:false, Howl:false */
gogoroApp.controller('moduleCustomize6SoundsThemes', ["$scope", "$element", "FallbackManagerFactory", function ($scope, $element, FallbackManagerFactory) {
    angular.extend($scope, FallbackManagerFactory);
    
    $scope.standard = {
        init: function() {
        
          var that = this;

          var $el = $($element);

          var $themesEl = $el.find('.theme-toggle a');
          var $triggersEl = $el.find('.preview .sounds .sound');

          var $scriptEl = $el.find('#gogoro-sound-processing');
          var $canvasEl = $el.find('#gogoro-sound-processing-canvas');

          var currentTheme, currentAction;
          var themes = ['clean', 'gamey', 'bella', 'slider', 'pongo'];
          var actions = ['kickstandDown', 'kickstandUp', 'remoteLock', 'remoteUnlock', 'turnSignal'];

          var sounds = {};
          for (var i = 0; i < themes.length; i++) sounds[themes[i]] = {};

          var setSoundTitle = function(id) {
            var $triggerEl = $triggersEl.filter(function() {
              return $(this).data('trigger') === id;
            });

            $el.find('.preview .sound-title').html($triggerEl.attr('title'));

            $triggersEl.removeClass('active');
            $triggerEl.addClass('active');
          };

          var trigger = function(id) {
            // set our currentAction
            currentAction = actions.indexOf(id);

            // update our text
            setSoundTitle(id);

            // play sound
            sounds[currentTheme][id].play();

            // trigger animation
            if (that.pjs !== null) that.pjs.trigger(id);
          };

          var advance = function() {
            if (++currentAction >= actions.length) currentAction = 0;
            trigger(actions[currentAction]);
          };

          var loadCurrentThemeSounds = function() {
              var prefix = '//movies.gogoroapp.com/sounds/' + currentTheme + '/';

                for (var i = 0; i < actions.length; i++) {
                  var action = actions[i];

                  if (sounds[currentTheme][action] === undefined) {
                    sounds[currentTheme][action] = new Howl({
                      src: [prefix + action + '.mp3', prefix + action + '.ogg', prefix + action + '.wav']
                    });
                  }
                }

          };

          var setCurrentTheme = function(id) {
            currentTheme = id;
            loadCurrentThemeSounds();

            if (that.pjs !== null) that.pjs.setupTheme(id);
          };

          // our events

          $themesEl.on('click', function() {
            $themesEl.css({
              opacity: 0.3
            });
            $(this).css({
              opacity: 1
            });

            setCurrentTheme($(this).data('theme'));
          });

          $triggersEl.on('click', function(e) {
            trigger($(this).data('trigger'));

            e.stopPropagation();
          });

          $el.find('.preview').on('click', advance);

          // off we go
    
          // save our compiled code
          //var blob = new Blob([Processing.compile($scriptEl.html()).sourceCode], {type: 'text/plain'});
          //saveAs(blob, 'source.txt');

/* --------------------------------------------------------------------------------------------------------------------- */

var playfulSounds = function($p) {
var JavaScript = (function() {
function JavaScript() { throw 'Unable to create the interface'; }
JavaScript.$isInterface = true;
JavaScript.$methods = ['playSound'];
return JavaScript;
})();
$p.JavaScript = JavaScript;
var Timeline = (function() {
function Timeline() {
var $this_1 = this;
function $superCstr(){$p.extendClassChain($this_1)}
$this_1.startMillis = 0;
$this_1.events = null;
$this_1.lastEventIndex = 0;
function reset$0() {
$this_1.startMillis = $p.millis();    
    $this_1.lastEventIndex = 0;
}
$p.addMethod($this_1, 'reset', reset$0, false);
function play$0() {
var currentTime =  $p.millis() - $this_1.startMillis;

    if ($this_1.events != null) {
var i =  $this_1.lastEventIndex;

      while (i < $this_1.events.size()) {
var e =  $this_1.events.get(i);

        if (currentTime >= e.time) {
$this_1.lastEventIndex = i + 1;

          for(var j = 0;  j<moverCount;  j++) {
var m =  new Mover(e.position);
            movers.add(m);
}
}  
        i++;
}
}
}
$p.addMethod($this_1, 'play', play$0, false);
function $constr_0(){
$superCstr();

$this_1.$self.reset();
}

function $constr() {
if(arguments.length === 0) { $constr_0.apply($this_1, arguments); } else $superCstr();
}
$constr.apply(null, arguments);
}
return Timeline;
})();
$p.Timeline = Timeline;
var Event = (function() {
function Event() {
var $this_1 = this;
function $superCstr(){$p.extendClassChain($this_1)}
$this_1.time = 0;
$this_1.position = 0;
function $constr_2(t, p){
$superCstr();

$this_1.time = t;
      $this_1.position = p;
}

function $constr() {
if(arguments.length === 2) { $constr_2.apply($this_1, arguments); } else $superCstr();
}
$constr.apply(null, arguments);
}
return Event;
})();
$p.Event = Event;
var Parameters = (function() {
function Parameters() {
var $this_1 = this;
function $superCstr(){$p.extendClassChain($this_1)}
$this_1.rotationSpeed = 0;
$this_1.shapeType = 0;
$this_1.lineLength = 0;
$this_1.effectType = 0;
$this_1.influence = 0;
$this_1.push = 0;
$this_1.affectX = false;
$this_1.affectY = false;
$this_1.offsetRotationByIndexMultiplier = 0;
$this_1.startColor = 0x00000000;
$this_1.endColor = 0x00000000;
function $constr_0(){
$superCstr();

$this_1.rotationSpeed = 0;

    $this_1.shapeType = shapeTypeLine;
    $this_1.lineLength = 12;

    $this_1.effectType = effectTypeSpread;
    $this_1.influence = 100;
    $this_1.push = $this_1.influence;
    $this_1.affectX = true;
    $this_1.affectY = false;

    $this_1.offsetRotationByIndexMultiplier = 0;

    $this_1.startColor = $p.color(0xFFafdf22);
    $this_1.endColor = $p.color(0xFF2cb33b);
}

function $constr() {
if(arguments.length === 0) { $constr_0.apply($this_1, arguments); } else $superCstr();
}
$constr.apply(null, arguments);
}
return Parameters;
})();
$p.Parameters = Parameters;
var Atom = (function() {
function Atom() {
var $this_1 = this;
function $superCstr(){$p.extendClassChain($this_1)}
$p.defineProperty($this_1, 'radians120', {get: function(){return Atom.radians120}, set: function(val){Atom.radians120 = val}});
$p.defineProperty($this_1, 'radians240', {get: function(){return Atom.radians240}, set: function(val){Atom.radians240 = val}});
$this_1.index = 0;
$this_1.baseLocation = null;
$this_1.currentLocation = null;
$this_1.rotation = 0;
$this_1.rotationMultiplier = 0;
$this_1.parameters = null;
$this_1.triA = null;
$this_1.triB = null;
$this_1.triC = null;
$this_1.c = 0x00000000;
function setup$5(i, x, y, rm, p) {
$this_1.index = i;

    $this_1.baseLocation = new $p.PVector(x, y);
    $this_1.currentLocation = new $p.PVector(x, y);

    $this_1.parameters = p;

    $this_1.rotation = $this_1.index * $this_1.parameters.offsetRotationByIndexMultiplier;
    $this_1.rotationMultiplier = rm;

    if ($this_1.parameters.shapeType == shapeTypeTriangle) {
$this_1.triA = new $p.PVector();
      $this_1.triB = new $p.PVector();
      $this_1.triC = new $p.PVector($this_1.parameters.lineLength, $this_1.parameters.lineLength);

      $this_1.triB.x = $this_1.triC.x * $p.cos(Atom.radians120) - ($this_1.triC.y * $p.sin(Atom.radians120));
      $this_1.triB.y = $this_1.triC.x * $p.sin(Atom.radians120) + ($this_1.triC.y * $p.cos(Atom.radians120));
      $this_1.triA.x = $this_1.triC.x * $p.cos(Atom.radians240) - ($this_1.triC.y * $p.sin(Atom.radians240));
      $this_1.triA.y = $this_1.triC.x * $p.sin(Atom.radians240) + ($this_1.triC.y * $p.cos(Atom.radians240));
}

    var t =  x / drawWidth;
    $this_1.c = $p.lerpColor($this_1.parameters.startColor, $this_1.parameters.endColor, t);
}
$p.addMethod($this_1, 'setup', setup$5, false);
function draw$1(focusLocation) {
$p.pushMatrix();

    $p.translate($this_1.currentLocation.x, $this_1.currentLocation.y);

    var v =  new $p.PVector($this_1.currentLocation.x - focusLocation.x, $this_1.currentLocation.y - focusLocation.y);
    v.normalize();

    var d =  ($this_1.parameters.influence - Math.min($this_1.parameters.influence, $p.PVector.dist(focusLocation, $this_1.currentLocation))) / $this_1.parameters.influence;

    if ($this_1.parameters.effectType == effectTypeSpread) {
if ($this_1.parameters.affectX) $this_1.currentLocation.x = (($this_1.currentLocation.x + (v.x * d * $this_1.parameters.push)) + $this_1.baseLocation.x * 3) / 4;
      else $this_1.currentLocation.x = $this_1.baseLocation.x;

      if ($this_1.parameters.affectY) $this_1.currentLocation.y = (($this_1.currentLocation.y + (v.y * d * $this_1.parameters.push)) + $this_1.baseLocation.y * 3) / 4;
      else $this_1.currentLocation.y = $this_1.baseLocation.y;
} else if ($this_1.parameters.effectType == effectTypeRotate) {
$this_1.rotation += d * $this_1.parameters.push;
} else if ($this_1.parameters.effectType == effectTypeScale) {
$p.scale(d * $this_1.parameters.push + 0.5);
}

    if ($this_1.parameters.shapeType != shapeTypePoint && $this_1.parameters.shapeType != shapeTypeDekoBoko) {
$p.rotate($p.radians($this_1.rotation));
}

   $this_1.rotation += ($this_1.parameters.rotationSpeed * $this_1.rotationMultiplier);

   while($this_1.rotation > 360) {
$this_1.rotation -= 360;
}
   while($this_1.rotation < 360) {
$this_1.rotation += 360;
}

    switch($this_1.parameters.shapeType) {
case shapeTypeCheckered:
          $p.fill($this_1.c);
          $p.noStroke();

          $p.rect(0, 0, $this_1.parameters.lineLength, $this_1.parameters.lineLength);
          $p.rect(0, 0, -$this_1.parameters.lineLength, -$this_1.parameters.lineLength);
          break;case shapeTypePoint:
          $p.stroke($this_1.c);
          $p.noFill();

          $p.point(0, 0);  
          break;case shapeTypeLine:
          $p.fill($this_1.c);
          $p.noStroke();

          $p.rect(-2, -$this_1.parameters.lineLength, 4, $this_1.parameters.lineLength * 2);
          break;case shapeTypeRectCorners:
          $p.fill($this_1.c);
          $p.noStroke();

          $p.ellipse(-$this_1.parameters.lineLength, -$this_1.parameters.lineLength, 2, 2);  
          $p.ellipse(-$this_1.parameters.lineLength, $this_1.parameters.lineLength, 2, 2);  
          $p.ellipse($this_1.parameters.lineLength, $this_1.parameters.lineLength, 2, 2);  
          $p.ellipse($this_1.parameters.lineLength, -$this_1.parameters.lineLength, 2, 2);  
          break;case shapeTypeTriangle:
          $p.fill($this_1.c);
          $p.noStroke();

          $p.triangle($this_1.triA.x, $this_1.triA.y, $this_1.triB.x, $this_1.triB.y, $this_1.triC.x, $this_1.triC.y);
          break;case shapeTypeDekoBoko: 
          $p.stroke($this_1.c);
          $p.noFill();

          var h =  $p.sin($p.radians($this_1.rotation) * 2 + $this_1.index * $this_1.parameters.offsetRotationByIndexMultiplier) * $this_1.parameters.lineLength;
          var s =  ($p.cos($p.radians($this_1.rotation) + $this_1.index * $this_1.parameters.offsetRotationByIndexMultiplier) + 2) / 2;

          $p.scale(s, s);

          $p.line(-$this_1.parameters.lineLength / 2, 0, -$this_1.parameters.lineLength, 0);          
          $p.line($this_1.parameters.lineLength / 2, 0, $this_1.parameters.lineLength, 0);

          $p.line(-$this_1.parameters.lineLength / 2, 0, -$this_1.parameters.lineLength / 2, h);
          $p.line($this_1.parameters.lineLength / 2, 0, $this_1.parameters.lineLength / 2, h);
          $p.line(-$this_1.parameters.lineLength / 2, h, $this_1.parameters.lineLength / 2, h);
}

    $p.popMatrix();
}
$p.addMethod($this_1, 'draw', draw$1, false);
function $constr_5(i, x, y, rm, p){
$superCstr();

$this_1.$self.setup(i, x, y, rm, p);
}

function $constr() {
if(arguments.length === 5) { $constr_5.apply($this_1, arguments); } else $superCstr();
}
$constr.apply(null, arguments);
}
Atom.radians120 =  $p.radians(120);
Atom.radians240 =  $p.radians(240);
return Atom;
})();
$p.Atom = Atom;
var Mover = (function() {
function Mover() {
var $this_1 = this;
function $superCstr(){$p.extendClassChain($this_1)}
$this_1.location = null;
$this_1.target = null;
$this_1.direction = null;
$this_1.speed = 0;
$this_1.forceStrength = 0;
$this_1.dead = false;
function setup$1(y) {
$this_1.location = new $p.PVector(0, y);
    $this_1.target = new $p.PVector(drawWidth, y);

         var angle =  0 - $p.random($p.PI / 8) + $p.random($p.PI / 8);
    $this_1.direction = new $p.PVector($p.cos(angle), $p.sin(angle));

    $this_1.speed = $p.random(12, 22);
    $this_1.forceStrength = $p.random(0.1, 0.2);

    $this_1.dead = false;
}
$p.addMethod($this_1, 'setup', setup$1, false);
function update$1(mode) {
$this_1.$self.seek($this_1.target.x, $this_1.target.y);
    $this_1.$self.move();

    $this_1.$self.draw();
}
$p.addMethod($this_1, 'update', update$1, false);
function seek$2(x, y) {
$this_1.$self.seek(x, y, 1);
}
$p.addMethod($this_1, 'seek', seek$2, false);
function seek$3_2(x, y, strength) {
var angle =  $p.atan2(y - $this_1.location.y, x - $this_1.location.x);

    var force =  new $p.PVector($p.cos(angle), $p.sin(angle));
    force.mult($this_1.forceStrength * strength);

    $this_1.direction.add(force);
    $this_1.direction.normalize();
}
$p.addMethod($this_1, 'seek', seek$3_2, false);
function move$0() {
var velocity =  $this_1.direction.get();
    velocity.mult($this_1.speed);

    if ($this_1.location.x < $this_1.target.x && $this_1.location.x + velocity.x >= $this_1.target.x) $this_1.dead = true;
    else if ($this_1.location.x > $this_1.target.x && $this_1.location.x + velocity.x <= $this_1.target.x) $this_1.dead = true;

    $this_1.location.add(velocity);
}
$p.addMethod($this_1, 'move', move$0, false);
function draw$0() {
if (moversVisible) {
$p.noStroke();
      $p.fill(0xFFf1f3f3, 255);
      $p.ellipse($this_1.location.x, $this_1.location.y, 4, 4);
}
}
$p.addMethod($this_1, 'draw', draw$0, false);
function $constr_1(x){
$superCstr();

$this_1.$self.setup(x);
}

function $constr() {
if(arguments.length === 1) { $constr_1.apply($this_1, arguments); } else $superCstr();
}
$constr.apply(null, arguments);
}
return Mover;
})();
$p.Mover = Mover;

function bindJavascript(js) {
javascript = js;
}
$p.bindJavascript = bindJavascript;
bindJavascript = bindJavascript.bind($p);
var javascript = null;

var bgdColor =  $p.color(0xFF323237);

var screenWidth =  480;
var screenHeight =  370;

var padding =  20;
var drawWidth =  screenWidth - padding * 2;
var drawHeight =  screenHeight - padding * 2;

var atoms = null;
var movers = null;
var moverCount =  3;

var moversVisible =  true;

var currentTimeline = null;
var kickstandDownTimeline = null,kickstandUpTimeline = null,remoteLockTimeline = null,remoteUnlockTimeline = null,turnSignalTimeline = null;

var shapeTypeCheckered =  1;
var shapeTypePoint =  2;
var shapeTypeLine =  3;
var shapeTypeRectCorners =  4;
var shapeTypeTriangle =  5;
var shapeTypeDekoBoko =  6;

var effectTypeSpread =  1;
var effectTypeRotate =  2;
var effectTypeScale =  3;

var orientationTypeNormal =  1;
var orientationTypeMirroredRows =  2;

function setup() {
$p.size(480, 370);

  var events =  new $p.ArrayList();

  events.add(new Event(0, drawHeight / 5.0 * 4.5));
  events.add(new Event(100, drawHeight / 5.0 * 3.5));
  events.add(new Event(175, drawHeight / 5.0 * 2.5));
  events.add(new Event(250, drawHeight / 5.0 * 1.5));
  events.add(new Event(300, drawHeight / 5.0 * 0.5));

  kickstandDownTimeline = new Timeline();
  kickstandDownTimeline.events = events;

  events = new $p.ArrayList();

  events.add(new Event(0, drawHeight / 5.0 * 0.5));
  events.add(new Event(100, drawHeight / 5.0 * 2.5));
  events.add(new Event(150, drawHeight / 5.0 * 3.5));
  events.add(new Event(200, drawHeight / 5.0 * 4.5));

  kickstandUpTimeline = new Timeline();
  kickstandUpTimeline.events = events;

  events = new $p.ArrayList();

  events.add(new Event(0, drawHeight / 5.0 * 1.0));
  events.add(new Event(25, drawHeight / 5.0 * 0.75));
  events.add(new Event(100, drawHeight / 5.0 * 3.5));
  events.add(new Event(200, drawHeight / 5.0 * 2.5));
  events.add(new Event(200, drawHeight / 5.0 * 4.5));

  remoteLockTimeline = new Timeline();
  remoteLockTimeline.events = events;

  events.add(new Event(0, drawHeight / 5.0 * 4.5));
  events.add(new Event(0, drawHeight / 5.0 * 4.25));
  events.add(new Event(75, drawHeight / 5.0 * 2.5));
  events.add(new Event(75, drawHeight / 5.0 * 2.25));
  events.add(new Event(150, drawHeight / 5.0 * 0.5));

  remoteUnlockTimeline = new Timeline();
  remoteUnlockTimeline.events = events;

  events = new $p.ArrayList();

  events.add(new Event(0, drawHeight / 5.0 * 2.5));
  events.add(new Event(10, drawHeight / 5.0 * 2.25));
  events.add(new Event(10, drawHeight / 5.0 * 2.75));

  turnSignalTimeline = new Timeline();
  turnSignalTimeline.events = events;

  movers = new $p.ArrayList();
  atoms = new $p.ArrayList();

  $p.background(bgdColor);
  $p.frameRate(60);
}
$p.setup = setup;
setup = setup.bind($p);

function setupTheme(id) {
atoms.clear();
  movers.clear();

  if (id == "clean") {
moversVisible = false;

         var p =  new Parameters();
    p.lineLength = 6;

    placeAtoms(9, 30, false, orientationTypeNormal, 1, p);
} else if (id == "gamey") {
moversVisible = false;

    var p =  new Parameters();

    p.lineLength = 13.5;
    p.shapeType = shapeTypeCheckered;
    p.effectType = effectTypeRotate;

    p.startColor = $p.color(0xFF46ff78);
    p.endColor = $p.color(0xFF4effd0);
    p.push = 2;

    placeAtoms(16.667, 6, true, orientationTypeNormal, 1, p);
} else if (id == "bella") {
moversVisible = false;

    var p =  new Parameters();

    p.rotationSpeed = 0.15;
    p.shapeType = shapeTypeTriangle;
    p.effectType = effectTypeScale;
    p.push = 0.66;
    p.offsetRotationByIndexMultiplier = 1;

    p.startColor = $p.color(0xFF3165d5);
    p.endColor = $p.color(0xFF4cd8fd);

    placeAtoms(21.75, 13.125, true, orientationTypeMirroredRows, 1, p);
} else if (id == "slider") {

} else if (id == "pongo") {

}
}
$p.setupTheme = setupTheme;
setupTheme = setupTheme.bind($p);

function placeAtoms(densityH, densityV, staggeredGrid, orientationType, rotationMultiplier, p) {
var index =  0;
  var dx =  drawWidth / densityH;
  var dy =  drawHeight / densityV;

  var startX =  dx / 2;
  var evenStartY =  dy / 2;
  var oddStartY =  evenStartY;

  if (staggeredGrid) {
evenStartY += dy / 4;
    oddStartY -= dy / 4;
}

  var odd =  false,oddRow =  false;
  for(var x = startX;  x<drawWidth;  x += dx) {
var currentStartY =  odd ? oddStartY : evenStartY;
    odd = !odd;

    for(var y = currentStartY;  y<drawHeight;  y += dy) {
var rm =  rotationMultiplier;
      if (orientationType == orientationTypeMirroredRows && oddRow) rm = -rm;

      var a =  new Atom(index++, x, y, rm, p);
      atoms.add(a);

      oddRow = !oddRow;
}
}
}
$p.placeAtoms = placeAtoms;
placeAtoms = placeAtoms.bind($p);

function draw() {
$p.background(bgdColor);

     if (currentTimeline != null) currentTimeline.play();

     $p.pushMatrix();
  $p.translate(padding, padding);

     var farLocation =  new $p.PVector(-99999, -99999);

  var i =  0; 
  while(i < atoms.size()) {
var a =  atoms.get(i);
    var m =  findClosestMover(a);

         a.draw(m == null ? farLocation : m.location);
    a.draw(m == null ? farLocation : m.location);
    a.draw(m == null ? farLocation : m.location);

    i++;
}

  i = 0;
  while(i < movers.size()) {
var m =  movers.get(i);
    m.update();

    if (m.dead) movers.remove(i);
    else i++;
}

  $p.popMatrix();
}
$p.draw = draw;
draw = draw.bind($p);

function findClosestMover(a) {
var closestD =  -1;
  var closestM =  null;

  var i =  0;
  while(i < movers.size()) {
var m =  movers.get(i);
    var distance =  m.location.dist(a.currentLocation);

    if (closestD == -1 || distance < closestD) {
closestD = distance;
      closestM = m;
}

    i++;
}

  return closestM;
}
$p.findClosestMover = findClosestMover;
findClosestMover = findClosestMover.bind($p);

function trigger(id) {
if (id == "kickstandDown") {
currentTimeline = kickstandDownTimeline;
      currentTimeline.reset();
} else if (id == "kickstandUp") {
currentTimeline = kickstandUpTimeline;
      currentTimeline.reset();
} else if (id == "remoteLock") {
currentTimeline = remoteLockTimeline;
      currentTimeline.reset();
} else if (id == "remoteUnlock") {
currentTimeline = remoteUnlockTimeline;
      currentTimeline.reset();
} else if (id == "turnSignal") {
currentTimeline = turnSignalTimeline;
      currentTimeline.reset();
}
}
$p.trigger = trigger;
trigger = trigger.bind($p);
};

/* --------------------------------------------------------------------------------------------------------------------- */

          that.pjs = new Processing($canvasEl[0], playfulSounds);

          if (that.pjs !== null) {
            that.pjs.bindJavascript(this);

            // all set
            setCurrentTheme(themes[0]);

            currentAction = -1;
          }
        },
        destroy: function() {
            this.pjs = null;
            delete this.pjs;
        
            var $el = $($element);

            var $themesEl = $el.find('.theme-toggle a');
            var $triggersEl = $el.find('.preview .sounds .sound');
        
            $themesEl.off('click');
            $triggersEl.off('click');
            $el.find('.preview').off('click');
        }
      };

      $scope.fallback = {
        init: function() {
        },
        destroy: function() {
        }
      };

     // Initialize module
     $scope.init($scope, $element, true);
}]);
gogoroApp.controller('moduleCustomize9DesignEthosController', ["$scope", "$element", "$window", "$controller", "FallbackManagerFactory", function ($scope, $element, $window, $controller, FallbackManagerFactory) {
    angular.extend($scope, FallbackManagerFactory);


    var $el = $($element);

    $scope.standard = {
        init: function() {
            setTimeout(function() {
                $(".video-design-ethos").append(
                    '<video id="design-ethos-video" class="video-delay" width="2560" height="600" muted preload="auto" autoplay loop  poster="//gogoro.imgix.net/bdg-module-customize-9.jpg">' +
                    '<source src="//movies.gogoroapp.com/module-customize-9-design-ethos.webm" type="video/webm">' +
                    '<source src="//movies.gogoroapp.com/module-customize-9-design-ethos_2015-01-19.mp4" type="video/mp4">' +
                    '</video>');

                var $video = $el.find('#design-ethos-video');

                $video.get(0).play();
                $video.bind('ended',function(){
                    setTimeout(function(){
                        $video.get(0).play();
                    },2000);
                });

            },1000);


        },
        destroy: function() {

        }
    };

    $scope.fallback = {
        init: function() {
            //console.log('module-customize-9-design-ethos fallback');
            var img_url = 'http://images.gogoroapp.com/faceplate/600/';

            var images = [
                img_url+'module-customize-9-design-ethos_.jpg',
                img_url+'module-customize-9-design-ethos_00.jpg',
                img_url+ 'module-customize-9-design-ethos_01.jpg',
                img_url+'module-customize-9-design-ethos_02.jpg',
                img_url+'module-customize-9-design-ethos_03.jpg',
                img_url+'module-customize-9-design-ethos_04.jpg',
                img_url+'module-customize-9-design-ethos_05.jpg',
                img_url+'module-customize-9-design-ethos_06.jpg',
                img_url+'module-customize-9-design-ethos_07.jpg',
                img_url+'module-customize-9-design-ethos_08.jpg',
                img_url+'module-customize-9-design-ethos_09.jpg',
                img_url+'module-customize-9-design-ethos_10.jpg',
                img_url+'module-customize-9-design-ethos_11.jpg',
                img_url+'module-customize-9-design-ethos_12.jpg'
            ];

            // Preload images
            $.preloadimages(images);

            //
            var $images_elm = $el.find('.design-ethos-images');
            var counter = 0;
            animate_imgs();
            function animate_imgs(){
                setTimeout(function(){
                    $images_elm.prop('src',images[counter]);
                    counter++;
                    if(counter == 12){
                        counter = 0;
                    }

                    animate_imgs();
                },1000);
            }
        },
        destroy: function() {

        }
    };

    // Initialize module
    $scope.init($scope, $element);

}]);
/* global $:false */
gogoroApp
//angular.module('gogoro.customize.moduleCustomize10PlusView', [])
.controller('moduleCustomize10PlusController', ["$scope", "$element", "$window", "$controller", "FallbackManagerFactory", function ($scope, $element, $window, $controller, FallbackManagerFactory) {
    angular.extend($scope, FallbackManagerFactory);
    //preload image
    var _images = [
      '//gogoro.imgix.net/Gogoro_off.png',
      '//gogoro.imgix.net/Gogoro_on.png',
      '//gogoro.imgix.net/GogoroPlus_off.png',
      '//gogoro.imgix.net/GogoroPlus_0616_on.png',
      '//gogoro.imgix.net/ColorBtn_white_off.png',
      '//gogoro.imgix.net/ColorBtn_white_on.png',
      '//gogoro.imgix.net/ColorBtn_grey_off.png',
      '//gogoro.imgix.net/ColorBtn_grey_on.png',
      '//gogoro.imgix.net/ColorBtn_silver_off.png',
      '//gogoro.imgix.net/ColorBtn_silver_on.png',
      '//gogoro.imgix.net/ColorBtn_blue_off.png',
      '//gogoro.imgix.net/ColorBtn_blue_on.png',
      '//gogoro.imgix.net/ColorBtn_yellow_off.png',
      '//gogoro.imgix.net/ColorBtn_yellow_on.png',
      '//gogoro.imgix.net/ColorBtn_orange_off.png',
      '//gogoro.imgix.net/ColorBtn_orange_on.png',
      '//gogoro.imgix.net/AAA_0616_white.jpg',
      '//gogoro.imgix.net/AAA_0616_grey.jpg',
      '//gogoro.imgix.net/AB2_0616_white.jpg',
      '//gogoro.imgix.net/AB2_0616_grey.jpg',
      '//gogoro.imgix.net/AB2_0616_blue.jpg',
      '//gogoro.imgix.net/AB2_0616_silver.jpg',
      '//gogoro.imgix.net/AB2_0616_yellow.jpg',
      '//gogoro.imgix.net/AB2_0616_orange.jpg',
      '/img/scooter/customize/AB2_red.jpg',
      '/img/scooter/customize/ColorBtn_red_on.png',
      '/img/scooter/customize/ColorBtn_red_off.png'

    ];
    $.each(_images, function (k, img) {
        var _i = new Image();
        _i.src = img;
    });

    $scope.standard = {
        init: function () {

            var _option = {
                original: [{ type: 'white' }, { type: 'grey' }],
                plus: [{ type: 'red' }, { type: 'yellow' }, { type: 'blue' }, { type: 'orange' }, { type: 'white' }, { type: 'grey' }, { type: 'silver' }],
            }
            $scope.activeType = 'original';
            $scope.activeColor = 'white';
            $scope.options = _option[$scope.activeType];

            $scope.setOrigin = function () {
                $scope.activeType = 'original';
                $scope.activeColor = 'white';
                $scope.options = _option[$scope.activeType];
                $scope.$evalAsync();
            }

            $scope.setPlus = function () {
                $scope.activeType = 'plus';
                $scope.activeColor = 'red';
                $scope.options = _option[$scope.activeType];
                $scope.$evalAsync();
            }
            $scope.setColor = function (color) {
                //$('.colorful-sccoter').fadeOut(500 ,function(){ $('.colorful-sccoter').fadeIn();});
                $scope.activeColor = color;
                $scope.$evalAsync();
            }

            /*
            hide fallback
            */

        },
        destroy: function () {

        }
    };

    $scope.fallback = {
        init: function () {
            // Slideshow

            $('.original-slider', $element).slick({
                slide: '.slide',
                dots: true,
                arrows: false,
                infinite: true,
                speed: 650,
                cssEase: 'ease',
                slidesToShow: 1,
                draggable: false,
                onInit: function () {

                    imgix.onready(function () {
                        imgix.fluid();
                    });

                }
            });

            $('.plus-slider', $element).on('click', function () {
                $('.original-slider', $element).slickNext();
            });

            $('.plus-slider', $element).slick({
                slide: '.slide',
                dots: true,
                arrows: false,
                infinite: true,
                speed: 650,
                cssEase: 'ease',
                slidesToShow: 1,
                draggable: false,
                onInit: function () {

                    imgix.onready(function () {
                        imgix.fluid();
                    });

                }
            });

            $('.original-slider', $element).on('click', function () {
                $('.original-slider', $element).slickNext();
            });

        },
        destroy: function () {

        }
    };

    // Initialize module
    $scope.init($scope, $element);

}]);